---
title: 'مكتبة Zepto.js'
date: '2015-03-02'
slug: 'web-development/javascript/zepto-library'
template: 'post'
categories:
  - جافاسكريبت
tags:
  - jQuery
  - zepto
  - zepto.js
thumbnail: '../thumbnails/js.png'
---

تعتبر **زيبتو** Zepto.js من بين مكتبات جافاسكريبت الجميلة والمفيدة ولكنها تبقى غير معروفة تماما لدى المبرمجين، ولذلك قررنا إلقاء نظرة عليها حتى يتعرف عليها الجميع.

إذا كنت تعرف جيكويري وسبق لك أن تعاملت بها فأنت حتما ستتعامل مع زيبتو Zepto.js بكل يسر فهي نسخة مطابقة لمكتبة **جون ريزيغ** إلا أنها أخف وأسرع لكونها تخلت عن بعض الجزئيات التي ظلت **جيكويري** متشبتة بها كدعم المتصفحات القديمة ومنها انترنت إكسبلورر 6، 7، 8 وغيرها. إليكم لائحة بأهم المتصفحات المدعومة من زيبتو :

- Safari 6+ (Mac)
- Chrome 30+ (Windows, Mac, Android, iOS, Linux, Chrome OS)
- Firefox 24+ (Windows, Mac, Android, Linux, Firefox OS)
- iOS 5+ Safari
- Android 2.3+ Browser
- Internet Explorer 10+ (Windows, Windows Phone)

ولهذا وغيره نجد أن حجم هذه المكتبة وهي مصغرة ومضغوطة يساوي تقريبا 10 ك.ب، بينما يصل حجم جيكويري 2 المصغرة والمضغطة إلى 30 ك.ب رغم أن الأخيرة كذلك تخلت عن دعم المتصفحات القديمة وإلا لتضاعف الحجم كما هو الحال في إصدارات جيكويري 1.

[![zepto-stats](../images/zepto-stats-300x227.jpg)](../images/zepto-stats.jpg)

مثال يظهر التطابق التام بين زيبتو وجيكويري من حيث التركيب أو Syntax :

```js
// مثال عمل كليك على عنصر معين
$('#element').on('click', function(e){
يوضع الكود هنا.
});

// مثال عمل طلب بالأجاكس
$.ajax({
  type: 'POST',
  url: '/test',
  data: { name: 'Ahmed' },
  dataType: 'json',
  success: function(data){
  // نجاح العملية
  },
  error: function(xhr, type){
  // فشل العملية
  }
});
```

## خلاصة :

إذا كنت تريد القيام بإحدى العمليات المتكررة في كل مشروع مثل :

- DOM Manipulation
- Ajax Requests
- Selectors
- Animations

فأنت إذن مطالب باستعمال المكتبة الأخف وهي زيبتو Zepto.js فهي توفر لك كل هذا، أما إذا كنت تريد مثلا دعم متصفح إنترنت إكسبلورر 7 فآنذاك ستظطر للتوجه نحو الحل الأنسب وهو بالتأكيد جيكويري jQuery.

> إذا كانت لديكم أية أسئلة أواستفهامات لا تترددوا في طرحها أسفله في منطقة التعليقات.
