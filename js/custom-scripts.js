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

});