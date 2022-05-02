// Ches Swiper test
// import Swiper from "swiper";

document.addEventListener('DOMContentLoaded',() => {

  const swiper = new Swiper('.swiper', {
    loop: false,
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
              pagination: {
                el: ".swiper-pagination",
                type: "bullets",
            },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
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
    navigation: {
      nextEl: ".swiper-transport-button-next",
      prevEl: ".swiper-transport-button-prev",
    },
      breakpoints: {
        360: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            nextEl: ".swiper-transport-button-next",
            prevEl: ".swiper-transport-button-prev",
          },
        },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
      },
      
  });

  const swiperVariants = new Swiper('.swiper-variants', {
    loop: false,
    autoHeight: true,
    autoWidth: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
    navigation: {
      nextEl: ".swiper-variants-button-next",
      prevEl: ".swiper-variants-button-prev",
    },
      breakpoints: {
        360: {
          slidesPerView: 1,
          spaceBetween: 15,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
        },
      },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
            nextEl: ".swiper-variants-button-next",
            prevEl: ".swiper-variants-button-prev",
          },
        },
          1440: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
      },
      
  });

  const swiperOffers = new Swiper('.swiper-offers', {
    loop: false,
    autoHeight: true,
    autoWidth: true,
    pagination: {
        el: ".swiper-offers-pagination",
        clickable: true,
    },
      navigation: {
        nextEl: ".swiper-offers-button-next",
        prevEl: ".swiper-offers-button-prev",
      },
      breakpoints: {
        360: {
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
            el: ".swiper-offers-pagination",
            type: "bullets",
        },
      },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
            nextEl: ".swiper-offers-button-next",
            prevEl: ".swiper-offers-button-prev",
          },
        },
          1440: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
      },
      
  });

  const swiperBlur = new Swiper('.swiper-blur', {
        // loop: true,
        slidesPerView: 2,
        spaceBetween: 1,
        centeredSlides: true,
        pagination: {
          el: ".swiper-offers-pagination",
          clickable: true,
      },
        navigation: {
          nextEl: ".swiper-blur-button-next",
          prevEl: ".swiper-blur-button-prev",
        },
    breakpoints: {
      360: {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-blur-pagination",
          type: "bullets",
          dynamicBullets: true,
      },
    },
      768: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-blur-pagination",
          type: "bullets",
          dynamicBullets: true,
      },
      },
      992: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-blur-button-next",
          prevEl: ".swiper-blur-button-prev",
        },
      },
    },
    
  });

});

