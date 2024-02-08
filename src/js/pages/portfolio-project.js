import Swiper from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";
import { remToPx } from "../utils/constants";
import 'swiper/css/scrollbar'

const prevBtn = document.querySelector(".structure__btn-prev");
const nextBtn = document.querySelector(".structure__btn-next");

const swiperPortfolio = new Swiper(".swiper-hero__swiper", {
    modules: [Navigation, Scrollbar],
    direction: "horizontal",
    slidesPerView: 6.4,
    initialSlide: 3,
    centeredSlides: true,
    spaceBetween: remToPx(3.6),
    scrollbar: {
        el: ".swiper-hero__scrollbar"
    },
    //   navigation: {
    //     prevEl: ".structure__btn-prev",
    //     nextEl: ".structure__btn-next",
    //   },
    on: {
        // slideChange: (swiper) => {
        //   swiper.updateSize();
        // },

        transitionStart: (swiper) => { },
    },
    768: {
        spaceBetween: remToPx(3.2)
    }
});

prevBtn &&
    prevBtn.addEventListener("click", () => {
        swiperPortfolio.slidePrev();
    });

nextBtn &&
    nextBtn.addEventListener("click", () => {
        swiperPortfolio.slideNext();
    });