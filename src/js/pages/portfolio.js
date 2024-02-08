import $ from "jquery";


  $(function () {
      $('.portfolio__item:nth-child(n + 6)').hide();
      $('.portfolio__list .btn.btn-link').on('click', function (e) {
        // e.preventDefault();
        $('.portfolio__item:nth-child(n + 6)').slideToggle();
        const btn = $(this).find('.btn-link-text').get(0)
        console.log($('.portfolio__item:nth-child(n + 6)').is(":visible"))
        if ($('.portfolio__item:nth-child(n + 6)').is(":visible")) {
          // btn.innerText = 'Показать больше';
          btn.innerText = 'Скрыть';
        } else {
          console.log("ff")
          btn.innerText = 'Показать больше';
        }
      })
  })