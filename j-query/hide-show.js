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

$(function(){
    $('#show').click(function(){
        $('#heading').show()
    })
})

$(function(){
    $('#toggle').click(function(){
        $('#heading').toggle()
    })
})

 /* Fade In jQuery */
 