let map;
function initMap() {
  //var map = new google.maps.Map(document.getElementById("map"), options);
  var locations = [
    [new google.maps.LatLng(52.276831601601145, 104.23337487698737)],
    [new google.maps.LatLng(52.226831601601145, 104.24137487698737)],
    [new google.maps.LatLng(52.272831601601145, 104.23237487698737)],
    [new google.maps.LatLng(52.211831601601145, 104.24337487698737)],
    [new google.maps.LatLng(52.223831601601145, 104.10437487698737)],
    [new google.maps.LatLng(52.234831601601145, 104.24537487698737)],
    [new google.maps.LatLng(52.245831601601145, 104.255637487698737)],
    [new google.maps.LatLng(52.256831601601145, 104.28377487698737)],
    [new google.maps.LatLng(52.267831601601145, 104.27387487698737)],
    [new google.maps.LatLng(52.278831601601145, 104.2737487698737)],
    [new google.maps.LatLng(52.289831601601145, 104.28107487698737)],
    [new google.maps.LatLng(52.291031601601145, 104.09337487698737)],
    [new google.maps.LatLng(52.101131601601145, 104.10337487698737)],
    [new google.maps.LatLng(52.111231601601145, 104.11337487698737)],
    [new google.maps.LatLng(52.121331601601145, 104.12337487698737)],
    [new google.maps.LatLng(52.131431601601145, 104.13337487698737)],
    [new google.maps.LatLng(52.141531601601145, 104.14337487698737)],
    [new google.maps.LatLng(52.151631601601145, 104.15337487698737)],
  ];
  var icon = {
    url: "img/icons/map.svg",
    //scaledSize: new google.maps.Size(18, 20),
    //anchor: new google.maps.Point(9, 10)
  };
  var iconActive = {
    url: "img/icons/mapActive.svg",
    //scaledSize: new google.maps.Size(18, 20),
    //anchor: new google.maps.Point(9, 10)
  };
  var markers = new Array();
  var infowindow = new google.maps.InfoWindow({
    //pixelOffset: new google.maps.Size(-230,250)
  });
  var infowindowTwo = new google.maps.InfoWindow({
    
  });
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    panControl: false,
    mapTypeControl: false,
    center: locations[0][0],
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#000000",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  });
  mapTwo = new google.maps.Map(document.getElementById("mapTwo"), {
    zoom: 13,
    panControl: false,
    mapTypeControl: false,
    disableDefaultUI: true,
    center: { lat: 52.25605292700818, lng: 104.33624379895791 },
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#000000",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  });
  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      icon: icon,
      position: locations[i][0],
      map: map,
      //title: "",
    });
    var markerTwo = new google.maps.Marker({
      icon: iconActive,
      position: { lat: 52.25605292700818, lng: 104.33624379895791 },
      map: mapTwo,
    });

    google.maps.event.addListener(marker,"click",(function (marker, i) {
        return function () {
          for (var m = 0; m < markers.length; m++) {
            markers[m].setIcon(icon);
          }
          var cnt = i + 1;
          infowindow.setContent(
            document.querySelector(".deapth-maps__item_" + cnt).innerHTML
          );
          infowindow.open(map, marker);
          marker.setIcon(iconActive);
          setTimeout(function () {}, 10);
        };
      })(marker, i)
    );
    markers.push(marker);
		    google.maps.event.addListener(markerTwo, "click", function (e) {
          infowindowTwo.setContent(
            document.querySelector(".item-footer").innerHTML
          );
          infowindowTwo.open(mapTwo, markerTwo);
          setTimeout(function () {}, 10);
        });
  }
}

/*
function mapAdd() {
  let tag = document.createElement("script");
  tag.src =
    "https://maps.google.com/maps/api/js?&amp;key=AIzaSyA9nLQgJZnnsPZ4o7VrUhUhQd6k7V_fIaY&callback=mapInit";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
function mapInit(n = 1) {
  google.maps.Map.prototype.setCenterWithOffset = function (
    latlng,
    offsetX,
    offsetY
  ) {
    var map = this;
    var ov = new google.maps.OverlayView();
    ov.onAdd = function () {
      var proj = this.getProjection();
      var aPoint = proj.fromLatLngToContainerPixel(latlng);
      aPoint.x = aPoint.x + offsetX;
      aPoint.y = aPoint.y + offsetY;
      map.panTo(proj.fromContainerPixelToLatLng(aPoint));
      //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
    };
    ov.draw = function () {};
    ov.setMap(this);
  };
  var markers = new Array();
  var infowindow = new google.maps.InfoWindow({
    //pixelOffset: new google.maps.Size(-230,250)
  });
  var locations = [
    [new google.maps.LatLng(52.276831601601145, 104.23337487698737)],
    [new google.maps.LatLng(52.226831601601145, 104.24137487698737)],
    [new google.maps.LatLng(52.272831601601145, 104.23237487698737)],
    [new google.maps.LatLng(52.211831601601145, 104.24337487698737)],
    [new google.maps.LatLng(52.223831601601145, 104.10437487698737)],
    [new google.maps.LatLng(52.234831601601145, 104.24537487698737)],
    [new google.maps.LatLng(52.245831601601145, 104.255637487698737)],
    [new google.maps.LatLng(52.256831601601145, 104.28377487698737)],
    [new google.maps.LatLng(52.267831601601145, 104.27387487698737)],
    [new google.maps.LatLng(52.278831601601145, 104.2737487698737)],
    [new google.maps.LatLng(52.289831601601145, 104.28107487698737)],
    [new google.maps.LatLng(52.291031601601145, 104.09337487698737)],
    [new google.maps.LatLng(52.101131601601145, 104.10337487698737)],
    [new google.maps.LatLng(52.111231601601145, 104.11337487698737)],
    [new google.maps.LatLng(52.121331601601145, 104.12337487698737)],
    [new google.maps.LatLng(52.131431601601145, 104.13337487698737)],
    [new google.maps.LatLng(52.141531601601145, 104.14337487698737)],
    [new google.maps.LatLng(52.151631601601145, 104.15337487698737)],
  ];
  var options = {
    zoom: 13,
    panControl: false,
    mapTypeControl: false,
    center: locations[0][0],
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#000000",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
  var icon = {
    url: "img/icons/map.svg",
    //scaledSize: new google.maps.Size(18, 20),
    //anchor: new google.maps.Point(9, 10)
  };
  var iconActive = {
    url: "img/icons/mapActive.svg",
    //scaledSize: new google.maps.Size(18, 20),
    //anchor: new google.maps.Point(9, 10)
  };

  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      icon: icon,
      position: locations[i][0],
      map: map,
      //title: "",
    });
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          for (var m = 0; m < markers.length; m++) {
            markers[m].setIcon(icon);
          }
          var cnt = i + 1;
          infowindow.setContent(
            document.querySelector(".deapth-maps__item_" + cnt).innerHTML
          );
          infowindow.open(map, marker);
          marker.setIcon(iconActive);
          map.setCenterWithOffset(marker.getPosition(), 0, 0);
          setTimeout(function () {}, 10);
        };
      })(marker, i)
    );
    markers.push(marker);
  }
  if (n) {
    var nc = n - 1;
    setTimeout(function () {
      google.maps.event.trigger(markers[nc], "click");
    }, 500);
  }
}

if (document.querySelector("#map")) {
  mapAdd();
}

*/

/* YA
function map(n) {
	ymaps.ready(init);
	function init() {
		// Создание карты.
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			controls: [],
			center: [43.585525, 39.723062],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 10
		});

		let myPlacemark = new ymaps.Placemark([43.585525, 39.723062], {
		},{
			// Опции.
			//balloonContentHeader: 'Mistoun',
			//balloonContentBody: 'Москва, Николоямская 40с1',
			//balloonContentFooter: '+ 7(495) 507-54 - 90',
			//hasBalloon: true,
			//hideIconOnBalloonOpen: true,

			hasBalloon: false,
			hideIconOnBalloonOpen: false,
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: 'img/icons/map.svg',
			// Размеры метки.
			iconImageSize: [40, 40],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-20, -20],
			// Смещение слоя с содержимым относительно слоя с картинкой.
			iconContentOffset: [0, 0],
		});
		myMap.geoObjects.add(myPlacemark);

		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('drag');
	}
}
*/
