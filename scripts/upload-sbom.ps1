# Legacy PowerShell upload script — prefer: npm run sbom:upload
# Requires: DEPENDENCY_TRACK_API_KEY, DEPENDENCY_TRACK_PROJECT in .env

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$envFile = Join-Path $projectRoot '.env'

if (Test-Path $envFile) {
  Get-Content $envFile | ForEach-Object {
    if ($_ -match '^\s*([^#=]+)=(.*)$') {
      $name = $matches[1].Trim()
      $value = $matches[2].Trim().Trim('"')
      Set-Item -Path "env:$name" -Value $value
    }
  }
}

$apiKey = $env:DEPENDENCY_TRACK_API_KEY
$projectUuid = if ($env:DEPENDENCY_TRACK_PROJECT) { $env:DEPENDENCY_TRACK_PROJECT } else { $env:DEPENDENCY_TRACK_PROJECT_UUID }
$bomPath = if ($env:DEPENDENCY_TRACK_BOM_PATH) { Join-Path $projectRoot $env:DEPENDENCY_TRACK_BOM_PATH } else { Join-Path $projectRoot 'bom.json' }
$apiUrl = if ($env:DEPENDENCY_TRACK_API_URL) { $env:DEPENDENCY_TRACK_API_URL } else { 'http://51.15.201.73/api/v1/bom' }

if (-not $apiKey) { throw 'Missing DEPENDENCY_TRACK_API_KEY in .env' }
if (-not $projectUuid) { throw 'Missing DEPENDENCY_TRACK_PROJECT in .env' }
if (-not (Test-Path $bomPath)) { throw "SBOM not found: $bomPath. Run npm run sbom:generate" }

curl.exe -X POST $apiUrl `
  -H "X-Api-Key: $apiKey" `
  -F "project=$projectUuid" `
  -F "bom=@$bomPath;type=application/json"
