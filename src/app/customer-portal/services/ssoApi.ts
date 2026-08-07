/**
 * SSO API client for the Enigma Customer Portal.
 * Calls EnigmaNet.Core.API /api/sso/* endpoints.
 *
 * Session token travels in X-SSO-Session header (never in URL).
 * All tokens stored in sessionStorage — isolated per tab, never in localStorage.
 */

const API_BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '')
  ?? '';
const API_KEY = (import.meta.env.VITE_API_KEY as string | undefined) ?? '';

const SSO_SESSION_KEY = 'enigma_sso_session';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export interface SsoSession {
  sessionToken: string;
  userId: string;
  email: string;
  displayName?: string;
  profileImageUrl?: string;
  expiresAt: string;
}

export interface SsoApplication {
  clientId: string;
  applicationName: string;
  description?: string;
  iconUrl?: string;
  appUrl: string;
  callbackUrl: string;
  logoutUrl?: string;
  accessGranted: boolean;
  accessDeniedReason?: string;
  displayOrder: number;
}

export interface SsoDashboard {
  userId: string;
  email: string;
  displayName?: string;
  profileImageUrl?: string;
  applications: SsoApplication[];
}

export class SsoApiError extends Error {
  public readonly statusCode?: number;

  constructor(
    message: string,
    statusCode?: number,
  ) {
    super(message);
    this.name = 'SsoApiError';
    this.statusCode = statusCode;
  }
}

// ----------------------------------------------------------------
// Session Storage helpers
// ----------------------------------------------------------------

export function loadSsoSession(): SsoSession | null {
  try {
    const raw = sessionStorage.getItem(SSO_SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as SsoSession;
    if (new Date(session.expiresAt) <= new Date()) {
      clearSsoSession();
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function saveSsoSession(session: SsoSession): void {
  sessionStorage.setItem(SSO_SESSION_KEY, JSON.stringify(session));
}

export function clearSsoSession(): void {
  sessionStorage.removeItem(SSO_SESSION_KEY);
}

// ----------------------------------------------------------------
// API helpers
// ----------------------------------------------------------------

function baseHeaders(sessionToken?: string): Record<string, string> {
  const h: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    APIKey: API_KEY,
  };
  if (sessionToken) {
    h['X-SSO-Session'] = sessionToken;
  }
  return h;
}

async function parseResponse<T>(res: Response): Promise<T> {
  const text = await res.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new SsoApiError(`Invalid response from server (${res.status})`, res.status);
  }

  if (!res.ok) {
    const msg =
      typeof data === 'object' && data !== null && 'message' in data
        ? String((data as { message: string }).message)
        : `Request failed (${res.status})`;
    throw new SsoApiError(msg, res.status);
  }
  return data as T;
}

// ----------------------------------------------------------------
// Portal Login
// ----------------------------------------------------------------

export async function ssoPortalLogin(email: string, password: string): Promise<SsoSession> {
  const res = await fetch(`${API_BASE}/api/sso/portal-login`, {
    method: 'POST',
    headers: baseHeaders(),
    body: JSON.stringify({ email, password }),
  });

  const data = await parseResponse<{
    sessionToken: string;
    userId: string;
    email: string;
    displayName?: string;
    profileImageUrl?: string;
    expiresAt: string;
  }>(res);

  return {
    sessionToken: data.sessionToken,
    userId: data.userId,
    email: data.email,
    displayName: data.displayName,
    profileImageUrl: data.profileImageUrl,
    expiresAt: data.expiresAt,
  };
}

// ----------------------------------------------------------------
// Logout (global — revokes portal session + app refresh tokens)
// ----------------------------------------------------------------

export interface SsoLogoutResult {
  message: string;
  appLogoutUrls: string[];
}

export async function ssoLogout(sessionToken: string): Promise<SsoLogoutResult> {
  let result: SsoLogoutResult = {
    message: 'Logged out successfully.',
    appLogoutUrls: [],
  };

  try {
    const res = await fetch(`${API_BASE}/api/sso/logout`, {
      method: 'POST',
      headers: baseHeaders(sessionToken),
    });
    if (res.ok) {
      const data = await res.json() as {
        message?: string;
        appLogoutUrls?: string[];
        AppLogoutUrls?: string[];
      };
      result = {
        message: data.message ?? result.message,
        appLogoutUrls: data.appLogoutUrls ?? data.AppLogoutUrls ?? [],
      };
    }
  } catch {
    // Best-effort logout — always clear local session
  } finally {
    clearSsoSession();
  }

  return result;
}

// ----------------------------------------------------------------
// Dashboard Applications
// ----------------------------------------------------------------

export async function ssoGetApplications(sessionToken: string): Promise<SsoDashboard> {
  const res = await fetch(`${API_BASE}/api/sso/applications`, {
    method: 'GET',
    headers: baseHeaders(sessionToken),
  });
  return parseResponse<SsoDashboard>(res);
}

// ----------------------------------------------------------------
// Authorize — generate one-time code, return redirect URL
// ----------------------------------------------------------------

export async function ssoAuthorize(
  sessionToken: string,
  clientId: string,
  redirectUri: string,
  state: string,
  codeChallenge: string,
): Promise<string> {
  const res = await fetch(`${API_BASE}/api/sso/authorize`, {
    method: 'POST',
    headers: baseHeaders(sessionToken),
    body: JSON.stringify({
      clientId,
      redirectUri,
      state,
      codeChallenge,
      codeChallengeMethod: 'S256',
    }),
  });
  const data = await parseResponse<{ redirectUrl: string }>(res);
  return data.redirectUrl;
}

// ----------------------------------------------------------------
// PKCE helpers (browser crypto — no library needed)
// ----------------------------------------------------------------

export function generateVerifier(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function deriveChallenge(verifier: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(hash)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function generateState(): string {
  return crypto.randomUUID();
}
