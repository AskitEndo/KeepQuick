# KeepQuick - Chromium Build

This version is compatible with **Chromium-based browsers**:

- Google Chrome (v112+)
- Microsoft Edge
- Brave Browser
- Opera
- Vivaldi
- Any other Chromium-based browser

## Key Features (Chromium-specific)

- **Side Panel API**: Uses Chrome's native side panel for persistent sidebar view
- **Service Worker**: Uses Manifest V3 service workers for background operations
- **Keyboard Shortcut**: `Ctrl+Shift+Q` (Windows/Linux) or `Cmd+Shift+Q` (Mac)

## Installation

### From Chrome Web Store (Recommended)

Coming soon!

### Manual Installation

1. Open your Chromium browser
2. Navigate to `chrome://extensions/` (or `edge://extensions/` for Edge)
3. Enable **Developer mode** (toggle in top-right corner)
4. Click **Load unpacked**
5. Select the `chromium` folder
6. KeepQuick is now installed!

## Building for Distribution

To package for Chrome Web Store:

```powershell
# From the chromium folder
Compress-Archive -Path * -DestinationPath ../KeepQuick-chromium-v1.0.0.zip -Force
```

## Technical Notes

- Uses `chrome.sidePanel` API (Chrome 114+)
- Service worker architecture for better performance
- Declarative Net Request for iframe header modification
