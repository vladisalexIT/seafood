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
    

    $('.product__name').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        centerMode: true,
        prevArrow: '<button type="button" class="product-prev"><img src="./icons/product-arrow-up.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="./icons/product-arrow-down.svg" alt=""></button>',
        onInit: function (slick) {
            slick.$slides.eq(0).addClass('slick-current');
        }
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        vertical: true,
        arrows: false,
        
    });
})


