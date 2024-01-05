---
title: Cookie_sessionStorage_localStorage的区别
tags: 
   - HTTP
categories: 
   - 浏览器
summary: Cookie_sessionStorage_localStorage的区别
description: Cookie_sessionStorage_localStorage的区别
date: 2023-12-30 17:45:06
---



## Cookie_sessionStorage_localStorage的区别



### 共同点：

都是保存在浏览器端，并且是同源的



### 区别：

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



### 补充说明一下 cookie 的作用： 

**保存用户登录状态**。例如将用户 id 存储于一个 cookie 内，这样当用户下次访问该页面 时就不需要重新登录了，现在很多论坛和社区都提供这样的功能。 cookie 还可以设置 过期时间，当超过时间期限后，cookie 就会自动消失。因此，系统往往可以提示用户保 持登录状态的时间：常见选项有一个月、三个 月、一年等。

**跟踪用户行为**。例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。 如果每次都需要选择所在地是烦琐的，当利用了 cookie 后就会显得很人性化了，系统能 够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区 的天气情况。因为一切都是在后台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便定制页面。如果网站提供了换肤或更换布局的功能，那么可以使 用 cookie 来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以 保存上一次访问的界面风格。

### 