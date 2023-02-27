window.onload = function() {
    var clickCountElement = document.getElementById("clickCount");
    var clickCount = parseInt(clickCountElement.innerText);
    clickCount++;
    clickCountElement.innerText = clickCount;
  
    var button = document.getElementById("clickButton");
    button.addEventListener("click", function() {
      clickCount++;
      clickCountElement.innerText = clickCount;
    });
  }
  