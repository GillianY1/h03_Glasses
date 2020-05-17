$(document).ready(function(){

    /*---header ham menu-----*/
    $('.ham-icon').click(function(e){
        e.preventDefault();
        $('.header-menu').toggleClass('active');
    });
});