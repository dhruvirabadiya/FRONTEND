/* jQuery Traversing */

/*

parent()
parents()
parentsUntil()

*/

$('.btn').click(function(){
    $('span').parent().css('background-color','red')
})