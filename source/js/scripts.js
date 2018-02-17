(function () {
  // SVG for Everybody
  svg4everybody();

  // Menu
  var menuToggle = function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  };

  var navMain = document.querySelector('.main-nav');
  var navToggleOpen = document.querySelector('.main-nav__toggle--open');
  var navToggleClose = document.querySelector('.main-nav__toggle--close');

  navMain.classList.remove('main-nav--nojs');

  navToggleOpen.addEventListener('click', menuToggle);
  navToggleClose.addEventListener('click', menuToggle);

  // Yandex map
  var getMapConfig = function () {
    if (window.innerWidth >= 1300) {
      return {
        center: [59.93902464, 30.31901718],
        iconImageSize: [110, 94],
        iconImageOffset: [-55, -94],
        zoom: 17
      };
    }
    else if (window.innerWidth >= 768) {
      return {
        center: [59.93886453, 30.32323513],
        iconImageSize: [110, 94],
        iconImageOffset: [-55, -94],
        zoom: 18
      };
    }
    else {
      return {
        center: [59.93886453, 30.32323513],
        iconImageSize: [53, 45],
        iconImageOffset: [-26, -45],
        zoom: 17
      };
    }
  };

  var myMap,
    curConfig = getMapConfig();

  ymaps.ready(initMap);

  function initMap() {
    myMap = new ymaps.Map("map", {
      center: curConfig.center,
      zoom: curConfig.zoom,
      controls: [],
      scrollZoom: false
    });
    myMap.behaviors.disable('scrollZoom');

    myPlacemark = new ymaps.Placemark([59.93877301, 30.32321367], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/map-pin.png',
      iconImageSize: curConfig.iconImageSize,
      iconImageOffset: curConfig.iconImageOffset
    });
    myMap.geoObjects.add(myPlacemark);
  }

  window.addEventListener("resize", function () {
    curConfig = getMapConfig();
    myMap.setCenter(curConfig.center, curConfig.zoom);
  });
})();
