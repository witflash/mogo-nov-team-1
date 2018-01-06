$(document).ready(function(){

    // HEADER //

    // mobile menu controll
    $(".header__menu-btn").click(function(e){
        $(this).toggleClass("header__menu-btn--close");
        $(".header__nav").toggleClass("header__nav--opened");
    });

    // -- slider
        let headerSliderDelay = 7000; // time to next slide
        let headerSliderInterval; // for correct switching slides
        let headerSliderCurrent = 0; // for index of current slide 
        let headerSliderSlides = $(".section--header .slides__item").toArray(); // make array from jq elements list

        $(".header__slider").slick({ // slider initialization
            infinite: true,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            dots: false,
            prevArrow: false,
            nextArrow: false,
            zIndex: 0
        });

        headerSliderSwitch(0); // for launch slide switching process

        function headerSliderSwitch(slide = null){ // function need for slide switching
            // reset interval
            clearInterval(headerSliderInterval); 
            headerSliderInterval = setInterval(headerSliderSwitch, headerSliderDelay);

            // reset process line for each slide
            headerSliderSlides.forEach(function(currentValue){
                $(currentValue).find(".process .process__filled").stop().css({width: 0});
            });

            // go to wanted slide or to next one
            if(slide != null){
                $(".header__slider").slick("slickGoTo", slide);
                headerSliderCurrent = slide;
            } else{
                $(".header__slider").slick("slickNext");
                headerSliderCurrent = $(".header__slider").slick("slickCurrentSlide");
            }

            // animate process line for current slide
            $(headerSliderSlides[headerSliderCurrent]).find(".process .process__filled").animate({width: "100%"}, headerSliderDelay);
        }

        // click on slide controlll
        $(".section--header .slides__item").click(function(e){
            headerSliderSwitch(headerSliderSlides.indexOf(e.currentTarget));
        });
    // -- slider

    // END HEADER //

});