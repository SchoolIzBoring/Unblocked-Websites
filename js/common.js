// Check if there is a saved preset in local storage
if (localStorage.getItem("preset")) {
  var preset = JSON.parse(localStorage.getItem("preset"));
  applyUrl(preset.icon, preset.title);
}

function applyUrl(url, title) {
  var preset = null;
  if (localStorage.getItem("preset")) {
      preset = JSON.parse(localStorage.getItem("preset"));
  }

  if (!preset || (preset && preset.icon !== url)) {
      // If no preset or different preset icon, set new favicon and save new preset
      document.title = title;
      var link = document.querySelector("link[rel~='icon']");
      if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.head.appendChild(link);
      }
      link.href = url;

      var newPreset = {
          icon: url,
          title: title
      };
      localStorage.setItem("preset", JSON.stringify(newPreset));
  } else {
      // If preset already applied and has same icon, use saved title and favicon
      document.title = preset.title;
      var link = document.querySelector("link[rel~='icon']");
      if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.head.appendChild(link);
      }
      link.href = preset.icon;
      document.getElementById("favicon-input").value = preset.icon;
      document.getElementById("title-input").value = preset.title;
  }
}


function resetTabSettings() {
  // remove selected class from all preset-option buttons
  const presetButtons = document.querySelectorAll('.preset-option');
  presetButtons.forEach(button => button.classList.remove('selected'));

  // reset favicon to default
  const favicon = document.querySelector('link[rel="shortcut icon"]');
  favicon.href = './images/favicon.ico';

  // reset title
  const titleInput = document.getElementById('title-input');
  titleInput.value = '';
  document.title = 'New Tab';
  localStorage.removeItem('title');

  // reset preset to none
  localStorage.removeItem('preset');

  // reload page to reset any other settings
  location.reload();
}


// Listen for changes in title input field
document.getElementById("title-input").addEventListener("change", function(event) {
  const title = this.value;
  document.title = title;

  // Update saved preset with new title
  if (localStorage.getItem("preset")) {
      const preset = JSON.parse(localStorage.getItem("preset"));
      preset.title = title;
      localStorage.setItem("preset", JSON.stringify(preset));
  }
});


function addFaviconLink() {
  var url = localStorage.getItem("favicon");
  if (url != null) {
      var link = document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = url;
      document.getElementsByTagName('head')[0].appendChild(link);
  }
}

// Call the function to add the favicon link element to the current page
addFaviconLink();