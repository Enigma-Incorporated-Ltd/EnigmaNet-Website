import { spawnSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

dotenv.config({ path: resolve(projectRoot, '.env') });

function runGenerate() {
  const result = spawnSync('node', ['scripts/generate-sbom.js'], {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: false,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function runUpload() {
  const result = spawnSync('node', ['scripts/upload-sbom.js'], {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: false,
  });

  process.exit(result.status ?? 1);
}

const apiKey = process.env.DEPENDENCY_TRACK_API_KEY?.trim();
const projectUuid =
  process.env.DEPENDENCY_TRACK_PROJECT?.trim() ||
  process.env.DEPENDENCY_TRACK_PROJECT_UUID?.trim();

runGenerate();

if (apiKey && projectUuid) {
  runUpload();
}

console.warn('[sbom:deploy] Skipping Dependency-Track upload — credentials not configured.');

if (process.env.GITHUB_ACTIONS === 'true') {
  console.warn(
    '[sbom:deploy] Add GitHub repository secrets: DEPENDENCY_TRACK_API_KEY and DEPENDENCY_TRACK_PROJECT',
  );
} else {
  console.warn(
    '[sbom:deploy] Add DEPENDENCY_TRACK_API_KEY and DEPENDENCY_TRACK_PROJECT to .env (see DEPENDENCY-TRACK.md).',
  );
}

process.exit(0);
