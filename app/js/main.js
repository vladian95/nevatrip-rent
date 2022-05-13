//Accordion 
const accordions = document.querySelectorAll('.accordion__item-wrapper');

for (item of accordions) {
    item.addEventListener('click', function () {
        this.classList.toggle('accordion__item--active');
    });
}

$(document).ready(function () {
    $('.accordion__item-wrapper').click(function () {
        $(this).next('.accordion__dropDown').slideToggle();
    });
});

// POPUP
$(".specific-transport__component").on('click', function () {
    $(".custom-model-main").addClass('model-open');
});
$(".close-btn, .bg-overlay").click(function () {
    $(".custom-model-main").removeClass('model-open');
});

// TABS
$('.product-one__tabs .session__btn-item, settings__tabs .session__btn-item').on('click', function (event) {
    let id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs').find('.session__btn-item').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
});

$('.product-two__tabs .specific-session__btn-item, settings__tabs .specific-session__btn-item').on('click', function(event) {
    let id = $(this).attr('data-id');
        $('.product-two__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-two__tabs .tabs, .settings__tabs').find('.specific-session__btn-item').removeClass('specific-session--active');
        $(this).addClass('specific-session--active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
});




















