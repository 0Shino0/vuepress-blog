---
# 这是文章的标题
title: BFC
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
  - CSS
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---


## BFC

**`BFC`块级格式化上下文**`Block Formatting Context`，是`Web`页面的可视`CSS`渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域，是用于布局块级盒子的一块渲染区域，并且与这个区域的外部毫无关系，是一个独立的区域，是一个环境。



## 触发BFC

1. 浮动float
2. 非静态定位position为absolute或fixed
3. display为inline-block、table-cell、table-caption、flow-root、flex 或 inline-flex 元素的直接子元素、grid 或 inline-grid 元素的直接子元素
4. overflow不为visible
5. contain 值为 layout、content 或 paint 的元素



## BFC特性

1. 内部box会在垂直方向，一个接一个地放置。
2. Box垂直方向的距离由margin决定，在一个BFC中，两个相邻的块级盒子的垂直外边距会产生折叠。
3. 在BFC中，每一个盒子的左外边缘（margin-left）会触碰到容器的左边缘(border-left)（对于从右到左的格式来说，则触碰到右边缘）
4. 形成了BFC的区域不会与float box重叠
5. 计算BFC高度时，浮动元素也参与计算



## BFC应用

1. 利用特性4可实现左图右文之类的效果
2. 利用特性5可以解决浮动元素造成的父元素高度塌陷问题：
3. 解决外边距合并问题
4. 右侧盒子自适应：BFC区域不会与浮动盒子产生交集，而是紧贴浮动边缘


