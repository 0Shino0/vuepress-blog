---
title: Flex布局
tags: 
   - CSS
categories: 
   - CSS
summary: Flex布局
description: Flex布局
date: 2023-4-24 18:47:36
---



## Flex布局

`Flex`布局也称弹性布局，可以为盒状模型提供最大的灵活性，是布局的首选方案，现已得到所有现代浏览器的支持。



**注意**，设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。



## 容器属性

### `flex-direction`

`flex-direction`属性决定主轴的方向，取值为`row | row-reverse | column | column-reverse`。

- `row`默认值：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端，容器成员顺序与`row`顺序相反。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿，容器成员顺序与`column`顺序相反。



### `flex-wrap`

`flex-wrap`属性决定当轴线方向放不下成员时，是否换行，取值为`nowrap | wrap | wrap-reverse`。

- `nowrap`默认：不换行，当空间不足时，会按轴线方向成员大小比例缩小的成员。
- `wrap`：距离不够时换行，新起一行排列。
- `wrap-reverse`：距离不够时换行，新起的一行在上方。



### `flex-flow`

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认`row nowrap`。



### `justify-content`

`justify-content`属性定义了成员在主轴上的对齐方式，可以很容易地实现多种布局，取值为`flex-start | flex-end | center | space-between | space-around`。

- `flex-start`默认值：左对齐。
- `flex-end`：右对齐。
- `center`： 居中对齐。
- `space-between`：两端对齐，成员之间的间隔都相等。
- `space-around`：每个成员两侧的间隔相等，成员之间的间隔比成员与边框的间隔大一倍。



### `align-items`

`align-items`属性定义成员在交叉轴上如何对齐，取值为`flex-start | flex-end | center | baseline | stretch`。

- `stretch`默认值：如果成员未设置高度或设为`auto`，将占满整个容器的高度。
- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`: 成员的第一行文字的基线对齐。



### `align-content`

`align-content`属性定义了多根轴线的对齐方式。如果成员只有一根轴线，该属性不起作用，取值为`flex-start | flex-end | center | space-between | space-around | stretch`。

- `stretch`默认值：轴线占满整个交叉轴。
- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。





## 成员属性

### `order`

`order`属性定义成员的排列顺序，数值越小，排列越靠前，默认为`0`。



### `flex-grow`

`flex-grow`属性定义成员的放大比例，默认为`0`。



### `flex-shrink`

`flex-shrink`属性定义了成员的缩小比例，默认为`1`，即如果空间不足，该成员将缩小。



### `flex-basis`

`flex-basis`属性定义了在分配多余空间之前，成员占据的主轴空间`main size`，浏览器根据这个属性，计算主轴是否有多余空间，它的默认值为`auto`，即成员的本来大小。



### `flex`

`flex`属性是`flex-grow`, `flex-shrink`和`flex-basis`的简写，默认值`0 1 auto`。后两个属性可选。





### `align-self`

`align-self`属性允许单个成员有与其他成员不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。









## 参考

[Flex 布局教程：语法篇 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool（语法篇）)

[Flex 布局教程：实例篇 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

[Flex布局 (touchczy.top)](https://blog.touchczy.top/#/CSS/Flex布局?id=flex布局)