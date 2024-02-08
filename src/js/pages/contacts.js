document.getElementById('map') &&  initMap();

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapControls } = ymaps3;

  // Load the control package and extract the zoom control from it
  const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById("map"),

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [37.548825600327596, 55.83447645057758],

        // Уровень масштабирования
        zoom: 15,

      },
      zoomRange: {
        min: 15,
        max: 20
      },
      camera: {
        tilt: (40 * Math.PI) / 180
      },
      showScaleInCopyrights: false,
      theme: 'dark',

    }
  );
  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer())

  const content = document.createElement('div');

  // Инициализируйте маркер
  const marker = new YMapMarker(
    {
      coordinates: [37.548825600327596, 55.83447645057758],
    },
    content
  );

  // Добавьте маркер на карту
  map.addChild(marker);

  // Добавьте произвольную HTML-разметку внутрь содержимого маркера
  content.innerHTML = '<img class="map-mark" src="./assets/images/contacts/location.svg" alt="">';

  map.addChild(
    // Using YMapControls you can change the position of the control
    new YMapControls({ position: 'left' })
      // Add the zoom control to the map
      .addChild(new YMapZoomControl({}))
  );

  const layer = new YMapDefaultSchemeLayer({
    customization: [

      // Меняем цвет подписей для всех POI и узлов сети общественного транспорта.
      {
        tags: {
          any: ['poi', 'transit_location']
        },
        elements: 'label.text.fill',
        stylers: [
          {
            scale: 0,
          }
        ]
      },
      {
        tags: {
          any: ['poi', 'transit_location']
        },
        elements: 'label',
        stylers: [
          {
            scale: 0,
            visibility: "off",
            opacity: 0
          }
        ]
      },
      {
        tags: {
          any: ['admin']
        },
        elements: 'label',
        stylers: [
          {
            scale: 0,
            visibility: "off",
            opacity: 0
          }
        ]
      },
      {
        tags: {
          any: ['building']
        },
        elements: 'geometry',
        stylers: [
          {
            color: '#757474',
            opacity: 0,
            visibility: "off"
          }
        ]
      },


    ]
  });
  map.addChild(layer);
}
