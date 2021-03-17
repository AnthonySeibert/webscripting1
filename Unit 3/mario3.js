function printPyramid(numHashtags, height) {
  let result = ''
  let brick = '#'
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
  for (let i = 1; i <= height; i++) {
    console.log(printPyramid(i, height));
    let result = printPyramid(i, height);
    let rowStr = result;
    para = document.createElement("p");
    node = document.createTextNode(rowStr);
   para.appendChild(node);
    element = document.getElementById("pyramid");
    element.appendChild(para); 
  }
}
