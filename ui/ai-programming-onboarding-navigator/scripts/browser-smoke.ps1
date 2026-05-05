$ErrorActionPreference = "Stop"

$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$baseUrl = $env:SMOKE_BASE_URL
if (-not $baseUrl) {
  $baseUrl = "http://localhost:3000"
}

$userDataDir = Join-Path $PSScriptRoot "..\.chrome-smoke"

$checks = @(
  @{ Path = "/"; Text = @("AI Navigator", "Campus AI Coding Onboarding", "Official", "排障助手") },
  @{ Path = "/roadmap/select-tool"; Text = @("starter route", "Official", "Claude Code") },
  @{ Path = "/roadmap/agentic-thinking"; Text = @("advanced route", "Agentic Thinking", "Official") },
  @{ Path = "/tools"; Text = @("Claude Code", "Codex", "Official Path") },
  @{ Path = "/setup"; Text = @("Install &amp; Verify", "Windows", "macOS", "Claude Code", "Codex") },
  @{ Path = "/troubleshooting"; Text = @("Troubleshooting", "API Key", "npm / Node") },
  @{ Path = "/practice"; Text = @("First Practice", "Frontend", "Testing") },
  @{ Path = "/advanced"; Text = @("Advanced Route", "Agentic Thinking", "Pipeline") },
  @{ Path = "/updates"; Text = @("Sources &amp; Updates", "Claude Code Changelog", "Codex Changelog") }
)

foreach ($check in $checks) {
  $url = "$baseUrl$($check.Path)"
  $dom = & $chrome --headless=new --disable-gpu --no-first-run --user-data-dir="$userDataDir" --dump-dom "$url" 2>$null

  foreach ($text in $check.Text) {
    if ($dom -notlike "*$text*") {
      throw "Missing expected text '$text' on $($check.Path)"
    }
  }
}

Write-Output "browser smoke checks passed for $($checks.Count) routes at $baseUrl"
