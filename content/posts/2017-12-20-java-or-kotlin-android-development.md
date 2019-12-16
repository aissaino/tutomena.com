---
title: 'هل عليَّ تعلم Java أم Kotlin لتطوير تطبيقات أندرويد ؟'
date: '2017-12-20'
slug: 'web-development/java-or-kotlin-android-development'
template: 'post'
categories:
  - برمجة
tags:
  - أندرويد
  - جافا
  - كوتلن
thumbnail: '../thumbnails/android.png'
---

في منتصف السنة الحالية، أعلنت شركة غوغل المطورة لنظام التشغيل أندرويد عن دعم لغة **كوتلن** لبرمجة تطبيقات أندرويد على الأجهزة المحمولة، لتضاف بذلك **Kotlin** إلى لغة البرمجة **جافا** التي كانت دائما الخيار الوحيد أمام مطوري أندرويد.

منذ ذلك الحين بات الجميع، وبخاصة المبتدئين، يسألون سؤالا واحدا: **هل علي أن أتعلم جافا أم كوتلن** ؟ ما هو الخيار الأفضل لمن يريد الدخول لمجال تطوير تطبيقات أندرويد ؟

الجواب على هذا السؤال ليس بالضرورة بسيطا أو سهلا، ولكن من خلال هذا المقال سأساعدكم على اتخاذ هذا القرار عبر إجراء مقارنة بسيطة بين اللغتين، وإعطائكم رأيي المتواضع في هذه المسألة بعد ذلك.

[إقرأ أيضا: 5 أدوات أساسية لمطوري PHP](https://www.tutomena.com/web-development/php/essential-tools-php-developers/)

## ميلاد لغة البرمجة Kotlin

تم تطوير **لغة البرمجة Kotlin** من طرف شركة _Jetbrains_ المعروفة بتقديم حلول متقدمة للمطورين من شتى الإختصاصات (بيئات عمل متكاملة مثل: _IntellijIDEA_ ،_PhpStorm_ ،_PyCharm_ ). هذه الشركة كانت في ذلك الوقت تعتمد على لغة البرمجة جافا في أعمالها، وقالوا أنهم طوروا _**كوتلن**_ لأسباب تتعلق أولا وأخيرا برفع بمستوى الإنتاجية لفريق العمل.

إذن تم إنشاء لغة البرمجة كوتلن لتكون أفضل من جافا، ولكن لم يكن العاملون في شركة _Jetbrains_ يريدون إعادة كتابة مشاريعهم من الصفر بلغة برمجية جديدة، لهذا السبب جعلوا من _Kotlin_ لغة برمجة قابلة للتشغيل في بيئة جافا JVM بنسبة 100%. تشتغل أكواد Kotlin في بيئة JVM بدون مشاكل فهي في النهاية تتحول بعد عملية Compiling إلى أكواد Java bytecode، هذه يعني كذلك أنه يمكننا استخدام _Kotlin_ في مشاريع جافا قائمة دون إعادة إنشاء هذه المشاريع من الصفر.

> نعم يمكن الخلط بين لغتي *كوتلن* و *جافا* في مشروع واحد :)

لنفترض أنه لدينا _كلاس جافا_، مثلا _كلاس_ خاص بالزبناء :

```java
public class Customer {

    private String name;

    public Customer(String s){
        name = s;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
```

يمكننا استخدام هذا الكلاس في ملف _Kotlin_ بدون تعقيدات :

```java
val customer = Customer("John")
println(customer.getName())
```

هذا رائع أليس كذلك ؟ :) بهذه الطريقة استطاع مطورو _Jetbrains_ استكمال أعمالهم في مشاريع الشركة بواسطة لغتهم الجديدة دون الحاجة لبدء عملية التكويد من الصفر.

## مقارنة بين Java و Kotlin

هذا جميل ولكننا لم نجب بعد عن سؤال الإنتاجية وأفضلية كوتلن في هذه الناحية من وجهة نظر الشركة المطورة.

سأحاول تبسيط الموضوع لكي تصلكم الفكرة جيدا عبر مثال يوضح ماذا يمكن للغة _Kotlin_ أن توفر علينا بالمقارنة مع لغة البرمجة _Java._

### مثال لإنشاء كلاس في جافا وكوتلن

لنأخد كلاس الزبون _Customer Class_ الذي رأينا أعلاه، سنضيف إليه بعض الخصائص كالإيميل وخاصية أخرى نسميها _loyal_ وتحدد ما إذا كان الزبون وفيا لنا أم أنه زبون عادي، مثلا إذا قام ب 10 عمليات شراء سنعتبر بأنه زبون وفي ونقدم له عددا من العروض الخاصة بالزبناء الأوفياء لعلامتنا التجارية.

الخاصية _loyal_ سنعتبرها اختيارية (Optional) ونعطيها _false_ كقيمة افتراضية.

```java
public class Customer {
  private String name;
  private String email;
  private boolean loyal;

  public Customer(String name, String email) {
    this.name = name;
    this.email = email;
    this.loyal = false;
  }

  public Customer(String name, String email, boolean loyal) {
    this.name = name;
    this.email = email;
    this.loyal = loyal;
  }

  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }

  public boolean isLoyal() {
    return loyal;
  }

  public void setLoyal(boolean loyal) {
    this.loyal = loyal;
  }
}
```

وهذا هو شكل نفس الكلاس في Kotlin :

```kotlin
class Customer(val name: String, val email: String, var loyal: Boolean = false)
```

40 سطرا في جافا مقابل سطر واحد في كوتلن! نعم لن تجد أبسط من ذلك.

### هذا ليس كل شيء، هناك المزيد!

في جافا (وكذلك في كوتلن) عندما نحاول طباعة كائن Object فإننا عوض رؤية خصائصه نرى مرجعه أو ما يعرف ب _Object reference_.

```java
Customer customer1 = new Card("Ahmed", "ahmed@example.com");
Customer customer2 = new Card("Ahmed", "ahmed@example.com");
println(customer1); // com.tutomena.JavaKotlin.Customer@98ac8e5
println(customer2); // com.tutomena.JavaKotlin.Customer@320cb1a
```

وإذا حاولت مقارنة هذين الزبونين فإنك تقارن مرجعيهما في الذاكرة _Object Reference_ وبطبيعة الحال القيمة هنا ستكون false

```java
println(customer1 == customer2); // false
println(customer1.equals(customer2)); // false
```

لتعديل هذا السلوك فإننا نقوم عادة بعمل **Override** على الوظيفة _equals_ في جافا، بهذه الطريقة :

```java
@Override
public boolean equals(Object object) {
  if (object instanceof Customer) {
    Customer customer = (Customer) object;
    return this.name.equals(customer.name)
    && this.email.equals(card.email)
    && this.loyal == customer.loyal;
  } else {
    return false;
  }
}
```

ولطباعة شيء أكثر أهمية من مراجع الكائنات فإننا نقوم بنفس العملية على الوظيفة _toString_ كالتالي :

```java
@Override
public String toString() {
  return "Customer(name="+name+", email="+email+", loyal="+loyal+")";
}
```

ولكن هنا من جديد، تبدو _Kotlin_ أكثر ذكاءً ومرونة من _Java_، كل ما علينا فعله للحصول على نفس النتيجة هو إضافة الكلمة **data** قبل **class** على هذا النحو :

```kotlin
data class Customer(val name: Strong, val email: String, var loyal: Boolean = false)
```

وهذه هي النتيجة :

```java
Customer customer1 = new Customer("Ahmed", "ahmed@example.com")
Customer customer2 = new Customer("Ahmed", "ahmed@example.com")
println(customer1) // Customer(name="Ahmed", email="ahmed@example.com", loyal=false)
println(customer1 == customer2) // true
```

وصلنا لهذه النتيجة باستخدام قرابة **60 سطرا** من أكواد _جافا_، بينما بقينا في _كوتلن_ مع **سطر واحد** فقط. هذا ما قصده العاملون في **Jetbrains** بقولهم أن المسألة برمتها تتعلق بزيادة وتحسين إنتاجية المطورين.

## الخلاصة

هذه ليست الميزات الوحيدة الموجودة في كوتلن، فهذه اللغة جاءت بعدد كبير جدا من التحسينات التي لا يمكن شرحها كلها في موضوع واحد. مع هذا كله لا يمكن نكران بأن معظم المصادر والدروس الموجودة على الإنترنت مكتوبة بالجافا، وبالتالي قد لا يكون سهلا على المبتدئين الإنطلاق مع كوتلن في تطوير تطبيقات الأندرويد لأنهم لن يجدوا الكثير من المصادر ليتعلموا منها أساسيات وخاصيات البرمجيات الموجهة لهذا النظام.

من وجهة نظري، أنصح المبتدئين حاليا بتعلم قليل من الجافا، ليس تعلم كل الجافا وإتقانها، فقط تعلم ما يجعلهم يفهمون الأمثلة والدروس التعليمية التي يجدونها سواء على المدونات المتخصصة والمنتشرة بكثرة أو على التوثيق الرسمي من غوغل الخاص بأندرويد. بعد ذلك يمكنهم الإلتحاق ب **Kotlin** إذا كانوا مقتنعين بمبرر الإنتاجية والسرعة في التكويد اللذان توفرهما.

---

سأكون سعيدا للغاية بمشاركة تجاربكم مع هاتين اللغتين في التعليقات أسفله، فهذا الموضوع مهم جدا ويستحوذ على اهتمام عدد كبير جدا من المطورين في الوطن العربي.

---

#### المراجع

- [http://blog.teamtreehouse.com/learn-kotlin-java](http://blog.teamtreehouse.com/learn-kotlin-java)
- [https://kotlinlang.org/docs/tutorials/mixing-java-kotlin-intellij.html](https://kotlinlang.org/docs/tutorials/mixing-java-kotlin-intellij.html)
- [https://medium.com/@magnus.chatt/why-you-should-totally-switch-to-kotlin-c7bbde9e10d5](https://medium.com/@magnus.chatt/why-you-should-totally-switch-to-kotlin-c7bbde9e10d5)

<Author slug="aissa" />
