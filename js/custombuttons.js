function openColorPicker() {
    console.log("Color picker opened.");
    
    // create a new form element with the color picker
    var colorPickerForm = document.createElement("form");
    colorPickerForm.innerHTML = `
      <label>Link Color:</label>
      <input type="color" id="linkColor" value="#0000ff"><br>
      <label>Button Color:</label>
      <input type="color" id="buttonColor" value="#008000"><br>
      <label>Background Color:</label>
      <input type="color" id="backgroundColor" value="#ffffff"><br>
      <label>Text Color:</label>
      <input type="color" id="textColor" value="#000000"><br>
      <input type="button" value="Save" id="saveButton">
      <input type="button" value="Revert to Default" id="defaultButton"> 
    `;
    
    // add the styles to the color picker form
    colorPickerForm.style = `
    background: #292929;
    border-radius: 5px;
    filter: drop-shadow(rgba(0, 0, 0, 0.16) 0px 4px 4px);
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-shadow: rgb(0 0 0 / 16%) 0px 4px 4px;
    position: fixed !important;
    background-color #00FF00;
}

button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
    background-color: #9d9d9d;
    border: none;
    border-radius: 50px;
}
    
    title.style {
      background-color: #202124;
      color: white;
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
      margin: 0;
      
      colorPickerForm.querySelector("#saveButton").addEventListener("click", function(event) {
        // ...
      });
      
      colorPickerForm.querySelector("#defaultButton").addEventListener("click", function(event) {
        // ...
    }
    `;
  
  
  // add the color picker form to the document body
  document.body.appendChild(colorPickerForm);

  // add event listener to the Save button
  colorPickerForm.querySelector("#saveButton").addEventListener("click", function(event) {
    event.preventDefault();

    // get the color values from the color picker form
    var linkColor = colorPickerForm.querySelector("#linkColor").value;
    var buttonColor = colorPickerForm.querySelector("#buttonColor").value;
    var backgroundColor = colorPickerForm.querySelector("#backgroundColor").value;
    var textColor = colorPickerForm.querySelector("#textColor").value;

    // update the styles of the page
    var style = `
      a { color: ${linkColor}; }
      .btn { background-color: ${buttonColor}; }
      body { background-color: ${backgroundColor}; color: ${textColor}; }
    `;
    var styleElement = document.createElement("style");
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);

    // apply the background color and text color changes to the body element
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;

    // remove the color picker form from the document body
    document.body.removeChild(colorPickerForm);
  });

  // add event listener to the Revert button
  colorPickerForm.querySelector("#defaultButton").addEventListener("click", function(event) {
    event.preventDefault();

    // remove the style element to revert back to default styles
    var styleElement = document.querySelector("style");
    document.head.removeChild(styleElement);

    // apply default background color and text color to the body element
    document.body.style.backgroundColor = "#1C1C1C";
    document.body.style.color = "#ffffff";

    // remove the color picker form from the document body
    document.body.removeChild(colorPickerForm);
  });
}
