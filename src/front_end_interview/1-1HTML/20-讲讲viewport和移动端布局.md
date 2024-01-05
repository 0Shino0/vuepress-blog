---
title: 讲讲viewport和移动端布局
tags: 
   - HTTP
categories: 
   - 浏览器
summary: 讲讲viewport和移动端布局
description: 讲讲viewport和移动端布局
date: 2023-4-24 09:28:57
---



## 讲讲viewport和移动端布局



## 1.px和视口



为了理清楚这个概念我们首先介绍像素和视口的概念

### 1. 像素

像素是网页布局的基础，一个像素表示了计算机屏幕所能显示的最小区域，像素分为两种类型：css像素和物理像素。

我们在js或者css代码中使用的px单位就是指的是css像素，物理像素也称设备像素，只与设备或者说硬件有关，同样尺寸的屏幕，设备的密度越高，物理像素也就越多。下表表示css像素和物理像素的具体区别：

| css像素  | 为web开发者提供，在css中使用的一个抽象单位           |
| -------- | ---------------------------------------------------- |
| 物理像素 | 只与设备的硬件密度有关，任何设备的物理像素都是固定的 |

那么css像素与物理像素的转换关系是怎么样的呢？为了明确css像素和物理像素的转换关系，必须先了解视口是什么。

### 2. 视口

广义的视口，是指浏览器显示内容的屏幕区域，狭义的视口包括了布局视口、视觉视口和理想视口

### (1) 布局视口（layout viewport）

布局视口定义了pc网页在移动端的默认布局行为，因为通常pc的分辨率较大，布局视口默认为980px。也就是说在不设置网页的viewport的情况下，pc端的网页默认会以布局视口为基准，在移动端进行展示。因此我们可以明显看出来，默认为布局视口时，根植于pc端的网页在移动端展示很模糊。

### (2) 视觉视口（visual viewport）

视觉视口表示浏览器内看到的网站的显示区域，用户可以通过缩放来查看网页的显示内容，从而改变视觉视口。视觉视口的定义，就像拿着一个放大镜分别从不同距离观察同一个物体，视觉视口仅仅类似于放大镜中显示的内容，因此视觉视口不会影响布局视口的宽度和高度。

### (3) 理想视口（ideal viewport）

理想视口或者应该全称为“理想的布局视口”，在移动设备中就是指设备的分辨率。换句话说，理想视口或者说分辨率就是给定设备物理像素的情况下，最佳的“布局视口”。

***上述视口中，最重要的是要明确理想视口的概念，在移动端中，理想视口或者说分辨率跟物理像素之间有什么关系呢？\***

为了理清分辨率和物理像素之间的联系，我们介绍一个用DPR（Device pixel ratio）设备像素比来表示，则可以写成：

```
1 DPR = 物理像素／分辨率
```

在不缩放的情况下，一个css像素就对应一个dpr，也就是说，在不缩放

```
1 CSS像素 = 物理像素／分辨率
```

此外，在移动端的布局中，我们可以通过viewport元标签来控制布局，比如一般情况下，我们可以通过下述标签使得移动端在理想视口下布局：

```
<meta id="viewport" name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1; user-scalable=no;">
```

上述meta标签的每一个属性的详细介绍如下：

| 属性名        | 取值    | 描述                                     |
| ------------- | ------- | ---------------------------------------- |
| width         | 正整数  | 定义布局视口的宽度，单位为像素           |
| height        | 正整数  | 定义布局视口的高度，单位为像素，很少使用 |
| initial-scale | [0,10]  | 初始缩放比例，1表示不缩放                |
| minimum-scale | [0,10]  | 最小缩放比例                             |
| maximum-scale | [0,10]  | 最大缩放比例                             |
| user-scalable | yes／no | 是否允许手动缩放页面，默认值为yes        |

其中我们来看width属性，在移动端布局时，在meta标签中我们会将width设置称为device-width，device-width一般是表示分辨率的宽，通过width=device-width的设置我们就将布局视口设置成了理想的视口。

### 3. px与自适应

上述我们了解到了当通过viewport元标签，设置布局视口为理想视口时，1个css像素可以表示成：

```
1 CSS像素 = 物理像素／分辨率
```

我们直到，在pc端的布局视口通常情况下为980px，移动端以iphone6为例，分辨率为375 * 667，也就是说布局视口在理想的情况下为375px。比如现在我们有一个750px * 1134px的视觉稿，那么在pc端，一个css像素可以如下计算：

```
PC端： 1 CSS像素 = 物理像素／分辨率 = 750 ／ 980 =0.76 px
```

而在iphone6下：

```
iphone6：1 CSS像素 = 物理像素 ／分辨率 = 750 ／ 375 = 2 px
```

也就是说**在PC端，一个CSS像素可以用0.76个物理像素来表示，而iphone6中 一个CSS像素表示了2个物理像素。此外不同的移动设备分辨率不同，也就是1个CSS像素可以表示的物理像素是不同的，因此如果在css中仅仅通过px作为长度和宽度的单位，造成的结果就是无法通过一套样式，实现各端的自适应。**



## 2.媒体查询

在前面我们说到，不同端的设备下，在css文件中，1px所表示的物理像素的大小是不同的，因此通过一套样式，是无法实现各端的自适应。由此我们联想：

***如果一套样式不行，那么能否给每一种设备各一套不同的样式来实现自适应的效果？\***

答案是肯定的。

使用[@media](https://github.com/media)媒体查询可以针对不同的媒体类型定义不同的样式，特别是响应式页面，可以针对不同屏幕的大小，编写多套样式，从而达到自适应的效果。举例来说：

```
@media screen and (max-width: 960px){
    body{
      background-color:#FF6699
    }
}

@media screen and (max-width: 768px){
    body{
      background-color:#00FF66;
    }
}

@media screen and (max-width: 550px){
    body{
      background-color:#6633FF;
    }
}

@media screen and (max-width: 320px){
    body{
      background-color:#FFFF00;
    }
}
```

上述的代码通过媒体查询定义了几套样式，通过max-width设置样式生效时的最大分辨率，上述的代码分别对分辨率在0～320px，320px～550px，550px～768px以及768px～960px的屏幕设置了不同的背景颜色。

通过媒体查询，可以通过给不同分辨率的设备编写不同的样式来实现响应式的布局，比如我们为不同分辨率的屏幕，设置不同的背景图片。比如给小屏幕手机设置[@2x](https://github.com/2x)图，为大屏幕手机设置[@3x](https://github.com/3x)图，通过媒体查询就能很方便的实现。

但是媒体查询的**缺点也很明显，如果在浏览器大小改变时，需要改变的样式太多，那么多套样式代码会很繁琐。**



## 3.百分比

除了用px结合媒体查询实现响应式布局外，我们也可以通过百分比单位 " % " 来实现响应式的效果。

比如当浏览器的宽度或者高度发生变化时，通过百分比单位，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。

为了了解百分比布局，首先要了解的问题是：

***css中的子元素中的百分比（%）到底是谁的百分比？\***

直观的理解，我们可能会认为子元素的百分比完全相对于直接父元素，height百分比相对于height，width百分比相对于width。当然这种理解是正确的，但是根据css的盒式模型，除了height、width属性外，还具有padding、border、margin等等属性。那么这些属性设置成百分比，是根据父元素的那些属性呢？此外还有border-radius和translate等属性中的百分比，又是相对于什么呢？下面来具体分析。

### 1. 百分比的具体分析

（1）子元素height和width的百分比

子元素的height或width中使用百分比，是相对于子元素的直接父元素，width相对于父元素的width，height相对于父元素的height。比如：

```
<div class="parent">
  <div class="child"></div>
</div>
```

如果设置：
.father{
width:200px;
height:100px;
}
.child{
width:50%;
height:50%;
}
展示的效果为：
[![2018-06-22 7 00 29](https://user-images.githubusercontent.com/17233651/41773411-91e22044-764e-11e8-8ad4-9066db87166f.png)](https://user-images.githubusercontent.com/17233651/41773411-91e22044-764e-11e8-8ad4-9066db87166f.png)

(2) top和bottom 、left和right

子元素的top和bottom如果设置百分比，则相对于直接非static定位(默认定位)的父元素的**高度**，同样

子元素的left和right如果设置百分比，则相对于直接非static定位(默认定位的)父元素的**宽度**。

展示的效果为：

[![2018-06-22 7 42 14](https://user-images.githubusercontent.com/17233651/41774950-67423bfc-7654-11e8-9947-aa1621fe39f9.png)](https://user-images.githubusercontent.com/17233651/41774950-67423bfc-7654-11e8-9947-aa1621fe39f9.png)

（3）padding

子元素的padding如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接**父亲元素的width**，而与父元素的height无关。

举例来说：

```
.parent{
  width:200px;
  height:100px;
  background:green;
}
.child{
  width:0px;
  height:0px;
  background:blue;
  color:white;
  padding-top:50%;
  padding-left:50%;
}
```

展示的效果为：

[![2018-06-22 7 55 13](https://user-images.githubusercontent.com/17233651/41775365-36a0b0da-7656-11e8-8495-bd58f7ab0bf2.png)](https://user-images.githubusercontent.com/17233651/41775365-36a0b0da-7656-11e8-8495-bd58f7ab0bf2.png)

子元素的初始宽高为0，通过padding可以将父元素撑大，上图的蓝色部分是一个正方形，且边长为100px,说明padding不论宽高，如果设置成百分比都相对于父元素的width。

（4）margin

跟padding一样，margin也是如此，子元素的margin如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的width。这里就不具体举例。

（5）border-radius

border-radius不一样，如果设置border-radius为百分比，则是相对于自身的宽度，举例来说：

```
  <div class="trangle"></div>
```

设置border-radius为百分比：

```
.trangle{
  width:100px;
  height:100px;
  border-radius:50%;
  background:blue;
  margin-top:10px;
}
```

展示效果为：

[![2018-06-22 8 09 20](https://user-images.githubusercontent.com/17233651/41775919-6a41ae42-7658-11e8-8e54-43ad05c12d43.png)](https://user-images.githubusercontent.com/17233651/41775919-6a41ae42-7658-11e8-8e54-43ad05c12d43.png)

除了border-radius外，还有比如translate、background-size等都是相对于自身的，这里就不一一举例。

### 2. 百分比单位布局应用

百分比单位在布局上应用还是很广泛的，这里介绍一种应用。

比如我们要实现一个固定长宽比的长方形，比如要实现一个长宽比为4:3的长方形,我们可以根据padding属性来实现，因为padding不管是垂直方向还是水平方向，百分比单位都相对于父元素的宽度，因此我们可以设置padding-top为百分比来实现，长宽自适应的长方形：

```
<div class="trangle"></div>
```

设置样式让其自适应：

```
.trangle{
  height:0;
  width:100%;
  padding-top:75%;
}
```

通过设置padding-top：75%,相对比宽度的75%，因此这样就设置了一个长宽高恒定比例的长方形，具体效果展示如下：

![jest](https://user-images.githubusercontent.com/17233651/41851698-52d2bd2c-78bb-11e8-97cb-26f985195809.gif)

### 3. 百分比单位缺点

从上述对于百分比单位的介绍我们很容易看出如果全部使用百分比单位来实现响应式的布局，有明显的以下两个缺点：

（1）**计算困难**，如果我们要定义一个元素的宽度和高度，按照设计稿，必须换算成百分比单位。
（2）从小节1可以看出，**各个属性中如果使用百分比，相对父元素的属性并不是唯一的**。比如**width和height相对于父元素的width和height**，**而margin、padding不管垂直还是水平方向都相对比父元素的宽度**、**border-radius则是相对于元素自身**等等，造成我们使用百分比单位容易使布局问题变得复杂。



## 4.自适应场景下的rem解决方案

### 1. rem单位

首先来看，什么是rem单位。rem是一个灵活的、可扩展的单位，由浏览器转化像素并显示。与em单位不同，rem单位无论嵌套层级如何，都只相对于浏览器的根元素（HTML元素）的font-size。默认情况下，html元素的font-size为16px，所以：

```html
    1 rem = 16px
```

为了计算方便，通常可以将html的font-size设置成：

```html
    html{ font-size: 62.5% }
```

这种情况下：

```html
    1 rem = 10px
```



### 2.通过rem来实现响应式布局

rem单位都是相对于根元素html的font-size来决定大小的,根元素的font-size相当于提供了一个基准，当页面的size发生变化时，只需要改变font-size的值，那么以rem为固定单位的元素的大小也会发生响应的变化。
因此，如果通过rem来实现响应式的布局，只需要根据视图容器的大小，动态的改变font-size即可。

```js
function refreshRem() {
    var docEl = doc.documentElement;
    var width = docEl.getBoundingClientRect().width;
    var rem = width / 10;
    docEl.style.fontSize = rem + 'px';
    flexible.rem = win.rem = rem;
}
win.addEventListener('resize', refreshRem);
```



上述代码中将视图容器分为10份，font-size用十分之一的宽度来表示，最后在header标签中执行这段代码，就可以动态定义font-size的大小，从而1rem在不同的视觉容器中表示不同的大小，用rem固定单位可以实现不同容器内布局的自适应。

### 3. rem2px和px2rem

如果在响应式布局中使用rem单位，那么存在一个单位换算的问题，rem2px表示从rem换算成px，这个就不说了，只要rem乘以相应的font-size中的大小，就能换算成px。更多的应用是px2rem，表示的是从px转化为rem。

比如给定的视觉稿为750px（物理像素），如果我们要将所有的布局单位都用rem来表示，一种比较笨的办法就是对所有的height和width等元素，乘以相应的比例，现将视觉稿换算成rem单位，然后一个个的用rem来表示。另一种比较方便的解决方法就是，在css中我们还是用px来表示元素的大小，最后编写完css代码之后，将css文件中的所有px单位，转化成rem单位。

px2rem的原理也很简单，重点在于预处理以px为单位的css文件，处理后将所有的px变成rem单位。可以通过两种方式来实现：

1） webpack loader的形式：

```
npm install px2rem-loader
```

在webpack的配置文件中：

```
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'px2rem-loader',
        // options here
        options: {
          remUni: 75,
          remPrecision: 8
        }
      }]
    }]
  }
}
```



2）webpack中使用postcss plugin

```npm
npm install postcss-loader
```

在webpack的plugin中:

```js
var px2rem = require('postcss-px2rem');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function() {
    return [px2rem({remUnit: 75})];
  }
}
```

### 4. rem 布局应用举例

网易新闻的移动端页面使用了rem布局，具体例子如下：

![jest1](https://user-images.githubusercontent.com/17233651/41913702-97d36b92-7983-11e8-8fd6-56404ce1e5ce.gif)

### 5. rem 布局的缺点

通过rem单位，可以实现响应式的布局，特别是引入相应的postcss相关插件，免去了设计稿中的px到rem的计算。rem单位在国外的一些网站也有使用，这里所说的rem来实现布局的缺点，或者说是小缺陷是：

***在响应式布局中，必须通过js来动态控制根元素font-size的大小。***

也就是说css样式和js代码有一定的耦合性。且必须将改变font-size的代码放在css样式之前。



## 5.通过vw/vh来实现自适应

### 1. 什么是vw/vh ?

css3中引入了一个新的单位vw/vh，与视图窗口有关，vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度，除了vw和vh外，还有vmin和vmax两个相关的单位。各个单位具体的含义如下：

| 单位 | 含义                              |
| ---- | --------------------------------- |
| vw   | 相对于视窗的宽度，视窗宽度是100vw |
| vh   | 相对于视窗的高度，视窗高度是100vh |
| vmin | vw和vh中的较小值                  |
| vmax | vw和vh中的较大值                  |

这里我们发现视窗宽高都是100vw／100vh，那么vw或者vh，下简称vw，很类似百分比单位。vw和%的区别为：

| 单位  | 含义                                                         |
| ----- | ------------------------------------------------------------ |
| %     | 大部分相对于祖先元素，也有相对于自身的情况比如（border-radius、translate等) |
| vw/vh | 相对于视窗的尺寸                                             |

从对比中我们可以发现，vw单位与百分比类似，单确有区别，前面我们介绍了百分比单位的换算困难，这里的vw更像"理想的百分比单位"。任意层级元素，在使用vw单位的情况下，1vw都等于视图宽度的百分之一。

### 2. vw单位换算

同样的，如果要将px换算成vw单位，很简单，只要确定视图的窗口大小（布局视口），如果我们将布局视口设置成分辨率大小，比如对于iphone6/7 375*667的分辨率，那么px可以通过如下方式换算成vw：

```
1px = （1/375）*100 vw
```

此外，也可以通过postcss的相应插件，预处理css做一个自动的转换，[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)可以自动将px转化成vw。
postcss-px-to-viewport的默认参数为：

```
var defaults = {
  viewportWidth: 320,
  viewportHeight: 568, 
  unitPrecision: 5,
  viewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false
};
```

通过指定视窗的宽度和高度，以及换算精度，就能将px转化成vw。

### 3. vw/vh单位的兼容性

可以在https://caniuse.com/ 查看各个版本的浏览器对vw单位的支持性。

[![2018-06-27 8 19 53](https://user-images.githubusercontent.com/17233651/41973430-82f1b8fe-7a47-11e8-8aab-f371ea3c6bd1.png)](https://user-images.githubusercontent.com/17233651/41973430-82f1b8fe-7a47-11e8-8aab-f371ea3c6bd1.png)

从上图我们发现，绝大多数的浏览器支持vw单位，但是ie9-11不支持vmin和vmax，考虑到vmin和vmax单位不常用，vw单位在绝大部分高版本浏览器内的支持性很好，但是opera浏览器整体不支持vw单位，如果需要兼容opera浏览器的布局，不推荐使用vw。

小结：本文介绍在布局中常用的单位，比如px、%、rem和vw等等，以及不同的单位在响应式布局中的优缺点。

















## 参考

[响应式布局的常用解决方案对比(媒体查询、百分比、rem和vw/vh） · Issue #13 · forthealllight/blog (github.com)](https://github.com/forthealllight/blog/issues/13)