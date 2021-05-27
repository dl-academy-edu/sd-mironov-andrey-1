var popup = document.querySelector('.modal-popup');
var buttonOpen = document.querySelector('.banner-btn-js');
var buttonClose = popup.querySelector('.popup-close-js');
var input = popup.querySelector('input');

buttonOpen.addEventListener('click', function() {
    popup.classList.add('popup-open');
    input.focus();
})

buttonClose.addEventListener('click', function() {
    popup.classList.remove('popup-open');
})

window.addEventListener('keydown', function(event) {
    console.log(event);

    if (event.code === "Escape") {
        if (popup.classList.contains('popup-open')) {
            popup.classList.remove('popup-open');
        }
    }
})