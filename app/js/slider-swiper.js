// Ches Swiper test
// import Swiper from "swiper";

document.addEventListener('DOMContentLoaded',() => {

  const swiper = new Swiper('.swiper', {
    loop: false,
    autoHeight: true,
    autoWidth: true,
    mousewheel: {
      invert: false,
    },
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
              spaceBetween: 30,
              pagination: {
                el: ".swiper-pagination",
                type: "bullets",
            },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
      },
  });

  const swiperTransport = new Swiper('.swiper-transport', {
    loop: false,
    autoHeight: true,
    autoWidth: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: ".swiper-transport-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-transport-button-next",
        prevEl: ".swiper-transport-button-prev",
    },
      breakpoints: {
          360: {
              slidesPerView: 1,
              spaceBetween: 19,
          },
          // 460: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
          // },
          768: {

          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
      },
      
  })

});

