//Accordion js
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




