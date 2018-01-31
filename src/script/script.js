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

        $(".js-header-slider").slick({ // slider initialization
            infinite: true,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            dots: false,
            prevArrow: false,
            nextArrow: false,
            zIndex: 0,
            draggable: false
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
                $(".js-header-slider").slick("slickGoTo", slide);
                headerSliderCurrent = slide;
            } else{
                $(".js-header-slider").slick("slickNext");
                headerSliderCurrent = $(".js-header-slider").slick("slickCurrentSlide");
            }

            // animate process line for current slide
            $(headerSliderSlides[headerSliderCurrent]).find(".process .process__filled").animate({width: "100%"}, headerSliderDelay);
        }

        // click on slide control
        $(".section--header .slides__item").click(function(e){
            headerSliderSwitch(headerSliderSlides.indexOf(e.currentTarget));
        });
    // -- slider

    // slow scroll to Learn More
    $(".js-anchor").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });

    // END HEADER //




    // SECTION 5 //

    var section5AccordeonDelay = 500;

    $(".section--wedo .accordeon__photos").slick({ // slider initialization
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

    $(".section--wedo .accordeon__element .element__header").click(function(e){
        // close all tabs
        $(".section--wedo .accordeon__element").each(function(){
            var $this = $(this);
            $this.find(".element__content").slideUp(section5AccordeonDelay, function(){
                $this.removeClass("accordeon__element--opened");
            });
        });

        var $element = $(this).parent(); // get wanted element for current tab

        if($element.hasClass("accordeon__element--opened")) return; // if tab opened exit from function

        var index = $(".section--wedo .accordeon__element").index($element); // get index of tab (need for opened slide in slider)

        $element.find(".element__content").slideDown(section5AccordeonDelay, function(){ // get content element in tab and open it
            $element.addClass("accordeon__element--opened");
        });

        $(".section--wedo .accordeon__photos").slick("slickGoTo", index); // change slide
    });

    // END SECTION 5 //

    // SECTION 6 and 10//

    $(".js-slider-section").slick({ // slider initialization
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<span class="icon-arrow-left slick-arrow-prev"></span>',
        nextArrow: '<span class="icon-arrow-right slick-arrow-next"></span>',
        zIndex: 0,
    });

    // END SECTION 6 and 10 //

    // SECTION OPENMAP //
    $('.js-click-map').on('click', function () {
        $('.js-map').addClass('opened');
        $('.js-openmap-text').fadeOut(500);
        $('.js-click-map').hide();
        $('.js-close-map').show();
    });

    $('.js-close-map').on('click', function() {
        $('.js-map').removeClass('opened');
        $('.js-openmap-text').fadeIn(500);
        $('.js-close-map').hide();     
        $('.js-click-map').show();                   
    });
    // END SECTION OPENMAP //
    
    // START ODOMETER COUNT //
    $.each($('.stat__count'), function(index, value) { // reset to zero
        $(value).text('0')
    });

    $('.section--second').on('mouseover', function () {
        var dataStat = {
            odo1: 42,
            odo2: 123,
            odo3: 15,
            odo4: 99,
            odo5: 24
        };
        $.each(dataStat, function(key, value) {
            $('#'+key).text(value);
        })
    });
    // END ODOMETER COUNT //

});


function loadMap() {
  var position = new google.maps.LatLng(50.4380912,30.5068577);
  var mapOptions = {
    center: position,
    zoom: 12,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: 'we are here!'
  });
}
