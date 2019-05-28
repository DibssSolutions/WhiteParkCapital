export default class Map {

  constructor(config) {
    this._mapHTML = config.map.get(0);
    this._center = {
      lat: +config.map.data('center-lat'),
      lng: +config.map.data('center-lng')
    };

    this._init();
  }

  _init() {
    this._createMap();
  }

  _createMap() {
    this._map = new google.maps.Map(this._mapHTML, {
      center: this._center,
      zoom: 15,
      // disableDefaultUI: true,
      // scrollwheel: false,
      // zoomControl: true,
      // draggable: false,
      styles: [
        {
          'featureType': 'administrative',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#444444'
            }
          ]
        },
        {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#f2f2f2'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'saturation': '-100'
            },
            {
              'lightness': '57'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'lightness': '1'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': -100
            },
            {
              'lightness': 45
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels.text',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'visibility': 'off'
            },
            {
              'color': '#484848'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'transit.station.bus',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'transit.station.bus',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'saturation': '0'
            },
            {
              'lightness': '0'
            },
            {
              'gamma': '1.00'
            },
            {
              'weight': '1'
            }
          ]
        },
        {
          'featureType': 'transit.station.bus',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'saturation': '-100'
            },
            {
              'weight': '1'
            },
            {
              'lightness': '0'
            }
          ]
        },
        {
          'featureType': 'transit.station.rail',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'transit.station.rail',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'gamma': '1'
            },
            {
              'lightness': '40'
            }
          ]
        },
        {
          'featureType': 'transit.station.rail',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'saturation': '-100'
            },
            {
              'lightness': '30'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
            {
              'color': '#d2d2d2'
            },
            {
              'visibility': 'on'
            }
          ]
        }
      ]
    });
    new google.maps.Marker({
      position: this._center,
      map: this._map,
      icon: {
        url: 'img/pin.png',
        scaledSize: new google.maps.Size(70, 70)
      }
    });
  }

};
let map = $('.js-map');

if (map.length) {
  map.each(function() {
    new Map({
      map: $(this)
    });
  });
};
