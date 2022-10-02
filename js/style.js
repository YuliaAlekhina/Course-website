/*----Бургер---*/

$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger,.menu-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});



/*----Вкладки-----------------*/
$(function() {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
        e.preventDefault();
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
});



/*---Карусель------*/
$(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ['<img src="../img/testimonials/arrow.svg">', '<img src="../img/testimonials/arrow-2.svg">'],     
        dots:true,
        // startPosition: 1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});



/*----Аккордион------*/
$(document).ready(function () {
    $('.course-program__lesson').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});


/*---Карусель------*/
$(function () {
    $('.courses-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        // startPosition: 1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});