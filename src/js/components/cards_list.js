import $ from "jquery";

$(function () {
    $(".cards-list").each(function () {
        let $section = $(this);

        if ($section.find(".card-main.hidden").length) {
            $section.find(".btn-show-more").on("click", function () {
                let hiddenCards = $section.find(".card-main.hidden");

                for (let i = 0; i < 4; i++) {
                    if (hiddenCards[i]) {
                        $(hiddenCards[i]).slideDown();
                        $(hiddenCards[i]).removeClass("hidden").css("display", "flex");
                    }
                }

                if ($section.find(".card-main.hidden").length === 0) {
                    $section.find(".btn-show-more").css("display", "none");
                }
            });
        }
    });
});