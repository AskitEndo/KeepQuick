# KeepQuick - Gecko Build (Firefox/Zen Browser)

This version is compatible with **Firefox-based browsers**:

- Mozilla Firefox (v109+)
- Zen Browser
- LibreWolf
- Waterfox
- Any other Firefox-based browser

## Key Features (Firefox-specific)

- **Sidebar Action API**: Uses Firefox's native sidebar for persistent sidebar view
- **Browser API**: Uses Firefox's `browser` API with Chrome fallback
- **Keyboard Shortcuts**:
  - `Ctrl+Shift+Q` - Open popup
  - `Ctrl+Shift+K` - Toggle sidebar
- **Compatible with Zen Browser**: Optimized for Zen's beautiful UI

## Installation

### From Firefox Add-ons (Recommended)

Coming soon!

### Manual Installation (Temporary)

1. Open Firefox
2. Navigate to `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on**
4. Select the `manifest.json` file from the `gecko` folder
5. KeepQuick is now installed temporarily!

### Manual Installation (Permanent)

1. Package the extension (see below)
2. Go to `about:config` and set `xpinstall.signatures.required` to `false` (not recommended for daily use)
3. Go to `about:addons`
4. Click the gear icon → **Install Add-on From File**
5. Select the `.xpi` file

## Building for Distribution

### Create XPI file for Firefox Add-ons

```powershell
# From the gecko folder
Compress-Archive -Path * -DestinationPath ../KeepQuick-gecko-v1.0.0.xpi -Force
# Rename .zip to .xpi if needed
Rename-Item ../KeepQuick-gecko-v1.0.0.xpi.zip ../KeepQuick-gecko-v1.0.0.xpi
```

Or use web-ext:

```bash
# Install web-ext if not already installed
npm install -g web-ext

# Build from gecko folder
cd gecko
web-ext build
```

## Technical Notes

- Uses `sidebar_action` API instead of Chrome's `sidePanel`
- Background scripts instead of service workers (Firefox MV3 style)
- Uses `browser.*` API with `chrome.*` fallback for compatibility
- Includes `browser_specific_settings` for Firefox Add-ons
- Extension ID: `keepquick@askitendo.com`

## Differences from Chromium Version

1. **Sidebar vs Side Panel**: Firefox uses `sidebar_action`, Chrome uses `sidePanel`
2. **Background Script**: Firefox uses persistent background scripts, Chrome uses service workers
3. **API Namespace**: Firefox prefers `browser.*`, Chrome uses `chrome.*`
4. **Manifest**: Includes `browser_specific_settings` for Firefox requirements
5. **Additional Keyboard Shortcut**: `Ctrl+Shift+K` to toggle sidebar (Firefox-specific)

## Testing

Test on multiple Firefox-based browsers:

- Firefox stable
- Firefox Developer Edition
- Zen Browser (for optimal modern UI experience)
