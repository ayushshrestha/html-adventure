$(document).ready(function(){

    function adjustHeight(){
		var headerH = $('header').outerHeight();
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
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    

});


