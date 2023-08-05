$(document).ready(function () {


    //privacy service
    $('.privacy-a').click(function (e) { 
        e.preventDefault();
        $('.faq').fadeOut(500);
        $('.service').fadeOut(500);
        $('.privacy').delay(500).fadeIn(1000);
    });
    $('.service-a').click(function (e) { 
        e.preventDefault();
        $('.faq').fadeOut(500);
        $('.privacy').fadeOut(500);
        $('.service').delay(500).fadeIn(1000);
    });
});