---
title: 'طريقة حذف عنصر أو عدة عناصر من مصفوفة جافاسكريبت'
date: 2019-09-12
slug: 'web-development/javascript/remove-item-from-array'
template: 'post'
categories:
  - جافاسكريبت
tags:
  - javascript
thumbnail: '../thumbnails/js.png'
---

عادة أستخدم طريقتين اثنتين لحذف عنصر معين من مصفوفة في جافاسكريبت.

## الطريقة الأولى: حذف عنصر اعتمادا على مؤشره (By index)

لنفترض أنه لدينا مصفوفة تضم 5 عناصر ونريد حذف العنصر ذو المؤشر 3.

للوصول لهذا الهدف سنستخدم الوظيفة **()slice** بهذه الكيفية:

```js
const items = ['a', 'b', 'c', 'd', 'e', 'f'];
const i = 3;
const filteredItems = items
  .slice(0, i)
  .concat(items.slice(i + 1, items.length));
// ["a", "b", "c", "e", "f"]
```

الوظيفة **()slice** تقوم بإنشاء مصفوفة جديدة بداية من البارامتر الأول (0) ووصولا إلى المؤشر **ما قبل** البارامتر الثاني (2). في حالتنا اقتطعنا العناصر [a, b, c] ذات المؤشرات .0، 1 و 2.

هذه المصفوفة من ثلاث عناصر نقوم بدمجها عن طريق الوظيفة **()concat** مع مصفوفة ثانية نصنعها دائما بواسطة **()slice**، وهذه المرة تبدأ المصفوفة الثانية من المؤشر ما بعد البارامتر الأول (i+1 = 4) وتنتهي مع نهاية المصفوفة.

في النهاية عندما تُجمع هاتين المصفوفتين نحصل على مصفوفة واحدة خالية من العنصر d ذو المؤشر 3 :)

## الطريقة الثانية: حذف عنصر اعتمادا على قيمته (By value)

الطريقة الثانية والتي أستخدمها في معظم الحالات، تتم عن طريق الوظيفة **()filter**.

```js
const items = ['a', 'b', 'c', 'd', 'e', 'f'];
const valueToRemove = 'd';
const filteredItems = items.filter(function(item) {
  return item !== valueToRemove;
});
// ["a", "b", "c", "e", "f"]
```

أظن أن هذه الطريقة واضحة كثيرة مقارنة بالطريقة الأولى. الدالة ()filter تمر على جميع عناصر المصفوفة وتقوم بحذف جميع العناصر التي قيمتها تساوي _valueToRemove_.

## ماذا عن حذف عدة عناصر ؟

لكي نحذف أكثر من عنصر واحد، نستخدم نفس الطريقتين مع تعديل بسيط.

بالنسبة للحذف **اعتمادا على المؤشر** سنقوم بإنشاء دالة نسميها مثلا removeItem:

```js
const items = ['a', 'b', 'c', 'd', 'e', 'f'];

const removeItem = (items, i) =>
  items.slice(0, i - 1).concat(items.slice(i, items.length));

let filteredItems = removeItem(items, 3);
filteredItems = removeItem(filteredItems, 5);
//["a", "b", "c", "d"]
```

الدالة ()removeItem نقوم باستدعائها عدة مرات لكي تقوم في كل مرة بحذف عنصر من العناصر التي نريد التخلص منها.

أما إذا أردنا الحذف بالإعتماد على **قيمة العناصر** فننجز ذلك بواسطة ()filter مع وظيفة ()includes التي تتأكد من وجود أحد عناصر المصفوفة الأصلية في مصفوفة العناصر التي نريد حذفها :) :)

```js
const items = ['a', 'b', 'c', 'd', 'e', 'f'];
const valuesToRemove = ['c', 'd'];
const filteredItems = items.filter(item => !valuesToRemove.includes(item));
// ["a", "b", "e", "f"]
```
