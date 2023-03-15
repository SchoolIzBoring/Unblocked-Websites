localStorage.setItem('previousPage', window.location.href);
window.location.href = 'settings.html';
var previousPage = localStorage.getItem('previousPage');
if (previousPage) {
    window.location.href = previousPage;
} else {
    // If the previous page is not found, redirect to the homepage or a default page
    window.location.href = 'index.html';
}
