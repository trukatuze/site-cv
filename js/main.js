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

    //menu btn toggle
    
    var btnToggle = $('#toggle-btn');
    var overlay = $('.overlay-background');
    var nav = $('#navbar');

    // btnToggle.affix({offset: {top: $("header").outerHeight(true)}});
    btnToggle.click(function () {
        if (btnToggle.hasClass('affix')) {
            nav.toggleClass("navToggle");
        }
    });
    $(window).scroll(function () {
        if (btnToggle.hasClass('affix') != true) {
            nav.removeClass('navToggle');
        }
    });

    // Instantiate the map
    Highcharts.mapChart('maper', {
        chart: {
            map: 'custom/europe',
            spacingBottom: 20
        },

        title: {
            text: 'Europe time zones'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            map: {
                allAreas: false,
                joinBy: ['iso-a2', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    style: {
                        fontWeight: 'bold'
                    },
                    // Only show dataLabels for areas with high label rank
                    format: null,
                    formatter: function () {
                        if (this.point.properties && this.point.properties.labelrank.toString() < 5) {
                            return this.point.properties['iso-a2'];
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.name}: <b>{series.name}</b>'
                }
            }
        },

        series: [{
            name: 'UTC',
            data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
                return { code: code };
            })
        }, {
            name: 'UTC + 1',
            data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU',
                'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
                return { code: code };
            })
        }, {
            name: 'UTC + 2',
            data: ['FI', 'EE', 'LV', 'LT', 'BY', 'UA', 'MD', 'RO', 'BG', 'GR', 'TR', 'CY'].map(function (code) {
                return { code: code };
            })
        }, {
            name: 'UTC + 3',
            data: [{
                code: 'RU'
            }]
        }]
    });
});