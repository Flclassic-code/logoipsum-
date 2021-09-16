$(document).ready(function() {


    $('.hamburger-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('hamburger-btn-active');
        $('.nav-bar').toggleClass('menu-active');
    });



    /* header fixed top */
    // var f = true;
    // $(window).on('scroll', function() {

    //     var scrTop = $(window).scrollTop();
    //     var headerHeight = $('.header').height();

    //     if (scrTop > headerHeight && f) {
    //         f = false;

    //         $('.header').addClass('header_fixed');
    //         $('.section').css({
    //             paddingTop: headerHeight
    //         })
    //     } else if (scrTop <= headerHeight && !f) {
    //         f = true;
    //         $('.header').removeClass('header_fixed');
    //         $('.section').removeAttr('style');
    //     }

    // });

    // /*up-button*/

    $('.up-button').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);

    });


    if ($('.up-button').length) {
        window.onscroll = function() {
            var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
            if (topToDocument > 100) {
                $('.up-button').addClass('up-button_show');
            } else {
                $('.up-button').removeClass('up-button_show');
            }
        }
    }




                  $(document).ready(function() {
                      $('.nav-bar a[href^="#"]').on('click', function(event) {
                          var target = $($(this).attr('href'));
                          if (target.length) {
                              event.preventDefault();
                              event.stopImmediatePropagation();
                              $('html, body').animate({
                                  scrollTop: target.offset().top - 50
                              }, 600, function() {
                                  if ( $('.nav-bar').hasClass('menu-active') ) {
                                       $('.nav-bar').removeClass('menu-active');
                                       $('.hamburger-btn').removeClass('hamburger-btn-active');
                                  }
                              });
                          }

                      });


                  });

                  $(window).scroll(function() {
                      var scrollDistance = $(window).scrollTop();

                      $('.page-section').each(function(i) {

                          if ($(this).position().top - 60 <= scrollDistance) {
                              $('ul.nav-bar li').removeClass('active');
                              
                              $('ul.nav-bar li').eq(i).addClass('active');
                          }
                      });
                  }).scroll();


    // /*SCROLL TO*/
    // $('a[href^="#"]').on('click', function(event) {
    //  var target = $( $(this).attr('href') );
    //  if( target.length ) {
    //    event.preventDefault();
    //    $('html, body').animate({
    //      scrollTop: target.offset().top
    //    }, 1500);
    //  }
    // });




// /* SLICK_SLIDER */
if ($('.slider-box').length) {
    $('.slider-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"></button>',
        centerPadding: '30px',
        touchMove: false,
        draggable: true,
        cssEase: 'linear',
        infinite: true,
        // speed: 600,
        fade: true,
        // cssEase: 'linear'
        autoplay: true,
        // autoplaySpeed: 1000,
        swipe: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 668,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};



/*FANCYBOX*/

// $('.modal-tiger').fancybox({
//     touch: false,
//     // hideOnContentClick: false,
//     // closeBtn: true,
//     // overlayShow: true,
//     // fitToView: false
//
// });

/*FANCYBOX-CLOSE*/
// $(':button').click(function() {
//     parent.$.fancybox.close();
// })
//
//



// /*MASK JQUERY*/
// $('input[type=tel]').mask("+7 (999) 999-99-99");
//
//
// /*HIDE PLACEHOLDER*/
// $('input,textarea').focus(function() {
//     $(this).data('placeholder', $(this).attr('placeholder'))
//         .attr('placeholder', '');
// }).blur(function() {
//     $(this).attr('placeholder', $(this).data('placeholder'));
// });
//
//
//
//
// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }


});