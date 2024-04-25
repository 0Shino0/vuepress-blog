---
title: BFC块级格式化上下文
tags: 
   - CSS
categories: 
   - CSS
summary: BFC块级格式化上下文
description: BFC块级格式化上下文
date: 2023-04-24 15:48:35
---



## BFC块级格式化上下文

## 【定义】

块级格式上下文，web独立的渲染区域，不会影响边界外的元素

## 【形成条件】

1、浮动float
2、非静态定位position为absolute或fixed
3、display为inline-block、table-cell、table-caption、flow-root、flex 或 inline-flex 元素的直接子元素、grid 或 inline-grid 元素的直接子元素
4、overflow不为visible
5、contain 值为 layout、content 或 paint 的元素

## 【BFC特性】

1、内部box会在垂直方向，一个接一个地放置。
2、Box垂直方向的距离由margin决定，在一个BFC中，两个相邻的块级盒子的垂直外边距会产生折叠。
3、在BFC中，每一个盒子的左外边缘（margin-left）会触碰到容器的左边缘(border-left)（对于从右到左的格式来说，则触碰到右边缘）
4、形成了BFC的区域不会与float box重叠
5、计算BFC高度时，浮动元素也参与计算

## 【主要应用】

1、利用特性4可实现左图右文之类的效果；
2、利用特性5可以解决浮动元素造成的父元素高度塌陷问题；
3、解决外边距合并问题；
4、右侧盒子自适应：BFC区域不会与浮动盒子产生交集，而是紧贴浮动边缘。

