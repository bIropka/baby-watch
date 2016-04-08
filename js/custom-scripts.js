$(document).ready(function () {

    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
        appendArrows: '.slider-control',
        initialSlide: 0,
        prevArrow: '.control-left',
        nextArrow: '.control-right',
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });

    var myTimer = $('.timer').FlipClock({
        language: 'russian',
        countdown: true
    });
    var myDate = new Date();
    myDate.setHours(myDate.getHours() + 6);
    myDate.setMinutes(myDate.getMinutes() + 7);
    myDate.setSeconds(myDate.getSeconds() + 41);
    myTimer.setTime(myDate);
    myTimer.start();

    $('.mark-question').click(function() {
        if ($(this).parent().hasClass('opened')) {
            $(this).siblings('.answer').animate({height: 'hide', padding: 'hide'}, 1000);
        } else {
            $(this).siblings('.answer').animate({height: 'show', padding: 'show'}, 1000);
        }
        $(this).parent().toggleClass('opened');
    });

    /* window-callback */
    $('.get-callback').click(function () {
        $('.window-callback').fadeIn();
    });
    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback')).length) $('.window-callback').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback').fadeOut();
    });
    //////////////////////
     /* window-callback */
    $('.to-order').click(function () {
        $('.window-order').fadeIn();
    });
    $('.window-order').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-order')).length) $('.window-order').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-order').fadeOut();
    });
    /////////////////////
    /* window-callback */
    $('.window-ok').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-ok')).length) $('.window-ok').fadeOut();
        if ($target.hasClass('.form-ok button')) $('.window-ok').fadeOut();
    });
    /////////////////////


});