/* jQuery Traversing */

/*

parent()
parents()
parentsUntil()

*/

// $('.btn').click(function(){
//     $('span').parent().css('background-color','red')
// })

// $('.btn').click(function(){
//     $('span').parents().css('background-color','yellow')
// })

// $('.btn').click(function(){
//     $('span').parentsUntil('.parentDiv').css('background-color','red')
// })

$('.btn').click(function(){
    $('.parentUl').children().css('background-color','red')
})

$('.btn').click(function(){
    $('.parentUl').find('.span').css('background-color' , 'red')
})

$('.btn').click(function(){
    
})