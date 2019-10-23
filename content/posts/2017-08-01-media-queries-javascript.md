---
title: 'التعامل مع Media Queries من داخل الجافاسكربت'
date: '2017-08-01'
slug: 'web-development/javascript/media-queries-javascript'
template: 'post'
categories:
  - جافاسكريبت
tags:
  - Media Query
  - موبايل
thumbnail: '../thumbnails/js.png'
---

لا يخفى على أي مطور ويب الدور الكبير الذي تلعبه Media Queries في CSS3 للحصول على تطبيقات ويب متجاوبة Responsive مع جميع أنواع الأجهزة (موبايل، كومبيوتر، حواسب لوحية ...إلخ). فمن خلالها نستطيع تحديد وتخصيص شكل التطبيق حسب عدد من المتغيرات مثل عرض الشاشة وطولها، اتجاه الجهاز Orientation، دقة الشاشة Resolution وغيرها من المعايير والمتغيرات المختلفة.

في المثال التالي يظهر لنا أن ملف main.css  موجه لجميع الأجهزة، بينما يختص ملف mobile.css  بالأجهزة التي يقل عرضها عن **768** بيكسيل، وهي في الغالب تكون **هواتف محمولة**.

<link rel="stylesheet" media="all" href="main.css" />
<link rel="stylesheet" media="(max-width: 768px)" href="mobile.css" />

الإمكانيات التي تتيحها **Media Queries** كبيرة ويتم استغلالها على أفضل نحو من طرف عدد من إطارات العمل مثل **Bootstrap** و **Zurb Foundation**. ولكن ماذا لو أردنا الوصول لهذه الإمكانات من خلال الجافاسكريبت، ماذا لو أردنا مثلا إضافة محتوى أو كود جافاسكربت خاص بنوع معين من الأجهزة، **هواتف ذكية** على سبيل المثال ؟ طبعا هذا غير ممكن بواسطة CSS وحدها!

قد يقول أحدهم أنني أستطيع حساب عرض الشاشة باستخدام دالة document.documentElement.clientWidth، هذا صحيح يمكنك فعل ذلك ولكن كما ذكرنا في المقدمة حساب العرض والطول ليس كل شيء، فماذا لو أردت استهداف أجهزة بدقة شاشة معينة أو حسب اتزانية الأبعاد Aspect Ratio ؟ المهمة حينها ستزداد صعوبة بالتأكيد خاصة إذا عرفنا أن أي حل ترقيعي تتوصل إليه ليس مضمونا بأنه سيعمل على كافة الأجهزة والمتصفحات وبالتالي ستجد نفسك أمام تحد جديد هو مشكل **التوافقية** **Compatibility**.

## التعامل مع Media Queries من داخل جافاسكربت

لحسن الحظ أصبحنا الآن نستطيع **التعامل مع Media Queries** من داخل كود الجافاسكريبت، كلمة السر في دالة جديدة داخل الكائن window  واسمها matchMedia  بحيث نمرر لها **الميديا كويري** على شكل بارامتر كما في المثال التالي :

const mqMobile = window.matchMedia( "(max-width: 768px)" );

بعد ذلك يمكننا استخدام الخاصية matches للتحقق من نتيجة **الميديا كويري**:

if (mqMobile.matches) {
// عرض الشاشة أقل من 768 بيكسيل
} else {
// عرض الشاشة أكثر من 768 بيكسيل
}

الجميل كذلك أننا نستطيع إضافة **حدث** Event Listener للكائن mqMobile  وانتظار أي تغيير قد يطرأ على عرض الشاشة كما في مثالنا :

if (matchMedia) {
const mqMobile = window.matchMedia("(max-width: 768px)");
mq.addListener(widthChange);
widthChange(mq);
}

function widthChange(mqMobile) {
if (mqMobile.matches) {
// عرض الشاشة أقل من 768 بيكسيل
} else {
// عرض الشاشة أكثر من 768 بيكسيل
}
}

## نهاية الدرس

يحظى الكائن matchMedia  [بدعم واسع من قبل معظم المتصفحات المعروفة](http://caniuse.com/#feat=matchmedia)، وبالتالي فليس هناك أي مانع من البدء في استخدامه في مشاريعك القادمة، فهو كما رأينا يسهل التعامل معه وبسطر واحد أو سطرين يمكننا إنجاز مهام قدد تتطلب منا عشرات الأسطر بدونه.

---

مراجع :

- https://www.sitepoint.com/javascript-media-queries/
- https://developer.mozilla.org/en/docs/Web/API/Window/matchMedia
