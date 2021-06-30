
(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        /* 
        =================================================================
        01 - Main Slider JS
        =================================================================	
        */

        $(".hero_slider").owlCarousel({
            animateOut: 'fadeOutLeft',
            animateIn: 'fadeIn',
            items: 1,
            nav: false,
            dots: false,
            autoplayTimeout: 7000,
            autoplaySpeed: 2000,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-long-arrow-left'><i>", "<i class='fa fa-long-arrow-right'><i>"],
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                750: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
        $(".hero_slider").on("translate.owl.carousel", function () {
            $(".hero_title").removeClass("animated fadeInDown").css("opacity", "0");
            $(".hero-left p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".hero_action a").removeClass("animated fadeInDown").css("opacity", "0");
            $(".hero_leaf_1 ").removeClass("animated fadeInLeft").css("opacity", "0");
            $(".hero_leaf_3 ").removeClass("animated fadeInRight").css("opacity", "0");
        });
        $(".hero_slider").on("translated.owl.carousel", function () {
            $(".hero_title").addClass("animated fadeInDown").css("opacity", "1");
            $(".hero-left p").addClass("animated fadeInUp").css("opacity", "1");
            $(".hero_action a").addClass("animated fadeInDown").css("opacity", "1");
            $(".hero_leaf_1").addClass("animated fadeInLeft").css("opacity", "1");
            $(".hero_leaf_3").addClass("animated fadeInRight").css("opacity", "1");
        });

        $(".gallery_slider").owlCarousel({
            autoplay: true,
            loop: true,
            touchDrag: true,
            mouseDrag: true,
            nav: false,
            dots: false,
            center: true,
            autoplayTimeout: 2000,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                600: {
                    items: 2
                },
                750: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });


        $('.product_slider').owlCarousel({
            items: 1,
            loop: false,
            center: true,
            margin: 0,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash'
        });
        
        $('.certificate_slider').owlCarousel({
            items: 1,
            loop: false,
            center: true,
            margin: 0,
            dots:true,
            URLhashListener: true,
            autoplayHoverPause: true
        });

        $('.products_slider').owlCarousel({
            items: 4,
            loop: false,
            center: false,
            margin: 30,
            touchDrag: true,
            mouseDrag: false,
            nav: false,
            dots: false,
            autoplayTimeout: 7000,
            autoplaySpeed: 2000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    dots: true
                },
                480: {
                    items: 2
                },
                600: {
                    items: 2,
                    margin: 10,
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 4,
                    loop: false,
                    touchDrag: false,
                    mouseDrag: false,
                }
            }
        });

        $('.product_sldie_hash a').click(function () {
            $('.product_sldie_hash .active').removeClass('active');
            $(this).addClass('active');
        });


        $(".g_item").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: false,
                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {

                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

        $(".mainmenu ul li:has(ul)").addClass("has-submenu");
        $(".mainmenu ul li:has(ul.sub-menu)").addClass("small-submenu");
        $(".mainmenu ul li ul").addClass("sub-menu");
        $(".mainmenu ul.dropdown li").hover(function () {
            $(this).addClass("hover")
        }, function () {
            $(this).removeClass("hover")
        });

        var $menu = $("#menu"),
            $menulink = $("#spinner-form"),
            $menuTriggercont = $(".spinner-master"),
            $menuTrigger = $(".has-submenu > a"),
            $header_area = $(".header_area"),
            $siteLogo = $(".site-Logo"),
            $cart_num = $(".cart_num"),
            $header_search = $(".header_search");
        $menulink.click(function (e) {
            $menulink.toggleClass("active");
            $menu.toggleClass("active");
            $menuTriggercont.toggleClass("active");
            $header_area.toggleClass("active");
            $siteLogo.toggleClass("active");
            $header_search.toggleClass("active");
            $cart_num.toggleClass("active");
        });

        $menuTrigger.click(function (e) {
            e.preventDefault();
            var t = $(this);
            t.toggleClass("active").next("ul").toggleClass("active")
        });

        



        $(".num-in span").on("click", function () {
            var $input = $(this).parents('.num-block').find('input.in-num');
            if ($(this).hasClass('minus')) {
                var count = parseFloat($input.val()) - 1;
                count = count < 1 ? 1 : count;
                if (count < 2) {
                    $(this).addClass('dis');
                } else {
                    $(this).removeClass('dis');
                }
                $input.val(count);
            } else {
                var count = parseFloat($input.val()) + 1
                $input.val(count);
                if (count > 1) {
                    $(this).parents('.num-block').find(('.minus')).removeClass('dis');
                }
            }

            $input.change();
            return false;
        });

        if ($("body").length) {
            var btnUp = $('<div/>', {
                'class': 'btntoTop'
            });
            btnUp.appendTo('body');
            $(document).on('click', '.btntoTop', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 700);
            });
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) $('.btntoTop').addClass('active');
                else $('.btntoTop').removeClass('active');
            });
        }



    });


}(jQuery));
