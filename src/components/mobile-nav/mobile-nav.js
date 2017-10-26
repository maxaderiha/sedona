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