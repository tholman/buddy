(function buddy() {

  var pageData = {};
  
  // Say something when you're turned on for the first time
  function init() {
    speak("Hi ho, hi ho, its off to work I go!")
    bindOtherFunctions();
    listenToMessages();
  }

  // Listen for commands bubbling up!
  function listenToMessages() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

      if( request.type ) {

        // A page is loaded!
        if(request.type === "pageLoad") {
          initPage(request.url);
        }

        // Something said speak!
        if(request.type === "speak") {
          speak(request.words);
        }
      }
    });
  }

  // Do things that you can only do in the outer shell here
  function bindOtherFunctions() {

    // When a tab is open?
    chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {         
       
      chrome.tabs.query({}, function(tabs) {

        // If there are more than 10 tabs!
        if( tabs.length > 10 ) {
          // Do something erratic!
        }
      })
    })
  }

  init();
})();
