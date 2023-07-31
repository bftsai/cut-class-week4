$(document).ready(function () {
    $('.btn').click(function (e) { 
        e.preventDefault();
        $('h1').fadeToggle(1000);
    });
});