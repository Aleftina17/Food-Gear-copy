import $ from "jquery";

//filter desktop
$(function () {
    $(".filter-item__title").on("click", function () {
        let $parent = $(this).closest(".filter-item");
        $(".filter-item__subcategory").removeClass("active");
        $(".filter-item").not($parent).removeClass("active").find(".filter-item__subcategories").slideUp().removeClass("active");
        $parent.toggleClass("active").find(".filter-item__subcategories").slideToggle().toggleClass("active");
    });

    $(".filter-item__subcategory").on("click", function () {
        let $siblings = $(this).siblings(".filter-item__subcategory");
        $siblings.removeClass("active");
        $(this).toggleClass("active");
    });
});

//select desktop
$(function () {
    $(".btn-open-dropdown").on("click", function () {
        let $dropdown = $(this).closest(".select").find(".select__dropdown");
        $(".select__dropdown").not($dropdown).slideUp();
        $(".btn-open-dropdown").not(this).removeClass("active");
        $(this).toggleClass("active");
        $dropdown.slideToggle();
    });

    $(".select__dropdown .select-option").on("click", function () {
        let $text = $(this).text();
        let $selectTop = $(this).closest(".select").find(".select__top span");

        if ($(this).closest(".sort-by").length > 0) {
            $selectTop.text($text);
            $(this).closest(".select__dropdown").slideUp();
            $(this).siblings(".select-option").removeClass("active");
            $(this).toggleClass("active");
            $(this).closest(".select").find(".btn-open-dropdown").removeClass("active");
        } else {
            if ($text === "Все сразу") {
                if (!$(this).hasClass("active")) {
                    $(this).addClass("active").siblings().removeClass("active");
                } else {
                    $(this).removeClass("active");
                }
            } else {
                $(this).siblings('.select-option:contains("Все сразу")').removeClass("active");
                $(this).toggleClass("active");
            }
        }
    });
});

//filter mobile
if ($(".catalogue-equip__filter--mobile").length) {
    $(".filter-btn").on("click", function () {
        $(".catalogue-equip__filter--mobile").slideToggle();
    });

    $(".catalogue-equip__filter--mobile .select-option").on("click", function () {
        let $text = $(this).text();
        if ($text === "Все сразу") {
            if (!$(this).hasClass("active")) {
                $(this).addClass("active").siblings().removeClass("active");
            } else {
                $(this).removeClass("active");
            }
        } else {
            $(this).siblings('.select-option:contains("Все сразу")').removeClass("active");
            $(this).toggleClass("active");
        }
    });

    $(function () {
        $(".catalogue-equip__categories--mobile a").on("click", function (e) {
            $(this).addClass("active").siblings().removeClass("active");
            let dataCategory = $(this).data("category");
            $(".select__subcategories").removeClass("active");
            $('.select__subcategories[data-subcategories="' + dataCategory + '"]').addClass("active");
        });
    });
}
