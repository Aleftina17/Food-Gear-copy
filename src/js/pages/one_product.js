import $ from "jquery";

$(function () {
    $(".review__link a").on("click", function (e) {
        e.preventDefault();
        let $reviewText = $(this).closest(".review").find(".review__text");
        $reviewText.toggleClass("open");
        const linkText = $reviewText.hasClass("open") ? "Скрыть" : "Читать полностью";
        $(this).find(".btn-link-text").text(linkText);
    });
});
