import $ from "jquery";

$(function () {
    function updateVisibility() {
        const screenWidth = $(window).width();

        if (screenWidth > 769) {
            $(".clients__card").each(function (index) {
                if (index >= 12) {
                    $(this).addClass("hidden");
                }
            });
        } else {
            $(".clients__card").each(function (index) {
                if (index >= 6) {
                    $(this).addClass("hidden");
                }
            });
        }
    }

    updateVisibility();

    $(window).on("resize", function () {
        updateVisibility();
    });

    $(".clients__btn").on("click", function () {
        let hiddenCards = $(".clients__card.hidden");

        for (let i = 0; i < 6; i++) {
            if (hiddenCards[i]) {
                $(hiddenCards[i]).slideDown();
                $(hiddenCards[i]).removeClass("hidden").css("display", "flex");
            }
        }

        if ($(".clients__card.hidden").length === 0) {
            $(".clients__btn").css("display", "none");
        }
    });
});
