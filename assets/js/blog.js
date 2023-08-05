$(document).ready(function () {
    //blog detail
    $('.blog-link1').click(function (e) { 
        e.preventDefault();
        $('.blog').fadeOut(500);
        $('.blogDetail').fadeIn(1000);
        $('.article1').fadeIn(1000);
    });
    $('.blog-link2').click(function (e) { 
        e.preventDefault();
        $('.blog').fadeOut(500);
        $('.blogDetail').fadeIn(1000);
        $('.article2').fadeIn(1000);
    });
    $('.blog-link3').click(function (e) { 
        e.preventDefault();
        $('.blog').fadeOut(500);
        $('.blogDetail').fadeIn(1000);
        $('.article3').fadeIn(1000);
    });
    $('.blog-link4').click(function (e) { 
        e.preventDefault();
        $('.blog').fadeOut(500);
        $('.blogDetail').fadeIn(1000);
        $('.article4').fadeIn(1000);
    });
    $('.blog-link5').click(function (e) { 
        e.preventDefault();
        $('.blog').fadeOut(500);
        $('.blogDetail').fadeIn(1000);
        $('.article5').fadeIn(1000);
    });

    //privacy service
    $('.privacy-a').click(function (e) { 
        e.preventDefault();
        $('.blog').fadeOut(500);
        $('.blogDetail').fadeOut(500);
        $('.article1').fadeOut(500);
        $('.article2').fadeOut(500);
        $('.article3').fadeOut(500);
        $('.article4').fadeOut(500);
        $('.article5').fadeOut(500);
        $('.service').fadeOut(500);
        $('.privacy').delay(500).fadeIn(1000);
    });
    $('.service-a').click(function (e) { 
        e.preventDefault();
        $('.blog').fadeOut(500);
        $('.blogDetail').fadeOut(500);
        $('.article1').fadeOut(500);
        $('.article2').fadeOut(500);
        $('.article3').fadeOut(500);
        $('.article4').fadeOut(500);
        $('.article5').fadeOut(500);
        $('.privacy').fadeOut(500);
        $('.service').delay(500).fadeIn(1000);
    });
});