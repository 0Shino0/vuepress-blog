---
# 这是文章的标题
title: meta标签
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: file
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: yyshino
# 设置写作时间
date: 2023-12-12
# 一个页面可以有多个分类
category:
  - FrontEnd
# 一个页面可以有多个标签
tag:
  - HTML
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

## meta标签

- meta标签只能位于head元素内部。 在html中，meta标签没有结束标签。在xhtml中，meta标签必须被正确地关闭。 meta标签共有两个属性，分别是http-equiv属性和name属性。

- 如果设置了 name 属性，`<meta>` 元素提供的是**文档级别（document-level）的元数据**，应用于整个页面。

- 如果设置了 http-equiv 属性，`<meta>`  元素则是**编译指令**，提供的信息与类似命名的 HTTP 头部相同。

- 如果设置了 charset 属性，`<meta>` 元素是一个**字符集声明**，告诉文档使用哪种字符编码。

- 如果设置了 itemprop 属性，`<meta>`  元素**提供用户定义的元数据**。