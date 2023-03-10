function setPageMeta(faviconUrl, title) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'shortcut icon');
      document.head.appendChild(favicon);
    }
    favicon.setAttribute('href', faviconUrl);
    document.title = title;
  }
  

