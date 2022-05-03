//Accordion JS
const accordions = document.querySelectorAll('.accordion__item-wrapper');

for(item of accordions) {
    item.addEventListener('click', function() {
        this.classList.toggle('accordion__item--active');
    });
}

$(document).ready(function() {
    $('.accordion__item-wrapper').click(function() {
        $(this).next('.accordion__dropDown').slideToggle();
    });
});










  








