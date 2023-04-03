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

const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');
const reviews = document.querySelector('.reviews');
let currentScroll = 0;

arrowLeft.addEventListener('click', () => {
    currentScroll = Math.max(currentScroll - reviews.offsetWidth / 3, 0);
    reviews.scrollTo({
        left: currentScroll,
        behavior: 'smooth'
    });
});

arrowRight.addEventListener('click', () => {
    currentScroll = Math.min(currentScroll + reviews.offsetWidth / 3, reviews.scrollWidth - reviews.offsetWidth);
    reviews.scrollTo({
        left: currentScroll,
        behavior: 'smooth'
    });
});


const slider = new KeenSlider('.keen-slider', {
    loop: true,
    // other slider options here
});

$(document).ready(function() {
  var message = "I have decided to stop producing and updating my website to work on a new gamesite. If you still want to keep it up and running, please fill out this form: <a href='https://docs.google.com/forms/d/e/.../viewform'>Link</a>";
  $("<div>").html(message).dialog({
    title: "Important Notice",
    modal: true,
    resizable: false,
    buttons: {
      "OK": function() {
        $(this).dialog("close");
      }
    }
  });
});

