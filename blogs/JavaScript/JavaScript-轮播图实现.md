---
title: 轮播图实现步骤
tags:
    - 前端demo
categories:
    - Component
summary: 轮播图实现步骤
description: 轮播图实现步骤
date: 2022-11-27 17:07:29
# keys: 
---





## 轮播图实现思路



大概思路

1. 创建轮播图容器
   1. `flex`实现图片水平布局
   2. `position`的绝对定位与相对定位实现轮播图
   3. `overflow: hidden;`将其他图片隐藏
2. 轮播实现
   1. `js`实现
      1. 定时器实现图片不断左移
      2. 边缘处理
         1. 将第一张轮播图追加到一行图片之后，当切换到最后一张轮播图时，下一张即播放第一张图，当此图轮播完成后，将所有图片归位
   2. `css`实现
      1. 动画`animate`。 有一定限制
3. 其他细节
   1. 根据图片数量，创建底部按钮





完整代码

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>轮播图</title>
</head>
<link rel="stylesheet" type="text/css" href="https://at.alicdn.com/t/font_1582902_u0zm91pv15i.css">
<style type="text/css">
  body {
    margin: 0;
    padding: 0px;
  }

  #carousel {
    margin: auto;
    /* 居中 */
    width: 600px;
    /* 设置宽度 */
    position: relative;
    /* 相对定位 */
    overflow: hidden;
    /* 超出隐藏 */
  }

  #carousel img {
    width: 600px;
    /* 设定大小 按比例缩放 */
  }

  #carousel>ul {
    display: flex;
    /* 图片处理为一行 */
    position: absolute;
    /* 设置绝对定位，实现相对于#carousel的绝对定位 */
  }

  #carousel>ul,
  #carousel>ul>li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  /* 控制按钮的样式 */
  #leftArrow,
  #rightArrow {
    position: absolute;
    left: 5px;
    top: 43%;
    width: 25px;
    height: 30px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    font-size: 20px;
    cursor: pointer;
  }

  #rightArrow {
    left: auto;
    right: 5px;
  }

  #sliderBtn {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
  }

  .unitBtn {
    width: 10px;
    height: 10px;
    background-color: #eee;
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
  }

  .active {
    background-color: #4C98F7;
  }
</style>

<body>
  <!-- 轮播图容器 -->
  <div id="carousel">
    <ul>
      <!-- 图片容器 -->
      <li>
        <img src="http://www.sdust.edu.cn/__local/9/7A/B1/F29B84DEF72DD329997E8172ABA_664BA3EF_32466.jpg">
      </li>
      <li>
        <img src="http://www.sdust.edu.cn/__local/B/F3/E4/693AB931C9FFB84646970D53BFE_C506394A_4282CA.jpg">
      </li>
      <li>
        <img src="http://www.sdust.edu.cn/__local/F/7A/AA/E1459849AA8AB0C89854A41BD41_BF3BD857_BC0D8.jpg">
      </li>
      <li>
        <img src="http://www.sdust.edu.cn/__local/1/95/CB/EDC1450B8FD1B8A25FAAC726AA4_A36D4253_16C91.jpg">
      </li>
    </ul>
    <!-- 按钮组 -->
    <div id="leftArrow" class="iconfont icon-arrow-lift"></div> <!-- 左箭头切换按钮 -->
    <div id="rightArrow" class="iconfont icon-arrow-right"></div> <!-- 右箭头切换按钮 -->
    <div id="sliderBtn"></div> <!-- 切换按钮组 -->
  </div>

  <script type="text/javascript">
    var imgArr = []; // 图片数组
    var curIndex = 0;  // 当前显示图片
    var timer = null; // 定时器
    var clickAllow = true; // 锁。是否运行用户点击
    var btnList = []; // 右下角切换按钮

    function slide(slideContainer, targetIndex = curIndex + 1) {
      var width = 0; // 技术切换图片要滑动的距离
      if (targetIndex > curIndex) {
        for (let i = curIndex; i < targetIndex; ++i) width += imgArr[i].width; // 正向切换则计算本图片到后续图片的宽度
      } else {
        if (targetIndex === -1) width = imgArr[imgArr.length - 1].width; // 特殊处理第一张图片
        else for (let i = targetIndex; i < curIndex; ++i) width += imgArr[i].width; // 逆向切换处理宽度
      }

      clickAllow = false; // 不允许用户点击
      var step = width / 60; // 动态设置步长
      step = targetIndex > curIndex ? step : -step; // 正向逆向切换
      var curConLeft = slideContainer.offsetLeft; // 获取ul的left
      var distanceMoved = 0; // 已经移动的距离
      var slideInterval = setInterval(function () { // 此定时器是为了实现切换动画
        if (Math.abs(width - distanceMoved) > Math.abs(step)) {// 边界判定,判断已经移动距离以及移动距离的差与步长的关系
          curConLeft -= step; // 大鱼步长则不断移动
          slideContainer.style.left = `${curConLeft - step}px`; // 移动
          distanceMoved += Math.abs(step); // 已移动距离加步长
        } else {
          clearInterval(slideInterval); // 若最后移动距离不足步长，则清除动画定时器
          var directMove = step > 0 ? (curConLeft - width + distanceMoved) : (curConLeft + width - distanceMoved); // 正向移动与逆向移动的计算方式不同
          slideContainer.style.left = `${directMove}px` // 直接完成此次动画
          distanceMoved = 0; // 重设余力为0
          curIndex = targetIndex; // 设置当前index
          if (curIndex === imgArr.length) {
            // index加1，判断是否为最后一张来作边缘处理
            curIndex = 0; // 最后一张则重置index
            slideContainer.style.left = `-${imgArr[0].width}px`; //重置ul
          } else if (curIndex === -1) {
            curIndex = imgArr.length - 1; // 第一仗重置index
            slideContainer.style.left = `-${slideContainer.offsetWidth - imgArr[imgArr.length - 1].width - imgArr[0].width}px`
          }
          switchBtnActive(); // 右下角按钮的切换
          clickAllow = true; // 允许点击
        }
      }, 10)
    }

    function switchBtnActive() {
      btnList.forEach((v) => {
        v.className = 'unitBtn'; // 设置其他按钮为灰色
      })
      btnList[curIndex].className = "unitBtn active"; // 设置当前按钮为蓝色
    }

    function createBtnGroup(carousel, slideContainer, config) {
      document.getElementById("leftArrow").addEventListener('click', (e) => {
        clearInterval(timer); // 清除定时器,避免手动切换时干扰
        if (clickAllow) slide(slideContainer, curIndex - 1) // 允许点击则切换上一张
        timer = setInterval(() => { slide(slideContainer) }, config.interval)// 重设定时器
      })
      document.getElementById("rightArrow").addEventListener('click', (e) => {
        clearInterval(timer); // 清除定时器，避免手动切换时干扰
        if (clickAllow) slide(slideContainer, curIndex + 1); // 允许点击则切换下一张
        timer = setInterval(() => { slide(slideContainer) }, config.interval); // 重设定时器
      })
      var sliderBtn = document.getElementById("sliderBtn"); // 获取按钮容器的引用

      // 根据图片数量创建按钮
      imgArr.forEach((v, i) => {
        let btn = document.createElement("div"); // 制作按钮
        btn.className = i === 0 ? "unitBtn active" : "unitBtn"; // 初设蓝色与灰色按钮样式
        btn.addEventListener('click', (e) => {
          clearInterval(timer); // 清除定时器,避免手动切换时干扰
          if (clickAllow) slide(slideContainer, i); // 允许点击则切换
          timer = setInterval(() => { slide(slideCOntainer), config.interval }); // 重设定时器
        })
        btnList.push(btn); // 添加按钮到按钮组
        sliderBtn.appendChild(btn); // 追加按钮到按钮容器
      })
    }

    function edgeDispose(slideContainer) {
      var li = document.createElement("li"); // 创建li
      var img = document.createElement("img"); // 创建新的 img
      img.src = imgArr[0].src; // 设置图片src
      li.appendChild(img); // 追加img 到 li
      slideContainer.appendChild(li); // 将第一张图片追加到轮播图的最后，做边缘处理
      var li2 = document.createElement("li"); // 创建 li
      var img2 = document.createElement("img"); // 创建新的 img
      img2.src = imgArr[imgArr.length - 1].src; // 设置图片src
      li2.appendChild(img2); // 追加<img>到<li>
      slideContainer.insertBefore(li2, slideContainer.firstChild); // 将最后一张图片追加到轮播图的最前，作边缘处理
      slideContainer.style.left = `-${imgArr[0].width}px`; // 重设ul位置
    }

    function eventDispose(carousel, slideContainer, config) {
      document.addEventListener('visibilitychange', function () {
        // 浏览器切换页面会导致动画出现问题，监听页面切换
        if (document.visibilityState == 'hidden') clearInterval(timer); // 页面隐藏清除定时器
        else timer = setInterval(() => { slide(slideContainer) }, config.interval) // 重设定时器
      })

      carousel.addEventListener('mouseover', function () {
        // 鼠标移动 到容器则不切换动画，停止计时器
        clearInterval(timer) // 页面隐藏清除定时器
      });

      carousel.addEventListener('mouseleave', function () {
        // 鼠标溢出容器则开始动画
        timer = setInterval(() => { slide(slideContainer) }, config.interval); // 重设定时器
      })
    }

    (function start() {
      var config = {
        height: "300px", // 配置高度
        interval: 5000 // 配置轮播图时间间隔
      }
      var carousel = document.getElementById("carousel"); // 获取容器对象的引用
      carousel.style.height = config.height; // 将轮播容器高度设定
      document.querySelectorAll("#carousel img").forEach(v => imgArr.push(v)); // 获取所有图片组成数组
      var slideContainer = document.querySelector("#carousel > ul"); //获取ul也就是下一行图片的器
      edgeDispose(slideContainer); // 对边缘处理
      eventDispose(carousel, slideContainer, config); // 对一些浏览器事件处理
      createBtnGroup(carousel, slideContainer, config); // 对按钮组的处理
      timer = setInterval(() => { slide(slideCOntainer) }, config.interval); // 设置定时器定时切换
    })()
  </script>
</body>

</html>
```







## 参考

- [三种方式实现轮播图功能 - WindrunnerMax - 博客园 (cnblogs.com)](https://www.cnblogs.com/WindrunnerMax/p/12638005.html)