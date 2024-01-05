---
title: ECharts数据可视化
tags: 
  - ECharts
categories: 
  - FrontEnd
summary: ECharts数据可视化
description: ECharts数据可视化
# abbrlink: 56051
date: 2022-08-26 13:16:40
autoGroup-6: 工具篇
---
## echarts
官方文档[https://echarts.apache.org/zh/index.html](https://echarts.apache.org/zh/index.html)

## 基础入门
1. 创建dom容器
2. 引入echarts文件
3. 初始化echarts实例
4. 配置echarts

## 自定义主题
1. 在主题编辑器中编辑主题
主题编辑器的地址为: https://www.echartsjs.com/theme-builder/
2. 下载主题, 是一个 js 文件
在线编辑完主题之后, 可以点击下载主题按钮, 下载主题的js文件
3. 引入主题 js 文件
4. 在 init 方法中使用主题


## 调色盘
- 主题调色盘
- 全局调色盘
- 局部调色盘
- 渐变颜色的实现
  - 线性渐变
  - 径向渐变

## 样式
- 直接样式
- 高亮样式

## 自适应
1. 监听窗口大小变化事件
2. 在事件处理函数中调用 ECharts 实例对象的 resize 

## 动画
ECharts 已经内置好了加载数据的动画, 我们只需要在合适的时机显示或者隐藏即可
- 显示加载动画
```js
    mCharts.showLoading()
    // 一般, 我们会在获取图表数据之前 显示加载动画
```
- 隐藏加载动画
```js
    mCharts.hideLoading()
    // 一般, 我们会在获取图表数据之后 隐藏加载动画, 显示图表
```

### 增量动画
所有数据的更新都通过 setOption 实现, 我们不用考虑数据到底产生了那些变化, ECharts 会找到两组数据之间的差异然后通过合适的动画去表现数据的变化。

### 动画的配置
- 开启动画
`animation: true`
- 动画时长
`animationDuration: 5000`
- 缓动动画
`animationEasing : 'bounceOut'`

[其他动画曲线](https://echarts.apache.org/handbook/zh/how-to/animation/transition#%E5%8A%A8%E7%94%BB%E7%BC%93%E5%8A%A8)

## 交互API
### 全局echarts 对象
全局 echarts 对象是引入 echarts.js 文件之后就可以直接使用的

- `echarts.init` 初始化ECharts实例对象
- `echarts.registerTheme` 注册主题
- `echarts.registerMap` 注册地图数据
- `echarts.connect`
  - 一个页面中可以有多个独立的图表
  - 每一个图表对应一个 ECharts 实例对象
  - connect 可以实现多图关联，传入联动目标为 EChart 实例，支持数组


###  `echartsInstance` 对象
eChartsInstance 对象是通过 echarts.init 方法调用之后得到的

- `echartsInstance.setOption` 设置或修改图表实例的配置项以及数据
- `echartsInstance.resize` 重新计算和绘制图表
- `echartsInstance.on` `echartsInstance.off` 绑定或者解绑事件处理函数
  - 鼠标事件
    - 常见事件: 'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup' 等
    - 事件参数 arg: 和事件相关的数据信息
  - `ECharts` 事件
    - 常见事件:legendselectchanged、'datazoom'、'pieselectchanged'、'mapselectchanged'等
    - 事件参数 arg: 和事件相关的数据信息

- `echartsInstance.dispatchAction`
主动触发某些行为, 使用代码模拟用户的行为
- `echartsInstance.clear`
清空当前实例，会移除实例中所有的组件和图表
清空之后可以再次 setOption
- `echartsInstance.dispose`
销毁实例
销毁后实例无法再被使用



## 一些解决方案

Vue中使用echarts通用代码结构

```vue
<template>
  <div class="com-container">
    <div class="com-chart" ref="trend_ref"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      charInstance: null,
      allData: null, // 从服务器中获取的所有数据
    };
  },
  mounted() {
    this.initChart();
    this.getData();
    //  对屏幕大小进行监听
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    //   组件销毁时，取消监听
    window.removeEventListener("resize", this.screenAdapter);
  },
  methods: {
    initChart() {
      this.charInstance = this.$echarts.init(this.$refs.trend_ref);
      const initOption = {
          // 初始化相关
      };
      this.charInstance.setOption(initOption);
    },
    async getData() {
      //  await this.$http.get()
      // 对allData进行赋值
      this.updateChart();
    },
    updateChart() {
      // 处理数据
      const dataOption = {
          // 数据相关
      };
      this.charInstance.setOption(dataOption);
    },
    screenAdapter() {
      const adapterOption = {
          // 适应性相关
      };
      this.charInstance.setOption(adapterOption);
      this.charInstance.resize();
    },
  },
};
</script>

<style lang="less" scoped>
</style>
```

