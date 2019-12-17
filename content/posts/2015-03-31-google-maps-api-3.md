---
title: 'تعرف على منصة Google Maps Api – الجزء الثالث'
date: '2015-03-31'
slug: 'web-development/javascript/google-maps-api-3'
template: 'post'
categories:
  - جافاسكريبت
tags:
  - Google Maps Api
  - google maps api cours
thumbnail: '../thumbnails/gmaps.png'
---

تعتبر **Geocode** من أهم الخدمات التي تقدمها لنا منصة خرائط غوغل (**Google Maps Api**) كونها تمكننا من الحصول معلومات جغرافية هامة كإحداثيات موقع ما (Latitude & Longitude) انطلاقا من العنوان أو اسم المنطقة، والعكس صحيح، أي أن **Geocoding Api** تمكننا كذلك من الحصول على عنوان نقطة ما على الخريطة انطلاقا من إحداثياتها.

## الحصول على الإحداثيات انطلاقا من العنوان

يتم الحصول على هذه المعلومات من geocode بطريقة غير متزامنة (**Asynchronous**) وبالتالي فدالة geocode تقبل عاملين (بارامترين) الأول عبارة عن كائن (litteral object) يحتوي على المعلومات التي نود إرسالها لمنصة geocode api، أما البارامتر الثاني فهو عبارة عن دالة callback وفي داخلها نقوم باستقبال المعلومات التي أتتنا من geocode.

هذه الإجابة تأتينا على شكل مصفوفة (Array) تضم العديد من المعلومات كالعنوان الكامل، الإحداثيات، إسم المكان، ...إلخ ونحن ما يهمنا الآن هي الإحدثيات (Latitude & Longitude) ويتم استخراجها من المصفوفة كالتالي :

```js
var geocoder;
var map;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 8,
    center: latlng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode({ address: address }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
```

```html
<body onload="initialize()">
  <div id="map-canvas" style="width: 320px; height: 480px;"></div>
  <div>
    <input id="address" type="textbox" value="Sydney, NSW" />
    <input type="button" value="Encode" onclick="codeAddress()" />
  </div>
</body>
```

أولا قمنا بإنشاء خريطة جديدة كما تعلمنا في [الدرس الأول](http://www.tutomena.com/web-development/javascript/google-maps-api-1/ 'تعرف على منصة Google Maps Api – الجزء الأول') وذلك وسط الدالة initialize حيث أنشأنا كذلك كائن اسمه geocoder من الكلاس google.maps.Geocoder. بعد ذلك أنشأنا دالة أسميناها codeAddress تنفذ عند الضغط على الزر (inupt button) بعد أن نقوم بأخذ النص الموجود داخل حقل العنوان (input address) ونقوم بتمريره لدالة geocoder.geocode.

بعد ذلك، في داخل دالة الرد (callback) نقوم بعمل شرط من أجل التأكد من نجاح عملية اتصال geocoder بخوادم غوغل، ثم نأخذ الإحداثيات من المصفوفة التي تأتينا في الجواب ونستعملها حسب الحاجة. _\*في هذا المثال، أضفنا علامة(Marker) إلى الخريطة مستغلين الإحداثيات التي حصلنا عليها، والنتيجة في [هذا الرابط](https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple 'Geocoding service')._

## الحصول على العنوان انطلاقا من الإحداثيات

خدمة Geocoding تمكننا كذلك من عكس العملية، أي الحصول على عنوان نصي لمكان معين (**human-readable address**) انطلاقا من إحداثياته.

```js
var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(40.730885, -73.997383);
  var mapOptions = {
    zoom: 8,
    center: latlng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function codeLatLng() {
  var input = document.getElementById('latlng').value;
  var latlngStr = input.split(',', 2);
  var lat = parseFloat(latlngStr[0]);
  var lng = parseFloat(latlngStr[1]);
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({ latLng: latlng }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        map.setZoom(11);
        marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
        infowindow.setContent(results[1].formatted_address);
        infowindow.open(map, marker);
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });
}
```

نلاحظ في المثال الثاني، أننا مررنا هذه المرة بارامتر الإحداثيات (Latitude & Longitude) عوض العنوان في المثال الأول، وداخل دالة الرد callback نقوم مرة أخرى بالتأكد من نجاح عملية الإتصال، تماما كما رأينا في المثال الأول، وبعد ذلك نقوم باسترجاع العنوان الذي يأتينا على عدة هيئات وأشكال نختار منها الشكل الذي يناسبنا.

المثال السابق يعطينا لائحة عناوين كما يلي :

```js
results[0].formatted_address: "275-291 Bedford Ave, Brooklyn, NY 11211, USA",
results[1].formatted_address: "Williamsburg, NY, USA",
results[2].formatted_address: "New York 11211, USA",
results[3].formatted_address: "Kings, New York, USA",
results[4].formatted_address: "Brooklyn, New York, USA",
results[5].formatted_address: "New York, New York, USA",
results[6].formatted_address: "New York, USA",
results[7].formatted_address: "United States"
```

ونحن اخترنا منها العنوان الثاني :

```js
results[1].formatted_address;
```

ويمكنكم تجربة سكريبت المثال الثاني على [هذا الرابط](https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse).

وهكذا نكون قد كوننا فكرة عن أهمية خدمة Geocoding وما المثالين السابقين إلا جزء يسير مما يمكن فعله بواسطتها ولاكتشاف المزيد من مزاياها أقترح عليكم زيارة [هذا الرابط](https://developers.google.com/maps/documentation/javascript/geocoding). إلى درس آخر إن شاء الله في سلسلة Google Maps Api.

**لا تنسوا الإشتراك في قائمتنا البريدية أسفله للتوصل بآخر الدروس والمقالات.**
