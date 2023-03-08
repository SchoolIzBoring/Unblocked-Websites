

// Load the gtag.js library

// Initialize the gtag.js library

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  // Set the GA4 measurement ID
  gtag('config', 'G-KXRHPNW89S');


// Retrieve the real-time viewer count

  // Define a function to update the viewer count
  function updateViewerCount(viewerCount) {
    var viewerCountElement = document.getElementById("viewerCount");
    viewerCountElement.innerHTML = viewerCount;
  }

  // Set up a real-time view query
  gtag('event', 'page_view', {
    'send_to': 'GA_MEASUREMENT_ID',
    'event_callback': function() {
      var data = gtag('get', 'event', 'page_view');
      var viewerCount = data.length;
      updateViewerCount(viewerCount);
    }
  });


// Display the real-time viewer count
<p>Number of viewers: <span id="viewerCount">0</span></p>
