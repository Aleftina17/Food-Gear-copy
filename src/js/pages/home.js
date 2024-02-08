import $ from "jquery";
import "swiper/css";
import "swiper/css/bundle";
import { remToPx } from "../utils/constants"; 
import Swiper from "swiper/bundle";

const swiperCategory = new Swiper(".swiper-category", {
    navigation: {
        nextEl: ".swiper-button-next--category",
        prevEl: ".swiper-button-prev--category",
    },
    slidesPerView: "auto",
    spaceBetween: `${remToPx(0.8)}rem`,
});

swiperCategory.on("slideChange", function () {
    checkButtonVisibility();
});

function checkButtonVisibility() {
    if (swiperCategory.isBeginning) {
        $(".swiper-category .swiper-button-prev--category").css("display", "none");
    } else {
        $(".swiper-category .swiper-button-prev--category").css("display", "block");
    }

    if (swiperCategory.isEnd) {
        $(".swiper-category .swiper-button-next--category").css("display", "none");
    } else {
        $(".swiper-category .swiper-button-next--category").css("display", "block");
    }
}

//open subcategories
// $(".swiper-category .card-category").each(function (index) {
//     $(this).on("click", function () {
//         let $this = $(this);
//         let $subcategories = $($(".subcategories")[index]);
//         if ($subcategories.hasClass("open")) {
//             $subcategories.removeClass("open");
//         } else {
//             $(".subcategories").removeClass("open");
//             $subcategories.addClass("open");
//         }
//     });
// });

//open subcategories options
$(".subcategory__item__title").each(function (index, item) {
    $(item).on("click", function () {
        var $clickedItem = $(this).closest(".subcategory__item");
        var $options = $clickedItem.find(".subcategory__item__options");
        var $allItems = $(".subcategory__item");
        if ($options.length) {
            $allItems.removeClass("active");
            $clickedItem.addClass("active");
            $allItems.not($clickedItem).find(".subcategory__item__options").css("display", "none");
            $options.css("display", "flex");
        }
    });
});

//complex accordion
$(function () {
    function handleAccordionClick() {
        let currentAccordion = $(this).parent();
        currentAccordion.toggleClass("active");
        currentAccordion.siblings().removeClass("active").find(".accordion__item__content").slideUp();
        $(this).next(".accordion__item__content").slideToggle();
    }

    $(".accordion__item__top").on("click", handleAccordionClick);
    $(".accordion__item:first-child .accordion__item__top").trigger("click");
});

//swiper hero
const swiperHero = new Swiper(".swiper-home", {
    slidesPerView: "1",
    effect: "fade",
    speed: 1500,
    fadeEffect: {
        crossFade: true,
    },
    loop: "true",
    navigation: {
        nextEl: ".swiper-button-next--img button",
        prevEl: ".swiper-button-prev--img button",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next--img button",
        prevEl: ".swiper-button-prev--img button",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: true
    // }
});

$(".swiper-home__thumb-next").on("click", function () {
    swiperHero.slideNext();
});

const swiperBrands = new Swiper(".swiper-brands", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: `${remToPx(11.5)}rem`,
    grabCursor: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    freeMode: true,
    speed: 3000,
});
