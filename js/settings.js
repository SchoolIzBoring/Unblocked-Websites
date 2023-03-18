function setTitle(title) {
    if (event.keyCode == 13) {
        document.title = title;
        localStorage.setItem("title", title);
    }
}


// Call the function to add the favicon link element to the current page
addFaviconLink();

function setTitle(title) {
    if (event.keyCode == 13) {
        document.title = title;
        localStorage.setItem("title", title);
    }
}

// Function to open about:blank tab
function setBlankTab() {
    window.open("about:blank", "_blank");
}

// Function to reset CSS
function resetCSS() {
    document.documentElement.style.removeProperty("--theme");
    document.documentElement.style.removeProperty("--text-primary");
    document.documentElement.style.removeProperty("--text-secondary");
    localStorage.removeItem("theme");
    localStorage.removeItem("textPrimary");
    localStorage.removeItem("textSecondary");
    localStorage.removeItem("favicon");
    document.location.reload();
}

// Load saved favicon from local storage
var savedFavicon = localStorage.getItem("favicon");
if (savedFavicon) {
    document.querySelector("link[rel*='icon']").href = savedFavicon;
}

// Add event listener to title input
var titleInput = document.getElementById("title");
titleInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        setTitle(event.target.value);
    }
});

// Function for About Blank:Tab
function setBlankTab() {
    var url = new URL(window.location.href);
    var win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = url.toString();
    win.document.body.appendChild(iframe);
    var script = win.document.createElement("script");
    script.src = "https://lioxryt.github.io/js/main.js";
    win.document.body.appendChild(script);
}

function togglePresetDropdown() {
    var dropdown = document.getElementById("preset-favicon-dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function applyPresetFavicon() {
    var presetButtons = document.querySelectorAll(".preset-option");

    function applyUrl(url, title) {
        var faviconInput = document.getElementById("favicon");
        var titleInput = document.getElementById("title");
        faviconInput.value = url;
        titleInput.value = title;

        changeFavicon();
        setTitle(title);

        var console_output = document.getElementById("console-output");
        console_output.style.color = "green";
        console_output.innerText = "Preset applied successfully!";
    }

    for (var i = 0; i < presetButtons.length; i++) {
        presetButtons[i].addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            var title = this.getAttribute("data-title");
            applyUrl(url, title);
        });
    }
}
faviconInput.value = url;
titleInput.value = title;

changeFavicon();
setTitle(title);

var console_output = document.getElementById("console-output");
console_output.style.color = "green";
console_output.innerText = "Preset applied successfully!";

function setTheme(theme) {
    if (theme === 'colorful') {
        setInterval(function() {
            document.body.style.transition = 'background-color 1s linear';
            document.body.style.backgroundColor = 'hsl(' + Math.floor(Math.random() * 361) + ',100%,50%)';
        }, 1000);
    }
}

function invertColors() {
    // invert background color
    const body = document.body;
    body.style.backgroundColor = '#ffff';

    // invert text color
    const textElements = document.querySelectorAll('h1, h2, h3, p, button');
    textElements.forEach(element => {
        const currentColor = getComputedStyle(element).color;
        const rgbValues = currentColor.substring(currentColor.indexOf('(') + 1, currentColor.lastIndexOf(')')).split(',');
        const invertedRgbValues = rgbValues.map(value => 255 - parseInt(value.trim()));
        const invertedColor = `rgb(${invertedRgbValues.join(', ')})`;
        element.style.color = invertedColor;
    });
}

function setTheme(theme) {
    const body = document.body;
    const logo = document.querySelector('.logo img');
    const settingsBox = document.querySelector('.settings-box');

    // check if the current theme is already set to 'light'
    const isLightTheme = body.style.backgroundColor === '#ffff';

    switch (theme) {
        case 'dark':
            body.style.backgroundColor = '#333';
            logo.src = './images/logo-light.png';
            settingsBox.classList.remove('light');
            settingsBox.classList.add('dark');
            break;
        case 'light':
            if (!isLightTheme) { // only invert colors if not already in light theme
                invertColors();
                settingsBox.classList.remove('dark');
                settingsBox.classList.add('light');
            }
            logo.src = './images/logo-dark.png';
            break;
        default:
            body.style.backgroundColor = 'white';
            logo.src = './images/logo-dark.png';
            settingsBox.classList.remove('dark', 'light');
            break;
    }
}




function resetThemes() {
    // Reset all theme settings
    localStorage.removeItem('theme');
    document.body.removeAttribute('data-theme');

    // Refresh the page
    window.location.reload();
}

function resetTabSettings() {
    // remove selected class from all preset-option buttons
    const presetButtons = document.querySelectorAll('.preset-option');
    presetButtons.forEach(button => button.classList.remove('selected'));

    // reset favicon to default
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    favicon.href = './images/favicon.ico';

    // reload page to reset any other settings
    location.reload();
}


function changeFavicon() {
    const faviconUrl = document.getElementById('favicon-input').value;
    const validImageExtensions = ['.ico', '.png', '.jpeg', '.jpg', '.gif'];
    const fileExtension = faviconUrl.substr(faviconUrl.lastIndexOf('.')).toLowerCase();

    if (validImageExtensions.includes(fileExtension)) {
        applyUrl(faviconUrl, 'Custom Favicon');
        localStorage.setItem('faviconUrl', faviconUrl);
    } else {
        alert('Invalid image format! Please enter a valid URL with an image extension of .ico, .png, .jpeg, .jpg or .gif.');
    }
}

window.addEventListener('load', () => {
    const savedFaviconUrl = localStorage.getItem('faviconUrl');
    if (savedFaviconUrl) {
        const validImageExtensions = ['.ico', '.png', '.jpeg', '.jpg', '.gif'];
        const fileExtension = savedFaviconUrl.substr(savedFaviconUrl.lastIndexOf('.')).toLowerCase();

        if (validImageExtensions.includes(fileExtension)) {
            document.getElementById('favicon-input').value = savedFaviconUrl;
            applyUrl(savedFaviconUrl, 'Custom Favicon');
        } else {
            localStorage.removeItem('faviconUrl');
        }
    }
});