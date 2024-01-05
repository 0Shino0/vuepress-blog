---
title: web踩坑
tags: 
    - Vue
    - React
categories: 
  - FrontEnd
top: true
pin: true
summary: 前端踩坑总结
description: 前端踩坑总结
sticky: 4
# abbrlink: 18408
date: 2022-05-28 11:24:45
autoGroup-8: 踩坑篇
---

::: warning 踩坑
  记录记录自己踩的坑
:::

<div align=center>
<img src="https://shinoimg.yyshino.top/img/202210191039385.gif" width="50%" height="50%" >
</div>
<!-- more -->


## 时间 + 问题

### Webpack

#### 1. loader 版本过高问题

#### ![loader版本过高](https://shinoimg.yyshino.top/img/hvproblem.png)

类似提示，可能存在 loader 版本过高问题，下载低版本loader 即可解决。

#### 2.



## Git

#### 1.git push问题

2022年4月21日08:52:49

错误

```yaml
fatal: remote error: 
  You can't push to git://github.com/你的git用户名/Demo.git
  Use https://github.com/你的git用户名/Demo.git
```



##### 解决办法一：

最后按照百度来的解决方法解决了该问题
控制台输入以下两条命令后再次尝试git push操作

```yaml
git remote rm origin
git remote add origin git@github.com:git用户名/仓库名.git
```

如果出现以下问题

```yaml
fatal: The current branch main has no upstream branch.
To push the current branch and set the remote as upstream, use

git push --set-upstream origin main
```


则执行下方命令


```yaml
 git push --set-upstream origin main
```



出现下方提示证明上游分支设置成功

```js
Branch 'main' set up to track remote branch 'main' from 'origin'.
```



进行该操作后可以正常git push,git pull操作了

##### 解决办法二：
```md
    8-30新增解决方法
    
    进入项目文件夹目录下，找到.git文件夹（如果不显示请打开查看隐藏目录选项）
    效果如图
    找到config文件，打开后如下图：
    
    如果url为http开头，如：https://github.com/用户名/仓库名，例：https://github.com/kobeyk/SpringBoot-ShpTools.git
    则修改为git@github.com:用户名/仓库名,注意，githup.com与用户名中间为英文符号:
```

[参考链接：[https://blog.csdn.net/qq_43961619/article/details/116595085](https://blog.csdn.net/qq_43961619/article/details/116595085)]



### 2.Git快速搜索

作用

- 快速搜索源码中文件的路径

使用方法

1. 在github中找到你要查询的库
2. ![gitflash](https://shinoimg.yyshino.top/img/image-20220518110209022.png)
3. 选择`In this respository`
4. 回车



### 3. bash .sh No such file or directory

2022-11-1 15:03:38

问题描述
执行 `bash deploy.sh` 部署脚本时出现问题,经过在网上的查询以及报错日志. 我发现它与Node版本之间存在一定关系.

- Node 14
```yaml
  Error: Cannot find module "npm-cli.js"
```

- Node 16.17.0
```yaml
  -bash: No such file or directory
```

- 当我更新到 16.18.0时, 竟然就直接成功了

#### 解决问题
升级Node至 `16.18.0` ，更高的我没试过，这也是一种解决方案.

- `nvm` Node管理器

```yaml
  nvm install 16.18.0
  nvm use 16.18.0
```

- `Node`官网下载 16.18.0 版本






## React

#### 1.React路由

2022年3月6日19:01:00

今天做练习react路由出现错误，index.tsx:19 Uncaught Error: A is only ever to be used as the child of element, nev…
由于路由版本升级，Route需要在Routes组件内，并且component替换成element，括号中变为标签
```html
  <Routes
  <Route path="/about" element={} />
  <Route path="/home" element={} />
  </Routes
```
记录一下
原文链接：https://blog.csdn.net/m0_50981596/article/details/122811781

==**以上是路由6版本，由于改动过大，建议先使用5版本**==



#### 2.解决多级路径刷新页面样式丢失的问题

```js
   1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
   2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
   3.使用HashRouter
```



### Antd-React UI库



#### 1.antd自定义主题报错

2022年3月26日16:45:13

```js
  ERROR in ./src/styles/wieldy.less (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[9].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[9].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[9].use[3]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[9].use[4]!./src/styles/wieldy.less)
  
  Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):
  ValidationError: Invalid options object. PostCSS Loader has been initialized using an options object that does not match the API schema.
   - options has an unknown property 'plugins'. These properties are valid:
     object { postcssOptions?, execute?, sourceMap?, implementation? }
      at validate (C:\Workspace\harv-Harvest-frontend\node_modules\schema-utils\dist\validate.js:105:11)
      at Object.getOptions (C:\Workspace\harv-Harvest-frontend\node_modules\webpack\lib\NormalModule.js:580:19)
      at Object.loader (C:\Workspace\harv-Harvest-frontend\node_modules\postcss-loader\dist\index.js:40:24)
```

  #### 解决方案

  也有这个问题。

  似乎因为 less-loader 6 customize-cra "addLessLoader" 被破坏了。

  这个[PR](https://github.com/arackaf/customize-cra/pull/255)修复了它，但从未合并。同一个人创建了这个包： [customize-cra-less-loader](https://github.com/xyy94813/customize-cra-less-loader)

  解决这个问题：

  - 安装custom-cra-less-loader包
  - “config-overrides.js”应该是这样的：

```js
    const { override } = require("customize-cra");
    const addLessLoader = require("customize-cra-less-loader");
    
    module.exports = override(
      addLessLoader({
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              '@primary-color': '#038fde',
            }
          }
        }
      })
    );
```

转自https://stackoverflow.com/questions/71035578/postcss-loader-has-been-initialized-using-an-options-object-that-does-not-match



#### 2.antd自定义主题修改失效

2022年3月26日16:45:13

less-loader版本低，版本参考		

```js
 "less": "3.12.2",
 "less-loader": "^10.2.0",
```



#### 3.



## Vue

#### 1.Vue Router 4版本 不适应3版本

2022年4月19日11:13:48

报错

```js
    Uncaught TypeError: Object(...) is not a function
        at eval (webpack-internal:///./node_modules/vue-router/dist/vue-router.esm-bundler.js:2145:97)
        at Module../node_modules/vue-router/dist/vue-router.esm-bundler.js (chunk-vendors.js:1609:1)
        at __webpack_require__ (app.js:849:30)
        at fn (app.js:151:20)
        at eval (webpack-internal:///./src/router/index.js:3:68)
        at Module../src/router/index.js (app.js:1129:1)
        at __webpack_require__ (app.js:849:30)
        at fn (app.js:151:20)
        at eval (webpack-internal:///./src/main.js:12:65)
        at Module../src/main.js (app.js:1117:1)
```

解决

```yaml
    # 依次执行
    yarn remove vue-router
    yarn add vue-router@3 --save
    # 即可解决
```



#### 2.Vuecli@3中适用的less 以及less-loader

```json
    "less": "^3.13.0",
    "less-loader": "^7.1.0",
```

版本过高报错

```yaml
cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer/index.vue?vue&type=style&index=0&id=30c2788e&lang=less&scoped=true&:1 Uncaught Error: Module build failed (from ./node_modules/less-loader/dist/cjs.js):
TypeError: this.getOptions is not a function
    at Object.lessLoader (D:\vscode\vscode cache02\19-project\Vue\shop-client\node_modules\less-loader\dist\index.js:19:24)
    at eval (webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer/index.vue?vue&type=style&index=0&id=30c2788e&lang=less&scoped=true&:1:7)
    at Object../node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer/index.vue?vue&type=style&index=0&id=30c2788e&lang=less&scoped=true& (http://localhost:8081/js/app.js:1116:1)
    at __webpack_require__ (http://localhost:8081/js/app.js:849:30)
    at fn (http://localhost:8081/js/app.js:151:20)
    at eval (webpack-internal:///./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer/index.vue?vue&type=style&index=0&id=30c2788e&lang=less&scoped=true&:4:15)
    at Object../node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Footer/index.vue?vue&type=style&index=0&id=30c2788e&lang=less&scoped=true& (http://localhost:8081/js/app.js:1138:1)
    at __webpack_require__ (http://localhost:8081/js/app.js:849:30)
    at fn (http://localhost:8081/js/app.js:151:20)
    at eval (webpack-internal:///./src/components/Footer/index.vue?vue&type=style&index=0&id=30c2788e&lang=less&scoped=true&:2:504)
    at Module../src/components/Footer/index.vue?vue&type=style&index=0&id=30c2788e&lang=less&scoped=true& (http://localhost:8081/js/app.js:1232:1)
```



#### 3.解决路由重复跳转的错误

2022年4月21日14:36:44

报错信息

```js
Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/search".
```

解决方案

在 route.js 文件下添加如下代码

```js
import Router from 'vue-router'

// 缓存原本的push方法
const originalPush = Router.prototype.push
// 指定新的push方法
Router.prototype.push = function push(location, onResolve, onReject) {
    // 如果指定了成功或失败的回调
    if (onResolve || onReject)
        // 直接调用原本的push方法
        // originalPush(this, location, onResolve, onReject)    //this不是router而是undefined
        return originalPush.call(this, location, onResolve, onReject)

    // 没有指定成功或失败的回调，必须用catch处理
    return originalPush.call(this, location).catch((err) => {
        // 如果是重复盗汗产生的错误，不再向外传递错误 
        if (Router.isNavigationFailure(err)) {
            // resolve err
            return err      //  产生的成功的promise ， 成功promise的value是err
        }
        // 如果是其他原因盗汗的错误，将错误向下传递 
        // rethrow error
        return Promise.reject(err)
    })
}

```

Vue 3.1.0版本后

https://github.com/vuejs/vue-router/releases?after=v3.3.1&page=3

https://github.com/vuejs/vue-router/issues/2881



#### 4.npm install --save vue/types/umd

2022-5-9 18:12:46

报错信息

![error01](https://shinoimg.yyshino.top/img/umd-error01.png)

运行后

![error02](https://shinoimg.yyshino.top/img/umd-error02.png)

解决某个文件中引入了

```js
import { xxx } from 'vue/types/umd'
```

删除即可



#### 5.vuex模块化 modules

报错

```yaml
TypeError: Cannot read property 'cartList' of undefined
```

解决在

```js
// 在modules中注册
	modules:{
		home,
		cart
	}
```



#### Vue 运行报错

```yaml
  vue项目运行报错：Module build failed (from ./node_modules/babel-loader/lib/index.js):
```

解决

```yaml
  npm install @babel/core @babel/preset-env
```



#### Vue3 router

报错

```yaml
  Cannot use 'in' operator to search for 'path' in undefined
```

解决

```js
  // 在路由文件里用错了createWebHashHistory()方法，将它用成了变量，只需要将它写成方法即可解决问题。
  history:createWebHashHistory  =>  history:createWebHashHistory()
```



#### Vue3 setup 获取全局对象

2022年7月11日00:20:49



```js
import { getCurrentInstance} from "vue";

export default {
    name: "approve",
    setup(){
        // Vue3中我们打印 getCurrentInstance 详细见下图
        console.log(getCurrentInstance());
            // 获取全局对象
		const { $api, $message, $store } =
      getCurrentInstance().appContext.config.globalProperties;
    }
}

```



![image-20220721122614665](https://shinoimg.yyshino.top/img/202207211228429.png)

总结

```js
app.config.globalProperties.变量名
 组件 setup 获取变量

getCurrentInstance().appContext.config.globalProperties.变量名
```



#### top await



参考博客

https://bobbyhadz.com/blog/javascript-unexpected-reserved-word-await#:~:text=The%20%22unexpected%20reserved%20word%20await,directly%20enclosing%20function%20as%20async%20.

https://blog.csdn.net/xgangzai/article/details/114314178



## Node

### node服务器 启动 端口占用

报错

```yaml
Error: listen EACCES: permission denied 0.0.0.0:80
    at Server.setupListenHandle [as _listen2] (net.js:1314:21)
    at listenInCluster (net.js:1379:12)
    at Server.listen (net.js:1465:7)
    at Application.listen (F:\Program\web\web-app\elm\server\node_modules\koa\lib\application.js:82:19)     
    at Object.<anonymous> (F:\Program\web\web-app\elm\server\index.js:32:5)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)     
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)                                                                             6:12)
Emitted 'error' event on Server instance at:
    at emitErrorNT (net.js:1358:8)
    at processTicksAndRejections (internal/process/task_queues.js:82:21) {        
  code: 'EACCES',
  errno: -4092,
  syscall: 'listen',
  address: '0.0.0.0',
  port: 80
}
```

解决   更改端口

```js
app.listen(); // 端口号
```



### Koa1 Koa2

报错

```yaml
AssertionError: app.use() requires a generator function
```

解决

```yaml
// 版本不兼容问题
koa-router7.x 不支持koa1
koa-router4.x 不能使用koa2

下载低版本的koa-router
或者更新 koa1 => koa2
```



### 搭建接口时

报错

```yaml
"error":"Converting circular structure to JSON\n    --> starting at object with constructor 'NativeTopology'\n    |     property 's' -> object with constructor 'Object'\n    |     property 'sessionPool' -> object with constructor 'ServerSessionPool'\n    --- property 'topology' closes the circle"
```

解决

未添加 async 或者 await




## DataBase

### Mongodb 服务启动失败

报错

```yaml
服务异常退出 错误代码1067
```

解决

1. 删除journal文件
2. 清除mongod.lock和storage.bson
3. 重新启动服务

上面的无法实现 ,可以尝试下面的
1. 删除服务 
2. sc delete mongodb
3. 删除journal文件
4. 清除mongod.lock和storage.bson
5. MongoDB服务删除并重新安装，
6. 再尝试就发现已经可以正常启动了。



最佳解决方案

利用安装包进行修复

打开对应版本的安装包

![image-20220719155339365](https://shinoimg.yyshino.top/img/202207191553716.png)

选中`Repair`进行修复

![image-20220715223953968](https://shinoimg.yyshino.top/img/202207152240327.png)

解决问题

目前未发现它有什么弊端，数据保留完整。





## 小程序

### uniapp

#### 未配置 appid

```yaml
VM22 WAService.js:9 TypeError: Cannot read property 'forceUpdate' of undefined
```

解决

```yaml
解决 Cannot read property 'forceUpdate' of undefined 的错误
这个错误的原因非常简单，是因为我们没有为项目配置 appID 的原因，所以只需要完成 APPID 配置即可。
```



#### 语法错误: Unexpected token, expected "," (1:543)

```yaml
10:47:43.127 Module build failed (from ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js):
10:47:43.129 语法错误: Unexpected token, expected "," (1:543)
10:47:43.130       at pages\index\index.vue:1
```

错误原因

```vue
:class="active:navIndex === 0"
```

解决

```vue
:class="{active:navIndex === 0}"
```



## JAVA

###  admin 后台管理项目  |   本地运行

1. `git clone githubaddress`

2. 数据库运行 .sql 文件
3. idea 以maven 导入项目
4. 前端项目 `yarn` | `npm install`
5. 运行
   1. 前端 `yarn serve` | `npm run start`
   2. 后端 









