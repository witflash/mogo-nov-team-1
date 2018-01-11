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
            zIndex: 0,
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




    // SECTION 5 //

    var section5AccordeonDelay = 500;

    $(".section--5 .accordeon__photos").slick({ // slider initialization
        infinite: true,
        speed: section5AccordeonDelay,
        fade: true,
        cssEase: 'linear',
        dots: false,
        prevArrow: false,
        nextArrow: false,
        zIndex: 0,
        draggable: false,
        swipe: false
    });

    $(".section--5 .accordeon__element .element__header").click(function(e){
        // close all tabs
        $(".section--5 .accordeon__element").each(function(){
            var $this = $(this);
            $this.find(".element__content").slideUp(section5AccordeonDelay, function(){
                $this.removeClass("accordeon__element--opened");
            });
        });

        var $element = $(this).parent(); // get wanted element for current tab

        if($element.hasClass("accordeon__element--opened")) return; // if tab opened exit from function

        var index = $(".section--5 .accordeon__element").index($element); // get index of tab (need for opened slide in slider)

        $element.find(".element__content").slideDown(section5AccordeonDelay, function(){ // get content element in tab and open it
            $element.addClass("accordeon__element--opened");
        });

        $(".section--5 .accordeon__photos").slick("slickGoTo", index); // change slide
    });

    // END SECTION 5 //

    // SECTION 6 //

    $(".section--6 .comments").slick({ // slider initialization
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<span class="icon-arrow-left slick-arrow-prev"></span>',
        nextArrow: '<span class="icon-arrow-right slick-arrow-next"></span>',
        zIndex: 0,
    });

    // END SECTION 6 //
    // SECTION 10 //
    $(".section--10 .comments").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<span class="icon-arrow-left slick-arrow-prev"></span>',
        nextArrow: '<span class="icon-arrow-right slick-arrow-next"></span>',
        zIndex: 0,
    });

    // END SECTION 10 //
});