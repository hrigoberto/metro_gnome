$(document).ready(function() {
var x = 500;
// $('#start').onclick = bleep();
//
//   function bleep(){
//     setInterval(function() {
//       $('.row').toggleClass('.well');
//     }, 500);
//   });
  setInterval(function(){
    $('.row').fadeOut();
  }, x);
    setInterval(function() {
    $('.row').fadeIn();
  }, x);
});
