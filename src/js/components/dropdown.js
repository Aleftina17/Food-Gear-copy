import $ from "jquery";

let burgerMenuOpen = false;
let targetListOpen = false;
let heroDropdownOpen = false;

$('.header__burger').on('click', function(){
    $('.header__burger-menu').slideToggle();
    $('.header__search').toggleClass('menu-opened');
    burgerMenuOpen = !burgerMenuOpen;
    updateBackdrop();
});

$('.header__bottom .btn-primary').on('click', function(){
    $('.header__target-list').slideToggle();
    targetListOpen = !targetListOpen;
    updateBackdrop();
});

$('.backdrop').on('click', function(e){
    e.stopPropagation();
    closeHeaderDropdowns();
    closeHeroDropdown();
    updateBackdrop();
});

$(".swiper-category .card-category").each(function (index) {
    $(this).on("click", function () {
        let $subcategories = $($(".subcategories")[index]);
        toggleHeroDropdown($subcategories);
        updateBackdrop();
    });
});

function closeHeaderDropdowns() {
    $('.header__burger-menu').slideUp();
    $('.header__search').removeClass('menu-opened');
    $('.header__target-list').slideUp();
    burgerMenuOpen = false;
    targetListOpen = false;
}

function toggleHeroDropdown($subcategories) {
    if ($subcategories.hasClass("open")) {
        $subcategories.removeClass("open");
        heroDropdownOpen = false;
    } else {
        $(".subcategories").removeClass("open");
        $subcategories.addClass("open");
        heroDropdownOpen = true;
    }
}

function closeHeroDropdown() {
    $(".subcategories").removeClass("open");
    heroDropdownOpen = false;
}

function updateBackdrop() {
    if (burgerMenuOpen || targetListOpen || heroDropdownOpen) {
        $('.backdrop').fadeIn();
    } else {
        $('.backdrop').fadeOut();
    }
}
