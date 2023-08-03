$(document).ready(function () {
    //product change
    $('.optical-a').click(function (e) { 
        e.preventDefault();
        $('.sunglasses').fadeOut(500);
        $('.function').fadeOut(500);
        $('.optical').fadeIn(1000);
    });
    $('.sunglasses-a').click(function (e) { 
        e.preventDefault();
        $('.optical').fadeOut(500);
        $('.function').fadeOut(500);
        $('.sunglasses').fadeIn(1000);
    });
    $('.function-a').click(function (e) { 
        e.preventDefault();
        $('.optical').fadeOut(500);
        $('.sunglasses').fadeOut(500);
        $('.function').fadeIn(1000);
    });
    //privacy service
    $('.privacy-a').click(function (e) { 
        e.preventDefault();
        $('.product').fadeOut(500);
        $('.service').fadeOut(500);
        $('.privacy').fadeIn(1000);
    });
    $('.service-a').click(function (e) { 
        e.preventDefault();
        $('.product').fadeOut(500);
        $('.privacy').fadeOut(500);
        $('.service').fadeIn(1000);
    });
});