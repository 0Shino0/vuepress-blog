---
title: Vue后台通用管理系统总结
tags: 
    - Vue3实战
categories: 
    - FrontEnd
# abbrlink: 1327
date: 2022-07-24 09:22:06
summary: Vue3 通用后台项目实战
description: Vue3 通用后台项目实战
pin: true
autoGroup-3: 框架篇
---

## company-admin

项目地址 [https://github.com/0Shino0/company-admin](https://github.com/0Shino0/company-admin)

## 技术栈

- Vue3 + Element Plus + Sass 实现前台
- Koa2 + MongoDB 实现后端
- Vite项目构建

## 前台

### 环境变量配置

`.env.dev`

`config`

配置不同环境的 api (方便调节 和 测试)

- dev
  - baseApi
  - mockApi
- test
  - baseApi
  - mockApi
- prod
  - baseApi
  - mockApi

对外暴露 `config` => 二次封装axios



### 二次封装axios

1. 创建axios实例对象
2. 请求拦截器
   - 获取请求头headers
   - 获取token (如果请求头中存在token)
3. 响应拦截器
   - 比对状态码 code
   - 判断token是否超时
   - 返回 成功/ 错误提示
4. 核心函数
   - 一般默认发送 `get`请求 (将请求方法 转化为大写)
   - 判断 使用 mockApi 还是 baseApi
   - 对不同的 请求方法进行遍历



### 二次封装 storage

```js
/**
 * Storage二次封装
 * @author YyShino
 */
import config from './../config'

export default {
    // 存储
    setItem(key, val) {
        let storage = this.getStorage();
        storage[key] = val;
        window.localStorage.setItem(config.namespace, JSON.stringify(storage));
    },
    // 获取
    getItem(key) {
        return this.getStorage()[key]
    },
    getStorage() {
        // JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换 (操作)。
        return JSON.parse(window.localStorage.getItem(config.namespace) || "{}");
    },
    // 删除 一个
    clearItem(key) {
        // 读取
        let storage = this.getStorage();
        // 删除
        delete storage[key];
        // 写入并 覆盖
        window.localStorage.setItem(config.namespace, JSON.stringify(storage));
    },
    // 删除 全部
    clearAll() {
        window.localStorage.clear()
    }
}
```



### 公共组件封装

- BreadCrumb.vue (头部区域)

- Home.vue (主要内容)

- TreeMenu.vue (左侧菜单栏)



### Vue-Router 和 Vuex

Vue-Router

- 注册路由 (routes)

  - /
    - Welcome
    - 动态添加路由
  - Login
  - 404

- 动态添加路由 (addRoute)

  - 系统管理

    - User
    - Menu
    - Role
    - Dept

  - 审批管理

    - Leave
    - Approve

  - 动态路由实现

    ```js
    // router 主文件
    async function loadAsyncRoutes() {
        // console.log(loadAsyncRoutes());
        let userInfo = storage.getItem("userInfo") || {};
        if (userInfo.token) {
            try {
                const { menuList } = await API.getPermissionList();
                // utils 为封装工具类
                let routes = utils.generateRoute(menuList);
                routes.map((route) => {
                    let url = `./../views/${route.component}.vue`;
                    route.component = () => import(url);
                    router.addRoute("home", route);
                })
            } catch (error) {
            }
        }
    }
    
    await loadAsyncRoutes()
    ```

    ```js
    // utils 封装工具类 generateRoute
        // 动态路由拼接
        generateRoute(menuList) {
            let routes = []
            const deepList = (list) => {
                while (list.length) {
                    let item = list.pop()
                    if (item.action) {
                        routes.push({
                            name: item.component,
                            path: item.path,
                            meta: {
                                title: item.menuName
                            },
                            component: item.component
                        })
                    }
    
                    if (item.children && !item.action) {
                        deepList(item.children)
                    }
                }
    
            }
            deepList(menuList)
            return routes;
        }
    
    ```





- 路由守卫 (beforeEach)

  ```js
  router.beforeEach((to, from, next) => {
      // console.log(router.hasRoute(to.name));
      if (router.hasRoute(to.name)) {
          document.title = to.meta.title;
          next()
      } else {
          next('/404')
      }
  })
  ```

  



Vuex

- state
  - 利用`storage`存储用户信息、菜单信息、菜单行为信息(创建、查看、编辑、删除等等)、右上角消息提示数量
- mutations 
  - 对应 state 的 mutations 操作



### 全局 

```js
/**
* mainjs中
*/
// 定义全局指令
app.directive('has', {
    beforeMount: (el, binding) => {
        // console.log(el, binding);
        // 获取按钮权限
        let actionList = storage.getItem('actionList')
        let value = binding.value;
        // includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
        // 盘点列表中是否有对应按钮权限标识
        let hasPermission = actionList.includes(value)
        if (!hasPermission) {
            // 隐藏按钮
            el.style = "display:none"
            setTimeout(() => {
                // 删除按钮
                el.parentNode.removeChild(el)
            }, 0)
        }
    }
})

// 全局挂载 请求组件
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage;
```



### 根据接口 获取数据 渲染数据



## 后台

### 连接数据库

```js
/**
 * 配置文件
 */
module.exports = {
    URL: 'mongodb://127.0.0.1:27017/company-manager'
}
```



```js
/**
 * 数据库连接
 */
const mongoose = require('mongoose');
const config = require('./index');
const log4js = require('./../utils/log4j')


mongoose.connect(config.URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error',() => {
    log4js.error('***数据库连接失败***')
})

db.on('open',() => {
    log4js.info('***数据库连接成功***')
})
```



### 日志输出封装

log4js



### 工具类封装

- CODE 状态码设置
- 分页 pager
- 成功 / 失败 的debug
- jwt 解密 token
- 递归拼接 菜单列表 树
- 处理时间格式  yyyy-mm-dd hh:mm:ss



### MongoDB数据库设计

![公司管理系统](https://shinoimg.yyshino.top/img/202207241729910.png)



### app.js

- logger
- 校验token
- 注册路由
- error











