function page() {

  var stats;
  var tweetBox;
  var tweetReadbackTimeout;
  var tweetReadbackTimeoutLength = 1000; // ms

  this.init = function( settings ) {
    stats = settings;
    bindPage();
  }

  function bindPage() {
    tweetBox = document.querySelector('.tweet-box');
    tweetBox.addEventListener('keyup', debounceReadBackTweet);
  }

  function debounceReadBackTweet() {
    clearTimeout(tweetReadbackTimeout);
    tweetReadbackTimeout = setTimeout(function() {
      readBackTweet();
    }, tweetReadbackTimeoutLength);
  }

  function readBackTweet() {
    var text = document.querySelector('.tweet-box > div').textContent;
    speak("Let me read that back to you: " + text + ".");
  }
}
