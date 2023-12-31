$(document).ready(function () {
    //choose location
    $('.taipei-City').click(function (e) { 
        e.preventDefault();
        $('.taichung-group').fadeOut(500);
        $('.kaohsiung-group').fadeOut(500);
        $('.taipei-group').fadeOut(500).delay(200).fadeIn(800);
        $('.shop .dropdown-toggle').text('台北市');
    });
    $('.taichung-City').click(function (e) { 
        e.preventDefault();
        $('.taipei-group').fadeOut(500);
        $('.kaohsiung-group').fadeOut(500);
        $('.taichung-group').fadeOut(500).delay(200).fadeIn(800);
        $('.shop .dropdown-toggle').text('台中市');
    });
    $('.kaohsiung-City').click(function (e) { 
        e.preventDefault();
        $('.taichung-group').fadeOut(500);
        $('.taipei-group').fadeOut(500);
        $('.kaohsiung-group').fadeOut(500).delay(200).fadeIn(800);
        $('.shop .dropdown-toggle').text('高雄市');
    });
    //choose store
    $('.taipei-Zhongshan').click(function (e) { 
        e.preventDefault();
        $('.shop').fadeOut(500);
        $('.taipei-Green-store').fadeOut(500);
        $('.taichung-Cingshui-store').fadeOut(500);
        $('.kaohsiung-Jhongjheng-store').fadeOut(500);
        $('.kaohsiung-Dream-store').fadeOut(500);
        $('.shopLocate').fadeOut(500).delay(200).fadeIn(800);
        $('.taipei-Zhongshan-store').fadeOut(500).delay(200).fadeIn(800);
        $('.shopLocate .dropdown-toggle').text('台北中山旗艦店');
    });
    $('.taipei-Green').click(function (e) { 
        e.preventDefault();
        $('.shop').fadeOut(500);
        $('.taipei-Zhongshan-store').fadeOut(500);
        $('.taichung-Cingshui-store').fadeOut(500);
        $('.kaohsiung-Jhongjheng-store').fadeOut(500);
        $('.kaohsiung-Dream-store').fadeOut(500);
        $('.shopLocate').fadeOut(500).delay(200).fadeIn(800);
        $('.taipei-Green-store').fadeOut(500).delay(200).fadeIn(800);
        $('.shopLocate .dropdown-toggle').text('台北綠園店');
    });
    $('.taichung-Cingshui').click(function (e) { 
        e.preventDefault();
        $('.shop').fadeOut(500);
        $('.taipei-Zhongshan-store').fadeOut(500);
        $('.taipei-Green-store').fadeOut(500);
        $('.kaohsiung-Jhongjheng-store').fadeOut(500);
        $('.kaohsiung-Dream-store').fadeOut(500);
        $('.shopLocate').fadeOut(500).delay(200).fadeIn(800);
        $('.taichung-Cingshui-store').fadeOut(500).delay(200).fadeIn(800);
        $('.shopLocate .dropdown-toggle').text('台中清水旗艦店');
    });
    $('.kaohsiung-Jhongjheng').click(function (e) { 
        e.preventDefault();
        $('.shop').fadeOut(500);
        $('.taipei-Zhongshan-store').fadeOut(500);
        $('.taipei-Green-store').fadeOut(500);
        $('.taichung-Cingshui-store').fadeOut(500);
        $('.kaohsiung-Dream-store').fadeOut(500);
        $('.shopLocate').fadeOut(500).delay(200).fadeIn(800);
        $('.kaohsiung-Jhongjheng-store').fadeOut(500).delay(200).fadeIn(800);
        $('.shopLocate .dropdown-toggle').text('高雄中正形象店');
    });
    $('.kaohsiung-Dream').click(function (e) { 
        e.preventDefault();
        $('.shop').fadeOut(500);
        $('.taipei-Zhongshan-store').fadeOut(500);
        $('.taipei-Green-store').fadeOut(500);
        $('.taichung-Cingshui-store').fadeOut(500);
        $('.kaohsiung-Jhongjheng-store').fadeOut(500);
        $('.shopLocate').fadeOut(500).delay(200).fadeIn(800);
        $('.kaohsiung-Dream-store').fadeOut(500).delay(200).fadeIn(800);
        $('.shopLocate .dropdown-toggle').text('高雄夢時代店');
    });
});