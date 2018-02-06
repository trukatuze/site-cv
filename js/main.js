$(document).ready(function(){
    $('.arrow-left').click(function(){
       var parent =  $(this).parents('.ebich');
        parent.find('.left-item').addClass('active');
        parent.find('.right-item').removeClass('active');
        parent.find('.white-block').removeClass('push-right');
        parent.find('.white-block').addClass('push-left');
    })
    $('.arrow-right').click(function(){
        var parent =  $(this).parents('.ebich');
        parent.find('.right-item').addClass('active');
        parent.find('.left-item').removeClass('active');
        parent.find('.white-block').removeClass('push-left');
        parent.find('.white-block').addClass('push-right');
    })
});