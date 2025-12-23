# 💡 KeepQuick

<p align="center">
    <img src="./icon-430.png" alt="KeepQuick Logo">
</p>

Lightning-fast access to Google Keep right from your browser! KeepQuick is a Chrome extension that gives you instant access to your notes through a keyboard shortcut or browser action.

## ✨ Features

- **⚡ Quick Access**: Open Google Keep instantly with `Ctrl+Shift+Q` (or `Cmd+Shift+Q` on Mac)
- **🖥️ Flexible Display**: Choose between Side Panel (recommended) or Popup Window
- **⚙️ Customizable Behavior**: Control when the options page opens
- **🎨 Beautiful UI**: Modern amber/orange theme with dark mode support
- **🚀 Lightweight**: Fast and efficient with minimal resource usage
- **🔒 Privacy Focused**: No tracking, no data collection, 100% open source

## 📦 Installation

### From Chrome Web Store

1. Visit the [Chrome Web Store](#) (link coming soon)
2. Click "Add to Chrome"
3. Start using KeepQuick with `Ctrl+Shift+Q`!

### Manual Installation (Developer Mode)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the extension folder
6. KeepQuick is now installed!

## 🎮 Usage

### Keyboard Shortcut

Press `Ctrl+Shift+Q` (Windows/Linux) or `Cmd+Shift+Q` (Mac) to instantly open Google Keep.

### Browser Action

Click the 💡 KeepQuick icon in your browser toolbar to access Google Keep.

### Settings

Right-click the extension icon and select "Options" to customize:

- **Display Mode**: Side Panel or Popup Window
- **Options Page Behavior**: Choose when the settings page should open
  - Never open automatically
  - Open when Chrome starts
  - Open when extension updates

## 🛠️ Technical Details

- **Manifest Version**: 3
- **Minimum Chrome Version**: 112
- **Permissions**:
  - `declarativeNetRequestWithHostAccess` - To modify headers for Google Keep iframe
  - `sidePanel` - For side panel functionality
  - `storage` - To save user preferences
- **Host Permissions**: `https://keep.google.com/*`

## 🏗️ Project Structure

```
KeepQuick/
├── background/
│   └── background.js          # Service worker
├── options/
│   ├── index.html            # Settings page
│   └── options.js            # Settings logic
├── panel/
│   ├── index.html            # Side panel
│   ├── panel.js              # Panel logic
│   └── style.css             # Panel styles
├── popup/
│   └── index.html            # Popup window
├── manifest.json             # Extension manifest
├── net_request.json          # Network request rules
└── icons/                    # Extension icons
```

## 🔧 Development

### Prerequisites

- Google Chrome (version 112+)
- Basic knowledge of HTML, CSS, JavaScript
- Text editor or IDE

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/AskitEndo/KeepQuick.git
   cd KeepQuick
   ```

2. Load the extension in Chrome:

   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the project folder

3. Make your changes and reload the extension to test

### Key Files

- **manifest.json**: Extension configuration
- **background/background.js**: Handles installation, startup, and core logic
- **options/**: Settings page UI and logic
- **panel/**: Side panel UI (recommended view)
- **popup/**: Popup window UI (alternative view)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

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
- ☕ Buy me a coffee (scan QR code in extension settings)

## 🙏 Acknowledgments

- Built with Chrome Extension Manifest V3
- Uses Google Keep web interface
- Icons and design inspired by modern UI/UX principles

## 📜 Changelog

### Version 1.0.0 (Initial Release)

- ⚡ Quick access to Google Keep via keyboard shortcut
- 🖥️ Side Panel and Popup Window support
- ⚙️ Customizable options page behavior
- 🎨 Beautiful amber/orange theme with dark mode
- 🔒 Privacy-focused design

---

Made with 💛 by AskitEndo
