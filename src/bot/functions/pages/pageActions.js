/**
 * Page Actions,
 * -- Match with /actions
 */

function speak( words ) {
  chrome.runtime.sendMessage({type: "speak", words: words}, function() {});
}