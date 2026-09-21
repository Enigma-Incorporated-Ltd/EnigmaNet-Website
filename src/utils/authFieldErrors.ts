export type AuthFieldKey =
  | 'email'
  | 'password'
  | 'passwordRepeat'
  | 'firstname'
  | 'lastname';

export type AuthFieldError = {
  field: AuthFieldKey;
  message: string;
};

export function mapLoginError(
  message: string,
  errors?: Record<string, string[] | string>,
): AuthFieldError {
  if (errors && typeof errors === 'object') {
    for (const [key, val] of Object.entries(errors)) {
      const msg = Array.isArray(val) ? val[0] : typeof val === 'string' ? val : '';
      if (!msg) continue;
      const lowerKey = key.toLowerCase();
      if (lowerKey.includes('email')) return { field: 'email', message: msg };
      if (lowerKey.includes('password')) return { field: 'password', message: msg };
    }
  }

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

export function mapRegisterError(
  message: string,
  errors?: Record<string, string[] | string>,
): AuthFieldError {
  if (errors && typeof errors === 'object') {
    for (const [key, val] of Object.entries(errors)) {
      const msg = Array.isArray(val) ? val[0] : typeof val === 'string' ? val : '';
      if (!msg) continue;
      const lowerKey = key.toLowerCase();
      if (lowerKey.includes('email')) return { field: 'email', message: msg };
      if (lowerKey.includes('first')) return { field: 'firstname', message: msg };
      if (lowerKey.includes('last')) return { field: 'lastname', message: msg };
      if (lowerKey.includes('repeat') || lowerKey.includes('confirmpassword')) return { field: 'passwordRepeat', message: msg };
      if (lowerKey.includes('password')) return { field: 'password', message: msg };
    }
  }

  const lower = message.toLowerCase();

  if (lower.includes('last name') || lower.includes('lastname')) {
    return { field: 'lastname', message: message.trim() };
  }

  if (lower.includes('first name') || lower.includes('firstname')) {
    return { field: 'firstname', message: message.trim() };
  }

  if (lower.includes('user name') || lower.includes('username')) {
    return { field: 'firstname', message: message.trim() };
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
