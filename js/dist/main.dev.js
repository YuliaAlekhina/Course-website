"use strict";

/*----Бургер---*/
$(document).ready(function () {
  $('.menu__burger').click(function (event) {
    $('.menu__burger,.menu-nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});