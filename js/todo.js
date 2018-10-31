// Check Pff Specific Todo By Clicking
$('ul').on('click','li',function(){
        $(this).toggleClass('completed');
});

// Click on X to delete Todo

$('ul').on('click', 'span',function(event){
    // $(this).parent().remove();
    $(this).parent().fadeOut(500, function(){
        $(this).remove()();
    });
    event.stopPropagation();
    console.log('You Know What You Clicked!!');
});

$('#listInput').keypress(function(event){
    if(event.which === 13){
        // console.log('You Hit Entered!!');
       // grabing new todo text from input
       var todoText =  $(this).val();
        $(this).val("");  // clears the input
       // create a new li and add to ul
       $('ul').append(`<li><span>X</span> ${todoText}</li>`); // selctets the UL and adds the li

    }
});


$('.fa-plus').click(function(){
    $('input[type=text]').fadeToggles();
});
 

// $('li').click(function(){
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         // turn it black
//         $(this).css({
//             color:'black',
//             textDecoration:'none'
//         })
//     } else {     
//         $(this).css({
//             color:'gray',
//             textDecoration:'line-through'
//         });
//     } 