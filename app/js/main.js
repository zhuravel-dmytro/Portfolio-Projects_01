$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    dotsSpeed: 1000,
    loop: true,
    nav: true,
    navText: ['', ''],
    dots: true,
    mouseDrag: true, 
    margin: 30,
    stagePadding: 0,
    autoWidth: false,
    responsiveClass: true,
    responsive:{
        0:{
            items: 1,
            dots: true,
            mouseDrag: true,
            autoplay: false
        },
        479:{
            items: 1,
            dots: true,
            mouseDrag: true,
            autoplay: false
        },
        767:{
            items: 1,
            mouseDrag: true,
            dots: true,
            autoplay: true
        },
        991:{
            items: 1,
            mouseDrag: true
        },
        1099:{
            items: 1,
            mouseDrag: true
        }
    }
})
});