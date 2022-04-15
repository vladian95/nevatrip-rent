//Accordion JS
// const ACCORDION = document.getElementsByClassName("specific-accordion__item-wrapper");

// for (let i = 0; i < ACCORDION.length; i++) {
//   ACCORDION[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


// Tabs 
const tabs = document.querySelector(".specific-session__tabs");
const tabsBtns = tabs.querySelectorAll(".specific-session__btn-item");
const tabsContents = tabs.querySelectorAll(".specific-session__content");

function displayCurrentTab(current) {
  for (let i = 0; i < tabsContents.length; i++) {
    tabsContents[i].style.display = (current === i) ? "flex" : "none";
  }
}
displayCurrentTab(0);

tabs.addEventListener("click", event => {
  if (event.target.className === "specific-session__btn-item") {
    for (let i = 0; i < tabsBtns.length; i++) {
      if (event.target === tabsBtns[i]) {
        displayCurrentTab(i);
        break;
      }
    }
  }
});

