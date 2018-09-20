import './sass/styles.scss';

function splitString(userText) {
  return userText.split(/(\.)/);
}

 var buttons = document.querySelectorAll("button");

 buttons.forEach(function(item) {
   item.onclick = function(e) {
    while (imageHolder.firstChild) {
      imageHolder.removeChild(imageHolder.firstChild);
    }
    document.getElementById('overlay').style.display = 'flex';
    var imageText = this.innerHTML;
    console.log(this.innerHTML);
    document.getElementById('imageHolder').innerHTML = this.innerHTML;
//THIS SECTION DOES NOT WORK BECAUSE WEBPACK WON'T LOAD 'UNAVAILABLE' IMAGES NOT IN HTML: THIS SOLUTION WORKS WITHOUT WEBPACK.
    // var wordArray = splitString(imageText);
    // wordArray.splice(1, 0, "-large");
    // console.log(wordArray);
    // var finalImage = wordArray.join("");
    // console.log(finalImage);
    // document.getElementById('imageHolder').innerHTML = finalImage;
   }
 });

document.getElementById("closeoverlay").onclick = function() {
  document.getElementById('overlay').style.display = 'none';
}
