const divElement = document.createElement('div');
divElement.setAttribute('datafullscreen', 'false');
divElement.setAttribute('onmousedown', 'apptop(this)');
divElement.classList.add('window', 'windowdark', 'ui-draggable', 'ui-resizable');
divElement.style.inset = '54.5px auto auto 330px';
divElement.style.width = '400px';
divElement.style.height = '300px';
divElement.style.zIndex = '76';

const barElement = document.createElement('div');
barElement.classList.add('bar', 'bardark', 'ui-draggable-handle');

const appNameElement = document.createElement('div');
appNameElement.classList.add('appname');
appNameElement.innerText = 'Tab Cloak';

const appFullElement = document.createElement('div');
appFullElement.classList.add('appfull');
appFullElement.innerText = '⛶';
appFullElement.onclick = function() {
  appfull(this);
};

const appCloseElement = document.createElement('div');
appCloseElement.classList.add('appclose');
appCloseElement.innerText = 'X';
appCloseElement.onclick = function() {
  closeapp(this);
};

barElement.appendChild(appNameElement);
barElement.appendChild(appFullElement);
barElement.appendChild(appCloseElement);

const htmlElement = document.createElement('div');
htmlElement.classList.add('html', 'htmldark');

const tabTitleElement = document.createElement('div');
tabTitleElement.classList.add('tabtitle');
tabTitleElement.innerText = 'Tab Cloak';

const centerElement = document.createElement('center');

const inputElement = document.createElement('input');
inputElement.setAttribute('id', 'tab');
inputElement.setAttribute('placeholder', 'Enter title or icon');

const setTitleButtonElement = document.createElement('button');
setTitleButtonElement.classList.add('settitle');
setTitleButtonElement.innerText = 'Title';
setTitleButtonElement.onclick = function() {
  settitle();
};

const setIconButtonElement = document.createElement('button');
setIconButtonElement.classList.add('seticon');
setIconButtonElement.innerText = 'Icon';
setIconButtonElement.onclick = function() {
  seticon();
};

centerElement.appendChild(inputElement);
centerElement.appendChild(setTitleButtonElement);
centerElement.appendChild(setIconButtonElement);

htmlElement.appendChild(tabTitleElement);
htmlElement.appendChild(centerElement);

const resizableNElement = document.createElement('div');
resizableNElement.classList.add('ui-resizable-handle', 'ui-resizable-n');
resizableNElement.style.zIndex = '90';

const resizableEElement = document.createElement('div');
resizableEElement.classList.add('ui-resizable-handle', 'ui-resizable-e');
resizableEElement.style.zIndex = '90';

const resizableSElement = document.createElement('div');
resizableSElement.classList.add('ui-resizable-handle', 'ui-resizable-s');
resizableSElement.style.zIndex = '90';

const resizableWElement = document.createElement('div');
resizableWElement.classList.add('ui-resizable-handle', 'ui-resizable-w');
resizableWElement.style.zIndex = '90';

divElement.appendChild(barElement);
divElement.appendChild(htmlElement);
divElement.appendChild(resizableNElement);
divElement.appendChild(resizableEElement);
divElement.appendChild(resizableSElement);
divElement.appendChild(resizableWElement);

// You can now append the `divElement` to a parent element of your choice.
function createDivElement() {
    const divElement = document.createElement('div');
    divElement.setAttribute('datafullscreen', 'false');
    divElement.setAttribute('onmousedown', 'apptop(this)');
    divElement.classList.add('window', 'windowdark', 'ui-draggable', 'ui-resizable');
    divElement.style.inset = '54.5px auto auto 330px';
    divElement.style.width = '400px';
    divElement.style.height = '300px';
    divElement.style.zIndex = '76';
  
    // Add the rest of the code to create the element here
  
    // Append the `divElement` to the body
    document.body.appendChild(divElement);
  }
  