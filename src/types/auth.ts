export type AuthUser = {
  userId: string;
  email: string;
  isRootUser: boolean;
  profileUserId?: string;
  profileImageUrl?: string;
};

export type AuthSession = {
  token: string;
  refreshToken: string;
  user: AuthUser;
};

export type RegisterUserPayload = {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  businessname?: string;
};

export type RegisterUserResponse = {
  status: string;
  userid?: string;
  IsRootUser?: boolean;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token?: string;
  accessToken?: string;
  refreshToken?: string;
  userid?: string;
  email?: string;
  isRootUser?: boolean;
  status?: string;
};

export type LoginSuccessResponse = {
  token: string;
  refreshToken: string;
  userid: string;
  email: string;
  isRootUser?: boolean;
  profileUserId?: string;
  profileImageUrl?: string;
};

export type RefreshTokenPayload = {
  userId: string;
  email: string;
  refreshToken: string;
};

export type RefreshTokenResponse = {
  token?: string;
  accessToken?: string;
  refreshToken: string;
};

export type MicrosoftAuthPayload = {
  accessToken: string;
  idToken: string;
};

export type MicrosoftAuthResponse = {
  status: string;
  userid?: string;
  email?: string;
  token?: string;
  refreshToken?: string;
  isRootUser?: boolean;
};

export type GoogleAuthPayload = {
  idToken: string;
};

export type GoogleAuthResponse = {
  status: string;
  userid?: string;
  email?: string;
  token?: string;
  refreshToken?: string;
  isRootUser?: boolean;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type VerifyCodePayload = {
  verificationcode: string;
};

export type ResetPasswordPayload = {
  verificationcode: string;
  newpassword: string;
};

export type ApiStatusResponse = {
  status: string;
  [key: string]: unknown;
};
