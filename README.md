# 💡 KeepQuick - Multi-Browser Support

Quick access to Google Keep for all major browsers!

## 📁 Project Structure

```
KeepQuick/
├── chromium/          # Chrome, Edge, Brave, Opera, Vivaldi
│   ├── manifest.json
│   ├── background/
│   ├── options/
│   ├── panel/
│   ├── popup/
│   └── BUILD_INFO.md
│
├── gecko/             # Firefox, Zen Browser, LibreWolf
│   ├── manifest.json
│   ├── background/
│   ├── options/
│   ├── panel/
│   ├── popup/
│   └── BUILD_INFO.md
│
└── README.md          # This file
```

## 🚀 Choose Your Version

### Chromium Version

**For:** Chrome, Edge, Brave, Opera, Vivaldi

Features:

- ✅ Chrome Side Panel API
- ✅ Service Worker architecture
- ✅ Best performance on Chromium
- 📁 Use the `chromium/` folder

[View Chromium Build Info](chromium/BUILD_INFO.md)

### Gecko Version

**For:** Firefox, Zen Browser, LibreWolf, Waterfox

Features:

- ✅ Firefox Sidebar Action
- ✅ Browser API with Chrome fallback
- ✅ Optimized for Firefox & Zen Browser
- ✅ Additional sidebar toggle shortcut
- 📁 Use the `gecko/` folder

[View Gecko Build Info](gecko/BUILD_INFO.md)

## ⚙️ Key Differences

| Feature                | Chromium       | Gecko (Firefox)                 |
| ---------------------- | -------------- | ------------------------------- |
| **Sidebar API**        | `sidePanel`    | `sidebar_action`                |
| **Background**         | Service Worker | Background Scripts              |
| **API Namespace**      | `chrome.*`     | `browser.*` with fallback       |
| **Keyboard Shortcuts** | `Ctrl+Shift+Q` | `Ctrl+Shift+Q` + `Ctrl+Shift+K` |
| **Min Version**        | Chrome 112+    | Firefox 109+                    |

## 📦 Installation

### Chromium Browsers

```powershell
# Navigate to chrome://extensions/
# Enable Developer Mode
# Load unpacked → Select 'chromium' folder
```

### Firefox Browsers

```powershell
# Navigate to about:debugging#/runtime/this-firefox
# Load Temporary Add-on → Select 'gecko/manifest.json'
```

## 🔨 Development

### Build Chromium Package

```powershell
cd chromium
Compress-Archive -Path * -DestinationPath ../KeepQuick-chromium.zip
```

### Build Firefox Package (XPI)

```powershell
cd gecko
Compress-Archive -Path * -DestinationPath ../KeepQuick-firefox.xpi
```

Or use web-ext:

```bash
cd gecko
web-ext build
```

## 🌟 Features (Both Versions)

- ⚡ **Quick Access**: Instant keyboard shortcuts
- 🖥️ **Flexible Display**: Sidebar or popup
- ⚙️ **Customizable**: Control auto-open behavior
- 🎨 **Beautiful UI**: Modern amber/orange theme
- 🚀 **Lightweight**: Minimal resource usage
- 🔒 **Privacy First**: No tracking, open source

## 📝 Version History

- **v1.0.0** - Initial release with multi-browser support

## 👨‍💻 Author

Created by **AskitEndo**  
GitHub: [https://github.com/AskitEndo](https://github.com/AskitEndo)

## 📄 License

Open Source - See individual build folders for details

---

**Choose your browser, choose your folder, start using KeepQuick! 🚀**
