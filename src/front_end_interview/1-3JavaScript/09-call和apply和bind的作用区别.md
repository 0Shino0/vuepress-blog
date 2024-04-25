---
title: call apply bind的作用和区别
tags: 
   - JS
categories: 
   - JS
summary: call apply bind的作用和区别
description: call apply bind的作用和区别
date: 2023-04-24 20:35:41
---



## call和apply和bind的作用区别



## 【共同点】

call apply bind三个方法都可以用来改变函数的this指向

## 【区别】

1、call apply改变this，直接调用，bind改变this,不直接调用，返回函数
2、传参不同。call参数是单个的，apply参数是数组（apply 将参数作为一个数组传递，call 将参数直接传递，使用逗号分隔。bind 仅将对象绑定，并不立即执行，其返回值是一个函数，传参方式与 call 相同）



