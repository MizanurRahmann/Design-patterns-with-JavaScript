# What is Design Pattern?
কোনো application তৈরী করার সময়, আমরা ভিন্ন ভিন্ন জায়গায় কিছু একই রকম সমস্যার সম্মুখীনন হলে, সমস্যাগুলোর সমাধান এর জন্য যদি একটা reusable pattern design করা যায়, যা ঐ সমস্যাগুলোর জন্য একটা ভালো সমাধান দিতে পারে। তবে advanced এই সমাধানকেই আমরা Design pattern বলি।
সহজ কথায়, **Design pattern হলো একটা কমন সমস্যার জন্য তৈরী করা reusable সমাধান।** ডিজাইন প্যাটার্ন বোঝা বা এর সাথে পরিচিত হওয়াটা বেশ প্রয়োজন কেননাঃ 
* Pattern হলো নির্দিষ্ট সমস্যার জন্য প্রমানিত সলুশান।
* Application development processএর সময় এটা ছোটো খাটো issue থেকে বাচাতে সাহায্য করে যেটা ভবিষ্যতে application এর বড় ক্ষতি করতে পারতো
* নির্দিষ্ট Pattern আমাদের  application এর ওভারওল কোডের সাইজকে ছোটো করে। একই সাথে কোডকে আরো বেশি readble করে।
* এটা reusable


# Categories Of Design Pattern
৩ টা ক্যাটাগরিতে মোটামুটি ২৩ টা প্যাটার্নকে ডিজাইন প্যাটার্নের ফাউন্ডেশান ধরা হয় [এদেরকে 23 Gang of Four (GoF) patterns বলা হয় ]। ক্যাটাগরিগুলো হলোঃ
* [**Creational**](#Creational-Design-Patterns)
    - [Abstract Factory](#Abstract-Factory)
    - [Builder](#Builder)
    - [Factory Method](#Factory-Method)
    - [Prototype](#Prototype)
    - [Singleton](#Singleton)
* [**Structural**](#Structural-Design-Patterns)
    -  [Adapter](#Adapter)
    - Bridge
    - Composite
    - Decorator
    - Facade
    - Flyweight
    - Proxy
* **Behavioral**
    - Chain of Resp
    - Command
    - Interpreter
    - Iterator
    - Mediator
    - Memento
    - Observer
    - State
    - Strategy
    - Template Method
    - Visitor







# #Creational Design Patterns
Creational pattern মূলত object তৈরীর মেকানিজমগুলোর নিয়ন্ত্রন প্রক্রিয়ার উপর ফোকাস করে।
কোনো উদ্ভূত সমস্যার জন্য এই প্যাটার্নের basic approach টা হচ্ছে, প্রোজেক্টে কিছু কপ্লিক্সিটি (যাকে আমরা প্যাটার্ন বলছি) যুক্ত করে object creation process টা controll করা যাতে করে সমস্যার একটা সুষ্ঠ সমাধান দেয়া সম্ভব হয়। এই ক্যাটাগরীর অন্তর্ভূক্ত pattern গুলো হলোঃ Abstract Factory, Builder,  Factory Method, Prototype and Singleton.


## Abstract Factory
Abstract factory, একই বিষয়ের দ্বারা সম্পর্কযুক্ত বিভিন্ন অব্জেক্ট তৈরী করে। সহজ কথায়, এটা এমন একটা প্যাটার্ন যেখানে একটি Factory object থাকবে - যার কাজ হলো অন্য আরেক রকমের অব্জেক্ট তৈরী করা।

কিন্তু প্রশ্ন হচ্ছে, আমরা কেনো একটা Factory object ব্যবহার করে অন্যান্য object তৈরী করবো! যখন আমরা এই কাজটা সরাসরি **new** keyword ব্যবহারের মাধ্যমে constructor ফাংশন call করেই করতে পারি?\
এর কারন, একটা object তৈরীর পুরো পদ্ধতির উপর constructor ফাংশনের খুব অল্প নিয়ন্ত্রন থাকে। তার মানে,একটা অব্জেক্ট তৈরীর জন্য যে বেসিক কাজগুলো করতে হয় কন্সট্রাক্টর ফাংশন তা করে আমাদেরকে একটা অব্জেক্ট তৈরী করে দেয়। কিন্তু, অনেক সময় দেখা যায় একটা ওব্জেক্ট তৈরীর জন্য আমাদের আরো কিছু বিষয়ের উপর নিয়ন্ত্রনের প্রয়োজন হচ্ছে। সেক্ষেত্রে আমরা কন্সট্রাক্টর ফাংশনের উপর নির্ভর না করে, এমন একটা অব্জেক্টকে এই অব্জেক্ট তৈরীর দায়িত দেই যা ঐ বিষয়গুলো কিভাবে নিয়ন্ত্রন করতে হয়ে তা জানে।

### Example :
মনেকরি, মোঃ মফিজ সাহেবের আইস্ক্রিম ও কেক বানানোর দুইটা আলাদা কারখানা আছে। তিনি চাচ্ছেন, তার দুই কারখানার সব কাস্টমারকে একজায়গায় আলাদা আইডেন্টিটি দিয়ে রাখবেন। এবই কাস্টোমারের ঐ লিস্টে, আইস্ক্রিম কারখানার সাথে সম্পর্কযুক্ত কাস্টমারগুলোকে বলা হবে IcecreamCustomer আর কেক কারখানার সাথে সম্পর্কযুক্ত কাস্টমারদের বলা হবে CakeCustomer
``` javascript
function IcecreamCustomer(name) {
    this.name = name;
    this.say = function () {
        console.log(name + " is a icecream customer ");
    };
}
 
function IcecreamFactory() {
    this.addCustomer = function(name) {
        return new IcecreamCustomer(name);
    };
}
 
function CakeCustomer(name) {
    this.name = name;
    this.say = function () {
        console.log(name + " is a cake customer ");
    };
}
 
function CakeFactory() {
    this.addCustomer = function(name) {
        return new CakeCustomer(name);
    };
}
 
function run() {
    var customer = [];
    var icecreamFactory = new IcecreamFactory();
    var cakeFactory = new CakeFactory();
 
    customer.push(icecreamFactory.addCustomer("Ahmed Abdul Barkik"));
    customer.push(icecreamFactory.addCustomer("Sabbir Hasan"));
    customer.push(cakeFactory.addCustomer("Tanzid Hasan"));
    customer.push(cakeFactory.addCustomer("Abdur Rakib"));
 
    for (let i = 0, len = customer.length; i < len; i++) {
        customer[i].say();
    }
}
run();
```

## Builder
যে pattern-এ একটি অব্জেক্টের (Builder object-এর) সহযোগিতায় বিভিন্ন কমপ্লেক্স object-এর কমপ্লেক্স অপারেশান এর ডেফিনেশন না জেনেই সে অব্জেক্টের অপারেশঙ্গুলো নিয়ন্ত্রন করতে পারা যায় তাই-ই Builder pattern

এভাবে object তৈরীর মূল উদ্দেশ্য হলো, client সাইটে বিভিন্ন অপারেশনগুলো সহজ করা। আর উপকারিতা হলো, একজন client বিভিন্ন কমপ্লেক্স object-গুলোর ডেফিনেশাঙ্গুলো না জেনেউ সে object-কে সহজে ব্যবহার করতে পারবে।

-"builder" বিভিন্ন কমপ্লেক্স object তৈরী ও object-গুলোর বিভিন্ন intermediate state মেইন্টেইন করতে পারে। আর অব্জেক্ট তৈরী এবং তাকে মেইন্টেইন এর মাধ্যমে তৈরী করে বিভিন্ন প্রোডাক্ট। আর প্রোডাক্ট তৈরী শেষ হলে ক্লায়েন্ট সেই ফলাফল (তৈরীকৃত প্রোডাক্ট) "builder" থেকে retrieve করতে পারে।

### Example :
মনেকরি, মোঃ মফিজ সাহেব, তার আইস্ক্রিম ও কেকের কারখানায় জন্য 'আব্দুস সালাম' নামের একজন লোককে ম্যানেজার হিসেবে নিয়োগ করেছে। এখন এটা স্বাভাবিক যে সালাম ভাই এর জন্য প্রতিটা কারখানায় আইস্ক্রিম আর কেক আলাদা আলাদা ভাবে তৈরীর প্রতিটা স্টেপ মেইন্টেইন করা সম্ভব না। 
সালাম ভাই এর কাজ হলো, কিভাবে কেক বানানো হয় বা কিভাবেই বা আইস্ক্রিম বানানো হয় তা নিয়ে মাথা না ঘেমে, বরং প্রোডাক্টগুলো (আইস্ক্রিম বা কেক) ঠিক ভাবে শিডিওল অনুযায়ী তৈরী হচ্ছে কিনা সেদিক খেয়াল করা।
এখেত্রে সালাম সাহেব যেটা করতে পারেন তা হলোঃ 
* সালাম সাহেব কর্মিদের বলবে, সবাই উপদানা প্রস্তুত করো। কর্মিরা নিজ নিজ কারখানার প্রোডাক্টের জন্য প্রয়োজনীয় উপদান গুলো প্রস্তুর করে রাখবে।
* এরপর সালাম সাহেব বলবে, উপাদাঙ্গুলো দিয়ে প্রোদাক্ট গুলো তৈরী করো। কর্মিরা আবার নিজ নিজ কারখানায় তৈরীকৃত পন্যের উপাদানগুলো ব্যবহার করে পণ্য তৈরী করবে। 
* এরপর সালাম সাহেব যখন বলবে পন্য প্যাকেট করো। কর্মিরা নিজ নিজ কারখান্য তৈরী প্রোডাক্ট প্যাকেট করবে।

এক্ষেত্রে কিন্তু সালাম সাহেবের জন্য দুইটা ভিন্ন কারখানায় পণ্যের জন্য কি কি উপাদান লাগবে, কিভাবে বানাবে বা কিভাবে প্যাকেট করতে হবে তা জানার প্রয়োজন নাই। তিনি শুধু কমপ্লেক্স এই কাজগুলোর জন্য কর্মি ঠিক করে (object তৈরী করে) বাহিরে থেকেই বিভিন্ন কাজগুলো(কমপ্লেক্স অপারেশঙ্গুলো) নিয়ন্ত্রন করতে পারবে। যেটা Builder প্যাটার্ন এর একটি উদাহরণ।

``` javascript
//Builder object
function Manager() {
    this.productControll = function(builder) {
        builder.collectIngridents();
        builder.makeProducts();
        builder.productPakaging();
    }
}

function IcecreamShef() {
    this.icecream = null;
 
    this.collectIngridents = function() {
        this.icecream = new Icecream();
        console.log("Ingridents collected for Icecream!");
    };

    this.makeProducts = function() {
        this.icecream.makeIcecream();
    };

    this.productPakaging = function(){
        this.icecream.pakaging();
    }
}

function CakeShef() {
    this.cake = null;
 
    this.collectIngridents = function() {
        this.cake = new Cake();
        console.log("Ingridents collected for Cake!");
    };

    this.makeProducts = function() {
        this.cake.makeCake();
    };

    this.productPakaging = function(){
        this.cake.pakaging();
    }
}

function Icecream(){
    this.ingredients = ["milk", "sugar", "almond", "flavour"];
    this.makeIcecream = () => {console.log("Icecream is made with: " + this.ingredients);}
    this.pakaging = () => {console.log("Icecream pakaged!\n")}

}
function Cake(){
    this.ingredients = ["Flour", "sugar", "egg", "salt"];
    this.makeCake = () => {console.log("Cake is made with: " + this.ingredients);}
    this.pakaging = () => {console.log("Cake pakaged!\n")}
}

function run(){
    let SalamVai = new Manager();
    let icecreamShef = new IcecreamShef();
    let cakeShef = new CakeShef();

    SalamVai.productControll(icecreamShef);
    SalamVai.productControll(cakeShef);
}
run();
```

## Factory Method
application-এ ক্লায়েন্টের instruction অনুযায়ী বিভিন্ন object তৈরীর প্রয়োজন হয়। আর আমরা জানি এই object-গুলো new keyword এর মাধ্যমে constructor ফাংশান কল করেই করা যায়। 

কিন্তু অনেক সময় দেখা যায়... application-এ একটি নির্দিষ্ট টাইপের অবস্থার জন্য কি object তৈরী করতে হবে তা ক্লায়েন্ট জানতে পারে না। বা নিরাপত্তার জন্য এই বিষয়টি ক্লায়েন্টকে জানানো হয় না। তখন প্রয়োজনীয় অব্জেক্ট তৈরীর দায়িত্ব একটি ফাংশনকে দেয়া হয়। যে ফাংশন আর্গুমেন্ট হিসেবে নেয় নির্দিষ্ট "টাইপ" এবং সে টাইপের জন্য যে object তৈরী করতে হবে তা তৈরী করে return করে।

ঐ application-গুলোতে Factory Method ব্যবহার হয় যেখানে, তৈরীকৃত বিভিন্ন অব্জেক্টের টাইপ আলাদা কিন্তু প্রধান বৈশিষ্ট একই।

### Example :
তো আবার করিম সাহেবের গল্পে ফিরে আসি। করিম সাহেবের দুই কারখানা বেশ ভালোই চলছে। কিন্তু তিনি তার কারখানার আরো নতুন কর্মি নিয়োগ করতে চাইলো। যেখানে করিম সাহেব চাচ্ছেন তার কারখানায় দুই ধরনের কর্মি থাকবে। (১) ফুলটাইম (২) পার্টটাইম।
তাদের বেতন setup করার জন্য আমরা Factory Method ব্যবহার করতে পারি। আমাদের উদাহরণে createEmployee ফাংশনটাই হলো Factory Method। যেটি একটা টাইপ গ্রহন করছে ও সে টাইপ অনুযায়ী সিদ্ধান্ত নিচ্ছে কি ধরনের অব্জেক্ট তৈরী করতে হবে। একই সাথে অব্জেক্টগুলোতে প্রয়োজনীয় তথ্যও যুক্ত করে দিচ্ছে।

```javascript
function Factory() {
    //Factory Method
    this.createEmployee = function (type) {
        var employee;
 
        if (type === "fulltime") {
            employee = new FullTime();
        } else{
            employee = new PartTime();
        }
        employee.type = type;
        employee.say = function () {
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }
        return employee;
    }
}
 
var FullTime = function () {
    this.hourly = "৳40,0000";
};
 
var PartTime = function () {
    this.hourly = "৳15,000";
};

function run() {
    var employees = [];
    var factory = new Factory();
 
    // 	Creates an instance of several derived classes
    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("fulltime"));
    
    
    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
}
run();
```

---
Abstract Factory আর Factory Method নিয়ে কনফিউশান লাগতেছে ? :confused:
- Abstract Factory : Creates an instance of several families of classes.
- Factory Method : Creates an instance of several derived classes.
---

## Prototype
Prototype pattern, initialized object তৈরী করে। 
-- এ প্যাটার্নে কিছু নতুন অব্জেক্ট তৈরীর পর সেটাকে non-initialized অবস্থায় না রেখে একটা prototype বা sample object দ্বারা কপি করে initialized করা হয়।

অনেকক্ষেত্রে, ডাটাবেজের default value সাথে match করার জন্য, আমাদের এধরনের initialized object তৈরীর প্রয়োজন হয়। এসবক্ষেত্রে Prototype pattern বেশ উপকারি।

জাভাস্ক্রিপ্টের জন্য Prototype pattern অনেক বেশি গুরুত্বপূর্ন ও উপকারী কারন, এখানে  classic object-oriented inheritance পরিবর্তে prototypal inheritance ব্যবহার করা হয়।

### Example :
```javascript
//A prototype
const fullTimeEmployee = {
    type: "fulltime",
    salary: "৳40,0000",
    startingTime: "08:00AM",
    EndingTime: "04:00PM",
};  

//Create new initialized object
const employee_1 = Object.create(fullTimeEmployee, { name: { value: 'Biddut vai' } });

console.log(`${employee_1.name} is a ${employee_1.type} worker.`);
console.log(`${employee_1.name}'s working schedule ${employee_1.startingTime} to ${employee_1.EndingTime}`);
```

## Singleton
Singleton pattern হলো এমন একটি special pattern যা কোনো অব্জেক্টের একের অধিক অব্জেক্ট তৈরী হতে বাধা দেয়। অর্থাত, অব্জেক্টের শুধুমাত্র একটি instance-ই তৈরী হতে দেয়। আর তখন ঐ instance-কে বলা হয় singleton

এটা কাজ করে এভাবে যেঃ যদি singleton object-এর কোনো instance না থাকে তবে নতুন একটা instance তৈরী করবে। আর যদি আগে থেকেই একটা instance থেকে থাকে, তবে নতুন করে আর instance তৈরী হতে দিবে না।

যখন, কোনো একটা single place থেকে system-wide action পরিচালনার প্রয়োজন পরে, তখন Singleton pattern বেশ উপকারী।

### Example :
মফিজ সাহেব এর আইস্ক্রিম ও কেকের কারখানার ম্যানেজার নিয়োগ পদ্ধতির জন্য কিন্তু আমরা এই প্যাটার্ন ব্যবহার করতে পারি।\
যদি ম্যানেজার না থাকে তবে নতুন একটা ম্যানেজার অব্জেক্ট তৈরী করবে। আর যদি আগে থেকেই ম্যানেজার থেকেই থাকে তবে অন্য কেউ ম্যানেজার দাবি করলেউ... ম্যানেজার হিসেবে যে আছে তার ইনফরমেশান ই দেখাবে।

```javascript
class Manager {
    constructor(name) {
      if (Manager.exists) {
        return Manager.instance;
      }
      this.name = name;
      Manager.instance = this;
      Manager.exists = true;
      return this;
    }
  
    getManagerName() {
      return this.name;
    }
  }
  
  const salamVai = new Manager('Abdus Salam');
  console.log(salamVai.getManagerName());
  
  const gutibajSalam = new Manager('Gutibaj Salam');
  console.log(gutibajSalam.getManagerName());
```









# #Structural Design Patterns
Structural pattern, object composition এর উপর ফোকাস করে সাথে সাথে ভিন্ন ভিন্ন object এর মধ্যে থাকা সম্পর্কগুলো বোঝার জন্য - একটা সহজ পদ্ধতি খুজে বের করার চেষ্টা করে।
এই প্যাটার্নগুলো নিশ্চয়তা দেয় যে, যদি আমরা এপ্লিকাশনের কোনো একটা ছোটো অংশকে পরিবর্তন করি তবে তা সম্পূর্ন structure কে পরিবর্তন করে ফেলবেনা।
এই ক্যাটাগরীর অন্তর্ভূক্ত pattern গুলো হলোঃ Adapter, Bridge, Composite, Decorator, Facade, Flyweight and Proxy.

## Adapter
Adapter pattern একটা interface কে অন্য interface-এ রূপান্তর করে। (এখানে interface বলতে আসলে একটা object এর প্রোপার্টি আর মেথড বুঝানো হচ্ছে।) Adapter pattern-কে Wrapper Pattern-ও বলে।

Adapter pattern ব্যবহার করা হয় ঐ জায়গা গুলোতে, যেখানে পূর্বের component-গুলোর সাথে নতুন component গুলোকে integrat করার প্রয়োজন হয়। যেমনঃ কোনো এপ্লিকেশানে কোনো একটা interface-কে improve করার জন্য পূর্বের লেখা কোডকে পূনরায় লেখার প্রয়োজন হলো। কিন্তু অন্য interface-গুলো যদি পরিবর্তিত interface-এর পূর্বের কোডের উপর নির্ভর করে, তখন আমরা এই প্যটার্ন ব্যবহার করতে পারি।

### Example
মনে করি একটা এপ্লিকেশানে, একটাই class আছে এবং যে class-এ দুইটা মেথড আছে, যোগ ও বিয়োগ। আমরা এই class-এর জন্য কোড লিখে ফেললাম। কিন্তু, পরে দেখা গেলো আমরা class-এর জন্য যে কোড লিখেছি তা আরো ইম্প্রুভ করতে পারতাম বা অন্যভাবে সাজাইলে সেটা ভালো হতো। তাই আমরা এবার সিদ্ধান্ত নিলাম নতুনভাবে আবার আরেকটা class(improved) লিখবো.. যার কাজ পূর্বের মতোই (যোগ আর বিয়োগ)।\
কিন্তু সমস্যা হচ্ছে, অনেক ইউজারই এটাকে আগেই ইউজ করা শুরু করেছে। তাই, তাদের app-এ যে instance ব্যবহার হচ্ছে তা পূর্বের class-এর। তাই আমরা পূর্বের class-কে এপ্লিকেশান থেকে বাদ দিতে পারি না। 

তাই যেটা করতে হবে তা হলো, একটা Adapter class লিখতে হবে... যা পূর্বের interface-কে নতুন interface-এ translate করে দিবে।

```javascript
// old interface
class OldApp {
    constructor() {
      this.operations = function(x, y, type) {
        switch (type) {
          case 'add':
            return x + y;
          case 'sub':
            return x - y;
          default:
            return NaN;
        }
      };
    }
  }
  
  // new interface
  class NewApp {
    constructor() {
      this.add = function(x, y) {
        return x + y;
      };
      this.sub = function(x, y) {
        return x - y;
      };
    }
  }
  
  // Adapter Class
  class AppAdapter {
    constructor() {
      const newCalc = new NewCalculator();
  
      this.operations = function(term1, term2, operation) {
        switch (operation) {
          case 'add':
            // using the new implementation under the hood
            return newCalc.add(term1, term2);
          case 'sub':
            return newCalc.sub(term1, term2);
          default:
            return NaN;
        }
      };
    }
  }
  // usaage
  const oldInstance = new OldApp();
  console.log(oldInstance.operations(7, 5, 'add'));
  
  const newInstance = new NewApp();
  console.log(newInstance.add(10, 5));
  
  const adaptedInstance = new AppAdapter();
  console.log(adaptedInstance.operations(10, 13, 'add'));
```

