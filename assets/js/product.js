$(document).ready(function () {
    $('.optical-a').click(function (e) { 
        e.preventDefault();
        
    });
    $('.sunglasses-a').click(function (e) { 
        e.preventDefault();
        $('.optical-a').fadeOut(500);
        $('.function-a').fadeOut(500);
        $('.sunglasses').fadeIn(1000);
    });
    $('.function-a').click(function (e) { 
        e.preventDefault();
        
    });
});