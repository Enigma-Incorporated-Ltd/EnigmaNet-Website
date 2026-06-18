import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { platform } from 'node:os';
import dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const UPLOAD_TIMEOUT_MS = 120_000;

dotenv.config({ path: resolve(projectRoot, '.env') });

const apiKey = process.env.DEPENDENCY_TRACK_API_KEY?.trim();
const projectUuid =
  process.env.DEPENDENCY_TRACK_PROJECT?.trim() ||
  process.env.DEPENDENCY_TRACK_PROJECT_UUID?.trim();
const bomPath = resolve(
  projectRoot,
  process.env.DEPENDENCY_TRACK_BOM_PATH?.trim() || 'bom.json',
);
const baseUrl = (process.env.DEPENDENCY_TRACK_URL || 'http://51.15.201.73').replace(
  /\/$/,
  '',
);
const explicitApiUrl = process.env.DEPENDENCY_TRACK_API_URL?.trim();

function fail(message) {
  console.error(`[sbom:upload] ${message}`);
  process.exit(1);
}

if (!apiKey) {
  const hint = process.env.GITHUB_ACTIONS === 'true'
    ? 'Add GitHub secret DEPENDENCY_TRACK_API_KEY (Settings → Secrets and variables → Actions).'
    : 'Add DEPENDENCY_TRACK_API_KEY to .env.';
  fail(`Missing DEPENDENCY_TRACK_API_KEY. ${hint}`);
}

if (!projectUuid) {
  const hint = process.env.GITHUB_ACTIONS === 'true'
    ? 'Add GitHub secret DEPENDENCY_TRACK_PROJECT (project UUID).'
    : 'Add DEPENDENCY_TRACK_PROJECT to .env.';
  fail(`Missing DEPENDENCY_TRACK_PROJECT. ${hint}`);
}

if (!existsSync(bomPath)) {
  fail(`SBOM not found at ${bomPath}. Run: npm run sbom:generate`);
}

const bomBuffer = readFileSync(bomPath);
const bomSizeMb = (bomBuffer.length / (1024 * 1024)).toFixed(2);

const endpoints = explicitApiUrl
  ? [explicitApiUrl]
  : [
      `${baseUrl}:8080/api/v1/bom`,
      `${baseUrl}:8081/api/v1/bom`,
      `${baseUrl}/api/v1/bom`,
    ];

console.log(`[sbom:upload] ${bomPath} (${bomSizeMb} MB) → ${endpoints.length} endpoint(s)`);

function uploadWithCurl(url) {
  const maxTimeSec = Math.ceil(UPLOAD_TIMEOUT_MS / 1000);
  const result = spawnSync(
    'curl.exe',
    [
      '-s',
      '-S',
      '-w',
      '\n__HTTP_CODE__:%{http_code}',
      '-X',
      'POST',
      url,
      '-H',
      `X-Api-Key: ${apiKey}`,
      '-F',
      `project=${projectUuid}`,
      '-F',
      `bom=@${bomPath};type=application/json`,
      '--max-time',
      String(maxTimeSec),
    ],
    {
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024,
    },
  );

  if (result.error) {
    throw result.error;
  }

  const output = result.stdout ?? '';
  const codeMatch = output.match(/__HTTP_CODE__:(\d+)/);
  const status = codeMatch ? Number(codeMatch[1]) : 0;
  const body = output.replace(/\n__HTTP_CODE__:\d+$/, '').trim();

  let responseJson = null;
  if (body) {
    try {
      responseJson = JSON.parse(body);
    } catch {
      responseJson = null;
    }
  }

  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: result.status !== 0 ? `curl exit ${result.status}` : String(status),
    responseText: body,
    responseJson,
    stderr: result.stderr?.trim() ?? '',
  };
}

async function uploadWithFetch(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), UPLOAD_TIMEOUT_MS);

  try {
    const formData = new FormData();
    formData.append('project', projectUuid);
    formData.append(
      'bom',
      new Blob([bomBuffer], { type: 'application/json' }),
      'bom.json',
    );

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Api-Key': apiKey,
      },
      body: formData,
      signal: controller.signal,
    });

    const responseText = await response.text();
    let responseJson = null;

    if (responseText) {
      try {
        responseJson = JSON.parse(responseText);
      } catch {
        responseJson = null;
      }
    }

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      responseText,
      responseJson,
      stderr: '',
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function uploadToEndpoint(url) {
  if (platform() === 'win32') {
    return uploadWithCurl(url);
  }
  return uploadWithFetch(url);
}

for (const endpoint of endpoints) {
  console.log(`[sbom:upload] Uploading to ${endpoint} ...`);

  try {
    const { ok, status, statusText, responseText, responseJson, stderr } =
      await uploadToEndpoint(endpoint);

    if (stderr) {
      console.error(`[sbom:upload] ${stderr}`);
    }

    if (ok) {
      console.log('[sbom:upload] Upload accepted.');
      if (responseJson?.token) {
        console.log(`  Processing token: ${responseJson.token}`);
      }
      console.log('  Check the dashboard for analysis progress.');
      process.exit(0);
    }

    console.error(`[sbom:upload] HTTP ${status} ${statusText}`);
    if (responseText) {
      console.error(`  ${responseText.slice(0, 500)}`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes('abort')) {
      console.error(`[sbom:upload] Timed out after ${UPLOAD_TIMEOUT_MS / 1000}s`);
    } else {
      console.error(`[sbom:upload] Request failed: ${message}`);
    }
  }
}

fail('All endpoints failed. See troubleshooting in DEPENDENCY-TRACK.md');
