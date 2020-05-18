$(document).ready(function(){

    /*---header ham menu-----*/
    $('.ham-icon').click(function(e){
        e.preventDefault();
        $('.header-menu').toggleClass('active');
    });

    /*----for FQA----*/
    $('.question-answer').hide();
    $('.card').eq(0).addClass('active');
    $('.question-answer').eq(0).show();

    /* click li */
    $('.card').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings().removeClass('active');
        $(this).children().next().slideToggle(); 
        $(this).siblings().children().next().slideUp();
    })


});