import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import posthog from '@posthog/rollup-plugin';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const posthogApiKey = env.POSTHOG_CLI_API_KEY?.trim();
  const posthogProjectId = env.POSTHOG_CLI_PROJECT_ID?.trim();
  const posthogHost = env.POSTHOG_CLI_HOST?.trim();
  const enablePosthogSourcemaps =
    mode === 'production' && Boolean(posthogApiKey && posthogProjectId && posthogHost);

  return {
    plugins: [
      react(),
      ...(enablePosthogSourcemaps
        ? [
            posthog({
              personalApiKey: posthogApiKey,
              projectId: posthogProjectId,
              host: posthogHost,
              sourcemaps: {
                enabled: true,
                deleteAfterUpload: true,
              },
            }),
          ]
        : []),
    ],
    build: {
      sourcemap: enablePosthogSourcemaps,
      chunkSizeWarningLimit: 1000,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://enigmaincappdev.azurewebsites.net',
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
