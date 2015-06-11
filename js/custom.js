$(function () {
    $('.dislay-ovelay').click(function () {
        $('.nav-box').toggleClass('open');
        $('.ovelay').fadeIn();
        $('.remove-ovelay').fadeToggle();
        $('.ovelay').removeClass('animated hinge');
        $('.ovelay').addClass('animated rollIn');
        $('.navbar-menu').toggleClass('open');
    });
    $('.remove-ovelay').click(function () {
        $('.nav-box').toggleClass('open');
        $('.remove-ovelay').fadeToggle();
        $('.ovelay').removeClass('animated rollIn');
        $('.ovelay').addClass('animated hinge');
        $('.navbar-menu').toggleClass('open');
    });
    $(window).load(function () {
        $('body').toggleClass('animated bounce');
    });
    $(window).hover(function () {
        $('body').removeClass('animated bounce');
    });
});