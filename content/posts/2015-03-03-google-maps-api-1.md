---
title: 'تعرف على منصة Google Maps Api - الجزء الأول'
date: '2015-03-03'
slug: 'web-development/javascript/google-maps-api-1'
template: 'post'
categories:
  - جافاسكريبت
tags:
  - Gmaps
  - Google Maps Api
  - google maps api cours
  - خرائط غوغل
thumbnail: '../thumbnails/gmaps.png'
---

تعتبر خرائط غوغل Google Maps الأكثر استعمالا على شبكة الإنترنت نظرا لدقتها العالية وجودتها وكفائتها الفريدتين. كما أن اسم شركة غوغل العملاقة التي تقف وراءها يلعب دورا كبيرا في احتلالها هذه المكانة من خلال الدعم الكبير الموفَّر لها. عند الإشتغال في مشروع احترافي فإن استعمال منصة خرائط غوغل Google Maps Api (منصة الجافاسكريبت) يصبح في أحيان عدة أمرا ضروريا لا مفر منه، ولهذا قررنا انجاز سلسلة من الدروس تخص هذه المنصة حتى نكون فكرة واضحة عن كيفية عملها وتنصيبها.

## التنصيب واستدعاء المنصة

أولا نقوم باستدعاء سكريبت المنصة في منطقة ال `<head>` على النحو التالي :

```html
<!DOCTYPE html>
<html>
  <head>
    <script
      type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=API_KEY"
    ></script>
  </head>
  <body></body>
</html>
```

مع تعويض API_KEY بمفتاح نصي بحيث تستطيع غوغل تتبع آداء الخرائط على موقعك ومعرفة عدد المرات التي تم فيها تحميل الخريطة وهنا جذير بالذكر أن منصة مجانية للمستعملين مادام عدد التحميلات أقل من 25000 وإلا فإن شراء الترخيص للمزيد يصبح أمرا ضروريا.

- يمكن العمل بالمنصة من دون المفتاح النصي ولكن غوغل لاتنصح بهذا.
- احصل على المفتاح النصي من خلال هذا الرابط

```
https://developers.google.com/maps/documentation/javascript/tutorial#api_key
```

## إضافة الكود الخاص بنا

بعد استدعاء السكريبت، نقوم بإنشاء عنصر `<div>` ونعطيه id معين (مثلا map) سنستعمله لاحقا في الجافاسكريبت الخاص بنا و نعطيه عرضا وطولا معينين حسب الحالة :

```html
<html>
  <head>
    <script
      type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=API_KEY"
    ></script>
  </head>
  <body>
    <div id="map-canvas" style="width: 600px; height: 400px;"></div>
  </body>
</html>
```

وبعد ذلك سنضيف شيفرة الجافاسكريبت التالية في صفحتنا أو في ملف خارجي :

```javascript
function initialize() {
  var mekkah = new google.maps.LatLng(21.42483, 39.823201);
  var mapOptions = {
    center: mekkah,
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
```

قمنا بانشاء دالة أسمايناها initialize وفي سطرها أنشأنا المتغير mekkah ويحتوي على إحداثيات مركز الخريطة الذي اخترناه وفي هذه الحالة اخترت مدينة مكة المكرمة.

[![خريطة غوغل](../images/Capture-d’écran-2015-03-03-à-01.41.02-300x193.png)](../images/Capture-d’écran-2015-03-03-à-01.41.02.png) خريطة غوغل ومدينة مكة المكرمة في الوسط

بعد ذلك نقوم بإنشاء متغير mapOptions على شكل litteral object يحتوي على خيارات لضبط الخريطة حسب حاجتنا، هنا أردنا أن يكون مقدار الزوم يساوي ثمانية والمركز كما شرحنا سالفا سيكون هو إحداثيات مكة المكرمة. بعد ذلك ننشء متغير اسمه map ونمرر إليه بارامترين: الأول هو id العنصر `<div>` الذي أنشأناه سالفا والثاني هو المتغير mapOptions.

وأخير نقوم باستدعاء الدالة ()initialize عندما يتم تحميل Google Maps Api بشكل كامل على النحو التالي :

```javascript
google.maps.event.addDomListener(window, 'load', initialize);
```

في الأخير يكون الكود الإجمالي كما يلي :

```html
<!DOCTYPE html>
<html>
  <head>
    <script
      type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=API_KEY"
    ></script>
    <script type="text/javascript">
      function initialize() {
        var mekkah = new google.maps.LatLng(21.42483, 39.823201);
        var mapOptions = {
          center: mekkah,
          zoom: 8
        };
        var map = new google.maps.Map(
          document.getElementById('map'),
          mapOptions
        );
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>
  </head>
  <body>
    <div id="map" style="width: 600px; height: 400px;"></div>
  </body>
</html>
```

الآن وعند فتح الصفحة في المتصفح ستظهر لنا خريطة غوغل الجميلة كما يتبين [هنا](http://tutomena.com/demos/google-maps-api/index.html). نراكم في الجزء القادم لنكتشف المزيد في هذه المنصة المتميزة. لا تنسوا مشاركة الدرس مع أصدقائكم إذا أعجبكم :)

> إذا كانت لديكم أية أسئلة أواستفهامات لا تترددوا في طرحها أسفله في منطقة التعليقات.
