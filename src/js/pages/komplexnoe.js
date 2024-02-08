import IMask from 'imask';
import $ from "jquery";
import Swiper from "swiper/bundle";
import "swiper/css";

const rem = function (rem) {
  if (window.innerWidth > 768) {
    return 0.005208335 * window.innerWidth * rem;
  } else {
    return (100 / 375) * (0.05 * window.innerWidth) * rem;
  }
}
if (document.querySelector('.application__form')) {
  let tel = $('input[name="tel"]').get(0);
  IMask(tel, {
    mask: '+{7} (000) 000-00-00',
  });
}


//swipers//

const serviceSwiper = new Swiper(".komplex-banner__swiper", {
  slidesPerView: 1,
  spaceBetween: rem(1),
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.komplex-banner__pagination',
    type: 'bullets',
    clickable: true,
  },
  speed: 1000,
})

const structureSwiper = new Swiper(".structure__swiper", {
  slidesPerView: 2,
  spaceBetween: rem(4),
  slidesPerGroup: 2,
  navigation: {
    nextEl: '.structure__btn-next',
    prevEl: '.structure__btn-prev',
  },
  scrollbar: {
    el: '.structure__swiper-scrollbar',
  },
  speed: 1000,
})

const offersThumbs = new Swiper(".offers__swiper-thumbs", {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: rem(1.25),
  speed: 1000,
})

const offersSwiper = new Swiper(".offers__swiper", {
  slidesPerView: 1,
  spaceBetween: rem(1),
  navigation: {
    nextEl: '.offers__btn-next',
    prevEl: '.offers__btn-prev',
  },
  scrollbar: {
    el: '.offers__swiper-scrollbar',
  },
  thumbs: {
    swiper: offersThumbs
  },
  speed: 1000,
})

const portfolioThumbs = new Swiper(".portfolio__thumbs", {
  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: rem(1.5),
  navigation: {
    nextEl: '.portfolio__btn-next',
    prevEl: '.portfolio__btn-prev',
  },
  scrollbar: {
    el: '.portfolio__swiper-scrollbar',
  },
  speed: 1000,
  
})

const portfolioSwiper = new Swiper(".portfolio__swiper", {
  slidesPerView: 1,
  spaceBetween: rem(1),
  thumbs: {
    swiper: portfolioThumbs
  },
  speed: 1000,
})

$(function () {
  $('.offers__btns .btn-secondary').on('click', function () {
    $('.offers__btns .btn-secondary').removeClass('active');
    $(this).addClass('active');
  })

  $('.sroll-form').on('click', function () {
    $('html, body').animate({
        scrollTop: $('.application').offset().top - 200
    });
    return false;
  })
})

$('.input-select__drop').hide();
$('.input-select').on("click", function (e) {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $(this).find('.input-select__drop').show();
    $('.input-select__img').css('transform','translateY(2rem) rotate(180deg)')
  } else {
    $('.input-select__drop').hide();
    $('.input-select__img').css('transform','translateY(0rem) rotate(0)')
  }
  const elem = e.target;

  if (elem.classList.contains('text-sm')) {
    const text = elem.innerText;
    $(this).find('span').text(text);
    $('input[name="service"]').val(text);
  }
})

//portfolio scroll
if ($(window).width() < 769) {
  $('.portfolio__slide').on('click', function () {
    $('html, body').animate({
        scrollTop: $('.portfolio__swiper').offset().top - 300
    });
    return false;
  })
}