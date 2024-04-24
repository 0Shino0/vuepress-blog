---
title: fetch发送2次请求的原因
tags: 
   - HTTP
categories: 
   - 浏览器
summary: fetch发送2次请求的原因
description: fetch发送2次请求的原因
date: 2023-12-29 12:11:36
---



## fetch发送2次请求的原因



fetch 发送 post 请求的时候，总是发送 2 次，第一次状态码是 204，第二次才成功？ 

原因很简单，因为你用 fetch 的 post 请求的时候，**导致 fetch 第一次发送了一个 Options 请求**，**询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求。**

