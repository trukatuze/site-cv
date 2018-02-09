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
        }else{
            alert('adfafwhd')
        }
    });


    // $(window).scroll(function () {
    //     var scrollValue = $(window).scrollTop();
    //
    //     var geneneralHeight = $(window).height();
    //     var positionProperty = scrollValue / geneneralHeight * 100;
    //     console.log(positionProperty);
    // })
});
//jquery animate()
//jquery and js scrollTop+offsets
//parent()
//input events
// Вивчити if else и оператори
//1)Створити инпут и кнопку,ввести в инпут тильки число и приклици на кнопку значення цього инпуту вивести в консольку
//2)Створити select або інпут з назвами кольрів або якшо ввести в інпут якийсь колір при кліці на кнопку
// змінити body background
