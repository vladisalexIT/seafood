$(function () {
    $('.header-slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev slider-arrow"><img src="./icons/slider-arrow-top.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slider-arrow"><img src="./icons/slider-arrow-down.svg" alt=""></button>',
    })
})