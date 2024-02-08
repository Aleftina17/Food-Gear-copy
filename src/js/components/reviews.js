import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
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

console.log('afafaf')

const reviewsSwiper = new Swiper(".reviews__swiper", {
  slidesPerView: 1.7,
  spaceBetween: rem(2),
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.reviews__btn-next',
    prevEl: '.reviews__btn-prev',
  },
  scrollbar: {
    el: '.reviews__swiper-scrollbar',
  },
  speed: 1000,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: rem(3.6),
      slidesPerGroup: 3,
    }
  },
})

$('.open-fancybox').on('click', function (e) {
  e.preventDefault();
  $('.reviews__slide-img').click();
});

Fancybox.bind("[data-fancybox]", {
  buttons: [
    "slideShow",
    "thumbs",
    "close"
  ],
  Thumbs: {
    type: "classic",
  },
  loop: true, // Позволяет слайдеру зацикливаться
  infobar: true, // Скрывает информационную панель (включает/выключает номер текущего слайда и общее количество слайдов)
  touch: {
    vertical: false, // Запретить вертикальное свайпание на мобильных устройствах
  },
  backFocus: false, // Предотвращает автоматическое фокусирование на кнопке "Назад" после закрытия
  // Пользовательские стили для фона и фильтра
  btnTpl: {
    slideShow: '',
    thumbs: '',
    close: '',
    arrowLeft:
      `<button data-fancybox-prev class="fancybox-button--arrow_left btn btn-arrow" title="{{PREV}}">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1667 7.58332L9.75 13L15.1667 18.4167"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>`,
    arrowRight:
      `<button data-fancybox-next class="  fancybox-button--arrow_right btn btn-arrow next" title="{{NEXT}}" class="btn btn-arrow next">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1667 7.58332L9.75 13L15.1667 18.4167"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>`,
  }


});