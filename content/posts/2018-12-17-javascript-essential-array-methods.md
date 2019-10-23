---
title: '6 وظائف أساسية للتعامل مع المصفوفات في جافاسكريبت'
date: '2018-12-17'
slug: 'web-development/javascript/javascript-essential-array-methods'
template: 'post'
categories:
  - جافاسكريبت
tags:
  - Basics
  - javascript
thumbnail: '../thumbnails/js.png'
---

تعتبر المصفوفات من أكثر أنواع الكائنات استخداما في تطبيقات جافاسكريبت، إذ لا يكاد يخلو تطبيق منها نظرا لأهميتها في تخزين مختلف أنواع البيانات على شكل قوائم أو مجموعات خاصة يتم التعامل معها ومعالجتها عن طريق عدة وظائف وخصائص تميزها عن غيرها من كائنات جافاسكريبت (Javascript objects).

في كثير من الحالات، نحتاج للقيام بعمليات بحث، فلترة (Filtering) أو التعديل على بيانات مخزنة في مصفوفات داخل تطبيقنا. وعوض أن نقوم بالمرور على جميع عناصر المصفوفة وإجراء العمليات المرجوة داخل حلقة **For loop**، هناك وظائف خاصة في جافاسكريبت لتسهيل هذه العمليات كلها وجعلها تصريحية (Declarative) وأكثر قابلية للقراءة والفهم على الشخص الذي يقرأ الشفرة البرمجية.

في هذا المقال سنمر على مجموعة من أهم هذه الوظائف أو Methods الخاصة بالمصفوفات في لغة جافاسكريبت.

## ()includes

تستخدم وظيفة **()includes** للتحقق من وجود String معين في المصفوفة، وتقوم بإرجاع true أو false.

عند استخدام هذه الوظيفة يجب معرفة بأن البارامتر الذي يتم تمريره حساس لحالة الأحرف (Case sensitive)، فإذا كانت المصفوفة تضم عنصر اسمه "javascript" وبحثنا عنه باستخدام الكلمة "JAVASCRIPT" فإن النتيجة ستكون هي false.

let languages = ["php", "javascript", "ruby", "python", "csharp"];

console.log( languages.includes("javascript") ); // true

console.log( languages.includes("JAVASCRIPT") ); // false

[alert type="warning" icon-size="normal"]الوظيفة ()includes غير مدعومة من متصفح انترنت إكسبلورر.[/alert]

## ()some

بدورها تقوم الوظيفة some بالتحقق من وجود عنصر معين داخل المصفوفة، ولكنها تختلف عن includes بكونها تقبل دالة كبارامتر وليس String.

let languages = ["php", "javascript", "ruby", "python", "csharp"];

languages.some(function(item) {
return item === "swift";
}); // false

languages.some(function(item) {
return item === "php";
}); // true

let products = [{
name: "iPhone",
price: 999.00
},
{
name: "Galaxy S9",
price: 799.00
},
{
name: "iPad Pro",
price: 1349.00
}];

products.some(function(item) {
return item.price > 1000;
}); // true (iPad Pro)

عندما يحقق عنصر واحد على الأقل الشرط (Condition) الموجود في دالة البارامتر يتم إرجاع true، بينما يتم إرجاع false في حالة عدم وجود أي عنصر داخل المصفوفة يحقق ذلك الشرط.

## ()every

تقوم الوظيفة بالمرور على كافة عناصر المصفوفة وتتحقق من كون **جميع العناصر تحقق الشرط** الموجود داخل الدالة البارامتر فتقوم بإرجاع true أو false في حالة وجود عنصر واحد على الأقل لا يحقق ذلك الشرط. على عكس الوظيفة ()some التي يكفيها عنصر واحد فقط يحقق الشرط لكي تكون النتيجة هي true.

let products = [{
name: "iPhone",
price: 999.00
},
{
name: "Galaxy S9",
price: 799.00
},
{
name: "iPad Pro",
price: 1349.00
}];

products.every(function(item) {
return item.price > 700;
}); // true

products.every(function(item) {
return item.price > 800;
}); // false

## ()filter

تقوم **()filter** بفلترة أو تصفية مصفوفة معينة وفقا للشرط الموجود داخل الدالة البارامتر. **هذه الوظيفة لا تقوم بتغيير المصفوفة الأصلية**، بل تنشئ وتقوم بإرجاع مصفوفة جديدة وبداخلها العناصر فقط التي اجتازت عملية التصفية (**Immutable** array method).

var products = [{
name: "iPhone",
price: 999.00
},
{
name: "Galaxy S9",
price: 799.00
},
{
name: "iPad Pro",
price: 1349.00
}];

var maxOneThousandDollars = products.filter(function(item) {
return item.price <= 1000;
});

console.log( maxOneThousandDollars );
// [{ name: "iPhone",price: 999 },{ name: "Galaxy S9",price: 799 }]

## ()map

تشبه الوظيفة **()map** نظيرتها ()filter في كونها تقوم بإرجاع مصفوفة جديدة مع الحفاظ على المصفوفة الأصلية كما هي، إلا أنها تتميز بكونها تستخدم لتغيير عناصر المصفوفة وليس للفلترة.

إذا كنت من مستخدمي [إطار العمل React.js](https://www.tutomena.com/web-development/javascript/react-javascript-library/) فمن المؤكد بأن هذه الوظيفة مألوفة بالنسبة لك، حيث أنها تستخدم على نطاق واسع في عملية تحويل مصفوفات البيانات إلى مكونات React.js على شكل JSX.

لنتخيل أننا أجرينا تخفيضا على أسعار منتوجاتنا بنسبة %25، ولكي نقوم بعرض المنتوجات مع السعر الجديد سنقوم بالإستعانة بالوظيفة map كما يلي :

let products = [{
name: "iPhone",
price: 999.00
},
{
name: "Galaxy S9",
price: 799.00
},
{
name: "iPad Pro",
price: 1349.00
}];

let productsAfterDiscount = products.map(function(item) {
return {
name: item.name,
price: item.price * 0.75
};
});

console.log( productsAfterDiscount );
// [{ name: "iPhone",price: 749.25 },{ name: "Galaxy S9",price: 599.25 }, {name: "iPad Pro", price: 1011.75 }]

## ()reduce

تستخدم الوظيفة **()reduce** لتحويل المصفوفة إلى شيء آخر قد يكون عددا، نصا، كائن جافاسكريبت إلخ...

لإعطاء مثال بسيط عن دور reduce، سنقوم بحساب مجموع الأعداد الموجودة في مصفوفة معينة :

let prices = [ 999.00, 799.00, 1349.00];

let pricesSum = prices.reduce(function(a, b) {
return a + b;
});

console.log( pricesSum ); // 3147

تلاحظون أن دالة البارامتر تقبل بدورها معاملين اثنين، حيث تضيف الثاني إلى الأول وهكذا دواليك حتى تصل إلى نهاية المصفوفة فتقوم بإرجاع حاصل عملية الجمع (3147).

يمكن استخدام هذه الوظيفة مثلا لجمع أثمنة المنتوجات الموجودة في سلة المشتريات بمتجر إلكتروني، وهناك حالات عديدة أخرى متقدمة يمكن أن تسعفنا فيها ()reduce.

- **قد يهمك أيضا: **[الجافاسكربت يأكل الأخضر واليابس](https://www.tutomena.com/web-development/javascript/javascript-dominance/)

## النهاية

هذه جملة من الوظائف في لغة البرمجة جافاسكريبت تجب معرفتها من أجل تعامل أسهل ومعالجة أسرع لبيانات تطبيقاتنا المخزنة في مصفوفات (Arrays).

العلم بوجود هذه المصفوفات مطلوب من كل مطوري جافاسكريبت، وهي من الأساسيات التي يجب الإلمام بها.

خيار حلقات For Loop يجب أن يكون دائما هو الخيار الأخير، فقد يكون الحل في واحدة من الوظائف الأصلية (Native) في لغة البرمجة التي تستخدمها، وبالتالي فالإلمام الجيد بالأساسيات خطوة مهمة ومصيرية من أجل شفرة مصدرية نظيفة وقابلة للقراءة، وتطبيقات سريعة وعالية الأداء.

---

**مراجع للإستزادة :**

- [These JavaScript methods will boost your skills in just a few minutes](https://medium.freecodecamp.org/7-javascript-methods-that-will-boost-your-skills-in-less-than-8-minutes-4cc4c3dca03f)
- [Immutable Javascript using ES6 and beyond](https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
