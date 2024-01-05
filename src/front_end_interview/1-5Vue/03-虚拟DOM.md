---
# 这是文章的标题
title: 虚拟DOM
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: file
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: yyshino
# 设置写作时间
date: 2023-11-29
# 一个页面可以有多个分类
category:
  - FrontEnd
# 一个页面可以有多个标签
tag:
  - Vue
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

Vue中的虚拟DOM

`Virtual DOM`是一棵以`JavaScript`对象作为基础的树，每一个节点称为`VNode`，用对象属性来描述节点，实际上它是一层对真实`DOM`的抽象，最终可以通过渲染操作使这棵树映射到真实环境上，简单来说`Virtual DOM`就是一个`Js`对象，用以描述整个文档。