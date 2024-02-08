import $ from "jquery";
$(function () {
    $("[data-modal]").on("click", () => {
        $("body").addClass("lock");
    });

    $(".modal-back").on("click", closeModal);
    $(".modal-exit").on("click", closeModal);
    $("[data-modal='close-modal']").on("click", closeModal);

    function closeModal() {
        $(".modal").removeClass("active");
        $("body").removeClass("lock");
    }
});

$('[data-modal="review"]').on("click", (e) => {
    e.preventDefault()
    $(".modal-review").addClass("active");
});

$('[data-modal="success"]').on("click", (e) => {
    e.preventDefault();
    const buttonText = $(e.currentTarget).find('.btn-text').text();
    if (buttonText === "Задать вопрос") {
        $(".modal-success .modal__title").text("Вопрос успешно отправлен!");
    } else {
        $(".modal-success .modal__title").text("Отзыв успешно отправлен!");
    }
    $(".modal").removeClass("active");
    $(".modal-success").addClass("active");
});

// $('[data-modal="question"]').on("click", (e) => {
//     e.preventDefault()
//     $(".modal-question").addClass("active");
// });