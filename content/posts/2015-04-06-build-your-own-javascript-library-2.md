---
title: 'بناء مكتبة جافاسكريبت من الصفر ـ الجزء الثاني'
date: '2015-04-06'
slug: 'web-development/javascript/build-your-own-javascript-library-2'
template: 'post'
categories:
  - جافاسكريبت
tags:
  - jQuery
  - js library from scratch cours
  - مكتبة
  - مكتبة جافاسكريبت
thumbnail: '../thumbnails/js.png'
---

في هذا الجزء من دورة بناء مكتبة جافاسكريبت من الصفر سنرى كيفية إضافة دوال الأحداث Events Methods. الدالة bind ستقوم بإضافة الحدث إلى عنصر أوعناصر معينة بينما ستقوم دالة unbind بدور عكسي وهو تجريد العنصر من هذا الحدث.(تما كما هو الحال عند استعمال مكتبة جيكويري jQuery).

## الكود البرمجي

```js
function o(selector) {
  if (this == window) {
    return new o(selector);
  }
  if (typeof selector == 'string') {
    this.el = Sizzle(selector);
  } else if (typeof selector == 'object' && selector.nodeType != 'undefined') {
    this.el = selector;
  } else {
    throw 'Invalid selector!';
  }
}

o.prototype.bind = function(event, callback) {
  if (o.isArray(this.el)) {
    this.el.forEach(function(elm) {
      o.addEvent(elm, event, callback);
    });
  } else {
    o.addEvent(this.el, event, callback);
  }
  return this;
};
o.prototype.unbind = function(event, callback) {
  if (o.isArray(this.el)) {
    this.el.forEach(function(elm) {
      o.removeEvent(elm, event, callback);
    });
  } else {
    o.removeEvent(this.el, event, callback);
  }
  return this;
};
o.prototype.show = function() {
  this.el.forEach(function(elm) {
    elm.style.display == 'none' && (elm.style.display = '');
  });
};
o.prototype.hide = function() {
  this.el.forEach(function(elm) {
    elm.style.display = 'none';
  });
};

o.addEvent = function(el, event, callback) {
  el.addEventListener(event, callback);
};
o.removeEvent = function(el, event, callback) {
  el.removeEventListener(event, callback);
};
o.isArray =
  Array.isArray ||
  function(obj) {
    return obj instanceof Array;
  };
```

## شاهد الفيديو للمزيد من التفاصيل:

<iframe width="100%" height="550" src="https://www.youtube.com/embed/h7dKzHw6Aiw" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

إنضموا إلى نشرتنا البريدية أسفله للتوصل بآخر الدروس المرئية والمكتوبة.
