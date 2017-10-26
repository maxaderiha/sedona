'use strict';

function PopupModel(button, elem) {

    this.open = function () {
        elem.classList.remove('hidden');
        elem.classList.add('show');
    };

    this.close = function () {
        elem.classList.remove('show');
        elem.classList.add('hidden');
    };


    let self = this;

    button.addEventListener('click', (event) => {
        event.preventDefault();
        let action = button.getAttribute('data-action');

        if (action) {
            self[action]();
        }
    });
}
