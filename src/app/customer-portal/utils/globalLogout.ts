/** Front-channel logout: load each app /sso/logout in a hidden iframe. */
export function triggerAppLogoutUrls(urls: string[]): void {
  for (const url of [...new Set(urls.filter(Boolean))]) {
    try {
      const iframe = document.createElement('iframe');
      iframe.hidden = true;
      iframe.src = url;
      document.body.appendChild(iframe);
      window.setTimeout(() => iframe.remove(), 10000);
    } catch {
      // best-effort
    }
  }
}
