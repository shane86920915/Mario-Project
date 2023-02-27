
let button = document.querySelector('.btn');

button.addEventListener("click", () => {

let x = document.getElementById("height").value;

return printPyramid(x);
});

function printPyramid(height) {
  let parent = document.getElementById("pyramid");
  parent.replaceChildren();
  let str;
  let elementPyramid = document.getElementById("pyramid");
  let para;
  let node ;

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
    elementPyramid.append(para)
  }
  return str;
}
