# Create ZIP using .NET instead of Compress-Archive (preserves metadata better)
Add-Type -AssemblyName System.IO.Compression.FileSystem

$sourcePath = "f:\Digital Agency\DrKoketsoRakhudu\OOKROFFICE\Website\build"
$zipPath = "f:\Digital Agency\DrKoketsoRakhudu\OOKROFFICE\Website\website-PROPER.zip"

# Delete old zip if exists
if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

# Create ZIP with optimal compression
[System.IO.Compression.ZipFile]::CreateFromDirectory($sourcePath, $zipPath, [System.IO.Compression.CompressionLevel]::Optimal, $false)

Write-Host "ZIP created successfully: $zipPath"
Get-Item $zipPath | Select-Object Name, Length, LastWriteTime
