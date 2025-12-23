/**
 * KeepQuick - Lightning-Fast Access to Google Keep (Firefox/Zen Browser)
 * Created by AskitEndo
 * GitHub: https://github.com/AskitEndo
 */

// Use browser API for Firefox compatibility (falls back to chrome if not available)
const browserAPI = typeof browser !== "undefined" ? browser : chrome;

const setInstallation = async ({ reason }) => {
  // Firefox doesn't have sidePanel API, it uses sidebar_action
  // No setup needed as sidebar is defined in manifest

  // Note: Firefox supports setUninstallURL
  // browserAPI.runtime.setUninstallURL("https://your-website.com/goodbye");

  // Get user's preference for options page behavior
  const settings = await browserAPI.storage.sync.get({
    optionsBehavior: "update",
  });
  const shouldOpen =
    reason === "install" ||
    (reason === "update" && settings.optionsBehavior === "update");

  if (shouldOpen) {
    browserAPI.runtime.openOptionsPage();
  }
};

// Installation and update setup
browserAPI.runtime.onInstalled.addListener(setInstallation);

// Handle browser startup if user wants options page on startup
browserAPI.runtime.onStartup.addListener(async () => {
  const settings = await browserAPI.storage.sync.get({
    optionsBehavior: "never",
  });

  if (settings.optionsBehavior === "startup") {
    browserAPI.runtime.openOptionsPage();
  }
});

// Handle sidebar toggle command
browserAPI.commands.onCommand.addListener((command) => {
  if (command === "open-sidebar") {
    // Firefox sidebar API
    if (browserAPI.sidebarAction && browserAPI.sidebarAction.toggle) {
      browserAPI.sidebarAction.toggle();
    }
  }
});
