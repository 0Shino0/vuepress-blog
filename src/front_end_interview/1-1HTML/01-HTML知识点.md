---
title: HTML知识点
tags:
  - HTML
categories:
  - FrontEnd
date: 2023-04-02 23:37:00
summary: HTML知识点
description: HTML知识点
article: true
---

## 对HTML语义化标签的理解

HTML5 语义化标签是指正确的标签包含了正确的内容，结构良好，便于阅读，比如 nav 表示导航条，类似的还有 article、header、footer 等等标签

# HTML标签的语义化

- `<h1>~<h6>` 定义页面的标题，`<h1>-<h6>`元素等级依次降低。
- `<header>` 页眉通常包括网站标志、主导航、全站链接以及搜索框。
- `<nav>` 提供当前文档内或其他文档的导航链接，导航部分的常见示例是菜单，目录和索引。
- `<main>` 主要内容区域由与文档的中心主题或应用程序的中心功能直接相关或扩展的内容组成。
- `<article>` 专注于单个主题的博客文章，报纸文章或网页文章。
- `<address>` 提供了一个或多个人员或组织的联系信息。
- `<section>` 定义文档中的节，表示`HTML`文档中包含的独立部分。
- `<aside>` 表示文档的一部分，其内容仅与文档的主要内容间接相关,通常显示为侧边栏。
- `<footer>` 定义文档的底部区域，通常包含文档的作者，著作权信息，联系信息等。
- `<hgroup>` 表示文档部分的多级标题，它对一组`<h1>~<h6>`元素进行分组。
- `<ul>` 表示项目的无序列表，通常呈现为项目符号列表。
- `<ol>` 表示项目的有序列表，通常呈现为编号列表。
- `<li>` 表示列表中的项目。
- `<strong>` 表示强调突出重点内容，浏览器通常以粗体显示内容。
- `<em>` 标记强调重点的文本，可以嵌套`<em>`元素，嵌套的每个级别都表示强调程度更高。
- `<small>` 代表旁注和小字体，例如版权和法律文本，独立于其样式表示。
- `<abbr>` 表示缩写或首字母缩写词。
- `<cite>` 用于描述对引用的创意作品的引用，并且必须包括该作品的标题。
- `<figure>` 表示独立的内容，可能带有可选的标题，该标题使用`<figcaption>`元素指定。
- `<figcaption>` 表示说明其父`<figure>`元素的其余内容的标题或图例。
- `<blockquote>` 定义块引用，可以使用`<cite>`元素提供文本表示
- `<mark>` 表示被标记或突出显示以供参考或标记目的的文本。
- `<time>` 表示特定的时间。
- `<date>` 表示特定的日期。
- `<dfn>` 用于表示在定义短语或句子的上下文中定义的术语。
- `<code>` 计算机代码的简短片段的方式显示其内容的样式。
- `<samp>` 输出的示例或引用的内联文本或样本文本。
- `<kbd>` 表示文本是从键盘上键入的，它经常用在与计算机相关的文档或手册中。
- `<del>` 表示已从文档中删除的文本范围。
- `<ins>` 表示已添加到文档中的文本范围。
- `<menu>` 表示用户可以执行或激活的一组命令，例如上下文菜单等。
- `<dialog>` 表示对话框或其他交互式组件，例如检查器或子窗口。
- `<summary>` 元素为`<details>`元素的显示框指定摘要，标题或图例。
- `<details>` 描述文档或文档某个部分的细节。
- `<bdi>`: 允许设置一段文本，使其脱离其父元素的文本方向设置。
- `<progress>`: 定义任何类型的任务的进度。
- `<ruby>`: 定义`ruby`注释（中文注音或字符）。
- `<rt>`: 定义字符（中文注音或字符）的解释或发音。
- `<rp>`: 在`ruby`注释中使用，定义不支持`ruby`元素的浏览器所显示的内容。
- `<wbr>`: 规定在文本中的何处适合添加换行符。
- `<meter>`: 定义度量衡，仅用于已知最大和最小值的度量。
## 弃用的HTML元素

> 这些是旧的HTML元素，已弃用，不应继续使用。
> 不要在新项目中使用它们，应尽快在旧项目替换它们，即使它们现在依然可以使用。

`<acronym>`、`<applet>`、`<basefont>`、`<bgsound>`、`<big>`、`<blink>`、`<center>`、`<command>`、`<content>`、`<dir>`、`<element>`、`<font>`、`<frame>`、`<frameset>`、`<image>`、`<isindex>`、`<keygen>`、`<listing>`、`<marquee>`、`<menuitem>`、`<multicol>`、`<nextid>`、`<nobr>`、`<noembed>`、`<noframes>`、`<plaintext>`、`<shadow>`、`<spacer>`、`<strike>`、`<tt>`、`<xmp>`。

# meta标签

- meta标签只能位于head元素内部。 在html中，meta标签没有结束标签。在xhtml中，meta标签必须被正确地关闭。 meta标签共有两个属性，分别是http-equiv属性和name属性。

- 如果设置了 name 属性，`<meta>` 元素提供的是**文档级别（document-level）的元数据**，应用于整个页面。

- 如果设置了 http-equiv 属性，`<meta>`  元素则是**编译指令**，提供的信息与类似命名的 HTTP 头部相同。

- 如果设置了 charset 属性，`<meta>` 元素是一个**字符集声明**，告诉文档使用哪种字符编码。

- 如果设置了 itemprop 属性，`<meta>`  元素**提供用户定义的元数据**。
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

# HTML5新增的元素

首先 html5 为了

- 更好的实践 web 语义化，增加了header，footer，nav,aside,section 等语义 化标签，

- 在表单方面：为了增强表单，为 input 增加了 color,email,data,range 等类型， 

- 在存储方面：提供了 sessionStorage，localStorage,和离线存储，通过这些存储方式，方便数据在客户端的存储和获取，

- 在多媒体方面：规定了音频和视频元素 audio 和 video

另外还有

- 地理定位
- canvas 画布
- 拖放
- 多线程编程的 web worker 和 websocket 协议。

