---
title: CSS
tags: 
    - CSS
categories: 
    - FrontEnd
summary: CSS布局
description: CSS布局
# abbrlink: 6541
date: 2022-08-25 13:20:48
# autoGroup-2: CSS
---

## CSS进阶



## flex弹性布局



## grid网格布局



## 移动端适配布局



### 逻辑像素与物理像素
&emsp;&emsp;逻辑像素，也叫“设备独立像素”，对于前端来说就是css中的像素，举例：iphone6下的逻辑像素为375px。

&emsp;&emsp;物理像素，即设备屏幕实际拥有的像素点，一个设备生产出来，他们的像素就已经确定了，举例：iphone6下的物理像素为750px。
- **逻辑像素：CSS中的像素，绝对单位，保证不同设备下元素的尺寸是相同的**。
- **物理像素：设备屏幕实际拥有的像素点，相对单位，不同设备下物理像素大小不同**。

## 响应式布局
### 媒体查询

![媒体查询](https://shinoimg.yyshino.top/img/202208251426415.png)

### 媒体查询的编写位置以及顺序
- 添加到样式表的底部，对CSS进行优先级的覆盖
- 移动端 -> PC端适配的原则: min-width从小到大
- PC端适配的原则 -> 移动端  : min-width从大到小

**总结**:`min-width`方式: 移动优先的原则，先编写移动端设备，然后响应式过渡到PC端

### 响应断点(阈值)设定
- 一种解决方案
![一种解决方案](https://shinoimg.yyshino.top/img/202208251443203.png)


## 工具插件
设计稿
- Photoshop
- PxCood