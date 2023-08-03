$(document).ready(function () {
    $('.privacy-a').click(function (e) { 
        e.preventDefault();
        $('.index').fadeOut(500);
        $('.service').fadeOut(500);
        $('.privacy').fadeIn(1000);
    });
    $('.service-a').click(function (e) { 
        e.preventDefault();
        $('.index').fadeOut(500);
        $('.privacy').fadeOut(500);
        $('.service').fadeIn(1000);
    });
});