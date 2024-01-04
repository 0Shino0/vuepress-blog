---
title: uni-app Plugin
tags: 
    - Uniapp
categories: 
    - FrontEnd
date: 2023-9-14 15:40:27
summary: uni-app Plugin
description: uni-app Plugin
---



## 滚动标签



### 自定义 tab 选项卡 2



## 图表



### uCharts



#### 更新数据-加载动画踩坑



##### 加载动画说明

官方组件共提供了5种加载动画样式（详见页面底部），加载动画展示的逻辑如下：

1. 如果是 uniCloud 数据，从发送网络请求到返回数据期间展示
2. 如果是自行传入的 chartData 数据，**当 chartData.series == [] 的时候展示 loading，也就是说初始化图表的时候，如果您没有数据，可以通过先传个空数组来展示 loading 效果**，当 chartData.series 有数据后会自动隐藏 loading 图标。

> 如果您由始至终不想展示加载动画，可以赋值 loadingType = 0 来关闭动画效果。



### App打包

- 'test'导出失败，失败原因：App打包时，**项目中文件名不能含有中文或全角字符，请确认。**



### Android平台签名证书(.keystore)生成指南

https://ask.dcloud.net.cn/article/id-35777



新版jdk的keytool没有md5

```cmd
keytool -exportcert -keystore xxx.keystore | openssl dgst -md5
```

