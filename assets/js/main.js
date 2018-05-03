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
        mobileMenu();
    });

    // Window Resize Function
    $(window).on('resize', function () {});

    // Window Scroll Function
    $(window).on('scroll', function () {});

    // ========================== preloaderSetup ==========================
    function preloaderSetup() {
        $('#preloader')
            .fadeOut('slow', function () {
                $(this).remove();
            });
    } // preloaderSetup

    // ========================== Animations ==========================
    function animations() {
        AOS.init({offset: 50});

    }

    // ========================== Mobile Responsive Menu ==========================
    function mobileMenu() {
        var menu = $('.page-sidebar').html();
        var mobMenu = '<div class="mobile-menu-slide py-4">' + menu + '</div>';
        $('body').prepend(mobMenu);

        $('.mobile-menu-icon').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $('.mobile-menu-slide').addClass('show');
        })

        // Hide on click outside
        $(document).on('click', function (e) {
            if (!(e.target.closest('.mobile-menu-slide'))) {
                $('.mobile-menu-slide').removeClass('show');
            }
        })

    }
    // ========================== HeroSlider ==========================
    function heroSlider() {
        var slider = $('.hero-slider-init');
        var sliderNav = $('.hero-slider-nav');
        var count = $('.hero-slider-nav li').length;
        slider.slick({slidesToShow: 1, slidesToScroll: 1, arrows: false, asNavFor: sliderNav})
        sliderNav.slick({
            slidesToShow: count,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: slider,
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            vertical: true
        })

        // Add Animation Globaly
        slider
            .find('[data-animation]')
            .each(function () {
                var animation = $(this).data('animation');
                $(this).addClass(animation + ' animated')
            })

        // Animation Duration
        slider
            .find('[data-duration]')
            .each(function () {
                var duration = $(this).data('duration');
                $(this).css('animation-duration', duration);
            })

        // Animation Dealy
        slider
            .find('[data-delay]')
            .each(function () {
                var delay = $(this).data('delay');
                $(this).css('animation-delay', delay);
            })

        // Translate Animation
        function translateAnim(event) {
            var layer = $(event.target).find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this)
                    .removeClass(animation + ' animated')
                    .css('opacity', '0');
            })

        }
        // TranslateD Animation
        function translatedAnim(event) {

            var layer = $(event.target)
                .find('.owl-item.active')
                .find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this)
                    .addClass(animation + ' animated')
                    .css('opacity', '1');
            })
        }
    }

})(jQuery); // End of use strict