# Dependency-Track SBOM Setup

This project generates a CycloneDX Software Bill of Materials (SBOM) from npm dependencies and uploads it to the shared Dependency-Track instance.

**Dashboard:** [http://51.15.201.73/](http://51.15.201.73/)

**Reference:** [How to setup Dependency-Track (Part 01)](https://dev.to/amjadcp/how-to-setup-the-dependency-track-dependency-track-part-01--1e19)

The Dependency-Track server is already hosted and managed separately (Adam). This repo only covers **SBOM generation and upload**.

---

## Quick start

```cmd
cd D:\PROJECT\ThinkClient Ai
npm install
npm run sbom:generate
npm run sbom:upload
```

Credentials are read from `.env` (see [Configure environment variables](#4-configure-environment-variables)).

---

## Prerequisites

| Requirement | Notes |
|-------------|-------|
| **Node.js 18+** | `npm run sbom:upload` uses native `fetch`, `FormData`, and `Blob` |
| **`package-lock.json`** | Required — SBOM is generated from the lockfile only |
| **`npm install`** | Installs `@cyclonedx/cyclonedx-npm` locally (no global install needed) |
| **Dependency-Track access** | Dashboard login, API key, and a project UUID |

---

## Overview

| Step | Command | Output |
|------|---------|--------|
| 1. Install tooling | `npm install` | `@cyclonedx/cyclonedx-npm` in `node_modules` |
| 2. Generate SBOM | `npm run sbom:generate` | `bom.json` |
| 3. Upload to Dependency-Track | `npm run sbom:upload` | Vulnerability scan in dashboard |

---

## One-time setup

### 1. Install dependencies

From the project root:

```cmd
npm install
```

This installs `@cyclonedx/cyclonedx-npm` into `node_modules/.bin` so `npm run sbom:generate` works without a global install.

If you see `missing: @cyclonedx/cyclonedx-npm`, run `npm install` again — the package is listed in `devDependencies` but must be present in `node_modules`.

### 2. Create a project in Dependency-Track

1. Open [http://51.15.201.73/](http://51.15.201.73/)
2. Go to **Projects → Create Project**
3. Suggested values:

   | Field | Value |
   |-------|-------|
   | Project Name | `enigmanet` (matches `package.json` `name`) |
   | Version | `0.0.0` (matches `package.json` `version`) |
   | Classifier | **Application** |
   | Is latest version | Checked |
   | Project Collection Logic | **None** |

4. Click **Create**
5. Open the new project and copy its **UUID**

### 3. Create an API key

1. In Dependency-Track: **Administration → Access Management → API Keys**
2. Create a new key with **BOM_UPLOAD** permission (or a team/role that includes it)
3. Copy the key — it is shown only once

### 4. Configure environment variables

Add these to **`.env`** in the project root (the upload script reads `.env` via `dotenv`):

```env
DEPENDENCY_TRACK_URL=http://51.15.201.73
DEPENDENCY_TRACK_API_KEY=your-api-key-here
DEPENDENCY_TRACK_PROJECT=your-project-uuid-here
```

Optional overrides:

```env
# Full upload URL — use when port 80 returns HTTP 413 or 405
DEPENDENCY_TRACK_API_URL=http://51.15.201.73:8081/api/v1/bom

# Alternate name for project UUID (either variable works)
DEPENDENCY_TRACK_PROJECT_UUID=your-project-uuid-here

# Custom SBOM path (default: bom.json)
DEPENDENCY_TRACK_BOM_PATH=bom.json
```

> **Security:** Do not commit API keys. `.env` is gitignored.

---

## Generate the SBOM

Both commands write to **`bom.json`** (gitignored).

### Production dependencies (recommended)

Excludes `devDependencies` (Vite, ESLint, etc.) for a smaller BOM:

```cmd
npm run sbom:generate
```

Underlying command:

```bash
cyclonedx-npm --package-lock-only --omit dev --output-file bom.json
```

### Full SBOM (includes dev dependencies)

```cmd
npm run sbom:generate:full
```

> **Note:** If upload fails with HTTP 413, use `DEPENDENCY_TRACK_API_URL` or ask the server admin to raise the nginx upload limit.

---

## Upload the SBOM

```cmd
npm run sbom:upload
```

Or generate + upload together:

```cmd
npm run sbom:deploy
```

### Automatic upload after build

`npm run build` runs a **`postbuild`** hook that executes `sbom:deploy` (generate + upload) after a successful Vite build.

```cmd
npm run build
```

Runs: `tsc` → `vite build` → `sbom:generate` → `sbom:upload`

For CI, add GitHub repository secrets:

| Secret | Value |
|--------|-------|
| `DEPENDENCY_TRACK_API_KEY` | Your BOM upload API key |
| `DEPENDENCY_TRACK_PROJECT` | Project UUID (`abc53a2d-...`) |

Runs `node scripts/upload-sbom.js`, which:

1. Loads `.env` with `dotenv`
2. Reads `DEPENDENCY_TRACK_API_KEY` and `DEPENDENCY_TRACK_PROJECT` (or `DEPENDENCY_TRACK_PROJECT_UUID`)
3. Uploads `bom.json` via **multipart/form-data** (not base64 JSON — avoids payload bloat)
4. Tries API endpoints in order until one succeeds:
   - `{DEPENDENCY_TRACK_URL}/api/v1/bom` → e.g. `http://51.15.201.73/api/v1/bom`
   - `http://51.15.201.73:8081/api/v1/bom`
   - `http://51.15.201.73:8080/api/v1/bom`

If `DEPENDENCY_TRACK_API_URL` is set, only that URL is used.

On success:

```
[sbom:upload] bom.json (X.XX MB) → N endpoint(s)
[sbom:upload] Trying http://51.15.201.73/api/v1/bom
[sbom:upload] Upload accepted.
  Processing token: ...
  Check the dashboard for analysis progress.
```

Open the project in Dependency-Track to view components and vulnerability findings.

---

## npm scripts reference

| Script | Description |
|--------|-------------|
| `npm run sbom:generate` | CycloneDX SBOM from `package-lock.json` (production deps only) |
| `npm run sbom:generate:full` | SBOM including devDependencies |
| `npm run sbom:deploy` | Generate + upload in one step |
| `npm run sbom:upload` | Upload `bom.json` to Dependency-Track via Node script |

`postbuild` (after `npm run build`) runs `sbom:deploy` automatically.

---

## Project files

| File | Purpose |
|------|---------|
| `scripts/upload-sbom.js` | **Active** upload script (`npm run sbom:upload`) |
| `scripts/upload-sbom.ps1` | Legacy PowerShell script (not used by npm scripts) |
| `bom.json` | Generated SBOM output (gitignored) |
| `DEPENDENCY-TRACK.md` | This guide |

**`package.json` additions:**

```json
"scripts": {
  "sbom:generate": "cyclonedx-npm --package-lock-only --omit dev --output-file bom.json",
  "sbom:generate:full": "cyclonedx-npm --package-lock-only --output-file bom.json",
  "sbom:upload": "node scripts/upload-sbom.js"
},
"devDependencies": {
  "@cyclonedx/cyclonedx-npm": "^4.2.1"
}
```

**Runtime dependency used by upload:** `dotenv` (already in project `dependencies`).

---

## Troubleshooting

### `cyclonedx-npm` is not recognized

```cmd
npm install
npm run sbom:generate
```

Ensure `@cyclonedx/cyclonedx-npm` appears in `node_modules/.bin`.

### `missing: @cyclonedx/cyclonedx-npm@^4.2.1`

The package is in `package.json` but not installed. Run:

```cmd
npm install
```

### Missing credentials

```
[sbom:upload] Missing DEPENDENCY_TRACK_API_KEY
```

Add `DEPENDENCY_TRACK_API_KEY` and `DEPENDENCY_TRACK_PROJECT` to `.env`.

### HTTP 413 — Request Entity Too Large

The SBOM exceeds the nginx upload limit on port 80 (often ~1 MB). Base64 JSON uploads make this worse — this project uses multipart instead.

**Fix options (try in order):**

1. Regenerate a smaller SBOM:
   ```cmd
   npm run sbom:generate
   ```
2. Set the API port directly in `.env`:
   ```env
   DEPENDENCY_TRACK_API_URL=http://51.15.201.73:8081/api/v1/bom
   ```
3. Ask Adam to increase nginx `client_max_body_size` on the Dependency-Track host.

The upload script automatically tries ports **8081** and **8080** after port 80 fails.

### HTTP 405 — Method Not Allowed

Port 80 is serving the **UI**, not the **API**. Set:

```env
DEPENDENCY_TRACK_API_URL=http://51.15.201.73:8081/api/v1/bom
```

### All endpoints failed

Check:

- API key is valid and has **BOM_UPLOAD** permission
- Project UUID is correct
- `bom.json` exists (`npm run sbom:generate`)
- Firewall allows outbound HTTP to `51.15.201.73` on ports 80, 8080, 8081

### SBOM not found

```cmd
npm run sbom:generate
npm run sbom:upload
```

---

## Manual upload (alternative)

Upload through the Dependency-Track GUI:

1. Open your project in the dashboard
2. Use **Upload BOM**
3. Select `bom.json`

Useful when CLI upload is blocked by network or nginx limits.

---

## CI/CD (optional)

Set the same environment variables as secrets, then:

```bash
npm ci
npm run sbom:generate
npm run sbom:upload
```

**cURL (multipart — preferred for large BOMs):**

```bash
curl -X POST "http://51.15.201.73/api/v1/bom" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -F "project=YOUR_PROJECT_UUID" \
  -F "bom=@bom.json;type=application/json"
```

**Windows cmd:**

```cmd
curl.exe -X POST "http://51.15.201.73/api/v1/bom" -H "X-Api-Key: YOUR_API_KEY" -F "project=YOUR_PROJECT_UUID" -F "bom=@bom.json;type=application/json"
```

Avoid the JSON/base64 upload method for large SBOMs:

```bash
# NOT recommended for large files — payload is ~33% larger and hits server limits
BOM_BASE64=$(base64 -w 0 bom.json)
curl -X POST "http://51.15.201.73/api/v1/bom" \
  -H "X-Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{ \"project\": \"YOUR_PROJECT_UUID\", \"bom\": \"$BOM_BASE64\" }"
```
