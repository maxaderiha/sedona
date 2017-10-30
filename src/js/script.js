'use strict';
(function () {
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

        elem.addEventListener('tap', (event) => {
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
})();
'use strict';
(function () {
    function InteractiveMapModel(button, elem) {
        PopupModel.call(this, button, elem);

        let parentOpen = this.open;
        this.open = function () {
            parentOpen();
            elem.classList.add('map-animation');
        };

        let parentClose = this.close;
        this.close = function () {
            parentClose();
            elem.classList.remove('map-animation');
        };

    }

    let overlay = document.querySelector('.overlay');

    let openMapMobBtn = document.querySelector('.js-open-map-mobile');
    let openMapTabBtn = document.querySelector('.js-open-map-tablet');
    let mapCloseBtn = document.querySelector('.interactive-map__close-btn');
    let map = document.querySelector('.interactive-map');

    new PopupModel(openMapMobBtn, overlay);
    new PopupModel(openMapTabBtn, overlay);
    new PopupModel(mapCloseBtn, overlay);
    new InteractiveMapModel(openMapMobBtn, map);
    new InteractiveMapModel(openMapTabBtn, map);
    new InteractiveMapModel(mapCloseBtn, map);
})();

'use strict';
(function () {
    function MobileNavModel(button, elem) {
        PopupModel.call(this, button, elem);

        let parentOpen = this.open;
        this.open = function () {
            elem.classList.add('mobile-nav-animation');
            parentOpen();
        };

        let parentClose = this.close;
        this.close = function () {
            elem.classList.remove('mobile-nav-animation');
            parentClose();
        };

    }

    let mobileNav = document.querySelector('.mobile-nav');

    new MobileNavModel(document.querySelector('.js-mobile-nav-close-btn'), mobileNav);
    new MobileNavModel(document.querySelector('.js-mobile-nav-open-btn'), mobileNav);
})();
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

    button.addEventListener('tap', (event) => {
        event.preventDefault();
        let action = button.getAttribute('data-action');

        if (action) {
            self[action]();
        }
    });
}
