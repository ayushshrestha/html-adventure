$(document).ready(function(){

    function adjustHeight(){
		var headerH = $('.masthead-info').outerHeight();
		$('#wrapper').css('padding-top', headerH);
	}
	adjustHeight();
	$(window).on("resize", function() {
		adjustHeight();
	});


    new WOW().init();

    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 112
    });

    $('.slick-default').slick({
        infinite: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    

    $('.slick-customWidth').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });

});


