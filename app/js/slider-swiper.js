const swiper = new Swiper('.swiper', {
// loop: true,
  autoHeight: true,
  autoWidth: true,
 
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // 460: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          },
        },
        1440: {
          spaceBetween: 30,
      },
    },
  });