import { existsSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { platform } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const bomFile = 'bom.json';
const bomPath = resolve(projectRoot, bomFile);
const includeDev = process.argv.includes('--full');

const cyclonedxArgs = [
  'cyclonedx-npm',
  '--package-lock-only',
  '--ignore-npm-errors',
  '--output-file',
  bomFile,
];

if (!includeDev) {
  cyclonedxArgs.push('--omit', 'dev');
}

console.log('[sbom:generate] Creating CycloneDX SBOM from package-lock.json...');

const cyclonedxBin = join(
  projectRoot,
  'node_modules',
  '.bin',
  platform() === 'win32' ? 'cyclonedx-npm.cmd' : 'cyclonedx-npm',
);

if (!existsSync(cyclonedxBin)) {
  console.error('[sbom:generate] cyclonedx-npm not found. Run: npm install');
  process.exit(1);
}

const result = spawnSync(cyclonedxBin, cyclonedxArgs.slice(1), {
  cwd: projectRoot,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
});

if (result.stdout?.trim()) {
  console.log(result.stdout.trim());
}

const stderr = result.stderr?.trim();
if (stderr) {
  const hasPeerWarnings = /ELSPROBLEMS|invalid: react/i.test(stderr);
  if (hasPeerWarnings) {
    console.warn(
      '[sbom:generate] npm peer-dependency warnings detected (safe to ignore).',
    );
  } else {
    console.warn(stderr);
  }
}

if (!existsSync(bomPath)) {
  console.error('[sbom:generate] bom.json was not created.');
  process.exit(result.status ?? 1);
}

const sizeMb = statSync(bomPath).size / (1024 * 1024);
console.log(`[sbom:generate] bom.json ready (${sizeMb.toFixed(2)} MB).`);

if (typeof result.status === 'number' && result.status !== 0) {
  console.warn(
    `[sbom:generate] cyclonedx-npm exited with code ${result.status}, but bom.json exists — continuing.`,
  );
}
