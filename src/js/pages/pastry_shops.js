import $ from "jquery";

$(function () {
    $('.pastry-shops__catalog .catalogue-subcategory__content__cards').each(function (index,element) {
      $(this).closest('.pastry-shops__catalog-wrap').find('.btn.btn-primary').hide();
      let btn = $(this).closest('.pastry-shops__catalog-wrap').find('.btn.btn-primary');
      let cards;
      if ($(window).width() > 768) {
        cards = $(this).find('.card-subcategory:nth-child(n + 9)');

        if ($(this).find('.card-subcategory').length > 8) {
          cards.addClass('hidden');
          cards.hide();
          btn.show();
        }
      }
      if ($(window).width() < 769) {
        cards = $(this).find('.card-subcategory:nth-child(n + 7)');

        if ($(this).find('.card-subcategory').length > 6) {
          if ($(this).find('.card-subcategory-black').length > 0) { 
            cards = $(this).find('.card-subcategory:nth-child(n + 8)');
            cards.addClass('hidden');
            cards.hide();
          } else {
            cards = $(this).find('.card-subcategory:nth-child(n + 7)');
            cards.addClass('hidden');
            cards.hide();
          }
          btn.show();
        }
      }
      btn.on('click', function () {
        if (cards.hasClass('hidden')) {
          cards.removeClass('hidden');
          cards.slideDown();
          btn.find('.btn-text').text('Скрыть');
        } else {
          cards.slideUp();
          setTimeout(function () {
            cards.addClass('hidden');
          },500)
          btn.find('.btn-text').text('Показать еще');
        }
      })
    })
  $('.catalogue-subcategory__tab').on('click', function () {
    const ind = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(`.pastry-shops__catalog-wrap${ind}`).offset().top - 150
      });
      return false;
    })
 })