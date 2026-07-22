/** Branded launch screens for new-tab SSO handoff — matches portal color tokens. */

const BRAND = {
  bg: '#000b1a',
  bgGradient: 'radial-gradient(ellipse at 50% 0%, #00254a 0%, #000b1a 70%)',
  accent: '#2adeff',
  accentSoft: 'rgba(42, 222, 255, 0.2)',
  text: '#ffffff',
  textMuted: 'rgba(255, 255, 255, 0.5)',
  font: "'Montserrat', 'Segoe UI', system-ui, sans-serif",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function launchStyles(): string {
  return `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${BRAND.bgGradient};
      font-family: ${BRAND.font};
      color: ${BRAND.text};
    }
    .launch {
      text-align: center;
      padding: 2.5rem 2rem;
      max-width: 420px;
    }
    .launch__spinner {
      width: 44px;
      height: 44px;
      border: 3px solid ${BRAND.accentSoft};
      border-top-color: ${BRAND.accent};
      border-radius: 50%;
      animation: launch-spin 0.7s linear infinite;
      margin: 0 auto 1.5rem;
    }
    @keyframes launch-spin { to { transform: rotate(360deg); } }
    .launch__brand {
      font-size: 0.8125rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      background: linear-gradient(90deg, #fff 0%, ${BRAND.accent} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 2rem;
    }
    .launch__title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .launch__subtitle {
      font-size: 0.875rem;
      color: ${BRAND.textMuted};
      line-height: 1.5;
    }
    .launch__link {
      display: inline-block;
      margin-top: 1.5rem;
      color: ${BRAND.accent};
      font-size: 0.875rem;
      text-decoration: none;
    }
    .launch__link:hover { text-decoration: underline; }
  `;
}

/** Full HTML shown in the new tab while authorize runs. */
export function buildLaunchPendingHtml(appName: string): string {
  const safeName = escapeHtml(appName);
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Opening ${safeName}…</title><style>${launchStyles()}</style></head><body><div class="launch"><div class="launch__brand">enigmanet</div><div class="launch__spinner"></div><h1 class="launch__title">Opening ${safeName}</h1><p class="launch__subtitle">Signing you in securely. This tab will redirect automatically.</p></div></body></html>`;
}

/** Fallback page if opener cannot navigate the tab directly. */
export function buildLaunchFallbackHtml(appName: string, url: string): string {
  const safeName = escapeHtml(appName);
  const safeUrl = JSON.stringify(url);
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Opening ${safeName}…</title><style>${launchStyles()}</style><script>window.location.replace(${safeUrl});</script></head><body><div class="launch"><div class="launch__brand">enigmanet</div><div class="launch__spinner"></div><h1 class="launch__title">Opening ${safeName}</h1><p class="launch__subtitle">If you are not redirected, use the link below.</p><a class="launch__link" id="go">Continue to application</a></div><script>document.getElementById("go").href=${safeUrl};</script></body></html>`;
}

export function writeLaunchPendingTab(tab: Window, appName: string): void {
  try {
    tab.document.open();
    tab.document.write(buildLaunchPendingHtml(appName));
    tab.document.close();
  } catch {
    tab.document.title = `Opening ${appName}…`;
  }
}

export function writeLaunchFallbackTab(tab: Window, appName: string, url: string): void {
  tab.document.open();
  tab.document.write(buildLaunchFallbackHtml(appName, url));
  tab.document.close();
}

export function navigateLaunchTab(tab: Window, url: string, appName: string): void {
  try {
    tab.location.replace(url);
  } catch {
    writeLaunchFallbackTab(tab, appName, url);
  }
  tab.opener = null;
}
