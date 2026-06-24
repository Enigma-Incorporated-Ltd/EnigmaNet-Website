import {
  loginUser,
  loginWithGoogle,
  loginWithMicrosoft,
  refreshAuthToken,
  registerUser,
  requestForgotPassword,
  updateForgotPassword,
  verifyResetCode,
  AuthApiError,
} from '@/services/authApi';
import type { AuthSession, RegisterUserPayload } from '@/types/auth';
import {
  clearSession,
  loadSession,
  saveSession,
  setMemoryToken,
  syncMemoryFromStorage,
} from '@/utils/tokenStore';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type AuthContextValue = {
  session: AuthSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (payload: RegisterUserPayload) => Promise<void>;
  logout: () => void;
  requestPasswordReset: (email: string) => Promise<void>;
  verifyPasswordResetCode: (verificationcode: string) => Promise<void>;
  completePasswordReset: (verificationcode: string, newpassword: string) => Promise<void>;
  loginMicrosoft: (accessToken: string, idToken: string) => Promise<void>;
  loginGoogle: (idToken: string) => Promise<AuthSession>;
  refreshSession: () => Promise<string | null>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function resolveTheme(apiTheme?: string): 'light' | 'dark' {
  if (!apiTheme) return 'dark';
  const t = apiTheme.toLowerCase();
  if (t === 'light') return 'light';
  if (t === 'dark') return 'dark';
  // "system default" → use OS preference
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme: 'light' | 'dark'): void {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-bs-theme', theme);
  window.dispatchEvent(new Event('themeChange'));
}

function toSession(response: {
  token: string;
  refreshToken: string;
  userid: string;
  email: string;
  isRootUser?: boolean;
  profileUserId?: string;
  profileImageUrl?: string;
  preferenceTheme?: string;
}): AuthSession {
  return {
    token: response.token,
    refreshToken: response.refreshToken,
    user: {
      userId: response.userid,
      email: response.email,
      isRootUser: Boolean(response.isRootUser),
      profileUserId: response.profileUserId,
      profileImageUrl: response.profileImageUrl,
      preferenceTheme: response.preferenceTheme,
    },
  };
}

function persistSession(session: AuthSession): void {
  saveSession(session);
  setMemoryToken(session.token);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = loadSession();
    setSession(stored);
    syncMemoryFromStorage();
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const response = await loginUser({ email, password });
    const next = toSession(response);
    persistSession(next);
    setSession(next);
    applyTheme(resolveTheme(response.preferenceTheme));
  }, []);

  const register = useCallback(async (payload: RegisterUserPayload) => {
    await registerUser(payload);
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setMemoryToken(null);
    setSession(null);
  }, []);

  const requestPasswordReset = useCallback(async (email: string) => {
    await requestForgotPassword({ email });
  }, []);

  const verifyPasswordResetCode = useCallback(async (verificationcode: string) => {
    await verifyResetCode({ verificationcode });
  }, []);

  const completePasswordReset = useCallback(
    async (verificationcode: string, newpassword: string) => {
      await updateForgotPassword({ verificationcode, newpassword });
    },
    [],
  );

  const loginMicrosoft = useCallback(async (accessToken: string, idToken: string) => {
    const response = await loginWithMicrosoft({ accessToken, idToken });
    if (!response.token || !response.refreshToken || !response.userid || !response.email) {
      throw new AuthApiError('Microsoft login response was missing required fields.');
    }
    const next = toSession({
      token: response.token,
      refreshToken: response.refreshToken,
      userid: response.userid,
      email: response.email,
      isRootUser: response.isRootUser,
    });
    persistSession(next);
    setSession(next);
  }, []);

  const loginGoogle = useCallback(async (idToken: string) => {
    const response = await loginWithGoogle({ idToken });
    if (!response.token || !response.refreshToken || !response.userid || !response.email) {
      throw new AuthApiError('Google login response was missing required fields.');
    }
    const next = toSession({
      token: response.token,
      refreshToken: response.refreshToken,
      userid: response.userid,
      email: response.email,
      isRootUser: response.isRootUser,
    });
    persistSession(next);
    setSession(next);
    return next;
  }, []);

  const refreshSession = useCallback(async (): Promise<string | null> => {
    const current = session ?? loadSession();
    if (!current) return null;

    try {
      const response = await refreshAuthToken({
        userId: current.user.userId,
        email: current.user.email,
        refreshToken: current.refreshToken,
      });
      const next: AuthSession = {
        ...current,
        token: response.token!,
        refreshToken: response.refreshToken,
      };
      persistSession(next);
      setSession(next);
      return next.token;
    } catch {
      logout();
      return null;
    }
  }, [session, logout]);

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      isAuthenticated: Boolean(session?.token),
      isLoading,
      login,
      register,
      logout,
      requestPasswordReset,
      verifyPasswordResetCode,
      completePasswordReset,
      loginMicrosoft,
      loginGoogle,
      refreshSession,
    }),
    [
      session,
      isLoading,
      login,
      register,
      logout,
      requestPasswordReset,
      verifyPasswordResetCode,
      completePasswordReset,
      loginMicrosoft,
      loginGoogle,
      refreshSession,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

export function getAuthErrorMessage(error: unknown): string {
  if (error instanceof AuthApiError) return error.message;
  if (error instanceof Error) return error.message;
  return 'Something went wrong. Please try again.';
}
