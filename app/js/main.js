//Accordion JS
const accordions = document.querySelectorAll('.accordion__item');

for(item of accordions) {
    item.addEventListener('click', function() {
        this.classList.toggle('accordion__item--active');
    });
}




 








