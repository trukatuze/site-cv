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

    $('.start').on('click', (function (e) {
            e.preventDefault();
            var target = $(this.hash);
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000, 'easeOutBounce');
            return false
    }));

    new WOW().init();

    $('#ss-form .form-control').focus(function () {
        $(this).parents('.form-group').addClass('has-label');
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).parents('.form-group').removeClass('has-label');
        }
    });
});