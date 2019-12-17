---
title: 'حل مشكل الحدود المغربية على خرائط غوغل'
date: '2017-03-25'
slug: 'web-development/javascript/morocco-borders-google-maps'
template: 'post'
categories:
  - جافاسكريبت
tags:
  - خرائط غوغل
thumbnail: '../thumbnails/gmaps.png'
---

يجب الحذر جيدا عند التعامل مع **خريطة المغرب** وبالخصوص على [خرائط غوغل](http://www.tutomena.com/web-development/javascript/google-maps-api-1/) التي يظهر فيها خط متقطع يفصل بلدنا عن صحرائه.

في هذا المقال سنقدم لكم حلا عمليا وسهلا لإخفاء هذه الحدود الوهمية شمال الصحراء المغربية.

أولا لنقم بإنشاء الخريطة بالطريقة الإعتيادية :

```html
<script
  type="text/javascript"
  src="http://maps.google.com/maps/api/js?key=AIzaSyC5vcJTwyopA2sETed9eRwebKEUVyoz94c"
></script>
<script type="text/javascript">
  var map;
  var morocco = new google.maps.LatLng(29.54619, -7.36133);
  function init() {
    var mapOptions = {
      zoom: 5,
      center: morocco,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', init);
</script>

<div id="map" style="width:650px; height:500px;"></div>
```

كما تلاحظون عند تجريب هذا الكود، الخريطة مقسومة بواسطة الخط المتقطع الذي تكلمنا عليه كون غوغل تعتبر هذه المنطقة متنازع عليها. ولتخطي هذا المشكل سنقوم بحذف حدود جميع الدول من الخريطة عن طريق الخيار administrative.country ، ثم بعد ذلك نقوم برسم الحدود الشرقية والجنوبية للبلد عن طريق الكائن FusionTablesLayer :

```html
<script
  type="text/javascript"
  src="http://maps.google.com/maps/api/js?key=AIzaSyC5vcJTwyopA2sETed9eRwebKEUVyoz94c"
></script>

<script type="text/javascript">
  var map;
  var mapStyles = [
    { featureType: 'administrative.country', stylers: [{ visibility: 'off' }] }
  ];
  var mapType = new google.maps.StyledMapType(mapStyles, { name: 'Morocco' });
  var morocco = new google.maps.LatLng(29.54619, -7.36133);
  function init() {
    var mapOptions = {
      zoom: 5,
      center: morocco,
      mapTypeControlOptions: {
        mapTypeIds: ['fixed_morocco']
      }
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.mapTypes.set('fixed_morocco', mapType);
    map.setMapTypeId('fixed_morocco');
    layer = new google.maps.FusionTablesLayer({
      query: {
        select: 'geometry',
        from: '1S4aLkBE5u_WS0WMVSchhBgMLdAARuPEjyW4rs20',
        where: "col1 contains 'MAR'"
      },
      styles: [
        {
          polylineOptions: {
            strokeColor: '#333333',
            strokeWeight: 2
          }
        }
      ],
      suppressInfoWindows: true
    });
    layer.setMap(map);
  }
  google.maps.event.addDomListener(window, 'load', init);
</script>
```

الآن أصبحت خريطة المغرب كاملة مع الصحراء. في دقائق معدودة استطعنا حل هذا المشكل وبالتالي فالموضوع بسيط ولا يتطلب مجهودا كبيرا.

---

ترجمة بتصرف للموضوع الأصلي : [Fix Morocco borders on Google Maps](http://daker.me/2015/01/fix-morocco-borders-on-google-maps.html)
