import {
  AUTH_API_KEY,
  AUTH_APPLICATION_ID,
  authUrl,
  getAuthConfigError,
  isAuthConfigured,
} from '@/config/authConfig';
import type {
  ApiStatusResponse,
  ForgotPasswordPayload,
  LoginPayload,
  LoginSuccessResponse,
  GoogleAuthPayload,
  GoogleAuthResponse,
  MicrosoftAuthPayload,
  MicrosoftAuthResponse,
  RefreshTokenPayload,
  RefreshTokenResponse,
  RegisterUserPayload,
  RegisterUserResponse,
  ResetPasswordPayload,
  VerifyCodePayload,
} from '@/types/auth';

export class AuthApiError extends Error {
  statusCode?: number;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = 'AuthApiError';
    this.statusCode = statusCode;
  }
}

function assertConfigured(): void {
  if (!isAuthConfigured()) {
    throw new AuthApiError(getAuthConfigError() ?? 'Auth API is not configured.');
  }
}

function buildHeaders(includeBearer?: string): HeadersInit {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    APIKey: AUTH_API_KEY,
  };

  if (includeBearer) {
    headers.Authorization = `Bearer ${includeBearer}`;
  }

  return headers;
}

async function parseJson<T>(response: Response): Promise<T> {
  const text = await response.text();
  if (!text) return {} as T;

  try {
    return JSON.parse(text) as T;
  } catch {
    throw new AuthApiError('Invalid response from auth server.', response.status);
  }
}

async function authRequest<T>(
  path: string,
  init: RequestInit,
  bearerToken?: string,
): Promise<T> {
  assertConfigured();

  const response = await fetch(authUrl(path), {
    ...init,
    headers: {
      ...buildHeaders(bearerToken),
      ...(init.headers as Record<string, string> | undefined),
    },
  });

  const data = await parseJson<T & ApiStatusResponse>(response);

  if (!response.ok) {
    const message =
      typeof data.status === 'string' && data.status
        ? data.status
        : `Request failed (${response.status})`;
    throw new AuthApiError(message, response.status);
  }

  return data;
}

function isSuccessStatus(status?: string): boolean {
  return (
    typeof status === 'string' &&
    (status.toLowerCase() === 'success' || status === 'Login successful')
  );
}

export async function registerUser(
  payload: RegisterUserPayload,
): Promise<RegisterUserResponse> {
  const data = await authRequest<RegisterUserResponse>('/api/users/RegisterUser', {
    method: 'POST',
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
      applicationid: AUTH_APPLICATION_ID,
      firstname: payload.firstname ?? '',
      lastname: payload.lastname ?? '',
      businessname: payload.businessname ?? '',
    }),
  });

  if (!isSuccessStatus(data.status)) {
    throw new AuthApiError((data.status || 'Registration failed.').trim());
  }

  return data;
}

export async function loginUser(payload: LoginPayload): Promise<LoginSuccessResponse> {
  const data = await authRequest<LoginSuccessResponse & ApiStatusResponse>('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
      applicationid: AUTH_APPLICATION_ID,
    }),
  });

  const token = data.token ?? data.accessToken;
  if (!token || !data.refreshToken || !data.userid) {
    if (typeof data.status === 'string' && data.status && !isSuccessStatus(data.status)) {
      throw new AuthApiError(data.status);
    }
    throw new AuthApiError('Login response was missing required fields.');
  }

  return {
    token,
    refreshToken: data.refreshToken,
    userid: data.userid,
    email: data.email,
    isRootUser: data.isRootUser,
    profileUserId: (data as any).profile?.userId,
    profileImageUrl: (data as any).profile?.profileImageUrl,
    preferenceTheme: (data as any).profile?.preferences?.theme,
  };
}

export async function refreshAuthToken(
  payload: RefreshTokenPayload,
): Promise<RefreshTokenResponse> {
  const data = await authRequest<RefreshTokenResponse>('/api/users/refresh-token', {
    method: 'POST',
    body: JSON.stringify({
      userId: payload.userId,
      email: payload.email,
      applicationId: AUTH_APPLICATION_ID,
      refreshToken: payload.refreshToken,
    }),
  });

  const token = data.token ?? data.accessToken;
  if (!token || !data.refreshToken) {
    throw new AuthApiError('Refresh response was missing required fields.');
  }

  return { ...data, token };
}

export async function loginWithMicrosoft(
  payload: MicrosoftAuthPayload,
): Promise<MicrosoftAuthResponse> {
  const data = await authRequest<MicrosoftAuthResponse>('/api/auth/microsoft', {
    method: 'POST',
    body: JSON.stringify({
      AccessToken: payload.accessToken,
      IdToken: payload.idToken,
      ApplicationId: AUTH_APPLICATION_ID,
    }),
  });

  if (!isSuccessStatus(data.status)) {
    throw new AuthApiError(data.status || 'Microsoft sign-in failed.');
  }

  return data;
}

export async function loginWithGoogle(
  payload: GoogleAuthPayload,
): Promise<GoogleAuthResponse> {
  const data = await authRequest<GoogleAuthResponse>('/api/auth/google', {
    method: 'POST',
    body: JSON.stringify({
      IdToken: payload.idToken,
      ApplicationId: AUTH_APPLICATION_ID,
    }),
  });

  if (!isSuccessStatus(data.status)) {
    throw new AuthApiError(data.status || 'Google sign-in failed.');
  }

  return data;
}

export async function requestForgotPassword(
  payload: ForgotPasswordPayload,
): Promise<ApiStatusResponse> {
  const data = await authRequest<ApiStatusResponse>('/api/Users/forgotpassword', {
    method: 'POST',
    body: JSON.stringify({
      email: payload.email,
      applicationid: AUTH_APPLICATION_ID,
    }),
  });

  if (!isSuccessStatus(data.status)) {
    throw new AuthApiError(data.status || 'Could not send reset email.');
  }

  return data;
}

export async function verifyResetCode(
  payload: VerifyCodePayload,
): Promise<ApiStatusResponse> {
  const data = await authRequest<ApiStatusResponse>('/api/Users/VerifyCode', {
    method: 'POST',
    body: JSON.stringify({
      verificationcode: payload.verificationcode,
    }),
  });

  if (!isSuccessStatus(data.status)) {
    throw new AuthApiError(data.status || 'Wrong code');
  }

  return data;
}

export async function updateForgotPassword(
  payload: ResetPasswordPayload,
): Promise<ApiStatusResponse> {
  const data = await authRequest<ApiStatusResponse>('/api/Users/forgotpasswordupdate', {
    method: 'POST',
    body: JSON.stringify({
      verificationcode: payload.verificationcode,
      newpassword: payload.newpassword,
    }),
  });

  if (!isSuccessStatus(data.status)) {
    throw new AuthApiError(data.status || 'Could not update password.');
  }

  return data;
}

export interface UserProfileResponse {
  status: string;
  message: string;
  profile: {
    userId: string;
    formattedUserId: string;
    displayName: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImageUrl: string;
    jobTitle: string;
    role: string;
    planName: string;
    isProfileInitialized: boolean;
    isRootUser: boolean;
    isActive: boolean;
    profileDetails: {
      displayName: string;
      profileImageUrl: string;
      userTitle: string;
      primaryEmail: string;
      userId: string;
      ssoIdentity: string;
      isManaged: boolean;
    };
    preferences: {
      theme: string;
      notifications: string;
      language: string;
    };
    workspaceContext: {
      organisation: string;
      workspace: string;
      team: string;
      environment: string;
      region: string;
    };
    accessSnapshot: {
      accessIncludes: string[];
      restrictedActions: string[];
    };
    security: {
      signInMethod: string;
      passwordManagement: string;
      mfaEnabled: boolean;
      lastSignIn: string;
    };
  };
}

export async function getUserProfile(userId: string): Promise<UserProfileResponse> {
  return authRequest<UserProfileResponse>(`/Users/profile/${userId}`, {
    method: 'GET',
  });
}

export async function updateUserProfile(
  userId: string,
  payload: { displayName: string; profileImageUrl?: string },
): Promise<UserProfileResponse> {
  return authRequest<UserProfileResponse>(`/users/profile/${userId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}

export async function updateThemePreference(
  userId: string,
  theme: 'light' | 'dark',
): Promise<void> {
  await authRequest<ApiStatusResponse>(`/users/profile/${userId}`, {
    method: 'PATCH',
    body: JSON.stringify({ theme }),
  });
}

export async function authFetch(
  path: string,
  init: RequestInit = {},
  bearerToken?: string,
): Promise<Response> {
  assertConfigured();

  return fetch(authUrl(path), {
    ...init,
    headers: {
      ...buildHeaders(bearerToken),
      ...(init.headers as Record<string, string> | undefined),
    },
  });
}
