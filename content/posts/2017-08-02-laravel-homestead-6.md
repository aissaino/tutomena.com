---
title: 'إطلاق الإصدار 6 من Laravel Homestead'
date: '2017-08-02'
slug: 'web-development/php/laravel-homestead-6'
template: 'post'
categories:
  - PHP
tags:
  - laravel
  - إطار العمل
thumbnail: '../thumbnails/laravel.png'
---

أعلن مطورو بيئة العمل **Laravel Homestead** عن إطلاق **الإصدار السادس** والذي جاء بعدد من التحسينات والمميزات الجديدة.

**Homestead 6** بات يدعم أكثر من نسخة PHP لنفس بيئة العمل الوهمية، هذا سيسهل المأمورية على المطورين الذين يعلمون على مشاريع تعمل بنسخ مختلفة من لغة البرمجة PHP.

النسخ المتاحة التي يدعمها **Laravel Homestead 6** هي **PHP 5.6**، **PHP 7.0**، **PHP 7.1**، وعليه يمكننا تعيين نسخة PHP التي نريدها في ملف Homestead.yaml  وهي في المثال أسفله **PHP 5.6** :

sites:

- map: homestead.app
  to: /home/vagrant/Code/Laravel/public
  php: "5.6"

إذا لم يتم تعيين الخاصية php  فإن Laravel Homestead سيستخدم النسخة **PHP 7.1** بشكل افتراضي.

هذه تقريبا أهم الميزات الجديدة في النسخة الجديدة من Homestead، ويمكن الإطلاع على المسودة الكاملة للتغييرات كافة من خلال [هذا الرابط](https://github.com/laravel/homestead/releases/tag/v6.0.0).
