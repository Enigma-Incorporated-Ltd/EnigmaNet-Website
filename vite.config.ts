import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const DEFAULT_AUTH_API_ORIGIN = 'https://enigmaincenterpriseapp.azurewebsites.net';

function getAuthApiProxyTarget(env: Record<string, string>): string {
  const raw =
    env.VITE_API_PROXY_TARGET?.trim() ||
    env.VITE_API_BASE_URL?.trim() ||
    DEFAULT_AUTH_API_ORIGIN;
  return raw.replace(/\/$/, '');
}

function buildWebConfig(apiOrigin: string): string {
  return `<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <!-- Same-origin /api proxy — target from VITE_API_PROXY_TARGET (vite.config.ts). -->
    <rewrite>
      <rules>
        <rule name="Auth API Proxy" stopProcessing="true">
          <match url="^api/(.*)" />
          <action
            type="Rewrite"
            url="${apiOrigin}/api/{R:1}"
            appendQueryString="true"
          />
        </rule>
        <rule name="SPA Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
    <proxy enabled="true" />
  </system.webServer>
</configuration>
`;
}

function webConfigPlugin(apiOrigin: string): Plugin {
  const publicPath = resolve(__dirname, 'public/web.config');
  const distPath = resolve(__dirname, 'dist/web.config');
  const content = buildWebConfig(apiOrigin);

  return {
    name: 'generate-web-config',
    buildStart() {
      writeFileSync(publicPath, content, 'utf8');
    },
    closeBundle() {
      writeFileSync(distPath, content, 'utf8');
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiProxyTarget = getAuthApiProxyTarget(env);

  return {
    plugins: [react(), webConfigPlugin(apiProxyTarget)],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: apiProxyTarget,
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
