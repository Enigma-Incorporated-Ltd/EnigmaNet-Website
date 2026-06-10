import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

function getAuthApiProxyTarget(env: Record<string, string>): string {
  const raw =
    env.VITE_API_PROXY_TARGET?.trim() ||
    env.VITE_API_BASE_URL?.trim() ||
    'https://enigmaincenterpriseapp.azurewebsites.net';
  return raw.replace(/\/$/, '');
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiProxyTarget = getAuthApiProxyTarget(env);

  return {
    plugins: [react()],
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
