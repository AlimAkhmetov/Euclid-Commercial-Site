window.addEventListener('DOMContentLoaded', function () {
  // Slider
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-pagination',
    //   prevEl: '.swiper-pagination',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })

  // Burger
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.navigation').classList.toggle('navigation_active');
    document.querySelector('.burger').classList.toggle('burger_active');
    document.querySelector('html').classList.toggle('lock');
  });

  // Accordion
  $(function () {
    $(".question__menu").accordion({
      collapsible: true,
      active: false,
    });
  });


});