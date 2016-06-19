$(document).ready(function(){
var x = 500;

  setInterval(function(){
    $('.row').fadeOut();
  }, x);

  setInterval(function() {
    $('.row').fadeIn();
  }, x);
});
