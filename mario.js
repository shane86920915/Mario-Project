

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");

// set a handler function for the form's submission event
formElem.onsubmit = function(event) {

    // QUIZ
    // what happens if we don't do this?

    // to make it faster by having js do all the validation before it 
    // is sent to the server
    event.preventDefault();

    // QUIZ
    // what happens if we don't do this?
    // the last error message will remain until the next error occurs
    clearError();

    // figure out the height the user typed
    heightStr = heightElem.value;

    // TODO 1
    // if they didn't type anything at all, give a different error message,
    // something like "Please provide a height"
    

    if (heightStr === ""){
      displayError("Please provide a height.");
      return;
    }
    // convert the string to an int
    height = parseInt(heightStr);

    if (heightStr < 1){
      displayError("Please provide a number between 1 and 100");
      return;
    }


    // if the height is not-a-number, yell at them and exit early
    // TODO 2
    // negative numbers and zero should also be rejected here
    if (isNaN(height)) {
        
        displayError("That's not a valid height.");
        return;
    }

    // if the height is absurdly tall, yell at them and exit early
    var tooTall = 100;
    if (height > tooTall) {
        displayError("Are you cray? I can't build a pyramid that tall.");
        return;
    }

    // draw pyramid with the specified height
    drawPyramid(height);
}


/**
 * displayError
 *
 * Displays an error message on the text input, and colors it red
 */
function displayError(message) {
    heightElem.className = "invalid-field";
    document.querySelector(".error-message").innerHTML = message;
}


/*
 * clearError
 *
 * Undisplays the error message and removes the red CSS style
 */
function clearError() {
    // TODO 3
    // implement this function.
    var errorElem = document.querySelector(".error-message");
    errorElem.innerHTML = "";
   heightElem.classList.remove("invalid-field");
}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}