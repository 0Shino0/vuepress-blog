---
title: 项目总结
tags:
  - 日常生活
categories: 
  - 随笔
top: true
pin: true
summary: 项目总结
description: 项目总结
# abbrlink: 21270
date: 2022-09-15 16:17:46
---

### echarts展示电商数据 （ e-admin.yyshino.top ）

2022.8.20 - 2022.9.10

技术栈：Vue3+Element+Webpack+Koa2

通过echarts展示数据，柱状图、折线图、饼图、map图 | 自定义主题、一键切换主题。后台采用WebSocket主动向前台推送数据。可以实现不同浏览器之间的联动。



### 通用后台管理系统 ( c-admin.yyshino.top )

2022.6.25– 2022.7.15

个人开发 

技术栈：Vue3+Element Plus+Vite+Koa2+MongoDB 

开发为通用型公司管理系统，可扩展性强

实现模块=>用户登录、系统首页、用户管理、菜单管 理角色管理、部门管理、休假申请、带我审批。 

难点：动态菜单，动态路由利于维护，后端递归拼接 菜单利于前端渲染数据。



### 网易云音乐小程序 ( music-api.yyshino.top )

2022.6.05– 2022.6..20

 • 个人开发

 • 技术栈：微信小程序

 • 采用 NodeJs 的 Koa2 框架搭建服务器，接口为网易 云接口，页面为仿网易云 App，实现了主要的三个页 面，首页、登录页、视频页面，播放音乐交互、以及 音乐推送等功能。

 • 项目难点：登录接口使用微信 API wx.getUserInfo 无 法获取获取用户数据，查阅文档后发现需要更换为 wx.getUserProfile 并且使用官方解决方案解决了问 题。



#### 电商平台 PC （https://c-shop.yyshino.top/） 

2022.4-2022.5 个人开发项目 | 结合网络资源 • 技术栈 Vue 全家桶+Element-UI+Swiper 轮播图。 • 实现了前端部分和上线，后端接口为网路资源。 结合网络 资源开发实现了 axios 二次封装、vue-router 路由守卫 (由于接口只支持 http，我的域名是强制 https 的，会产生 https 访问 http 报错，这里给出 ip 地址)



