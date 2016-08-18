/**
 * Buddy Speaks!
 */

var languageOptions = {
  'lang': 'en-GB',
  'rate': 0.5,
  'pitch': 2.0,
}

function speak(words) {
  chrome.tts.speak(words, languageOptions);
}