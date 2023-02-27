---
title: 页面预加载实现
tags: 
    - 整合
categories: 
    - Component
summary: 页面预加载实现
description: 页面预加载实现
# sticky: 2
abbrlink: 1873
date: 2022-10-7 08:16:27
---

::: tip 页面预加载
   如何实现 | 实现方案
:::

<!-- more -->

### 原生Js实现

#### 方法一:
1. 界面默认进去显示loading遮罩。
2. window.onload后遮罩移除 。
3. 进度条基本都是假的,
4. 除非手动去计算加载的资源数量或者大小然后百分比换算....



### Vue实现

#### 基本原理
基本原理是，在window加载之前，渲染出加载动画，页面渲染完成后，移除加载动画即可



### React实现




### 参考

[https://segmentfault.com/q/1010000017039408](https://segmentfault.com/q/1010000017039408)


[https://blog.csdn.net/weixin_43844392/article/details/100987965](https://blog.csdn.net/weixin_43844392/article/details/100987965)

