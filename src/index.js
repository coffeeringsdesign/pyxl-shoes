import './sass/styles.scss';

// $(".shoeThumbnail").click(function() {
//    $(".overlay").show();
//    $(".video").show();
//  });

 var buttons = document.querySelectorAll("button");

 buttons.forEach(function(item) {
   item.onclick = function(e) {
    while (imageHolder.firstChild) {
      imageHolder.removeChild(imageHolder.firstChild);
    }
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('imageHolder').innerHTML = this.innerHTML;
   }
 });

 // buttons.forEach(function(item) {
 //   item.onclick = function(e) {
 //     $("#imageHolder").empty();
 //     $(".overlay").show();
 //     document.getElementById('imageHolder').innerHTML = this.innerHTML;
 //   }
 // });

 // $("#cheat-sheet-button").click(function() {
 //   $(".overlay").show();
 //   $(".cheat-sheet").show();
 // })
 //
 // $(".close-overlay").click(function() {
 //   $(".overlay").hide();
 //   $(".video").hide();
 //   $(".cheat-sheet").hide();
 // })
