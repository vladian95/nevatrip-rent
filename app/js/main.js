//Accordion JS

// document.querySelectorAll('').forEach(() =>
    
// )


// const wrapper = document.querySelector('.accordion__item-wrapper');
// const plus = document.querySelector('.accordion__icon-plus');
// const dropDownWrap = document.querySelector('.accordion__dropDown');


//   wrapper.addEventListener('click', () => {
//     dropDownWrap.classList.toggle('accordion__dropDown--active');
//     plus.classList.toggle('accordion__icon-plus--active');
//   });

  






const ACCORDION = document.getElementsByClassName("specific-accordion__item-wrapper");

for (let i = 0; i < ACCORDION.length; i++) {
  ACCORDION[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

    // this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none' ; //ES6


    // const PANEL = this.nextElementSibling; 
    // if (PANEL.style.display === "block") {
    //   PANEL.style.display = "none";
    // } else {
    //   PANEL.style.display = "block"; //ES5
    // }
//   });
// }



// Tabs 
// const tabs = document.querySelector(".specific-session__tabs");
// const tabsBtns = tabs.querySelectorAll(".specific-session__btn-item");
// const tabsContents = tabs.querySelectorAll(".specific-session__content");

// function displayCurrentTab(current) {
//   for (let i = 0; i < tabsContents.length; i++) {
//     tabsContents[i].style.display = (current === i) ? "flex" : "none";
//   }
// }
// displayCurrentTab(0);

// tabs.addEventListener("click", event => {
//   if (event.target.className === "specific-session__btn-item") {
//     for (let i = 0; i < tabsBtns.length; i++) {
//       if (event.target === tabsBtns[i]) {
//         displayCurrentTab(i);
//         break;
//       }
//     }
//   }
  
// });

//Sliders
// let swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
