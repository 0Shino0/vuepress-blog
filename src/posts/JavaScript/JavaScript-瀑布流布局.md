---
title: 瀑布流布局步骤
tags:
    - Tool/Demo
categories:
    - Component
summary: 瀑布流布局
description: 瀑布流布局
date: 2022-11-30 13:02:22
---



## 瀑布流布局



- 父容器相对定位，成员绝对定位
  - 利用`top`与`left`属性控制位置
- 记录每一列的高度
  - 每次新增加成员时找到高度最低的那个将成员置于其下方
- 一些细节
  - 一次性加载供展示
    - flex布局
      - `flex-direction:column`
      - `flex-wrap:wrap`
  - 动态插入数据





```html
<!DOCTYPE html>
<html>

<head>
  <title>Js瀑布流布局</title>
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1" />
  <style type="text/css">
    #container {
      position: relative;
      /* 父容器relative */
      width: 921px;
      margin: 0 auto;
    }

    .item {
      position: absolute;
      /* 成员设置为absolute */
      display: flex;
      /* 主要为显示字居中 */
      justify-content: center;
      /* 水平居中 */
      align-items: center;
      /* 垂直居中 */
      color: #fff;
      /* 字体颜色白色 */
    }
  </style>
</head>

<body>
  <div id="container"></div>
</body>
<script type="text/javascript">
  var column = 3; // 制作三列布局
  var counter = 0; // 计数器 为显示当前块计数
  var columnHeight = Array(column).fill(0); // 记录每列高度
  var container = document.getElementById("container"); // 父容器对象
  var imgList = [
    "https://robohash.org/set=set4#",
    "https://images.dog.ceo/breeds/boxer/n02108089_4486.jpg",
    "https://tvax3.sinaimg.cn/large/005BYqpggy1g28fwh5g7oj31hc0u0u0x.jpg",
    "https://apis.jxcxin.cn/api/Bing",
    "https://file.alapi.cn/image/comic/215610-154116697054cd.jpg",
    "https://tvax3.sinaimg.cn/large/005BYqpggy1g28fwh5g7oj31hc0u0u0x.jpg",
    "https://tse4-mm.cn.bing.net/th/id/OIP-C.0iV82QwBFtyLivVBRhTZfQHaEo?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse4-mm.cn.bing.net/th/id/OIP-C.P9ZaSM25YGnC3t9wW9OuGAHaKl?w=182&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.lsJzmYolWpKMJfDrNCDfPQHaRy?w=145&h=350&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.UL_4OC343rONxQ7CGUh2EgHaI3?w=182&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse1-mm.cn.bing.net/th/id/OIP-C.9q3diwISrWTh7RgSMg44gQHaJ8?w=182&h=245&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse3-mm.cn.bing.net/th/id/OIP-C.QV23Wapkrr1ymP7Wax2jQwHaJR?w=182&h=228&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse3-mm.cn.bing.net/th/id/OIP-C.H-uWueDTNJUZFKT-1u8SFgHaDY?w=182&h=83&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.-RThd8LtDX1bzm1ABFH1-AHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.NA8gKIZSKjJMe_oBjmucJwHaKe?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse4-mm.cn.bing.net/th/id/OIP-C.41cI9b9NGL9f6OdXeumyBgHaNK?w=182&h=324&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse4-mm.cn.bing.net/th/id/OIP-C.heiS4JhyfDvtAg0WCMZvigHaE0?w=182&h=118&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.l_cM8icupq5ngaPi12TLWgHaKe?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse4-mm.cn.bing.net/th/id/OIP-C.i8YEhZIN2M7jgL2jqGHICgHaEK?w=182&h=102&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse3-mm.cn.bing.net/th/id/OIP-C.FltClkGK-MSb8svlqN7-IQHaIO?w=182&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse3-mm.cn.bing.net/th/id/OIP-C.tEbpHezRgOO4JvKZYZU-BAHaL9?w=182&h=294&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse2-mm.cn.bing.net/th/id/OIP-C.1T5CvmCONoUyZ6tnYouPkQHaKI?w=182&h=250&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://tse1-mm.cn.bing.net/th/id/OIP-C.jwyiH9y1Eo3dFI1xE5apqgHaKd?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  ]

  function random(min = 0, max = 1) { // 生成随机数
    return min + ~~((max - min) * Math.random()) // min <= random < max 
  }

  function findMinColumn(arr) { // 找到高度最小的列
    var min = arr[0];
    var index = 0;
    arr.forEach((v, i) => {
      if (v < min) {
        min = v;
        index = i;
      }
    })
    return [index, min];
  }


  function appendImg() {
    var gap = 3; // 间隙设为3px
    for (let i = 0; i < 12; ++i) { // 每次加载12个成员
      var unit = {
        height: random(100, 500), //随机一个不定高度
        width: 300, // 定宽
        imgUrl: imgList[random(0, imgList.length)] // 随机图片
      }
      var [minIndex, min] = findMinColumn(columnHeight); // 获取高度最小列以及下标
      var d = document.createElement("div");  // 创建一个节点
      d.className = "item"; // 设置class
      d.style.background = unit.color; // 设置背景颜色
      d.style.background = `no-repeat url(${unit.imgUrl})`; // 设置背景颜色
      d.style.backgroundSize = "cover"; // 图片铺满
      d.style.height = `${unit.height}px`; // 设置宽度
      d.style.width = `${unit.width}px`; // 设置宽度
      d.style.top = `${min + gap}px`; // 设置上偏移
      d.style.left = `${(300 + gap) * minIndex}px`; // 设置左偏移
      d.innerText = `${++counter}#${unit.height}X${unit.width}`; // 设置文字
      columnHeight[minIndex] += (unit.height + gap); // 更新选中列的高度
      // d.appendChild(img);
      container.appendChild(d); // 添加节点
    }
  }

  function init() {
    appendImg(); // 初始加载
    var endLoad = columnHeight.some(v => v > window.innerHeight); // 获取是否有某列高度大于屏幕高度
    if (!endLoad) init(); // 如果没有则递归调用继续加载
  }

  (function () {
    init(); // 打开页面自动加载
  })();

  window.onscroll = function () { // 浏览器触底事件
    var marginBottom = 0;
    if (document.documentElement.scrollTop) {
      var scrollHeight = document.documentElement.scrollHeight;
      var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
      var clientHeight = document.documentElement.clientHeight;
      marginBottom = scrollHeight - scrollTop - clientHeight;
    } else {
      var scrollHeight = document.body.scrollHeight;
      var scrollTop = document.body.scrollTop;
      var clientHeight = document.body.clientHeight;
      marginBottom = scrollHeight - scrollTop - clientHeight;
    }
    if (marginBottom <= 0) appendImg();
  }

</script>

</html>
```



## 复习

### 生成img标签的三种形式



```js
// html
//HTML
function a(){
document.getElementById("d1").innerHTML="<img src='http://baike.baidu.com/cms/rc/240x112dierzhou.jpg'>";
}
a();
```



```javascript
//方法
function b(){
var d1=document.getElementById("d1");
var img=document.createElement("img");
img.src="http://baike.baidu.com/cms/rc/240x112dierzhou.jpg";
d1.appendChild(img);
}
b();
```



```javascript
//对象
function c(){
var cc=new Image();
cc.src="http://baike.baidu.com/cms/rc/240x112dierzhou.jpg";
document.getElementById("d1").appendChild(cc);
}
c();
```





## 参考

[实现瀑布流布局 (touchczy.top)](https://blog.touchczy.top/#/HTML/实现瀑布流布局)