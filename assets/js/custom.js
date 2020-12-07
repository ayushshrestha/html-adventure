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
        dots: false,
        infinite: false,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        fade: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1.5
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    

    $('.slick-testimonials').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        fade: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    

    $('.custom-slick_next').click(function(){
        $('.slick-customWidth').slick("slickNext");
        $('.slick-testimonials').slick("slickNext");
    });
    $('.custom-slick_prev').click(function(){
        $('.slick-customWidth').slick("slickPrev");
        $('.slick-testimonials').slick("slickPrev");
    });

});


