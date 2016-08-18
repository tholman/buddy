function page() {

  var stats;

  this.init = function( settings ) {

    stats = settings;

    // First time visiting this site?
    if( !stats.opened )  {
      
      speak("REDDIT ISN'T WORK");

    } else {

      // 2 reddit tabs open?
      if( stats.similar === 2 ) {
        speak("Twice the reddit, twice the fun!");

      // 3 reddit tabs open
      } else if (stats.similar === 3) {
        speak("Seriously, get back to work");

      // Back on reddit, after being on it once.
      } else {
        speak("Back at it again, I see!");
      }
    }
  }
}