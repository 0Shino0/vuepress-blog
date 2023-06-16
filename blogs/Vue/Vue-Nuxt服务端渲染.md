---
title: Nuxt服务端渲染
tags: 
  - SSR
categories: 
  - FrontEnd
abbrlink: 62098
date: 2023-3-8 15:53:14
summary: Nuxt服务端渲染
description: Nuxt服务端渲染
---



## 服务端渲染

`SPA`虽然给服务器减轻了压力，但是也是有缺点的：

1. 首屏渲染时间比较长：必须等待`JavaScript`加载完毕，并且执行完毕，才能渲染出首屏。
2. `SEO`不友好：爬虫只能拿到一个`div`元素，认为页面是空的，不利于`SEO`。



Nuxt.js是特点（优点）：

- 基于`Vue`
- 自动代码分层
- 服务端渲染
- 强大的路由功能，支持异步数据
- 静态文件服务
- `EcmaScript6`和`EcmaScript7`的语法支持
- 打包和压缩`JavaScript`和`Css`
- `HTML`头部标签管理
- 本地开发支持热加载
- 集成`ESLint`
- 支持各种样式预编译器`SASS`、`LESS`等等
- 支持`HTTP/2`推送









## 参考

```
https://cn.vuejs.org/guide/scaling-up/ssr.html
https://juejin.cn/post/7154586714416087076
https://juejin.cn/post/7147184835377758238
https://juejin.cn/post/6844903833840123912
```

