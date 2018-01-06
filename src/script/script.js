$(document).ready(function(){

    // HEADER //

    $(".header__menu-btn").click(function(e){
        $(this).toggleClass("header__menu-btn--close");
        $(".header__nav").toggleClass("header__nav--opened");
    });

    // -- slider
        let headerSliderDelay = 7000;
        let headerSliderInterval;
        let headerSliderCurrent = 0;
        let headerSliderSlides = $(".section--header .slides__item").toArray();

        $(".header__slider").slick({
            infinite: true,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            dots: false,
            prevArrow: false,
            nextArrow: false,
            zIndex: 0
        });

        headerSliderSwitch(0);

        function headerSliderSwitch(slide = null){
            clearInterval(headerSliderInterval);
            headerSliderInterval = setInterval(headerSliderSwitch, headerSliderDelay);

            headerSliderSlides.forEach(function(currentValue){
                $(currentValue).find(".process .process__filled").stop().css({width: 0});
            });

            if(slide != null){
                $(".header__slider").slick("slickGoTo", slide);
                headerSliderCurrent = slide;
            } else{
                $(".header__slider").slick("slickNext");
                headerSliderCurrent = $(".header__slider").slick("slickCurrentSlide");
            }
            
            $(headerSliderSlides[headerSliderCurrent]).find(".process .process__filled").animate({width: "100%"}, headerSliderDelay);
        }

        $(".section--header .slides__item").click(function(e){
            headerSliderSwitch(headerSliderSlides.indexOf(e.currentTarget));
        });
    // -- slider

    // END HEADER //

});