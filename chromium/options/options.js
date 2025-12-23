/**
 * KeepQuick Options Page Script
 * Created by AskitEndo
 * GitHub: https://github.com/AskitEndo
 */

const eId = document.getElementById.bind(document);

// Set up text content for elements (no localization)
const setText = (/** @type {string} */ key, /** @type {string} */ text) => {
  const element = eId(key);
  if (element) {
    element.textContent = text;
  }
};

// Apply text labels
setText("open_keep_in", "Choose how to open Google Keep:");
setText("side_panel", "Side Panel (Recommended)");
setText("popup_window", "Popup Window");
setText("options_page_behavior", "When should this options page open?");
setText("open_on_startup", "Open when Chrome starts");
setText("open_on_update", "Open when extension updates");
setText("never_open", "Never open automatically");

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
