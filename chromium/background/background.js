/**
 * KeepQuick - Lightning-Fast Access to Google Keep
 * Created by AskitEndo
 * GitHub: https://github.com/AskitEndo
 */

const setInstallation = async ({ reason }) => {
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

  // Note: Chrome doesn't support local uninstall pages, only external HTTPS URLs
  // If you want a goodbye page, host it externally and use:
  // chrome.runtime.setUninstallURL("https://your-website.com/goodbye");

  // Get user's preference for options page behavior
  const settings = await chrome.storage.sync.get({ optionsBehavior: "update" });
  const shouldOpen =
    reason === "install" ||
    (reason === "update" && settings.optionsBehavior === "update");

  if (shouldOpen) {
    chrome.runtime.openOptionsPage();
  }
};

// Installation and update setup
chrome.runtime.onInstalled.addListener(setInstallation);

// Handle Chrome startup if user wants options page on startup
chrome.runtime.onStartup.addListener(async () => {
  const settings = await chrome.storage.sync.get({ optionsBehavior: "never" });

  if (settings.optionsBehavior === "startup") {
    chrome.runtime.openOptionsPage();
  }
});
