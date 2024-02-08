import $ from "jquery";

$(function () {
  if ($(window).width() > 768) {
   $('.brands__link:nth-child(n + 17)').addClass('hidden');
   $('.brands__link:nth-child(n + 17)').hide();
    $('.brands .btn.btn-primary').on('click', function () {
      const btn = $(this).find('.btn-text').get(0);
      if ($('.brands__link:nth-child(n + 17)').hasClass('hidden')) {
        $('.brands__link:nth-child(n + 17)').removeClass('hidden');
        $('.brands__link:nth-child(n + 17)').slideDown();
        btn.innerText = 'Скрыть';
      } else {
        $('.brands__link:nth-child(n + 17)').slideUp();
        setTimeout(function () {
          $('.brands__link:nth-child(n + 17)').addClass('hidden');
        },500)
        btn.innerText = 'Показать еще';
      }
    })
  }
  if ($(window).width() < 769) {
    $('.brands__link:nth-child(n + 10)').hide();
    $('.brands .btn.btn-primary').on('click', function () {
      $('.brands__link:nth-child(n + 10)').slideToggle();
      const btn = $(this).find('.btn-text').get(0);
      if ($('.brands__link:nth-child(n + 10)').is(":visible")) {
        btn.innerText = 'Показать еще';
      } else {
        btn.innerText = 'Скрыть';
      }
    })
  }
})