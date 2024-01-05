---
title: CSS三种隐藏元素的区别
tags: 
   - CSS
categories: 
   - CSS
summary: CSS三种隐藏元素的区别
description: CSS三种隐藏元素的区别
date: 2023-4-24 19:27:03
---





## CSS三种隐藏元素的区别



## `visibility:hidden;`

`visibility:hidden`，该元素 隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件



## `opacity:0;`

`opacity:0`，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些 事件，如 click 事件，那么点击该区域，也能触发点击事件的



## `display:none;`

`display:none`， 把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。







