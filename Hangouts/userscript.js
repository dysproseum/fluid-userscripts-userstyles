/**
 * Fluid userscript
 * hangouts.google.com
 */

// Set dock badge.
var title = document.title;
var count = 0;
setInterval(function() {
  if (title !== document.title) {
    window.fluid.dockBadge = '\u2022';
    count = 0;
  }
  else {
    count++;
    if (count > 5) {
      window.fluid.dockBadge = '';
      count = 0;
    }
  }
}, 1000);

// Close redirect windows.
if (window.location.pathname == "/url") {
  console.log("Closing redirect window...");
  setTimeout(function() {
    window.close();           
  }, 2500);
}
