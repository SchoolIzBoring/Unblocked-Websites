// create a function to show the popup
function showPopup() {
  var popup = document.createElement("div");
  popup.innerHTML = "<p>I have decided to stop producing and updating my website to work on a new gamesite. If you still want to keep it up and running, please fill out this <a href='https://docs.google.com/forms/d/e/1FAIpQLSd8SmxPKIHH3CK35o0P4o4tz8WjZXV-AgYRhe_DcXjvH8ZtFQ/viewform' target='_blank'>form</a>.</p>";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "white";
  popup.style.padding = "20px";
  popup.style.borderRadius = "5px";
  popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  popup.style.zIndex = "999";
  document.body.appendChild(popup);
}

// call the showPopup function when the page is loaded
window.onload = function() {
  showPopup();
};
