$(document).ready(function(){
    // var headerInfo = $('.masthead-info').outerHeight();
    // alert(headerInfo);

    // $('.hero-agrimove').css('margin-top', headerInfo);
    // $('.hero-agrimove').css('height', headerInfo);

    new WOW().init();

    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 112
    });


    // $(".alert").alert('close');


});