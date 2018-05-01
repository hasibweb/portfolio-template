(function ($) {
    "use strict";
    /* ==================== Table Of Content ====================
    1.	Script Initialization
    2.	preloaderSetup
    3.	Mobile Menu
    4.  Hero Slider
    5.  Services Filter
    6. Testimonials Slider
    ===========================================================*/
    /* ================================================
       Script Initialization
    ==================================================*/

    // Window Load Function
    $(window).on('load', function () {
        preloaderSetup();
        heroSlider();
        // animations();
    });

    // Document Ready Function
    $(document).ready(function () {
        animations();

    });

    // Window Resize Function
    $(window).on('resize', function () {

    });

    // Window Scroll Function
    $(window).on('scroll', function () {

    });

    // ========================== preloaderSetup ==========================
    function preloaderSetup() {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    } // preloaderSetup

    // ========================== Animations ==========================    
    function animations() {
        AOS.init();
    }

    // ========================== HeroSlider ==========================
    function heroSlider() {
        var slider = $('.hero-slider');
        slider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 10300,
            smartSpeed: 568,
            mouseDrag: false,
            margin: 0,
            nav: true,
            items: 1,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            animateOut: 'fadeOutUp',
            animateIn: 'fadeIn',
            onTranslate: translateAnim,
            onTranslated: translatedAnim
        });

        // Add Animation Globaly
        slider.find('[data-animation]').each(function () {
            var animation = $(this).data('animation');
            $(this).addClass(animation + ' animated')
        })

        // Animation Duration
        slider.find('[data-duration]').each(function () {
            var duration = $(this).data('duration');
            $(this).css('animation-duration', duration);
        })

        // Animation Dealy
        slider.find('[data-delay]').each(function () {
            var delay = $(this).data('delay');
            $(this).css('animation-delay', delay);
        })

        // Translate Animation
        function translateAnim(event) {
            var layer = $(event.target).find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this).removeClass(animation + ' animated').css('opacity', '0');
            })

        }
        // TranslateD Animation
        function translatedAnim(event) {

            var layer = $(event.target).find('.owl-item.active').find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this).addClass(animation + ' animated').css('opacity', '1');
            })
        }
    }










})(jQuery); // End of use strict