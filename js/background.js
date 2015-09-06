var platformInfo = {};

chrome.app.runtime.onLaunched.addListener(function() {

  // Load platformInfo before continuing.
  chrome.runtime.getPlatformInfo(function(info) {
    platformInfo = info;

    chrome.app.window.create('main.html', {
      id: 'main',
      frame: 'none',
      width: 800,
      height: 400,
      minWidth: 800,
      minHeight: 400,
	  maxWidth: 800,
	  maxHeight: 400
      // alphaEnabled: true,
    });
  });
});
