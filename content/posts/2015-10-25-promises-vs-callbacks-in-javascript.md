---
title: 'الفرق بين الوعود والكولباك في الجافاسكريبت (Promises vs Callbacks)'
date: '2015-10-25'
slug: 'web-development/javascript/promises-vs-callbacks-in-javascript'
template: 'post'
categories:
  - جافاسكريبت
tags:
  - callback
  - javascript
  - promises
thumbnail: '../thumbnails/js.png'
---

إذا كنت مبرمج جافاسكريبت محترف فمن المؤكد أنه سبق لك أن عملت بدوال الإجابة **Callbacks** وفي بعض الحالات تكون مجبرا على استعمال دالة إجابة داخل دالة إجابة داخل دالة إجابة وهكذا (بالخصوص عند التعامل مع أوامر **غير متزامنة** **Asynchronous** كعمليات الأجاكس والتعامل مع الملفات وقواعد البيانات إلخ...) حتى تحصل على شفرة برمجية هرمية الشكل ومعقدة نسبيا كما سترى في الكود التالي :

function isUserTooYoung(id, callback) {
openDatabase(function(db) {
getCollection(db, 'users', function(col) {
find(col, {'id': id},function(result) {
result.filter(function(user) {
callback(user.age < 18)
}
}
}
}
}

الدالة isUserTooYoung تمكننا من التأكد من كون مستعمل معين راشد (يفوق عمره 18 سنة)، ولهذا يتم ربط الإتصال بقاعدة البيانات، ثم البحث عن المستعمل المراد معرفة عمره وفي الأخير نقوم بالتأكد من العمر.

## استعمال الوعود Promises

استعمال الوعود Promises سنرى بأنه يعطينا شفرة برمجية أوضح وأبسط وأكثر دلالية، فكل دالة تنتظر جوابا تتوفر على الدالة **then** التي تلتقط الإجابة من الدالة التي قبلها وتمررها للدالة الثانية بداخلها، وبهذه المفهوم أصبح بإمكاننا إعادة كتابة الكود السابق بطريقة مغايرة أكثر أناقة كما يلي :

function isUserTooYoung(id) {
return openDatabase(db)
.then(getCollection)
.then(find.bind(null, {'id': id}))
.then(function(user) {
return user.age < 18;
});
}

_هذا كود في **Node.js** ولكن الفكرة والعملية تظل صحيحة بالنسبة للتطبيقات الأخرى للجافاسكريبت._

بالتأكيد الآن أصبح الكود أكثر وضوحا بالنسبة لكم وأسهل من حيث الفهم، حيث يمكننا القول بأن الدالة openDatabase وعدت الدالة getCollection بالتوصل بمعطيات معينة Datas بعد نجاح الإتصال بقاعدة البيانات، ولو أردنا  استعمال الدالة isUserTooYoung في برنامجنا بعد ذلك فسيكون بهذه الطريقة :

isUserTooYoung(id)
.then(function(result) {
// هنا يمكنك التعامل مع النتيجة النهائيةresult
}

لا تنسى أن هناك دوالا أخرى مفيدة عند استعمال الوعود في الجافاسكريبت مثل دالة **catch** التي يتم استدعاؤها عند عدم نجاح إحدى العمليات أو الوعود.

هناك العديد من المكتبات التي تمكننا من العمل بالوعود Promises بسهولة وفعالية أكبر لعل أشهرها :

- [Q](https://github.com/kriskowal/q)
- [When](https://github.com/cujojs/when)
- [WinJS](http://msdn.microsoft.com/en-us/library/windows/apps/br211867.aspx)
- [RSVP.js](https://github.com/tildeio/rsvp.js)

ترجمة بتصرف للمقال : [Taming the Pyramid of Doom](http://engineering.onlive.com/2014/08/08/taming-the-pyramid-of-doom)
