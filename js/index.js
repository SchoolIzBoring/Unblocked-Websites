function toggleAllWebsitesContent() {
    var content = document.querySelector('.websites-container .content');
    var button = document.querySelector('.websites-collapse-button');
    content.classList.toggle('expanded');
    button.classList.toggle('expanded');
    }
    
function toggleProxyContent() {
    var content = document.querySelector('.proxy-container .content');
    var button = document.querySelector('#proxy-collapse-button');
    content.classList.toggle('expanded');
    button.classList.toggle('expanded');
    }
   
function toggleSectionContent() {
   var content = document.querySelector('.section-container .section-content');
   var button = document.querySelector('.section-container .section-collapse-button');
   content.classList.toggle('expanded');
   button.classList.toggle('expanded');
}

