import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import posthog from '@posthog/rollup-plugin';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      ...(mode === 'production'
        ? [
            posthog({
              personalApiKey: env.POSTHOG_CLI_API_KEY,
              projectId: env.POSTHOG_CLI_PROJECT_ID,
              host: env.POSTHOG_CLI_HOST,
              sourcemaps: {
                enabled: true,
                deleteAfterUpload: true,
              },
            }),
          ]
        : []),
    ],
    build: {
      sourcemap: true,
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
