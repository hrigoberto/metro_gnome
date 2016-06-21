$(document).ready(function() {
  var $start = $('#start');
  var x = 500;
  var $bleep = $('#bleep');
  var $stop = $('#stop');

  $start.on('click', startCountdown);

  function startCountdown() {
    setInterval(function(){
      $bleep.fadeToggle(x);
    }, x);
  }





    // setInterval(function(){
    //   $('.row').fadeOut();
    // }, x);
    //   setInterval(function() {
    //   $('.row').fadeIn();
    // }, x);
});

//
//   function bleep(){
//     setInterval(function() {
//       $('.row').toggleClass('.well');
//     }, 500);
//   });
