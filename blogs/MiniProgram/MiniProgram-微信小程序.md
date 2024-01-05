---
title: 微信小程序
tags: 
    - 小程序
categories: 
    - FrontEnd
# abbrlink: 35506
date: 2022-06-26 10:07:32
summary: 原生微信小程序入门
description: 原生微信小程序入门
autoGroup-4: 小程序篇
---

## 微信小程序

[文档](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/code.html#JSON-%E9%85%8D%E7%BD%AE)

### 小程序代码构成

1.    .json 后缀的 JSON 配置文件
2.    .wxml 后缀的 WXML 模板文件   ————html
3.    .wxss 后缀的 WXSS 样式文件   ————css
4.    .js 后缀的 JS 脚本逻辑文件       ————js



### 小程序发布简介

#### 分包加载

目前小程序分包大小有以下限制：

- 整个小程序所有分包大小不超过 20M
- 单个分包/主包大小不能超过 2M

##### 常规分包

配置

目录配置 

```text
├── app.js
├── app.json
├── app.wxss
├── packageA
│   └── pages
│       ├── cat
│       └── dog
├── packageB
│   └── pages
│       ├── apple
│       └── banana
├── pages
│   ├── index
│   └── logs
└── utils
```

`app.json`配置

```json
{
  "pages":[
    "pages/index",
    "pages/logs"
  ],
  "subpackages": [
    {
      "root": "packageA",
      "pages": [
        "pages/cat",
        "pages/dog"
      ]
    }, {
      "root": "packageB",
      "name": "pack2",
      "pages": [
        "pages/apple",
        "pages/banana"
      ]
    }
  ]
}

```

详细见官网 [https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)



##### 独立分包

- 特点
  - 独立分包可单独访问分包的内容,不需要下载主包
  - 独立分包不能依赖主包或者其他包的内容。
- 适用情况
  - 不受主包影响 (或与主包关联不大的页面 ) —— 例如一些临时的广告页面 | 活动页面
- 使用
  - 在常规分包基础上  app.json 中添加  `independent": true` 表示独立分包
  - 独立分包 无法引用主包中资源（例如图标字体） ， 因此独立分包中的 主包资源 需要在分包目录重新引入



##### 分包预加载

`app.json` 增加 `preloadRule` 配置来控制。

```json
  "preloadRule": {
    "pages/index": {
      "network": "all",
      "packages": ["important"]
    },
    "sub1/index": {
      "packages": ["hello", "sub3"]
    },
    "sub3/index": {
      "packages": ["path/to"]
    },
    "indep/index": {
      "packages": ["__APP__"]
    }
  }
```

注意: preloadRule 与 pages 以及其他分包同级

详细了解 [https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html)

#### 分包异步化

新加入功能

详细了解 [https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html)



## 小程序框架 Uni-App


