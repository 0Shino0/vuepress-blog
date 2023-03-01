---
title: Vue之快速开始一个项目
tags: 
    - Vue
categories:
    - FrontEnd
date: 2022-11-26 22:04:04
summary: Vue之快速开始一个项目
description: Vue之快速开始一个项目
pin: true
autoGroup-3: 框架篇

---



## Vue之快速开始一个项目



### 快速创建项目



#### `Vue CLI`

```sh
vue create hello-world
```



如果之前本地有安装vue2.x的脚手架版本需要先进行卸载

```sh
npm uninstall vue-cli -g
```

安装vue3

```sh
npm install @vue/cli -g
```



简介

```sh
? Please pick a preset: Manually select features		# 请选择
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)												# 空格键选择，a键全选，i键反选
>(*) Choose Vue version									# 是否自定义选择vue版本
 (*) Babel												# 是否使用babel以支持ES6等语言
 (*) TypeScript											# 是否使用TypeScripyt
 (*) Progressive Web App (PWA) Support					# PWA渐进式web app支持
 (*) Router												# 路由插件
 (*) Vuex												# vue状态管理插件
 (*) CSS Pre-processors									# CSS预处理插件
 (*) Linter / Formatter									# 代码 / 格式检查插件
 (*) Unit Testing										# 是否开启单元测试
 (*) E2E Testing										# 支持 E2E 测试
```





#### `Vite`

```sh
npm create vue@3 # 创建vue3项目

npm create vue@2 # 创建vue2项目
```



```sh
√ Project name: ... hellowolr												# 项目名
√ Add TypeScript? ... No / Yes												# 是否使用TypeScript
√ Add JSX Support? ... No / Yes												# 是否使用JSX
√ Add Vue Router for Single Page Application development? ... No / Yes		# 是否添加vue-route
√ Add Pinia for state management? ... No / Yes								# 是否添加Pinia状态管理功具
√ Add Vitest for Unit Testing? ... No / Yes									# 是否添加单元测试	
√ Add an End-to-End Testing Solution? » No									# 端到端测试
√ Add ESLint for code quality? ... No / Yes									# ESlint检测
√ Add Prettier for code formatting? ... No / Yes							# 添加漂亮的代码格式?
```





#### `NuxtJs`

> Nuxt.js 十分简单易用。一个简单的项目只需将 `nuxt` 添加为依赖组件即可。

##### 运行 create-nuxt-app

为了快速入门，Nuxt.js 团队创建了脚手架工具 [create-nuxt-app](https://github.com/nuxt/create-nuxt-app)。

确保安装了 npx（npx 在 NPM 版本 5.2.0 默认安装了）：

```bash
$ npx create-nuxt-app <项目名>
```

或者用 yarn ：

```bash
$ yarn create nuxt-app <项目名>
```

它会让你进行一些选择:

1. 在集成的服务器端框架之间进行选择:

- None (Nuxt 默认服务器)
- [Express](https://github.com/expressjs/express)
- [Koa](https://github.com/koajs/koa)
- [Hapi](https://github.com/hapijs/hapi)
- [Feathers](https://github.com/feathersjs/feathers)
- [Micro](https://github.com/zeit/micro)
- [Fastify](https://github.com/fastify/fastify)
- [Adonis](https://github.com/adonisjs/adonis-framework) (WIP)

2. 选择您喜欢的 UI 框架:

- None (无)
- [Bootstrap](https://github.com/bootstrap-vue/bootstrap-vue)
- [Vuetify](https://github.com/vuetifyjs/vuetify)
- [Bulma](https://github.com/jgthms/bulma)
- [Tailwind](https://github.com/tailwindcss/tailwindcss)
- [Element UI](https://github.com/ElemeFE/element)
- [Ant Design Vue](https://github.com/vueComponent/ant-design-vue)
- [Buefy](https://github.com/buefy/buefy)
- [iView](https://github.com/iview/iview)
- [Tachyons](https://github.com/tachyons-css/tachyons)

3. 选择您喜欢的测试框架:

- None (随意添加一个)
- [Jest](https://github.com/facebook/jest)
- [AVA](https://github.com/avajs/ava)

4. 选择你想要的 Nuxt 模式 (`Universal` or `SPA`)

5. 添加 [axios module](https://github.com/nuxt-community/axios-module) 以轻松地将 HTTP 请求发送到您的应用程序中。

6. 添加 [EsLint](https://eslint.org/) 以在保存时代码规范和错误检查您的代码。

7. 添加 [Prettier](https://prettier.io/) 以在保存时格式化/美化您的代码。





## 添加Css预处理器



### Less



### Sass

