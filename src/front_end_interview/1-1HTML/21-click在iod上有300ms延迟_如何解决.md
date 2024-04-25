---
title: click在IOS上有300ms延迟_如何解决
tags: 
   - HTTP
categories: 
   - 浏览器
summary: click在IOS上有300ms延迟_如何解决
description: click在IOS上有300ms延迟_如何解决
date: 2023-04-23 20:47:54

---



## click在IOS上有300ms延迟_如何解决

1. 粗暴型，禁用缩放

```html
<meta name="viewport" content="width=device-width, user-scalable=no">
```

2. 利用 FastClick，其原理

检测到 touchend 事件后，立刻触发模拟 click 事件，并且把浏览器 300 毫秒之后真正出 发的事件给阻断掉

