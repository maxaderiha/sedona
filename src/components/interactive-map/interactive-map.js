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
