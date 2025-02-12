/* syntax 1 */
// $(function(){

// })

// /* syntax 2 */
// $(document).ready(function(){

// })

// $(document).ready(function(){
//     $('#hide').click(function(){
//         $('#heading')
//     })
// })

// $('#hide').click(function(){
//     $('#heading').hide()
// })

$(function () {
  $("#hide").click(function () {
    $("#heading").hide();
  });
});

$(function () {
  $("#show").click(function () {
    $("#heading").show();
  });
});

$(function () {
  $("#toggle").click(function () {
    $("#heading").toggle();
  });
});

/* Fade In jQuery */

$("#fadeIn").click(function () {
  $(".box-1").fadeIn('slow');
  $('.box-2').fadeIn('fast');
  $('.box-3').fadeIn(2000);
  $('.box-4').fadeIn(4000);
  $('.box-5').fadeIn(6000);
  $('.box-6').fadeIn(8000);
  $('.box-7').fadeIn(10000);
  $('.box-8').fadeIn(12000);
});

$('#fadeOut').click(function(){
  $('.box-1').fadeOut('slow');
  $('.box-2').fadeOut('fast');
  $('.box-3').fadeOut(2000);
  $('.box-4').fadeOut(4000);
  $('.box-5').fadeOut(6000);
  $('.box-6').fadeOut(8000);
  $('.box-7').fadeOut(10000);
  $('.box-8').fadeOut(12000)
})

$('#fadeToggle').click(function(){
  $('.box-1').fadeToggle('slow');
  $('.box-2').fadeToggle('fast');
  $('.box-3').fadeToggle(2000);
  $('.box-4').fadeToggle(4000);
  $('.box-5').fadeToggle(6000);
  $('.box-6').fadeToggle(8000);
  $('.box-7').fadeToggle(10000);
  $('.box-8').fadeToggle(12000);
})

// slide in jQuery
