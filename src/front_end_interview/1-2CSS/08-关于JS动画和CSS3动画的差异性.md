---
title: 关于 JS 动画和 CSS3 动画的差异性
tags: 
   - CSS
categories: 
   - CSS
summary: 关于 JS 动画和 CSS3 动画的差异性
description: 关于 JS 动画和 CSS3 动画的差异性
date: 2023-4-24 19:21:45
---



## 关于 JS 动画和 css3 动画的差异性

渲染线程分为 main thread 和 compositor thread，如果 css 动画只改变 transform 和 opacity， 这时整个 CSS 动画得以在 compositor trhead 完成（而 **JS 动画则会在 main thread 执行**，然后出发 compositor thread 进行下一步操作），特别注意的是如果改变 transform 和 opacity 是不会 layout 或者 paint 的。



区别： 

- 功能涵盖面，JS 比 CSS 大 
- 实现/重构难度不一，CSS3 比 JS 更加简单，性能跳优方向固定 
- 对帧速表现不好的低版本浏览器，css3 可以做到自然降级 
- css 动画有天然事件支持 css3 有兼容性问题