/**
 * KeepQuick Options Page Script
 * Created by AskitEndo
 * GitHub: https://github.com/AskitEndo
 */

const eId = document.getElementById.bind(document);

// Set up internationalization for text elements
const setLang = (/** @type {string} */ key) => {
  const element = eId(key);
  if (element) {
    element.textContent = chrome.i18n.getMessage(key);
  }
};

// Apply translations
setLang("open_keep_in");
setLang("side_panel");
setLang("popup_window");
setLang("options_page_behavior");
setLang("open_on_startup");
setLang("open_on_update");
setLang("never_open");

// Handle "Open Keep in" setting
const openPanelConfig = eId("open_panel_config");
openPanelConfig.addEventListener("change", ({ target }) => {
  const openSidePanel = target.value === "sidePanel";
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: openSidePanel })
    .catch((error) => alert(error.message));
});

// Load and set current panel behavior
const openSidePanel = (await chrome.sidePanel.getPanelBehavior())
  .openPanelOnActionClick;
openSidePanel ||
  (document.querySelector('input[value="popup"]').checked = true);

// Handle "Options Page Behavior" setting
const optionsBehaviorConfig = eId("options_behavior_config");
const statusMessage = eId("statusMessage");

// Load saved options behavior setting
const savedSettings = await chrome.storage.sync.get({
  optionsBehavior: "never",
});
const savedBehavior = savedSettings.optionsBehavior;

// Set the radio button based on saved setting
const radioButton = document.querySelector(
  `input[name="options_behavior"][value="${savedBehavior}"]`
);
if (radioButton) {
  radioButton.checked = true;
}

// Save setting when changed
optionsBehaviorConfig.addEventListener("change", async ({ target }) => {
  const behavior = target.value;
  try {
    await chrome.storage.sync.set({ optionsBehavior: behavior });

    // Show success message
    statusMessage.textContent = "Settings saved successfully!";
    statusMessage.className = "status-message success";
    statusMessage.style.display = "block";

    // Hide message after 3 seconds
    setTimeout(() => {
      statusMessage.style.display = "none";
    }, 3000);
  } catch (error) {
    statusMessage.textContent = "Error saving settings: " + error.message;
    statusMessage.className = "status-message";
    statusMessage.style.display = "block";
  }
});
