$(document).ready(function() {
  var $start = $('#start');
  var x = (60000/$input)/2;
  var $bleep = $('#bleep');
  var $stop = $('#stop');
  var toggle;
  var $click = document.getElementById('click');
  var $input = +$('BPMinput').val();

  $start.on('click', startMetronome);
  $stop.on('click', stopMetronome);

  function startMetronome() {
    toggle =  setInterval(function(){
      $bleep.fadeToggle(x);
      $click.play();
    }, x);
  }

  function stopMetronome(){
    clearInterval(toggle);
    $bleep.show(x);
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
