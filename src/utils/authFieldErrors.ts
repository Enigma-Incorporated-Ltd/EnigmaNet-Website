export type AuthFieldKey = 'email' | 'password' | 'passwordRepeat' | 'username';

export type AuthFieldError = {
  field: AuthFieldKey;
  message: string;
};

export function mapLoginError(message: string): AuthFieldError {
  const lower = message.toLowerCase();

  if (
    lower.includes('email') ||
    lower.includes('user not found') ||
    lower.includes('user does not exist') ||
    lower.includes('does not exist') ||
    lower.includes('account not found') ||
    lower.includes('no user')
  ) {
    return { field: 'email', message };
  }

  if (lower.includes('password') || lower.includes('wrong password')) {
    return { field: 'password', message };
  }

  return { field: 'email', message };
}

export function mapRegisterError(message: string): AuthFieldError {
  const lower = message.toLowerCase();

  if (lower.includes('last name') || lower.includes('lastname')) {
    return { field: 'username', message };
  }

  if (lower.includes('first name') || lower.includes('firstname')) {
    return { field: 'username', message };
  }

  if (lower.includes('user name') || lower.includes('username')) {
    return { field: 'username', message };
  }

  if (lower.includes('already exists') || lower.includes('user already')) {
    return { field: 'email', message };
  }

  if (lower.includes('email')) {
    return { field: 'email', message };
  }

  if (lower.includes('repeat') || lower.includes('match')) {
    return { field: 'passwordRepeat', message };
  }

  if (lower.includes('password')) {
    return { field: 'password', message };
  }

  return { field: 'email', message };
}
