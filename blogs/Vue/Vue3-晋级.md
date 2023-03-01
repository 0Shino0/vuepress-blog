---
title: Vue3晋级
tags: 
    - Vue2
categories: 
    - FrontEnd
summary: Vue3
description: Vue3
abbrlink: 5996
date: 2022-09-06 10:49:48
autoGroup-3: 框架篇
---

## API风格

区别:[https://cn.vuejs.org/guide/introduction.html#single-file-components](https://cn.vuejs.org/guide/introduction.html#single-file-components)

### 选项式



### 组合式 `setup`



`Object.defineProperty`  => `Proxy`

支持数组和对象的响应式操作



### vue3 生命周期

<img src="https://cn.vuejs.org/assets/lifecycle.16e4c08e.png" alt="https://cn.vuejs.org/assets/lifecycle.16e4c08e.png" style="zoom:50%;" />

#### `setup()`中的生命周期

在之前加上 `on`

<img src="https://shinoimg.yyshino.top/img/202209061331060.png" alt="image-20220906133131981" style="zoom:50%;" />



## 新增特性

### `teleport`



### `Suspense`



## Vue3 全局变化

### 全局配置

`Vue.config`  ===>  `app.config`

`config.productionTip`被删除

`config.ignoredElements` 改名为 `config.isCustomElement`

`config.keyCodes` 被删除



### 全局注册类API

`Vue.component`    ===>  `app.component`

`Vue.directive`   ===>   `app.directive`



### 行为扩展类API

`Vue.mixin`   ===>   `app.mixin`

`Vue.use`   ===>   `app.use`





