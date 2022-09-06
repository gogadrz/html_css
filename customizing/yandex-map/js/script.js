ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("myMap1", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [53.76677200439855, 87.14444299999995],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16
  });

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.8, 37.8] // координаты точки
    }
  });

  // Вспомогательный класс, который можно использовать
  // вместо GeoObject c типом геометрии «Point» (см. предыдущий пример)
  var myPlacemark = new ymaps.Placemark([53.76677200439855, 87.14444299999995], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/outdoor_camper.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  // Размещение геообъекта на карте.
  // myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark);
}
