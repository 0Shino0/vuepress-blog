---
title: Vue源码分析
tags: 
    - Vue2
categories: 
    - FrontEnd
abbrlink: 41718
date: 2022-05-20 13:52:41
summary: vue源码分析
description: vue源码分析
autoGroup-7: 源码篇
---

### Vue源码分析
对Vue源码，本人也在学习当中
下面是一些github上大佬的解析

#### 关于
- Vue.js是一款MVVM框架，上手快速简单易用，通过响应式在修改数据的时候更新视图。- Vue.js的响应式原理依赖于Object.defineProperty，尤大大在Vue.js文档中就已经提到过，这也是Vue.js不支持IE8 以及更低版本浏览器的原因。Vue通过设定对象属性的 setter/getter 方法来监听数据的变化，通过getter进行依赖收集，而每个setter方法就是一个观察者，在数据变更的时候通知订阅者更新视图。————[github](https://github.com/answershuto/learnVue)


剖析github上某基友仿vue实现的mvvm库
[地址](https://github.com/DMQ/mvvm)






