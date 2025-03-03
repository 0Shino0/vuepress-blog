---
title: GLSL
tags: 
  - GLSL
categories: 
  - 图形学
summary: GLSL
description: GLSL介绍
date: 2023-12-25 15:04:23
# autoGroup-2: 计算机底层
---

## 介绍

GLSL 使用标准的 C/C++ 语句集。它有选择语句（if-else和switch-case）、迭代语句（for、while和do-while）和跳转语句（break、continue和return）。这些语句基本上按照 C++ 定义的方式工作（例如，您可以在for语句中声明变量），但也有一些限制。例如，您可以在 C++ 中的 if条件中声明变量，但不能在 GLSL 中声明。

请注意，跳转语句列表中没有goto 。GLSL 没有goto结构。



C/C++函数模型允许函数是递归的。也就是说，函数A可以调用函数B，函数B本身又调用函数A。确实，函数A可以调用*自己*。显然，必须有一些条件来防止无限递归，但 C/C++ 允许这样做。

GLSL**没有。**GLSL 内存模型不允许递归函数调用。这允许 GLSL 在不允许递归的硬件上执行。它允许 GLSL 在无法任意写入内存时运行，这对大多数着色器硬件都是如此（尽管随着时间的推移它变得不那么真实了）。

所以，在 GLSL 中没有递归。任何形式的。



## 参考

```
https://github.com/wshxbqq/GLSL-Card
```

