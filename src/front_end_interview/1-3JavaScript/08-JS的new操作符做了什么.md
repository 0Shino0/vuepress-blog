---
title: JS的new操作符做了什么
tags: 
   - JS
categories: 
   - JS
summary: JS的new操作符做了什么
description: JS的new操作符做了什么
date: 2023-04-24 20:35:41
---





## JS的new操作符做了什么

new 操作符新建了一个空对象，这个对象原型指向构造函数的 prototype，执行构造函数 后返回这个对象。



1. 创建一个空的简单`JavaScript`对象即`{}`。
2. 链接该对象(即设置该对象的构造函数)到另一个对象。
3. 将步骤`1`新创建的对象作为`this`的上下文`context`。
4. 如果该函数没有返回对象，则返回步骤`1`创建的对象。



```javascript
function _new(base,...args){
    var obj = {};
    obj.__proto__ = base.prototype;
    base.apply(obj, args);
    return obj;
}
function Student(i){
    this.name = i;
    this.hp = 100;
    this.mp = 1000;
    this.power = 100,
    this.defense = 100;
}
Student.prototype.from = "sdust";
var stuGroup = [];
for(let i=0;i<10;++i){
    stuGroup.push(_new(Student,i));
}
console.log(stuGroup);

```

