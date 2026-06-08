import { authFetch, refreshAuthToken, AuthApiError } from '@/services/authApi';
import { loadSession, saveSession, setMemoryToken } from '@/utils/tokenStore';

/** Authenticated fetch with one automatic refresh attempt on 401. */
export async function authenticatedFetch(
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const session = loadSession();
  if (!session) {
    throw new AuthApiError('Not authenticated.');
  }

  let response = await authFetch(path, init, session.token);

  if (response.status !== 401) {
    return response;
  }

  const refreshed = await refreshAuthToken({
    userId: session.user.userId,
    email: session.user.email,
    refreshToken: session.refreshToken,
  });

  const nextSession = {
    ...session,
    token: refreshed.token!,
    refreshToken: refreshed.refreshToken,
  };
  saveSession(nextSession);
  setMemoryToken(nextSession.token);

  response = await authFetch(path, init, nextSession.token);
  return response;
}
