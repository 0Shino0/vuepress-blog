---
# 这是文章的标题
title: XSS和CRSF攻击防御
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: file
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: yyshino
# 设置写作时间
date: 2024-01-04
# 一个页面可以有多个分类
category:
  - FrontEnd
# 一个页面可以有多个标签
tag:
  - 网络安全
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

## XSS和CRSF攻击防御



XSS, 即为（Cross Site Scripting）, 中文名为**跨站脚本**, 是发生在目标用户的**浏览器层面 上**的，当渲染 DOM 树的过程成发生了不在预期内执行的 JS 代码时，就发生了 XSS 攻击。 大多数 XSS 攻击的主要方式是**嵌入一段远程或者第三方域上的 JS 代码**。实际上是在目 标网站的作用域下执行了这段 JS 代码



CSRF（Cross Site Request Forgery，**跨站请求伪造**），字面理解意思就是在别的站点伪造 了一个请求。专业术语来说就是**在受害者访问一个网站时，其 Cookie 还没有过期的情 况下，攻击者伪造一个链接地址发送受害者并欺骗让其点击，从而形成 CSRF 攻击**



## 防御

XSS 防御的总体思路是：对**输入(和 URL 参数)进行过滤，对输出进行编码**。也就是对提交的所有内容进行过滤，对 url 中的参数进行过滤，过滤掉会导致脚本执行的相关内容； 然后对动态输出到页面的内容进行 html 编码，使脚本无法在浏览器中执行。虽然对输 入过滤可以被绕过，但是也还是会拦截很大一部分的 XSS 攻击。 

防御 CSRF 攻击主要有三种策略：

- 验证 HTTP Referer 字段；
- 在请求地址中添加 token 并 验证；
- 在 HTTP 头中自定义属性并验证



