/** Enigma platform auth — mirrors N0DE env contract (see feasibility study). */

const trimTrailingSlash = (url: string) => url.replace(/\/$/, '');

export const AUTH_API_BASE_URL = trimTrailingSlash(
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? '',
);

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

export const GOOGLE_CLIENT_ID =
  (import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined) ?? '';

export function isGoogleAuthConfigured(): boolean {
  return Boolean(GOOGLE_CLIENT_ID.trim());
}

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
  return AUTH_API_BASE_URL
    ? `${AUTH_API_BASE_URL}${normalizedPath}`
    : normalizedPath;
}
