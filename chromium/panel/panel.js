/**
 * KeepQuick Side Panel Script
 * Created by AskitEndo
 * Handles Google Keep iframe loading and authentication
 */

const iframe = document.querySelector("iframe");
iframe.onload = () => iframe.previousElementSibling?.remove();

(async function () {
  const KEEP_SITE = "https://keep.google.com/";
  const LOGIN_SITE = "https://accounts.google.com/";
  try {
    (await fetch(KEEP_SITE + "#home", { method: "GET" })).url.startsWith(
      LOGIN_SITE
    );
  } catch (error) {
    await chrome.tabs.create({ url: LOGIN_SITE });
    close();
  }
})();
