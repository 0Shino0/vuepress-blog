---
title: ES6
tags: 
  - JS
categories: 
  - FrontEnd
# abbrlink: 13229
date: 2022-05-15 11:17:07
summary: ES6新特性
autoGroup-2: 基础篇
---

##### 箭头函数

- 定义：**箭头函数表达式**的语法比[函数表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function)更简洁，并且没有自己的[this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)，[arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)，[super](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)或[new.target](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。

- 特点：

  ```js
    1.this 的值是静态的 (等于 外层作用域下this的值)
    let getName2 =() =>{
        console.log(this);
    }
    getName2.call({})
    
    2.不能作为构造函数使用
    const Person = () =>{}
    let me = new Person();
    
    3.不能使用 arguments
    function fn(){
        console.log(arguments);
        //arguments是一个伪数组
    }
    fn(1,2,3,4,5,6);
    fn = () =>{
        console.log(arguments);
    }
    fn(1,2,3,4,5,6);
    
    4.箭头函数简写
    一 不写小括号，当新参有且只有一个的时候
    二 不写花括号, 当代码体只有一条语句的时候, 并且语句的执行结果为函数返回值的 (如果不
    let pow = num =>{
        return num * num;
    }
    console.log(pow);
  ```

##### ...运算符

```js
  	// ...运算符    是扩展运算符
         //  打包和拆包    要么是数组要么是对象
         // 对于打包只有一种情况是打包并且打包只能打包数组
```

```js
    // 数组的打包和拆包

    let arr = [1,2,3,4]
    // 拆包     数组可以直接拆包
    console.log(...arr);
    console.log(1,2,3,4,...arr);

    // 数组打包
    function add(a,b,...arr){
        console.log(arr);
        console.log(arr instanceof Array);
    }
    add(1,2,3,4,5,6,7,8,9,10)
    
    // 对象只能拆包     不能直接拆包
      let obj = {
          name:'zly',
          age:33
      }

      console.log({...obj});
```

#### 模块化

##### 暴露模块的方式

  ```js
    //使用【分别暴露】
    export const teacher1 = {name:'强哥',age:15}
    export const teacher2 = {name:'歌神',age:17}
    
    //使用【统一暴露】
    const stu1 = {name:'王宇',age:18}
    const stu2 = {name:'宇航',age:19}
    export {stu1,stu2}
    
    //使用【默认暴露】
    export default {
        school:'尚硅谷',
        address:'宏福科技园',
        subjects:['前端','java','大数据']
    }
  ```

##### 引入暴露模块方式

```js
  //引入【分别暴露】的模块
  import {data,showData,showMsg} from './module1'
  
  //引入【分别暴露】的模块+重命名
  import {data as data2} from './module2'
  
  //引入【分别暴露】+ 打包引入
  import * as module1 from './module1'
  
  //引入【统一暴露】支持上面三种引入方式
  import {school as d,getLaoliu,person,} from './module3'
  
  //引入【默认暴露】
  import module4 from './module4'
  
  //引入多种暴露方式的模块
  import module5,{teacher1,teacher2,stu1,stu2} from './module5'
```
