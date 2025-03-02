---
title: 一个图片_url访问后直接下载怎样实现
tags: 
   - HTTP
categories: 
   - 浏览器
summary: 一个图片_url访问后直接下载怎样实现
description: 一个图片_url访问后直接下载怎样实现
date: 2023-12-18
---



# 一个图片_url访问后直接下载怎样实现

请求的返回头里面，用于浏览器解析的重要参数就是 OSS 的 API 文档里面的返回 http 头，决定用户下载行为的参数。 下载的情况下：

```http
x-oss-object-type: Normal 
x-oss-request-id: 598D5ED34F29D01FE2925F41
x-oss-storage-class: Standard
```


# fetch发送2次请求的原因



fetch 发送 post 请求的时候，总是发送 2 次，第一次状态码是 204，第二次才成功？ 

原因很简单，因为你用 fetch 的 post 请求的时候，**导致 fetch 第一次发送了一个 Options 请求**，**询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求。**



# Cookie_sessionStorage_localStorage的区别

## 共同点：

都是保存在浏览器端，并且是同源的

## 区别：

- cookie 数据始终在同源的 http 请求中携带（即使不需要），即 **cookie 在浏览器 和服务器间来回传递**。
- **sessionStorage 和 localStorage 不会自动把数据发给服务器，仅 在本地保存**
- cookie 数据还有**路径（path）的概念**，可以限制 cookie 只属于某个路径下, 

存储大小限制也不同

- cookie 数据不能超过 4K，同时因为每次 http 请求都会携带 cookie， 所以 cookie 只适合保存很小的数据，如回话标识。
- webStorage 虽然也有存储大小的限制，但是比 cookie 大得多，可以达到 5M 或更大 数据

有效期不同

- sessionStorage：仅在**当前浏览器窗口关闭前有效**，自然也就不可能持久保持，
- localStorage： 始终有效，**窗口或浏览器关闭也一直保存，因此用作持久数据**；
- cookie：**只在设置的 cookie 过期时间之前一直有效**，即使窗口或浏览器关闭。（key：本身就是一个回话过程，关 闭浏览器后消失，session 为一个回话，当页面不同即使是同一页面打开两次，也被视为 同一次回话）

作用域不同 

- sessionStorage：**不在不同的浏览器窗口中共享，即使是同一个页面；** 
- localStorage：在所有同源窗口都是共享的；
- cookie：也是在所有同源窗口中共享的

## 补充说明一下 cookie 的作用： 

**保存用户登录状态**。例如将用户 id 存储于一个 cookie 内，这样当用户下次访问该页面 时就不需要重新登录了，现在很多论坛和社区都提供这样的功能。 cookie 还可以设置 过期时间，当超过时间期限后，cookie 就会自动消失。因此，系统往往可以提示用户保 持登录状态的时间：常见选项有一个月、三个 月、一年等。

**跟踪用户行为**。例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。 如果每次都需要选择所在地是烦琐的，当利用了 cookie 后就会显得很人性化了，系统能 够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区 的天气情况。因为一切都是在后台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便定制页面。如果网站提供了换肤或更换布局的功能，那么可以使 用 cookie 来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以 保存上一次访问的界面风格。

# cookie_session区别

1. cookie 数据存放在客户的浏览器上，session 数据放在服务器上。 
2. cookie 不是很安全，别人可以分析存放在本地的 COOKIE 并进行 COOKIE 欺骗 考虑到安全应当使用 session。 
3. session 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能 考虑到减轻服务器性能方面，应当使用 COOKIE。
4. 单个 cookie 保存的数据不能超过 4K，很多浏览器都限制一个站点最多保存 20 个 cookie。

# Cookie如何防范XSS攻击
## XSS攻击

XSS（跨站脚本攻击）是指攻击者在返回的 HTML 中嵌入 javascript 脚本，

## Cookie如何防范XSS攻击

为了减轻这些攻击，需要在 HTTP 头部配上，`set-cookie： httponly-`这个属性可以防止 XSS,**它会禁止 javascript 脚本来访问 cookie**。 secure - 这个属性告诉浏览器仅在请求为 https 的时候发送 cookie。 结果应该是这样的：`Set-Cookie=<cookie-value>....`



# 一句话概括RESTFUL

就是用 URL 定位资源，用 HTTP 描述操作。