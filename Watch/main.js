$(document).ready(function(){
    $('#Menu').click(function(){
        $(this).toggleClass('fa-times');
    });
    $(window).on('load scroll',function(){
        $('#Menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
});