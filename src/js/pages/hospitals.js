import $ from "jquery";

$(function () {
  $('.hospitals-banner__item-img').hide();
  $('.hospitals-banner__item.active').find('.hospitals-banner__item-text').show();
  $('.hospitals-banner__item.active').find('.hospitals-banner__item-img').show();
  $('.hospitals-banner__item').on('click', function () {
    if ($(this).hasClass('active')) {
      return;
    } else {
      $('.hospitals-banner__item').removeClass('active');
      $('.hospitals-banner__item').find('.hospitals-banner__item-text').slideUp();
      $('.hospitals-banner__item').find('.hospitals-banner__item-img').hide();
      $(this).addClass('active');
      $(this).find('.hospitals-banner__item-text').slideDown();
      $(this).find('.hospitals-banner__item-img').slideDown();
    }
  })
})