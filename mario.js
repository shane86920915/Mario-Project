

let userInput = prompt("Enter the height: ");
console.log(printPyramid(userInput));



// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
  console.log("Uh oh... the pyramid is under construction.");
  console.log("Check back soon, our developers are hard at work as we speak!");
  let str = "";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j< height-i; j++) {
      str += " "
    }
    for(let k = 0; k<=i+1; k++){
      str += "#";
    }
    str += "\n";
  }
  
  return str;
}
