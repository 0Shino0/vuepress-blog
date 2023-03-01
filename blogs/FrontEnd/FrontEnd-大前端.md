---
title: 大前端
tags: 
    - 大前端
categories: 
    - FrontEnd
# top: true
# pin: true
summary: 大前端
description: 大前端
# sticky: 1
date: 2022-09-15 15:29:38
autoGroup-2: 基础篇
---

::: tip 大前端

​    	依目前的局势来看，前端不能局限于前端。前端本身就广而杂，需要总结并且建立联系便于理解。但有些知识会与后端、数据库、底层等有关，若是不了解就难以学精。

:::

<!-- more -->

# 概述




### 需求分析工具

- **原型类**:Axure,Ps,墨刀,蓝湖

- **思维脑图**: Xmind, MindNode ( Mac) , MindManager

- **流程图**: Visio ( win ) /OmniGraffle ( Mac ) / processOnime


## 真机调试总结

- Chrome + Android / Safari+iOS

- Fiddler / Charles

- Weinre, Spy-Debugger, vConsole


## 接口测试

### Restful API

### Mock数据

Mock数据开发流程: 前端定义接口-->完成静态页面-->完成UI交互-->对接真实接口-->页面/逻辑测试-->线上部署

### 性能测试


## 常用中间件

### 数据库

#### MongoDB

简介
- 数据结构不固定--> 易扩展、高性能、高可用
- 较容易映射复杂数据(key-value)
- 无事务特性要求(ACID特性)

数据库相关概念
- 关系型数据库,是指采用了关系模型来组织数据的数据库。
- NoSQL是对不同于传统的关系数据库的数据库管理系统的统称。

##### 基础

##### 管理工具Robo 3T

##### NoSQL数据库设计

- **常见场景及设计方法(内嵌、父/子引用、反范式)**
  - 内嵌:是指存在关联关系的文档,放在同一文档中以数组的形式存放。**(一对少)**
    - 内嵌设计
      - 减少了关联查询
      - 适合于单类需要描述的属性
      - 不经常变化的属性（扩展、嵌套关联）
  - 父引用:是指存在一对多的情况中,放在同一文档中以数组的形式存放。
  - 子引用:是指存在一对非常多的情况中,由于数据库文档存放限制,这个时候进行反向引用。
    - 父子引用设计
      - 引用数据内容是否非常多
      - 引用数据量是否非常庞大,而且在增加
      - 数据是否需要单独访问
  - 范式：是指按既定的用法,范式就是一种公认的模型或模式。反范式->不走寻常路
    - 反范式设计:
      - 是否有提升性能的区间
      - 数据量的变化是否非常庞大,庞大到更新会异常低效
      - 先考虑读写比,才考虑反范式
  - **设计原则小结:优先考虑内嵌,如果单独访问则不适合 | 数组不应该无限制增长 | 考虑读写比,考虑反范式,考虑应用场景**
- 双向关联的场景及设计原则



### 鉴权

简介
- 核心概念(鉴权方式,加密/解密,HTTPS)
- JWT工作原理
- Nodejs集成JWT


#### 总结

![2022-10-23_111522](https://shinoimg.yyshino.top/img/202210231503059.jpg)




### Redis
#### 简介
Redis是完全开源免费的,遵守BSD协议,是一个高性能的key-value数据库。

Redis与其他key-value 缓存产品相比:支持数据的持久化,多数据结构list, set, zset, hash等的存储,支持数据备份。

**Redis特点**

- 高性能,可持久化
- key-value结构,支持多种数据类型
- 支持事务,数据的原子性(要么不做/全做)

**引用场景**

- 缓存(读写性能优异)
- 计数&消息系统(高并发、发布/订阅阻塞队列功能)
- 分布式会话session&分布式锁(秒杀)

**Redis vs Mongo**
- 存储方式不一样: key-value vs Document
- 使用方式&可靠性不一样: MongoDB SQL & ACID支持
- 应用场景不一样:高性能缓存vs海量数据分析

##### 安装



### websocket




## 团队协作

### 文档管理与缺陷控制

### 版本管理

### 前端自动化

- `CI/CD`流程:持续集成、持续部署
- `Jenkins`简介、安装及使用
- 其他`CI/CD`工具: `Travis CI` 、`Circle CI`

`CI/CD`概念
 `CI/CD` 的核心概念是持续集成、持续交付和持续部署。它是作为一个面向开发和运营团队的解决方案，主要针对在集成新代码时所引发的问题（也称为：“集成地狱”）

平台
- Jenkins
- Travis CI
- Circle CI
- github action
- vercel



# PC端





# WebApp开发

移动端App

- 移动端webapp:泛指在手持设备移动端的web。
- 特点:
  - 类App应用,运行环境是浏览器
  - 可以包一层壳,成为App
  - 常见的混合应用: ionic, cordova , appcan , uni-app
  - 原生应用: ReactNative , Flutter
  - 桌面应用: Electron



# 框架



## Vue3更新

新的特性

- TS重写Diff算法,使用Proxy性能更优,框架体积更小
- 新的Compiler,通过注释标记提升框架性能
- Composition API,模块化功能代码,据弃this (this指向不明确)
- 更好的按需加载(得益于Tree Shaking )
- 新增: Fragment, Teleport, Suspense
- **Vite开发工具**



[Vue3 更新介绍)](https://v3-migration.vuejs.org/)



#### `Compiler`原理篇



#### `Composition`组合式API

- 逻辑代码更少,更集中,更易扩展
- 更加丰富的ARI集成
- 对于TS来说,非常友好(利于类型推导)
- 总结
  - `setup`选项中没有this,无法访问组件声明中的属性
  - `setup`函数接收两个参数`props `与`context`
  - `props`不可解构, `context`有`attrs`/`slots`/`emit`属性





- `reactive` "深"转换响应式副本,`readonly`创建只读对象
- `ref` vs `reactive` 用法与区别
- `isProxy`/`isReactive`/`isReadonly` & `toRaw`/`toRef`/`toRefs`



#### 管理工具

##### Pinia

为什么使用pinia

- Vuex进入维护阶段,可能没有新的特性加入
- Pinia概念更简、写法更简,更像下一代的Vuex5
- 更贴合组合式API写法,TS重写,对IDE友好



核心概念

- `State` , `Actions`, `Getters `, `Plugins`
- 进阶用法: `mapState`, `mapActions`, `mapGetters`
- API: `$patch`, `$reset `, `$state`, `$subscribe`, `$onAction`



#### Vite

命令小结

- `npm init vite-app <project-name>`
- `vite`支持热更新+冷启动
- `vite`提供打包构建命令,按需进行打包



`Vite`插件整合

- 整合`typescript`配置`tsconfig.json`
- 添加css预编译`npm install -D sass`
- `Vue-Router`&`Vuex`,路径别名的配置方法 (图片路径目前无解决方案)



注意：`Vite`目前不建议在大项目中尝试应用



#### `Vue2`升级`Vue3`方法

核心问题

- 部分被遗弃的用法,组合式`API`引入
- `Vue`的引用方式发生变化导致插件失效
- `Vue`生态系统`API`变化



##### Vue3重构PC前端

- `Vue2`目前未提供`cli`升级工具(`upgrade`只是升级插件)
- 旧项目直接改造,可能牵扯大部分代码
- 建议新项目新框架,对照原项目从0开始改造



#### 目前Vue SSR方案

方案一：`vue` & `vue-server-renderer 2.3.0+`



- [官网连接](https://cn.vuejs.org/guide/scaling-up/ssr.html#server-side-rendering-ssr)







方案二：`Nuxt.js` 框架



- [官网连接](https://nuxtjs.org/docs/get-started/installation/)
- Nuxt.js 是一个基于Vue.js的通用应用框架
- 预设了利用Vue.js开发服务端宣染所需要的各种配置
- 提供静态站点、异步数据加载、中间件支持、布局支持等



文件目录


```text
    |__layouts				视图
    |___pages				页面、用于形成路由
    |___componets			存放业务组件
    |___assets				小程序预编译资源
    |___sassplugins			插件配置
    |___middleware			模块
    |___static				静态资源(roboots.txt等)
    |___store 				vuex
```





## React

### 更新

##### React 16 -> 17

- `v16`之前,痛不欲生,大版本不兼容(更新非常快)
- `v16.3/.8`隔着几个版本都有新特性(生命周期、Hooks)
- `v17`中删除`document`上的事件委托改成根DOM容器



##### React 17 -> 18

- `v17`之后都是"渐近升级"与angular2->13很像
- `v18`中新功能:并发宣染(全自动)、新`Suspense`组件
- `v18`新特性: `startTransition`



##### 破坏性的改变

- 靠拢原生浏览器: `onFocus` , `onBlur`
- 删除事件池
- `useEffect`清理操作改为异步(过去是同步,性能差)
- JSX不再允许返回`undefined`移除`React Native Web`不需要的内部组件



### 学习建议

- 没有`React`学习经验的同学,直接上`React17`
- `React18`目前在Beta版本,可以了解,有时间可以上手
- **学好`Hooks + TS`才是王道,再扩展一下自动化**



### React设计思想



#### 前端演进

- 最初的静态页面-> `ajax`-> `JQuery`
- 需求简化代码、提高可维护性->设计模式->`MVC`
- 工程化->模块化: `Angular 2`, `Vue`, `React`



#### React设计哲学

- 单向数据流(数据页面绑定、单向宣染一>UI=f(x))
- 虚拟DOM(学习快照的思想)
- 组件化(一致性、方便协作)
- 具体体现
  - 可预测:编写可预测、符合开发者习惯的代码
  - 简化模型:JSX、界面更新、单向数据流
  - 衍生：React Native -> 一次学习,多处书写
- 核心开发者谈React
  - 变换、抽象、组合、状态、缓存
  - 列表、连续性、状态映射、缓存映射
  - 代数效应(这个其实就是hooks)



#### React 核心概念

- `reconciliation` 协调
- `rendering` 渲染
- `Virual DOM` & `diffing algorithm` 虚拟DOM与Diff算法



##### React Components|React elements|Component instance之间的关系

- React Component——React组件

  - 如果是一个函数,直接调用并带上`Props`
  - 如果是一个类,则创建实例后调用`render`

- React elements——React元素

  - 如下一个简单的`React elements`

    ```jsx
    const App = () => {
    	return(
    		<div>
    			App component
    		</div>
    	);
    };``
    ```

  - React运行时，会将它转化为一下对象 (**这个对象就被称作 React Element**)

    ```json
    {
    	"$$typeof": Symbol(react.element),
    	key: null,
    	props: {children: "App componet"},
    	ref: null,
    	type: "div"
    }
    ```

  - 如何转化?

    - JSX被转换成`React.createElement`函数
    - 所有的函数组合成了如上的`Object`
    - 这也是为什么我们写JSX总是需要导入`React`

  - 总结：

    - React Element可以等价于DOM节点也可以用来代表组件实例
      - 组件实例提供this变量,追踪组件,调用组件属性&方法
      - 所有的实例都会有生命周期方法或者有组件状态

- Component instance——React组件实例



##### `Reconciliation` 协调

- `React`会创建组件树(JS对象)
- `JS`执行速度非常快
- **这个过程会在`Render`调用时触发**



在React中这个在内存中的组件树就是“虚拟DOM"。接下来就是同步虚拟DOM与真实DOM



###### 同步虚拟DOM与真实DOM

- 按需更新
- 非全量更新
- 差异更新
- Diff算法
  - 通常情况下两个DOM树的比较需要`O (n3)`开销太大
  - React的Diff算法把这个复杂度降到了0(n)



###### Diff算法

- 两个不同类型的元素将产生不同的树。
- 对于经常变化的元素,提供key进行标记
  - key的标识应该使用唯一标识。而不该使用index。
    - map遍历时，index会自增，index的每次改变都会影响`Diff`算法判断他们不同，从而更新降低效率



##### `rendering` 渲染

简介:

React中的渲染器有`React DOM` `ReactNative`,等



React与宣染器是相互独立的所以,自定义宣染器也可以与React配合的



###### 渲染器与React之间的通信

- 通过setState更新DOM



#### `React Hooks`一览

- `useState` :最常用,替代原先的`setState`
  - 在`useState`方法中设置初始值
  - 解构数组,有两个参数:`state`与`setState`方法
  - `setState`常用的方式->使用`setState(prev =>...)`
- `useEffect` : `commponent`生命周期
  - 组件状态变化会自动执行
  - 第二个参数控制,执行循环与监听对象
  - 回调函数的返回值也可以是一个函数,用于“清理”工作
- `useContext` :使用`React Context API`
  - Context其实就是上下文用于透传父组件属性到子组件
- `useReducer` :用于复杂的状态管理
  - 应用场景:复杂的状态设置与管理
  - 定义initState与reducer函数
  - 一般配合context来管理整个应用的状态
- `useRef`  :存储易变数据,通常用于访问`DOM`元素
  - 作用:用于在重新宣染中,去存储易变数据
  - 会存储数据在`current`属性上
  - 通常用于访问`DOM`节点
- `useMemo` + `useCallback` : 缓存+ 优化组件性能
  - `useMemo`缓存数据,类似于`vue`中的`computed`属性
  - `useCallback`与`useMemo`很像,监听依赖变化作出变化
  - `useCallback`用于处理内联的回调函数



##### 自定义`Hooks`

`Hooks`规则

- 只在最顶层使用`Hook` (不在循环、条件、嵌套中调用)
- 只在`React`函数中调用`Hook `(说明类组件不行)
- 可以在hook中调用其他`hook` (“套娃")



自定义`hooks`方法

- `hooks`必须是`use`打头, `React`用于效验
- 两个组件中的`hooks`不会共享`state`状态
- 自定义的`hook`完整且相互独立













# 小程序



## 原生(微信小程序)



### 简介:

- 开发工具——[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

- 文档——[微信官方文档](https://developers.weixin.qq.com/doc/)
- 平台——[微信公众平台](https://mp.weixin.qq.com/)



### 基本语法

#### 样式

- `wxss`

- 两种预编译解决方案

  - vscode插件

    - 安装`vscode`插件 `easy sass`

    - 打开首选项配置(`setting.json`),在最后添加如下代码

      ```json
        "easysass.formats":[
          {
            "format": "expanded",
            "extension": ".wxss"
          }
        ]
      ```

  - 使用自动化工具 `gulp`

    - 安装`gulp` `gulp-px2rpx` `gulp-sass` `gulp-rename`
    - 根目录下创建文件`gulpfile.js`,添加如下代码
    - `npx gulp` 运行

    ```js
    const [task, src, dest) = require('gulp')
    const px2rpx = require('gulp-px2rpx')
    const sass = require('gulp-sass')
    const rename = require('gulp-rename')
    
    task('default', (cb) => {
    	src('pages/**/*.scss') 
    	.pipe(sass())
    	.pipe(px2rpx({
    		screenWidth: 750, // 设计稿屏幕,默认750
    		wxappScreenWidth: 750, // 微信小程序屏幕,默认750
    		remPrecision: 6, // 小数精度,默认6
    		}))
    		.pipe(rename((file) => {
    			file.extname = ".wxss"
    		}))
    	.pipe(dest(function(file) {
    		return file.base
    	}))
    cb()
    })
    ```

    



#### 结构 

- `wxml`



#### 配置文件

- `json`
- 入口文件
  - 主程序
    - `app.json`
    - `app.wxss`
    - `app.js`
  - 页面
    - `json`
    - `js`
    - `wxml`
    - `wxss`



#### 事件

见文档

#### 生命周期

见文档

#### 常用API

见文档



## 跨端小程序

### 简介

- 快应用
  - 快应用是指用户无需下载安装,即点即用,享受原生性能体验的应用,例如:微信小程序,支付宝小程序,百度小程序等。
  - 优点
    - 无需下载安装App节约手机空间
    - 性能好体验接近原生
    - 背靠流量
  - 缺点
    - 平台多,语法多,开发成本高
    - 管控难(内容&技术)



跨端框架

- Vue
  - uniapp
  - Chameleon 变色龙
  - mpvue
- React
  - taro
- 其他
  - WePY
  - kbone



跨端框架对比

- 跨端能力：
  - `uniapp` > `taro` > `chameleon` > `mpvue` > `wepy`
- 性能：
  - `微信原生`、uniapp > `taro` > `chameleon` > `wepy` > `mpvue`
- 资料与社区：
  - `uniapp` > `taro` > `chameleon` > `wepy` > `mpvue`
- 应用场景
  - 熟悉`Vue` : `uni-app`, `wepy`
  - 熟悉`React`: `Taro`
  - 多端开发`uniapp`初期验证>转原生..



### uniapp

简介

#### 开发规范

为了实现多端兼容，综合考虑编译速度、运行性能等因素，`uni-app` 约定了如下开发规范：

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)

- 组件标签靠近小程序规范，详见[uni-app 组件规范](https://uniapp.dcloud.net.cn/component/)
  - 有几点特别要注意的:
    1. 注意:所有组件与属性名都是小写,单词之间以连字符-连接;
    2. 每个vue文件的根节点必须为`<template>`,且这个`<template> `下只能且必须有一个根`<view>`组件;
    3. 不推荐使用`HTML`标签,为了管理方便、策略统一,新写代码时仍然建议使用`view`等组件;
    4. 组件上的事件绑定,需要以`vue`的事件绑定语法来绑定,如`bindchange="eventName"`事件,需要写成 `@change="eventName";`
    5. `uni-app`支持的组件分为`vue`组件和小程序自定义组件;如果扩展组件符合`uni-app`的`easycom`组件规范,则可以免注册,直接使用;如果组件不符合`easycom`规范,则需要在代码里手动`import`和注册组件,然后才能使用
- 接口能力（JS API）靠近微信小程序规范，但需将前缀 `wx` 替换为 `uni`，详见[uni-app接口规范](https://uniapp.dcloud.net.cn/api/)

- 数据绑定及事件处理同 `Vue.js` 规范，同时补充了App及页面的生命周期

- 为兼容多端运行，建议使用flex布局进行开发



#### 目录结构

一个uni-app工程，默认包含如下目录及文件：

```text
┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─utssdk                存放uts文件
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─uni_modules           存放[uni_module](/uni_modules)。
├─platforms             存放各平台专用页面的目录，详见
├─nativeplugins         App原生语言插件 详见
├─nativeResources       App端原生资源目录
│  └─android            Android原生资源目录 详见
├─hybrid                App端存放本地html文件的目录，详见
├─wxcomponents          存放小程序组件的目录，详见
├─unpackage             非工程代码，一般存放运行或发行的编译结果
├─AndroidManifest.xml   Android原生应用清单文件 详见
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
├─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
└─uni.scss              这里是uni-app内置的常用样式变量 
	
```

::: Tips 


- 编译到任意平台时，`static` 目录下的文件均会被完整打包进去，且不会编译。非 `static` 目录下的文件（vue、js、css 等）只有被引用到才会被打包编译进去。
- `static` 目录下的 `js` 文件不会被编译，如果里面有 `es6` 的代码，不经过转换直接运行，在手机设备上会报错。
- `css`、`less/scss` 等资源不要放在 `static` 目录下，建议这些公用的资源放在自建的 `common` 目录下。
- HbuilderX 1.9.0+ 支持在根目录创建 `ext.json`、`sitemap.json` 等小程序需要的文件。

:::

<!-- more -->


#### 模板内引入静态资源

> `template`内引入静态资源，如`image`、`video`等标签的`src`属性时，可以使用相对路径或者绝对路径，形式如下

```html
<!-- 绝对路径，/static指根目录下的static目录，在cli项目中/static指src目录下的static目录 -->
<image class="logo" src="/static/logo.png"></image>
<image class="logo" src="@/static/logo.png"></image>
<!-- 相对路径 -->
<image class="logo" src="../../static/logo.png"></image>
```

复制代码

::: **注意**

- `@`开头的绝对路径以及相对路径会经过 base64 转换规则校验
- 引入的静态资源在非 h5 平台，均不转为 base64。
- H5 平台，小于 4kb 的资源会被转换成 base64，其余不转。
- 自`HBuilderX 2.6.6`起`template`内支持`@`开头路径引入静态资源，旧版本不支持此方式
- App 平台自`HBuilderX 2.6.9`起`template`节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致
- 支付宝小程序组件内 image 标签不可使用相对路径

:::



##### css 引入静态资源

> 1. `css`文件或`style标签`内引入`css`文件时（scss、less 文件同理），可以使用相对路径或绝对路径（`HBuilderX 2.6.6`）

```css
/* 绝对路径 */
@import url('/common/uni.css');
@import url('@/common/uni.css');
/* 相对路径 */
@import url('../../common/uni.css');
```

复制代码

::: WARNING

- 自`HBuilderX 2.6.6`起支持绝对路径引入静态资源，旧版本不支持此方式

::: 



> 2. `css`文件或`style标签`内引用的图片路径可以使用相对路径也可以使用绝对路径，需要注意的是，有些小程序端 css 文件不允许引用本地文件（请看注意事项）。

```css
/* 绝对路径 */
background-image: url(/static/logo.png);
background-image: url(@/static/logo.png);
/* 相对路径 */
background-image: url(../../static/logo.png);
```

复制代码

::: **Tips**

  - 引入字体图标请参考，[字体图标](https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#字体图标)
  - `@`开头的绝对路径以及相对路径会经过 base64 转换规则校验
  - 不支持本地图片的平台，小于 40kb，一定会转 base64。（共四个平台 mp-weixin, mp-qq, mp-toutiao, app v2）
  - h5 平台，小于 4kb 会转 base64，超出 4kb 时不转。
  - 其余平台不会转 base64

:::

<!-- more -->


##### js 文件引入

> `js`文件或`script`标签内（包括 renderjs 等）引入`js`文件时，可以使用相对路径和绝对路径，形式如下

```js
// 绝对路径，@指向项目根目录，在cli项目中@指向src目录
import add from '@/common/add.js';
// 相对路径
import add from '../../common/add.js';
```

复制代码



::: wanrning

- js 文件不支持使用`/`开头的方式引入


:::

<!-- more -->


##### css文件引入

使用`@import`语句可以导入外联样式表，`@import`后跟需要导入的外联样式表的相对路径，用`;`表示语句结束。

**示例代码：**

```html
<style>
    @import "../../common/uni.css";

    .uni-card {
        box-shadow: none;
    }
</style>
```



#### HBuilder X

配置


- `Ctrl + ,`打开偏好设置，源码视图

- 添加以下代码

  ```json
  	"editor.fontFamily" : "Consolas",
  	"editor.fontSize" : 14,
  	"editor.insertSpaces" : true, 
  	"editor.lineHeight" : "1.5",
  	"editor.mousewhee lZoom" : true, 
  	"editor.onlyHighlightWord" : false,
  	"editor.tabSize" : 2,
  	"editor.wordWrap" : true,
  	"editor.codeassist.px2rem.enabel": false,
  	"editor.codeassist.px2upx.enabel": false
  ```



#### 创建uniapp项目

- `HBuilder X`
- `vscode`
  - 利用`vue-cli`-> `vue create -p dcloudio/uni-preset-vue 项目名`





# 跨端移动端&桌面端



## Flutter



### 简介

Flutter是一款全平台全端(移动端、桌面端、Web端)应用程序SDK,基于Dart语言开发,由Google开源。2015年4月发布1.0版本主推移动端高性能,2021年3月发布2.0版本全端跨端支持。



#### `Dart`

Dart是由谷歌开发的通用的编程语言,它常用于构建web、服务器桌面和移动应用程序。



##### 语言特点

- 热重载、async/await、面向对象特性
- 声明式布局易于阅读和可视化
- 静态与动态语言特性



性能效率高



##### Flutter优势

- 相比于uniapp,性能更好,生态更丰富
- 面向对象+动态语言特性(基于Dart)
- 可学习Dart,开发全端应用

- Flutter市场
  - 国内：字节系、腾讯课堂、阿里闲鱼、百度贴吧。
  - 国外：谷歌助手、ebay Motors、
- Flutter求职市场(大部分是3-5年)
  - 20-40K(腾讯会议) 16薪
  - 30-60K(字节) 15薪
  - 25-50K(去哪儿) 16薪



##### Flutter 相比 前端

- 兴趣是老师:可以根据自己的兴趣+团队发展来走
- 体量决定市场:前端体量大,目前市场非常缺前端
- Flutter也有坑: Flutter依旧需要学习移动端知识
  - **一些坑点**
    - 装环境: Flutter安装、iOS&安卓环境配置、加速源
    - 转变思路:组件化、面向对象
    - 找资料:第三方包市场、学习项目



### Flutter入门



#### 搭建环境

MacOS



##### Windows

安装

- 下载`Flutter SDK`,版本`2.2.3 stable`,配置`PATH`
- 下载`AndroidStudio` (`JDK8`),配置模拟器
- 安装`IDE`插件, `Chrome`,配置加速源(`flutter `)1。



如果你的chrome修改过目录可以添加环境变量

| 变量名              | 变量值                                                                  |
| ------------------- | ----------------------------------------------------------------------- |
| `CHROME_EXECUTABLE` | 你的Chrome的exe文件例如`D:\Chrome\Google\Chrome\Application\chrome.exe` |









##### 插件相关

vscode插件

- dart
- Flutter
- Awesome Flutter Snippets
- Flutter Files
- Flutter Widget Snippets
- Flutter Intl
- Flutter Helpers



Android Studio插件

- Android SDK Command-line tools
- dart
- Flutter
- Flutter Intl
- Flutter Snippets



IDE对比

- 插件功能类式 -> dart flutter
- AS集成度搞，大多可视化操作
- VSCode轻量，需要安装插件，插件市场丰富



##### 配置镜像

如果你在国内使用 Flutter，那么你可能需要找一个与官方同步的可信的镜像站点，帮助你的 Flutter 命令行工具到该镜像站点下载其所需的资源。你需要为此设置两个环境变量：`PUB_HOSTED_URL` 和 `FLUTTER_STORAGE_BASE_URL`，然后再运行 Flutter 命令行工具。

以 macOS 或者与 Linux 相近的系统为例，这里有以下步骤帮助你设定镜像。在系统终端里执行如下命令设定环境变量，并通过 GitHub 检出 Flutter SDK：

```shell
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
git clone -b dev https://github.com/flutter/flutter.git
export PATH="$PWD/flutter/bin:$PATH"
cd ./flutter
flutter doctor
```

如上步骤设定之后，你可以继续进行 Flutter 安装的下一步：[编辑工具设定](https://flutter.cn/docs/get-started/editor)，在这两个环境变量（`PUB_HOSTED_URL` 和 `FLUTTER_STORAGE_BASE_URL`）设定过后，未来通过命令 `flutter pub get` 获取 packages 的时候，网络请求将会通过 `flutter-io.cn` 提供的镜像进行。    

`flutter-io.cn` 所提供的镜像由中国的 Flutter 开发者社区提供和维护， Flutter 团队无法保证其的长期稳定运作，你也可以自由使用其他可信的机构提供的镜像服务。



##### 创建第一个flutter项目

- 打开`cmd`运行命令 `flutter create my_app`
- `cd my_app`
- **检测`flutter`环境, `flutter doctor`**



#### flutter常用命令

| 命令                      | 作用                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `flutter doctor`          | 查看flutter的状态，查看环境配置是否有问题                                                                                                                    |
| `flutter build apk`       | 打包安卓包                                                                                                                                                   |
| `flutter build ios`       | 打包苹果ipa                                                                                                                                                  |
| `flutter run`             | 运行项目 默认--debug                                                                                                                                         |
| `flutter run --profile`   | 运行线上测试包                                                                                                                                               |
| `flutter run --release`   | 运行线上包                                                                                                                                                   |
| `flutter channel`         | 查看flutter 的所有分支                                                                                                                                       |
| `flutter channel stable`  | 切换到具体的分支                                                                                                                                             |
| `flutter upgrade`         | 升级flutter                                                                                                                                                  |
| `flutter upgrade --force` | 如果升级flutter出现问题可以尝试 强制更新                                                                                                                     |
| `flutter logs`            | 当链接到某一个设备的时候，通过此命令可以查看到当前设备的log                                                                                                  |
| `flutter screenshot`      | 可以截取项目当前屏幕展示的图到项目里                                                                                                                         |
| `futter clean`            | 清除缓存                                                                                                                                                     |
| `flutter analyze`         | Dart默认的linter配置有点弱, 有很多有问题代码也不报错或警告. 通过此命令可以应用dart的最佳代码实践, 对一些不好的代码风格提出警告或者直接报错, 从而提高代码质量 |
| `flutter attach`          | 混合开发常用命令，1，首先起项目，运行起整个工程；2，到命令行，打开 flutter_lib 目录（Flutter module工程）；3，输入命令：flutter attach                       |
| `flutter test`            | 当前项目的单元测试                                                                                                                                           |
| `flutter downgrade`       | 从flutter当前channel 下降到上一个稳定版本                                                                                                                    |
| `flutter install`         | 直接下载apk到手机上，很方便使用，不用重复build or run                                                                                                        |
| `flutter create`          | 创建一个flutter 新项目 例如：                                                                                                                                |
| `flutter -h`              | 如果忘记具体的命令行 可以通过此命令查找                                                                                                                      |



#### 资源网站

| 网站名                   | 网站地址                                                             |
| ------------------------ | -------------------------------------------------------------------- |
| awesome-flutter          | https://github.com/Solido/awesome-flutter                            |
| dart中文网               | https://dart.cn/                                                     |
| Flutter中文网            | https://flutter.cn/                                                  |
| Flutter Widgets 介绍合集 | https://space.bilibili.com/64169458/channel/seriesdetail?sid=1883734 |
| yotube                   | https://youtube.com/c/flutterdev                                     |
| 语雀 Flutter             | https://www.yuque.com/xytech/flutter                                 |



Flutter学习套路

![image-20221028181703667](https://shinoimg.yyshino.top/img/202210281817320.png)



## Electron



- 常见的桌面GUI工具介绍
  - ![image-20221028182026406](https://shinoimg.yyshino.top/img/202210281820200.png)
- 桌面端设计与开发要点
- Electron简介+初始化项目+项目依赖介绍



### 初始化项目

- `npm init -y`
- 配置`npm` `electron`淘宝镜像 
  - `npm config set registry https://registry.npm.taobao.org/`
  - `npm config set ELECTRON_MIRROR http://npm.taobao.org/mirrors/electron/`
- `npm i -D electron`





### Electron架构

![image-20221029152138633](https://shinoimg.yyshino.top/img/202210291521944.png)



#### Electron 中的主进程与渲染进程

**主进程:**启动项目时运行的main.js脚本就是我们说的主进程。在主进程运行的脚本可以以创建web页面的形式展示GUI,主进程只有一个

**渲染进程:**每个Electron的页面都在运行着自己的进程,这样的进程称之为渲染进程(基于Chromium的多进程结构)。

- 主进程使用BrowserWindow创建实例
- 主进程销毁后,对应的宣染进程会被终止
- 主进程与宣染进程通过IPC方式(事件驱动)进行通信



### Electron常见框架集 react & Vue



#### Vue2 + Electron

- vue create demo
  - Manually select features
    - Choose Vue version
      - vue 2
    - Babel
    - Router
    - Vuex
    - CSS Pre-processors
      - dart-sass
    - Linter / FormatterUnit Testing
    - Pick a linter / formatter config:
      - ESLint + Prettier
    - Where do you prefer placing config for Babel, ESLint, etc.?
      - In dedicated config files
    - no 
- 使用`vue-cli-plugin-electron-builder`
  - `vue add electron-builder`



#### React

React+Electron生态

- 模板项目electron-react-boilerplate

- 使用Vite加持,开发Electron

