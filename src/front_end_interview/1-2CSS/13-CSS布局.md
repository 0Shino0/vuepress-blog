---
title: CSS布局
tags: 
   - CSS
categories: 
   - CSS
summary: CSS布局
description: CSS布局
date: 2023-4-24 19:47:55
---



## CSS布局

六种布局方式总结：

- 圣杯布局
- 双飞翼布局
- Flex 布局
- 绝对定位布局
- 表格布局
- 网格布局





## 圣杯布局

圣杯布局是指布局从上到下分为 header、container、footer，然后 container 部分定为三栏布局。这种布局方式同样分为header、container、footer。圣杯布局的缺陷在于 center 是在 container 的 padding 中的，因此宽度小的时候会出现混乱。



## 双飞翼布局

双飞翼布局给 center 部分包裹了一个 main 通过设置 margin 主动地把页面撑



## Flex 布局

Flex 布局是由 CSS3 提供的一种方便的布局方式



## 绝对定位布局

绝对定位布局是给 container 设置 position: relative 和 overflow: hidden，因为绝对定位的元素的参照物为第一个 postion 不为 static 的祖先元素。 left 向左浮动，right 向右浮动。 center 使用绝对定位，通过设置 left 和 right 并把两边撑开。 center 设置 top: 0 和 bottom: 0 使其高度撑开



## 表格布局

表格布局的好处是能使三栏的高度统一。



## 网格布局

网格布局可能是最强大的布局方式了，使用起来极其方便，但目前而言，兼容性并不好。 网格布局，可以将页面分割成多个区域，或者用来定义内部元素的大小，位置，图层关 系