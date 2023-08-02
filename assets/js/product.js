$(document).ready(function () {
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
});