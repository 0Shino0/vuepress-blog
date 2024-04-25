---
title: 几个很实用的BOM属性对象方法
tags: 
   - HTTP
categories: 
   - 浏览器
summary: 几个很实用的BOM属性对象方法
description: 几个很实用的BOM属性对象方法
date: 2023-04-23 12:11:36
---



## 几个很实用的BOM属性对象方法

什么是 Bom? Bom 是浏览器对象。有哪些常用的 Bom 属性呢？

1. `location` 对象（路径地址操作）
   1. location.href-- 返回或设置当前文档的 URL 
   2. location.search -- 返回 URL 中的查询字符串部分。例 如 http://www.dreamdu.com/dreamdu.php?id=5&name=dreamdu 返回包括(?)后面的内 容?id=5&name=dreamdu
   3. location.hash -- 返回 URL #后面的内容，如果没有 #，返回空 
   4. location.host -- 返回 URL 中的域名部分，例如 www.dreamdu.com 
   5. location.hostname -- 返回 URL 中的主域名部分，例如 dreamdu.com 
   6. location.pathname -- 返回 URL 的域名后的部分。例如 http://www.dreamdu.com/xhtml/ 返 回/xhtml/
   7. location.port -- 返回 URL 中的端口部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回 8080 
   8. location.protocol -- 返回 URL 中的协议部分。例如 http://www.dreamdu.com:8080/xhtml/ 返 回(//)前面的内容 http:
   9. location.assign -- 设置当前文档的 URL
   10. location.replace() -- 设置当前文档的 URL，并且在 history 对象的地址列表中移除这个 URL location.replace(url); 
   11. location.reload() -- 重载当前页面
2. `history`对象 （**前进后退操作**）
   1. history.go() -- 前进或后退指定的页面数 history.go(num); 
   2. history.back() -- 后退一页 
   3. history.forward() -- 前进一页
3. `Navigator` 对象（浏览器相关信息）
   1. navigator.userAgent -- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字 符串) 
   2. navigator.cookieEnabled -- 返回浏览器是否支持(启用)cookie

