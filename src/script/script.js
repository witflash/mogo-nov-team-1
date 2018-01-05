$(document).ready(function(){

    // HEADER //

    $(".header__slider").slick({
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        dots: false,
        prevArrow: false,
        nextArrow: false
    });

    $(".header__menu-btn").click(function(e){
        $(this).toggleClass("header__menu-btn--close");
        $(".header__nav").toggleClass("header__nav--opened");
    });

    // END HEADER //

});