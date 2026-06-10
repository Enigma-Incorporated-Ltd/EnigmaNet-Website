/** Enigma platform auth — mirrors N0DE CORS pattern (Vite proxy in dev, direct API in prod). */

const trimTrailingSlash = (url: string) => url.replace(/\/$/, '');

const PRODUCTION_API_BASE = 'https://enigmaincenterpriseapp.azurewebsites.net';

const isLocalDevHost = (hostname: string) =>
  hostname === 'localhost' || hostname === '127.0.0.1';

/**
 * N0DE pattern:
 * - localhost → '' (relative /api/*, Vite proxy — no CORS)
 * - production → VITE_API_BASE_URL or default Azure API (backend CORS required)
 */
export function getAuthApiBaseUrl(): string {
  const envBase = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? '';
  if (envBase.trim()) {
    return trimTrailingSlash(envBase);
  }

  if (typeof window !== 'undefined' && isLocalDevHost(window.location.hostname)) {
    return '';
  }

  if (import.meta.env.PROD) {
    return PRODUCTION_API_BASE;
  }

  return '';
}

export const AUTH_API_KEY = (import.meta.env.VITE_API_KEY as string | undefined) ?? '';

export const AUTH_APPLICATION_ID =
  (import.meta.env.VITE_APPLICATION_ID as string | undefined) ?? '';

export const AZURE_CLIENT_ID =
  (import.meta.env.VITE_AZURE_CLIENT_ID as string | undefined) ?? '';

export const AZURE_TENANT_ID =
  (import.meta.env.VITE_AZURE_TENANT_ID as string | undefined) ?? 'common';

export const AZURE_REDIRECT_URI =
  (import.meta.env.VITE_AZURE_REDIRECT_URI as string | undefined) ?? '';

export const AZURE_API_SCOPE =
  (import.meta.env.VITE_AZURE_API_SCOPE as string | undefined) ?? '';

export function isAuthConfigured(): boolean {
  return Boolean(
    AUTH_API_KEY.trim() &&
      AUTH_APPLICATION_ID.trim() &&
      AUTH_API_KEY !== 'your_api_key_here',
  );
}

export function getAuthConfigError(): string | null {
  if (isAuthConfigured()) return null;

  const missing: string[] = [];
  if (!AUTH_API_KEY.trim() || AUTH_API_KEY === 'your_api_key_here') {
    missing.push('VITE_API_KEY');
  }
  if (!AUTH_APPLICATION_ID.trim()) {
    missing.push('VITE_APPLICATION_ID');
  }

  return `Auth API is not configured. Add ${missing.join(' and ')} to .env.local (see .env.example), then restart the dev server.`;
}

export function authUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const base = getAuthApiBaseUrl();
  return base ? `${base}${normalizedPath}` : normalizedPath;
}
