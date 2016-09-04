/**
 * Client side buddy.
 */

(function clientBuddy() {

  function init() {
    sendPage();
  }

  function sendPage() {
    sendMessage({type: "pageLoad", url: window.location.host})
  }

  function sendMessage(message) {
    chrome.runtime.sendMessage(message, function() {});
  }

  // Self initting
  init();
})();