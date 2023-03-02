function openWindow() {
const windowExists=jsFrame.containsWindowName(windowName);
//Create window
const modalFrame = jsFrame.create({
  title: 'modal window',
  left: 0, top: 0, width: 320, height: 220,
  html: 'something'
});
//Show as a modal window
modalFrame.showModal(_frame => {
//Callback when modal window is closed.
});}