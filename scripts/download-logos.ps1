# PowerShell script to download company logos
# Run with: .\scripts\download-logos.ps1

$logosDir = "public\logos"

if (-not (Test-Path $logosDir)) {
    New-Item -ItemType Directory -Path $logosDir -Force | Out-Null
}

# Logo URLs from various sources
$logos = @{
    "warner-brothers.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros._logo.svg/512px-Warner_Bros._logo.svg.png"
    "def-jam.png" = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Def_Jam_Recordings_logo.svg/512px-Def_Jam_Recordings_logo.svg.png"
    "epic-records.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Epic_Records_logo.svg/512px-Epic_Records_logo.svg.png"
    "ovo.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OVO_Sound_logo.svg/512px-OVO_Sound_logo.svg.png"
}

Write-Host "`n📥 Downloading logos from Wikimedia Commons...`n" -ForegroundColor Cyan

foreach ($logo in $logos.GetEnumerator()) {
    $filename = $logo.Key
    $url = $logo.Value
    $filepath = Join-Path $logosDir $filename
    
    if (Test-Path $filepath) {
        Write-Host "⏭️  Skipped (exists): $filename" -ForegroundColor Yellow
        continue
    }
    
    try {
        Write-Host "⬇️  Downloading: $filename..." -ForegroundColor Gray
        $headers = @{
            "User-Agent" = "Mozilla/5.0"
        }
        Invoke-WebRequest -Uri $url -OutFile $filepath -Headers $headers -ErrorAction Stop
        Write-Host "✅ Downloaded: $filename" -ForegroundColor Green
        Start-Sleep -Milliseconds 500
    }
    catch {
        Write-Host "❌ Failed: $filename - $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n✨ Download complete!`n" -ForegroundColor Cyan
Write-Host "📝 Remaining logos to download manually:" -ForegroundColor Yellow
Write-Host "   - canada-film-equipment.png"
Write-Host "   - ontario-camera.png"
Write-Host "   - strada-xr.png"
Write-Host "   - b-camera.png"
Write-Host "   - location-a.png"
Write-Host "   - rumiversal.png"
Write-Host "   - 97-collective.png"
Write-Host "   - toronto-film-school.png`n"
Write-Host "💡 Try these sources:" -ForegroundColor Cyan
Write-Host "   - Company official websites"
Write-Host "   - https://seeklogo.com/"
Write-Host "   - https://logos-world.net/"
Write-Host "   - Google Images search: '[Company Name] logo transparent png'`n"

