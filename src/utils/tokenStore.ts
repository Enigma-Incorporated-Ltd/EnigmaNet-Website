import type { AuthSession } from '@/types/auth';

const STORAGE_KEY = 'enigma_auth_session';

export function loadSession(): AuthSession | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
}

export function saveSession(session: AuthSession): void {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  sessionStorage.removeItem(STORAGE_KEY);
}

let memoryToken: string | null = null;

/** In-memory bridge so services can read the latest JWT without parsing storage each time. */
export function setMemoryToken(token: string | null): void {
  memoryToken = token;
}

export function getMemoryToken(): string | null {
  if (memoryToken) return memoryToken;
  return loadSession()?.token ?? null;
}

export function syncMemoryFromStorage(): void {
  memoryToken = loadSession()?.token ?? null;
}
