---
title: SSR方案
tags: 
    - SSR
categories: 
    - FrontEnd
# top: true
# pin: true
summary: SSR方案
description: SSR方案
# sticky: 1
date: 2023-03-08 15:55:43
# autoGroup-2: 基础篇
---

::: tip SSR服务端渲染

:::

<!-- more -->

## SSR

### 传统的服务端渲染

传统的服务端渲染有: asp,jsp,ejs等,服务端语言往往通过这些模板引擎将数据和do在服务端渲染完成,返回一个完整的静态html页面给客户端,由客户端直接显示。

#### 原理

1. 客户端发送http请求
2. 服务端响应http请求，返回拼接好的html字符串给客户端
3. 3.客户端渲染html

#### 缺点

- 前后端不分离,不好维护
- 用户体验不佳,需要重新加载页面
- 服务端压力大

### CSR(客户端渲染)

在现代化的前端项目中，客户端渲染的代表性技术栈是vue、react、angular，我们常常使用它们来构建客户端单页或者多页应用程序。以SPA构建程序为例，在浏览器端首先渲染的是一套空的html,通过JS直接进行页面的渲染和路由跳转等操作,所有的数据通过ajax请求从服务器获取后,在进行客户端的拼装和展示。

#### 原理

1. 客户端发起http请求
2. 服务端响应http请求，返回一个空的html文件
3. 客户端初始化时加载必须的js文件,请求接口
4. 将生成的dom插入到html中

#### 缺点

- 首屏加载慢
- 不利于SEO

### 同构（现代服务器渲染）

Vue、 React的SSR方案实际上就是同构渲染,我们现在讲的服务端渲染概念,是指在前端范畴或者说在vue,react等单页面技术栈范畴内,基于Node.js server运行环境的服务端渲染方案,通过在Node.js中运行相同应用程序的前端框架(例如React, Vue等) ,将其预渲染成HTML,最后在客户端进行注水化处理。简单来讲,就是应用程序的大部分代码在服务器(node服务端)和客户端上运行,这就是所谓的现代服务端渲染:同构。

#### 原理

1. 客户端发起http请求
2. 服务端渲染把Vue实例转换成了静态的html发送给客户端
3. 客户端渲染是需要把事件、响应式特性等Vue的特性都绑回去

#### 缺点

- 服务器压力大
- 涉及构建设置和部署的更多要求
- 一些三方库可能需要特殊处理

#### 优点

- 首屏速度快
- 前后端分离
- 利于SEO
- 有一些现成框架: `Nuxt.js`、 `Next.js`


## CSR、SSR以及同构渲染的区别



## Nuxt3 基本原理



```
const color = useColorMode();

const colorMode = computed({

 get: () => color.value === "dark",

 set: () => (color.preference = color.value === "dark" ? "light" : "dark"),

});
```

