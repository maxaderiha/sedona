'use strict';

function InputNumberModel(elem) {
    this.inc = function (className) {
        let input = document.querySelector(`.${className}`).parentNode.children[1];
        let currValue = +input.value;
        input.value = currValue < (+input.max || Infinity) ? ++currValue : currValue;
    };

    this.dec = function (className) {
        let input = document.querySelector(`.${className}`).parentNode.children[1];
        let currValue = +input.value;
        input.value = currValue > +input.min ? --currValue : currValue;
    };

    let self = this;

    elem.addEventListener('click', (event) => {
        let target = event.target;
        let action = target.getAttribute('data-action');
        let className;
        if (target.getAttribute('class')) {
            className = target.getAttribute('class').split('   ')[1];
        } else {
            return;
        }
        if (action && className) {
            self[action](className);
        }
    });
}

new InputNumberModel(document.querySelector('.js-inputs-number'));