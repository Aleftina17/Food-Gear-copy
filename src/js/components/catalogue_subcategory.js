import $ from "jquery";

if ($(".catalogue-subcategory").length && $(window).width() < 769) {
    const $cards = $(".catalogue-subcategory__content__cards .card-subcategory");
    const $loadMoreBtn = $(".catalogue-subcategory__content .btn-primary");

    $cards.slice(10).hide();

    $loadMoreBtn.on("click", function () {
        const hiddenCards = $cards.filter(":hidden");
        hiddenCards.slice(0, 4).slideDown();
        if (hiddenCards.length <= 4) {
            $loadMoreBtn.hide();
        }
    });

    $(window).on("resize", function () {
        if ($(window).width() < 769) {
            $cards.hide();
            $cards.slice(0, 10).show();
            $loadMoreBtn.show();
        } else {
            $cards.show();
            $loadMoreBtn.hide();
        }
    });
}
