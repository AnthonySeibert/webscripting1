function printPyramid(numHashtags, height, sym) {
  let result = ''
  let brick = sym;
  let space = "."
  for (let spaces = height - numHashtags; spaces >= 0; spaces--) {
    result += space
  }
  for (let count = 0; count <= numHashtags; count++) {
    result += brick
  }
  return result
  console.log(result)

}
function determineValueThenDrawPyramid(){
  document.getElementById("pyramid").innerHTML = ""
  var height = document.getElementById("height").value;
  height = parseInt(height);
  var sym = document.getElementById("choice").value;
  for (let i = 1; i <= height; i++) {
    console.log(printPyramid(i, height, sym));
    let result = printPyramid(i, height, sym);
    let rowStr = result;
    para = document.createElement("p");
    node = document.createTextNode(rowStr);
   para.appendChild(node);
    element = document.getElementById("pyramid");
    element.appendChild(para); 
  }
}
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}

