---
title: HTML知识点
tags:
  - HTML
categories:
  - FrontEnd
date: 2025-03-02 23:37
summary: HTML知识点
description: HTML知识点
article: true
---

## 对HTML语义化标签的理解

HTML5 语义化标签是指正确的标签包含了正确的内容，结构良好，便于阅读，比如 nav 表示导航条，类似的还有 article、header、footer 等等标签

# Doctype作用严格模式与混杂模式
## Doctype作用?

Doctype 声明于文档最前面，告诉浏览器以何种方式来渲染页面，这里有两种模式，严格模式和混杂模式

## 严格模式与混杂模式如何区分?

严格模式：的排版和 JS 运作模式是 以**该浏览器支持的最高标准运行**

混杂模式：**向后兼容，模拟老式浏览器，防止浏览器无法兼容页面**

# 常用的BOM属性对象方法

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
   12. history.go() -- 前进或后退指定的页面数 history.go(num); 
   13. history.back() -- 后退一页 
   14. history.forward() -- 前进一页
3. `Navigator` 对象（浏览器相关信息）
   1. navigator.userAgent -- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字 符串) 
   2. navigator.cookieEnabled -- 返回浏览器是否支持(启用)cookie

## iframe是什么有什么缺点

## 定义：

iframe 元素会创建包含另一个文档的内联框架
## 提示：

可以将提示文字放在`<iframe></iframe>`之间，来提示某些不支持 iframe 的浏览器
## 缺点：

会**阻塞主页面的 onload 事件**
搜索引擎无法解读这种页面，**不利于 SEO**
**iframe 和主页面共享连接池**，而浏览器对**相同区域有限制所以会影响性能**。
# 说一下HTML5_drag_api

- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发，。 
- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。 
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。 
- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。 
- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。 
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。 
- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发

# 说一下web Quality

能够被残障人士使用的网站才能称得上一个易用的（易访问的）网站。 残障人士指的是那些带有残疾或者身体不健康的用户。 

```text
使用 alt 属性
<img src="person.jpg" alt="this is a person"/>
有时候浏览器会无法显示图像。具体的原因有：
用户关闭了图像显示
浏览器是不支持图形显示的迷你浏览器
浏览器是语音浏览器（供盲人和弱视人群使用）
如果您使用了 alt 属性，那么浏览器至少可以显示或读出有关图像的描述
```


# click在IOS上有300ms延迟_如何解决

1. 粗暴型，禁用缩放

```html
<meta name="viewport" content="width=device-width, user-scalable=no">
```

1. 利用 FastClick，其原理

检测到 touchend 事件后，立刻触发模拟 click 事件，并且把浏览器 300 毫秒之后真正出 发的事件给阻断掉

