
let userInput = prompt("Enter the height: ");
console.log(printPyramid(userInput));


function printPyramid(height) {
  console.log("Uh oh... the pyramid is under construction.");
  console.log("Check back soon, our developers are hard at work as we speak!");
  let str = "";
  let element = document.getElementById("pyramid")
  let para
  let node 
  
  for (let i = 0; i < height; i++) {
      str=""
    for (let j = 0; j< height-i; j++) {
      str += "."
    }
      
    for(let k = 0; k<=i+1; k++){
      str += "#";
    }
    node = document.createTextNode(str)
    para = document.createElement("p")
    para.append(node)
    element.append(para)
  }
  return str;
}

   
    


// TODO 1
        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">