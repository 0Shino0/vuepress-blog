---
title: Cookie如何防范XSS攻击
tags: 
   - HTTP
categories: 
   - 浏览器
summary: Cookie如何防范XSS攻击
description: Cookie如何防范XSS攻击
date: 2024-01-01
---



## XSS攻击

XSS（跨站脚本攻击）是指攻击者在返回的 HTML 中嵌入 javascript 脚本，



## Cookie如何防范XSS攻击

为了减轻这些攻击，需要在 HTTP 头部配上，`set-cookie： httponly-`这个属性可以防止 XSS,**它会禁止 javascript 脚本来访问 cookie**。 secure - 这个属性告诉浏览器仅在请求为 https 的时候发送 cookie。 结果应该是这样的：`Set-Cookie=<cookie-value>....`



