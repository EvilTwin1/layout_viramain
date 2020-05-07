$(document).ready(function() {
 
    $('.multiple-items').slick({});
          
});

$(document).ready(function(){
    $(".post-wrapp").slice(0, 3).show();
    $(".view-more").on("click", function(e){
      e.preventDefault();
      $(".post-wrapp:hidden").slice(0, 3).slideDown();
      if($(".post-wrapp:hidden").length == 0) {
        $(".view-more").hide();
      }
    });
    
  })


var openMenuBtn = document.querySelector('.menu-btn');
var closeMenuBtn = document.querySelector('.close');

function showMenu(){
    var menuPopup = document.querySelector('.nav').classList;
    menuPopup.add('show-menu'); 
}

function closeMenu(){
    var menuPopup = document.querySelector('.nav').classList;
    menuPopup.remove('show-menu'); 
}

openMenuBtn.addEventListener( "click" , showMenu);
closeMenuBtn.addEventListener( "click" , closeMenu);

var anchors = document.querySelectorAll('a[href*="#"]');

// anchors.forEach(function(item, i, anchors) {
//     console.log( i + ": " + item + " (массив:" + anchors + ")" );
// });

// var highlightedItems = document.querySelectorAll("p");

anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        anchorId = this.getAttribute('href');
        document.querySelector(anchorId).scrollIntoView({
            behavior: 'smooth', block: 'start'
        });
        console.log(anchor);
    });

});

// for (var anchor of anchors) {
//     if (anchor) {
//         anchor.addEventListener('click', function(e){
//             e.preventDefault();
//             var anchorId = this.getAttribute('href');
//             document.querySelector(anchorId).scrollIntoView({
//                 behavior: 'smooth', block: 'start'
//             })
//         });
//     }
// }