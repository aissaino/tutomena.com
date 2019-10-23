---
title: 'سؤال جافاسكريبت تطرحه قوقل وأمازون في مقابلات العمل'
date: '2018-01-11'
slug: 'web-development/javascript/google-amazon-javascript-interview-question'
template: 'post'
categories:
  - جافاسكريبت
tags:
  - javascript
  - أمازون
  - غوغل
thumbnail: '../thumbnails/js.png'
---

هذا الموضوع سيكون شرحا مختصر، مرفوقا ببعض الحلول، لواحد من أكثر الأسئلة التي تعرض على مطوري الجافاسكريبت في مقابلات العمل مع كبريات الشركات التقنية مثل غوغل.

هذا السؤال أو الإختبار البسيط يكون في العادة على هذا النحو :

```js
// السؤال : ما هي المخرجات النهائية لهذه الشفرة البرمجية ؟
var arr = ["a", "b", "c", "d"];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
```

السؤال يتعرض لعدد من المفاهيم الأساسية للغة البرمجة جافاسكريبت، مثل مفهوم _Scope_ و _Closure._

النتيجة النهائية للسؤال ستكون طباعة ما يلي 4 مرات :

Index: 4, element: undefined(4 مرات).

إذا لم تكن هذه هي النتيجة التي توقعتها، فتابع الموضوع حتى النهاية لتفهم أكثر مالذي حدث :)

## لماذا هذا السؤال يطرح بكثرة في مقابلات العمل ؟

كما قلنا، هذا السؤال يحوي في ثناياه إجابات على عدد من أساسيات الجافاسكريبت. في حالات كثيرة ستجد نفسك في سيناريوهات مشابهة في مشاريع برمجية عندما تضطر للقيام بمهام غير متزامنة (_Asynchronous_) داخل حلقات _For_.

أحد مستخدمي منصة reddit أكد بدوره أنه [واجه هذا السؤال في مقابلة للعمل مع شركة أمازون](https://www.reddit.com/r/javascript/comments/7535tm/amazon_web_developer_loop_timeout_interview/). هذا إضافة لعدد كبير جدا ممن قالوا بأن هذا السؤال عرض عليهم في مقابلات مع Google.

## الحلول المقترحة

قبل تقديم الحلول، نريد أن نفهم بالتحديد مالذي حدث ؟

باختصار، دالة _setTimeout_ قامت بإنشاء دالة داخلية (_closure_)، هذه الأخيرة تستطيع الوصول للنطاق الخارجي (External scope) وأقرب نطاق خارجي لها هو الحلقة _For_ التي قامت بتعريف متغير اسمه "i". بعد ثلاث ثواني، الحلقة كانت قد نُفِّذَت وبالتالي كل ما في داخل _setTimeout_ سيأخذ قيمة "i" على أنها آخر قيمة أخذها الأخير قبل إنهاء الحلقة. هذه القيمة كما نعرف هي 4 وبالتالي قيمة [4]arr ستكون undefined لأن آخر عنصر في المصفوفة هو [3]arr ويساوي "d" طبعا :D

هناك حلين لهذه الإشكالية، أولهما من المدرسة القديمة، حيث يتم استخدام "دالة أم" تقوم بإرجاع دالة أخرى. الغرض الوحيد من استخدام "الدالة الأم" هو إنشاء نطاق جديدا (*New Scope)* يحمل قيمة "i" الحالية وفي كل مرة تقوم الدالة الأم بإرجاع مرجع (reference) جديد على شكل دالة تقوم بطبع قيمة "i".

var show = function(n){

    return function(){
      console.log('Index: ' + n + ', element: ' + arr[n]);
    }

};
var arr = ["a", "b", "c", "d"];
for (var i = 0; i < arr.length; i++) {
setTimeout(show(i), 3000);
}

أو يمكن القيام بالأمر مباشروة باستخدام ما يعرف ب Immediately Invoked Function Expression أو اختصارا IIFE :

var arr = ["a", "b", "c", "d"];
for (var i = 0; i < arr.length; i++) {

setTimeout((function(i_local) {
return function() {
console.log('Index: ' + i + ', element: ' + arr[i]);
}
})(i), 3000);

}

والنتيجة الآن كما المتوقع :

"Index: 0, element: a"
"Index: 1, element: b"
"Index: 2, element: c"
"Index: 3, element: d"

أما الحل الأسهل فهو استخدام **let** عند التصريح بالمتغير "i". ظهر let في إصدار ES6 لجافاسكريبت، ويختلف عن var كونه يقوم بإنشاء _binding_ جديد في كل تكرار للحلقة (_loop)_، مما يسمح لدالة _Closure_ بأخذ وتذكر قيمة "i" عند كل تكرار.

var arr = ["a", "b", "c", "d"];
for (let i = 0; i < arr.length; i++) {

setTimeout(function(){

console.log('Index: ' + i + ', element: ' + arr[i]);

}, 3000);

}

وهذا هو الرابط للمزيد من التفاصيل حول هذه الجزئية. ([exploringjs.com](http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads))

---

الموضوع للأمانة شائك، وهو من أكثرها غموضا في جافاسكريبت بالنسبة للقادمين الجدد والمتوسطين. شخصيا، أخذ مني هذا الموضوع وقتا طويلا حتى أستوعبه جيدا.

هذه مجموعة من الروابط للمزيد من التفاصيل والغوص أكثر في هذا البحر العميق.

- [StackOverflow](https://stackoverflow.com/questions/3572480/please-explain-the-use-of-javascript-closures-in-loops/3572616#3572616)
- [coderbyte](https://coderbyte.com/algorithm/3-common-javascript-closure-questions#)
- [Greg Franko](http://gregfranko.com/blog/i-love-my-iife/)
- [medium](https://medium.com/coderbyte/a-tricky-javascript-interview-question-asked-by-google-and-amazon-48d212890703)
