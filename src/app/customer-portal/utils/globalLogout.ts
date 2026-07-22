/** Front-channel logout: load each app logout URL in a hidden iframe. */
export function triggerAppLogoutUrls(urls: string[]): void {
  const unique = [...new Set(urls.filter(Boolean))];
  if (unique.length === 0) {
    // Dev fallback when API has no CallbackUrl config yet
    const fallback = (import.meta.env.VITE_NODE_SSO_LOGOUT as string | undefined)
      ?? deriveLogoutFromCallback(import.meta.env.VITE_NODE_SSO_CALLBACK as string | undefined);
    if (fallback) unique.push(fallback);
  }

  for (const url of unique) {
    loadLogoutTarget(url);
  }
}

function deriveLogoutFromCallback(callback?: string): string | null {
  if (!callback) return null;
  const suffix = '/sso/callback';
  if (callback.toLowerCase().endsWith(suffix)) {
    return `${callback.slice(0, -suffix.length)}/sso/logout`;
  }
  return `${callback.replace(/\/$/, '')}/sso/logout`;
}

function loadLogoutTarget(url: string): void {
  try {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('title', 'Sign out');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden;';
    iframe.src = url;
    document.body.appendChild(iframe);
    window.setTimeout(() => iframe.remove(), 10000);
  } catch {
    // Best-effort — server-side revocation still applies
  }
}
