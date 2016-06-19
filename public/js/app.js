$(document).ready(function(){
var x = 500;
var out = setInterval(outfade())
var outfade = function() {
  $('.row').fadeOut();
}, x);
var inn = setInterval(infade())
var infade = function() {
  $('.row').fadeIn();
}, x);

  $('btn').bind('click' function() {
    out();
    inn();
  });
});
