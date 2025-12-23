# 💡 KeepQuick (Firefox/Zen Browser Edition)

<p align="center">
    <img src="./icon-430.png" alt="KeepQuick Logo">
</p>

Lightning-fast access to Google Keep for **Firefox, Zen Browser, and other Gecko-based browsers**! KeepQuick gives you instant access to your notes through keyboard shortcuts and a beautiful sidebar.

## ✨ Features

- **⚡ Quick Access**: Open Google Keep instantly with `Ctrl+Shift+Q` (popup) or `Ctrl+Shift+K` (toggle sidebar)
- **🖥️ Flexible Display**: Choose between Sidebar (recommended) or Popup Window
- **⚙️ Customizable Behavior**: Control when the options page opens
- **🎨 Beautiful UI**: Modern amber/orange theme optimized for Firefox & Zen Browser
- **🚀 Lightweight**: Fast and efficient with minimal resource usage
- **🔒 Privacy Focused**: No tracking, no data collection, 100% open source
- **🦊 Firefox Native**: Uses Firefox's native sidebar API for best performance

## 🌐 Compatible Browsers

- Mozilla Firefox (v109+)
- Zen Browser
- LibreWolf
- Waterfox
- Any Gecko-based browser

## 📦 Installation

### From Firefox Add-ons

1. Visit [Firefox Add-ons](#) (coming soon)
2. Click "Add to Firefox"
3. Grant permissions
4. Start using KeepQuick with `Ctrl+Shift+Q` or `Ctrl+Shift+K`!

### Manual Installation (Temporary - For Testing)

1. Download or clone this repository
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Navigate to the `gecko` folder and select `manifest.json`
5. KeepQuick is now installed! (Note: Will be removed when Firefox closes)

### Manual Installation (Permanent - Developer Mode)

1. Package the extension as XPI (see Development section below)
2. Open Firefox and go to `about:config`
3. Set `xpinstall.signatures.required` to `false` (not recommended for daily use)
4. Go to `about:addons`
5. Click the gear icon ⚙️ → "Install Add-on From File"
6. Select the `.xpi` file
7. KeepQuick is now permanently installed!

## 🎮 Usage

### Keyboard Shortcuts

- **`Ctrl+Shift+Q`** (Windows/Linux) or **`Cmd+Shift+Q`** (Mac) - Open Google Keep in popup
- **`Ctrl+Shift+K`** - Toggle sidebar (Firefox-specific)

### Browser Action

Click the 💡 KeepQuick icon in your browser toolbar to access Google Keep in popup mode.

### Sidebar Access

Use `Ctrl+Shift+K` or click View → Sidebar → KeepQuick to open in sidebar mode (recommended for persistent access).

### Settings

Right-click the extension icon and select "Options" to customize:

- **Display Mode**: Sidebar (Recommended) or Popup Window
- **Options Page Behavior**: Choose when the settings page should open
  - Never open automatically
  - Open when Firefox starts
  - Open when extension updates

## 🛠️ Technical Details

- **Manifest Version**: 3 (Firefox MV3)
- **Minimum Firefox Version**: 109
- **Extension ID**: `keepquick@askitendo.com`
- **API Used**: `browser.*` with `chrome.*` fallback
- **Permissions**:
  - `declarativeNetRequestWithHostAccess` - To modify headers for Google Keep iframe
  - `storage` - To save user preferences
- **Host Permissions**: `https://keep.google.com/*`
- **Sidebar API**: Uses Firefox's native `sidebar_action`

## 🏗️ Project Structure

```
gecko/ (Firefox Build)
├── background/
│   └── background.js          # Background scripts (Firefox MV3 style)
├── options/
│   ├── index.html            # Settings page
│   └── options.js            # Settings logic (browser API)
├── panel/
│   ├── index.html            # Sidebar content
│   ├── panel.js              # Panel logic
│   └── style.css             # Panel styles
├── popup/
│   └── index.html            # Popup window
├── manifest.json             # Firefox-specific manifest
├── net_request.json          # Network request rules
├── BUILD_INFO.md             # Gecko build information
└── icons/                    # Extension icons
```

## 🔧 Development

### Prerequisites

- Mozilla Firefox (version 109+) or Zen Browser
- Basic knowledge of HTML, CSS, JavaScript
- Optional: `web-ext` tool for easier development
- Text editor or IDE

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/AskitEndo/KeepQuick.git
   cd KeepQuick/gecko
   ```

2. Load the extension in Firefox:

   - Open `about:debugging#/runtime/this-firefox`
   - Click "Load Temporary Add-on"
   - Select `manifest.json` from the `gecko` folder

3. Make your changes and click "Reload" to test

### Building for Distribution

#### Method 1: PowerShell (Windows)

```powershell
# Navigate to gecko folder
cd gecko

# Create XPI package
Compress-Archive -Path * -DestinationPath ../KeepQuick-firefox-v1.0.0.zip -Force

# Rename to .xpi
Rename-Item ../KeepQuick-firefox-v1.0.0.zip ../KeepQuick-firefox-v1.0.0.xpi
```

#### Method 2: Using web-ext (Recommended)

```bash
# Install web-ext globally
npm install -g web-ext

# Navigate to gecko folder
cd gecko

# Build extension
web-ext build

# Or run with auto-reload during development
web-ext run
```

### Key Files (Firefox-Specific)

- **manifest.json**: Firefox extension configuration with `browser_specific_settings`
- **background/background.js**: Uses `browser` API with Chrome fallback
- **options/options.js**: Firefox-compatible settings with sidebar preferences
- **panel/**: Sidebar UI (recommended view for Firefox)
- **popup/**: Popup window UI (alternative view)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Testing on Firefox Variants

Please test your changes on:

- Firefox stable
- Firefox Developer Edition
- Zen Browser (for modern UI compatibility)

## 🔄 Differences from Chromium Version

| Feature            | Chromium        | Gecko (This Build)                   |
| ------------------ | --------------- | ------------------------------------ |
| **Sidebar API**    | `sidePanel`     | `sidebar_action`                     |
| **Background**     | Service Worker  | Background Scripts                   |
| **API Namespace**  | `chrome.*` only | `browser.*` preferred                |
| **Extra Shortcut** | None            | `Ctrl+Shift+K` for sidebar           |
| **Manifest**       | Standard MV3    | Includes `browser_specific_settings` |

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**AskitEndo**

- GitHub: [@AskitEndo](https://github.com/AskitEndo)
- Solo Developer & Creator

## 💝 Support

If you find KeepQuick useful, consider supporting its development:

- ⭐ Star this repository
- 🐛 Report bugs or request features via [Issues](https://github.com/AskitEndo/KeepQuick/issues)
- 🦊 Share with Firefox & Zen Browser users
- ☕ Buy me a coffee (scan QR code in extension settings)

## 🙏 Acknowledgments

- Built with Firefox Extension Manifest V3
- Uses Firefox native `sidebar_action` API
- Compatible with Zen Browser's beautiful UI
- Uses Google Keep web interface
- Icons and design inspired by modern UI/UX principles

## 📜 Changelog

### Version 1.0.0 (Initial Release - Gecko Edition)

- ⚡ Quick access to Google Keep via keyboard shortcuts
- 🦊 Firefox native sidebar support
- 🖥️ Popup Window as alternative
- ⚙️ Customizable options page behavior
- 🎨 Beautiful amber/orange theme optimized for Firefox
- 🔒 Privacy-focused design
- 🌐 Compatible with Zen Browser, LibreWolf, and Waterfox

---

Made with 💛 by AskitEndo | Optimized for Firefox & Zen Browser 🦊
