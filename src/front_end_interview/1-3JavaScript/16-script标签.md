---
# 这是文章的标题
title: script标签
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: file
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: yyshino
# 设置写作时间
date: 2023-12-02
# 一个页面可以有多个分类
category:
  - FrontEnd
# 一个页面可以有多个标签
tag:
  - JS
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

## script标签

1. `src` 这个属性定义引用外部脚本的 URI，这可以用来代替直接在文档中嵌入脚本。指定了 src 属性的 script 元素标签内不应该再有嵌入的脚本。
2. `type` 该属性定义 script 元素包含或`src`引用的脚本语言。
3. `text` 和 textContent 属性类似，本属性用于设置元素的文本内容。
4. **`defer` 这个布尔属性被设定用来通知浏览器该脚本将在文档完成解析后，触发 `DOMContentLoaded`事件前执行。**
   1. **警告：** 如果缺少 `src` 属性（即内嵌脚本），该属性不应被使用，因为这种情况下它不起作用。`defer` 属性对模块脚本没有作用 —— 他们默认 defer。
5. **`async`** 
   1. **对于普通脚本，如果存在 `async` 属性，那么普通脚本会被并行请求，并尽快解析和执行。** 
   2. **对于模块脚本，如果存在 `async` 属性，那么脚本及其所有依赖都会在延缓队列中执行，因此它们会被并行请求，并尽快解析和执行。** 
   3. **该属性能够消除解析阻塞的 Javascript。解析阻塞的 Javascript 会导致浏览器必须加载并且执行脚本，之后才能继续解析。`defer` 在这一点上也有类似的作用。**
6. `crossorigin` 那些没有通过标准[CORS (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)检查的正常`script` 元素传递最少的信息到 [`window.onerror`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/error_event)。可以使用本属性来使那些将静态资源放在另外一个域名的站点打印错误信息。