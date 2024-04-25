---
title: style-scoped原理与作用
author: yyshino
# 设置写作时间
date: 2024-04-01
category:
  - FrontEnd
tag:
  - Vue
sticky: false
star: false
---



作用：实现组件的私有化，不对全局造成样式污染，表示当前style属性只属于当前模块。

原理：scoped会在DOM结构及css样式上加上唯一性的标记【data-v-something】属性，即CSS带属性选择器，以此完成类似作用域的选择方式，从而达到样式私有化，不污染全局的作用。

