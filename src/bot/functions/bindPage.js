/**
 * Binds to the pages that Buddy can take actions on.
 */

var pagePath = "./bot/functions/pages/"

var initters = {
  "www.reddit.com": {
    script: "reddit.js"
  },
  "twitter.com": {
    script: "twitter.js"
  }
}

function initPage(pageLocation) {

  if(initters[pageLocation]) {

    setSimilarTabs(pageLocation);

    chrome.tabs.executeScript(null, {file: pagePath + "pageActions.js"});
    chrome.tabs.executeScript(null, {file: pagePath + initters[pageLocation].script});

    // Inject Script
    setTimeout(function()  {
      
      // Inject Settings
      chrome.tabs.executeScript({ code: "var PAGE = new page();"});
      chrome.tabs.executeScript({ code: "PAGE.init(" + getSettings(pageLocation) + ");"});

      // Set to be opened
      initters[pageLocation].opened = true
    }, 10);
  }
}

function getSettings(id) {
  return JSON.stringify(initters[id]);
}

/**
 * How many tabs with the same url are open?
 */
function setSimilarTabs(id) {
  chrome.tabs.query({}, function(tabs) {
  
    var similarTabsOpened = 0;
    for( var i = 0; i < tabs.length; i++ ) {
      if( tabs[i].url.indexOf(id) !== -1 ) {
        similarTabsOpened++;
      }
    }

    initters[id].similar = similarTabsOpened;
  });
}