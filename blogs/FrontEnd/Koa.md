---
title: Koa
tags: 
   - Koa
categories: 
   - FrontEnd
summary: Koa2入门
description: Koa2入门
abbrlink: 3740
date: 2022-08-26 17:48:00
autoGroup-5: Node篇
---

## Koa2

### 简介

Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 

通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。



#### 安装

`npm install -S koa`

#### 版本依赖

nodejs>v7.6.0



### Koa脚手架 koa-generator
快速生成koa服务的脚手架工具
1. 安装 `yarn global add koa-generator` or `npm install -g koa-generator`
2. 生成文件 `koa2 + 项目名`
3. 安装依赖 `npm install` or `yarn`
4. 启动服务 `npm start` or `node .bin/www`



### koa工作原理

洋葱模型

- 执行顺序：顺序执行
- 回调的顺序：反向执行
- 先进后出



### koa-generator创建的koa2框架目录



### koa中间件



### 常用插件

1. 路由
   - koa-router
2. 跨域处理
   - @koa/cors
3. 压缩
   - koa-compress
4. 静态资源
   - koa-static
5. 协议处理
   - koa-json
   - koa-body
6. 安全
   - 鉴权方式
     - koa-session
     - kos-jwt
   - 通信头
     - koa-helmet
7. 日志
   - koa-logger
8. [更多 koa-wiki](https://github.com/koajs/koa/wiki)



### 常用API

`app.use`

`app.listene`

`app.on`





### 连接数据库



### pm2 部署Koa项目