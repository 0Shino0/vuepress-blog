---
title: Vue3快速过度到Nuxt3
tags: 
    - Nuxt3
categories: 
    - FrontEnd
summary: Vue3快速过度到Nuxt3
description: Vue3快速过度到Nuxt3
date: 2024年3月5日12:21:47
---

## Vue3 => Nuxt3

vue3 过渡到 Nuxt3





### 语法部分



#### 常用

- `vue3` `setup`已经默认将大部分所需要的钩子导入了，不需要额外导入也能使用
- `router-link`: 路由跳转，不会预加载页面 | `NuxtLink`: 路由跳转，是`router-link`的封装，会预加载页面。
- `router.push` 和 `navigateTo`, `navigateTo`会预加载页面，一般需要`async`异步，比如`async navigateTo('/')`

#### 坑

- `onBeforeRouteUpdate`、`onBeforeRouteLeave`将不起作用，可能是bug (2023年12月19日22:02:13-setup环境中-可能是我使用方式不对)
- 函数/组件或，如果涉及到 只有客户端才能访问到的操作如 window对象、dom操作(document、ref)等，函数需要在`onMounted`/`nextTick`中调用 | 组件需要使用`ClientOnly`组件进行包裹
- 第三方库/插件，如果涉及到 只有客户端才能访问到的操作如 window对象、dom操作(document、ref)等，需要在`plugin`目录下添加相应的`ts`文件`xxx.client.ts`，并在`nuxt.config.ts`中添加相应的配置如 `plugin:[{ src: '~/plugins/xxx.client', mode: 'client' }]`
- 如果你需要使用`@nuxt/image`，请注意`public`目录和`assets`目录的区别
  - `public/`包含的文件在根目录中提供，并且不会被构建过程修改。如果您想从服务器上提供资产，请查看"public/"目录。
  - `assets/`存储在目录中的图像不会使用 Nuxt Image 进行处理，因为这些图像是由 webpack 管理的。
  - 详情请查看https://nuxt.com/docs/guide/directory-structure/public https://image.nuxt.com/get-started/providers#local-images
- 如果你有同时使用到`slot`和`client-only`组件，且`slot`包裹着`client-only`组件，需要注意`slot`会导致`client-only`组件失效（这个问题我是使用element plus时遇到的，在`el-form`组件中使用`client-only`失效，以及在`el-skeleton` `<template #default></template>`中使用`client-only`也是失效，因此我怀疑是`slot`影响的结果）解决也比较简单将`client-only`移动到使用`slot`的组件的外层即可



### 插件使用/模块使用

一些常用的库或组件，也许官方会或者一些社区大佬已经完成了对Nuxt3的兼容详细可查看 [https://nuxt.com/modules](https://nuxt.com/modules)。如果需要使用一些冷门库或者其他没有对Nuxt3兼容的库，你需要手动实现，比如我使用quill 编辑器，因为它使用到了document，但是这个对象只有在客户端才能访问，当nuxt服务端加载时就会报错：500 document is not defined；

**解决方法**

- 使用nuxt中的和[client-only](https://nuxt.com/docs/api/components/client-only)组件：我们可以在将quill封装为一个组件，在组件中初始化，在我们需要使用到的地方使用`client-only`组件进行包裹即可。
- 使用[plugins](https://nuxt.com/docs/guide/directory-structure/plugins)文件夹： 可通过创建一个`xxx.client.ts`，这个文件的资源将在客户端中加载，你可以在这里面引入仅在客户端加载的资源。最后将这个文件添加到`nuxt.config.ts`中的plugin对象中。

```ts
  // nuxt.config.ts
  
  plugins: [
	// ...
    { src: "~/plugins/quill.client", mode: "client" }, // nuxt使用quill
  ],
```



### 注意

- 注意时效性，本篇于2024年3月5日完成
- 未完结待补充