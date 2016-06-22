$(document).ready(function() {
  var $start = $('#start');
  var x = 500;
  var $bleep = $('#bleep');
  var $stop = $('#stop');
  var toggle;

  $start.on('click', startMetronome);
  $stop.on('click', stopMetronome);

  function startMetronome() {
    toggle =  setInterval(function(){
      $bleep.fadeToggle(x);
    }, x);
  }

  function stopMetronome(){
    clearInterval(toggle);
    $bleep.fadeIn(x);
  };





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
