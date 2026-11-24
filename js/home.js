$(document).ready(function () {
    $(".hm-project-slider").owlCarousel({
        items: 1,
        margin: 30,
        loop: true,
        center: true,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i> PREV', 'NEXT <i class="fa-solid fa-arrow-right-long"></i>'],
        mouseDrag: true,
        touchDrag: true,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            320: {
                items: 1,
                mouseDrag: false,
                touchDrag: true,
                margin: 15,
            },
            480: {
                items: 1,
                mouseDrag: false,
                touchDrag: true,
                margin: 15,
            },
            768: {
                items: 1,
                mouseDrag: false,
                touchDrag: true,
            },
            992: {
                items: 1,
                mouseDrag: true,
                touchDrag: true,
            }
        }
    });
});




$(document).ready(function () {
    $(".hm-testimonial-slider").owlCarousel({
        items: 6,
        margin: 30,
        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        mouseDrag: true,
        touchDrag: true,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            320: {
                items: 1,
                mouseDrag: false,
                touchDrag: true,
                margin: 15,
            },
            480: {
                items: 1,
                mouseDrag: false,
                touchDrag: true,
                margin: 15,
            },
            992: {
                items: 5,
                mouseDrag: false,
                touchDrag: true,
            },
            1367: {
                items: 6,
                mouseDrag: true,
                touchDrag: true,
            }
        }
    });
});


$(document).ready(function () {
    $(".hm-testimonial-vedio").owlCarousel({
        items: 5,
        margin: 30,
        loop: false,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        mouseDrag: true,
        touchDrag: true,
        dots: false,
        autoplay: false,
        smartSpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            320: {
                items: 1,
                mouseDrag: false,
                touchDrag: true,
                margin: 15,
            },
            480: {
                items: 1,
                mouseDrag: false,
                touchDrag: true,
                margin: 15,
            },
            992: {
                items: 5,
                mouseDrag: false,
                touchDrag: true,
            },
            1367: {
                items: 4,
                mouseDrag: true,
                touchDrag: true,
            }
        }
    });
});


// =====

(function () {
    'use strict';
    var header = document.getElementById('header');
    if (!header) return;

    function updateHeader() {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        // ScrollSmoother keeps the scroll position in sync with the window.
        header.classList.toggle('header-scrolled', scrollY > 60);
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('load', updateHeader);
    updateHeader();
}());
