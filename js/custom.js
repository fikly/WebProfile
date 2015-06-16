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

    $('#img-fikly').click(function () {
        $('.about').removeClass('riky');
        $('.about').removeClass('reksi');
        $('.about').addClass('fikly');
        $('#img-fikly').addClass('active');
        $('#img-riky').removeClass('active');
        $('#img-reksi').removeClass('active');
        $('#fikly').fadeIn()
        $('#riky').hide();
        $('#reksi').hide();
    });
    $('#img-riky').click(function () {
        $('.about').removeClass('fikly');
        $('.about').removeClass('reksi');
        $('.about').addClass('riky');
        $('#img-riky').addClass('active');
        $('#img-fikly').removeClass('active');
        $('#img-reksi').removeClass('active');
        $('#riky').fadeIn();
        $('#fikly').hide();
        $('#reksi').hide();
    });
    $('#img-reksi').click(function () {
        $('.about').removeClass('riky');
        $('.about').removeClass('fikly');
        $('.about').addClass('reksi');
        $('#img-reksi').addClass('active');
        $('#img-riky').removeClass('active');
        $('#img-fikly').removeClass('active');
        $('#reksi').fadeIn();
        $('#riky').hide();
        $('#fikly').hide();
    });
    jQuery(document).ready(function () {
        jQuery('.box-skill').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeInLeft',
            offset: 200
        });
        jQuery('.box-portofolio').addClass("hidden").viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 170
        });
    });
});