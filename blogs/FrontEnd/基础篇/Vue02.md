---
title: Vue进阶
tags: 
    - Vue2
categories: 
    - FrontEnd
abbrlink: 4795
date: 2022-05-18 16:31:55
summary: vue2入门
description: vue2入门
---

### Vue脚手架
#### 创建
```bash
    1)	创建脚手架4/3的vue项目, 并运行
	npm install -g @vue/cli    安装脚手架4/3的版本
	vue create vue-demo        使用安装的脚手架创建一个新的vue项目
	npm run serve              运行创建的项目命令

    2)	创建脚手架2的vue项目
	npm install -g @vue/cli-init
	vue init webpack vue-demo
		npm run dev 
```

**eslint禁用**
1、局部禁用
```js
    // 局部禁用某个错误提示
    /* eslint-disable no-unused-vars */
```
2、全局禁用
```js
    //package.json当中找到eslintConfig项，全局配置禁用某些错误提示
    "rules": {
        "no-unused-vars":"off"
        }
```
3、关闭
```js
    //开发阶段直接关闭eslint的提示功能

    手动创建vue.config.js
    module.exports = {
        //  写自己想要配置的东西去覆盖系统自带的
        // 关闭ESLint的规则
        lintOnSave: false
    }
```

vue模板解析
```js
Vue渲染两种方式：
​		1、render：h => h(App)
​		2、components注册组件，template解析，但是vue导入需要导入带解析器的版本
```

#### 模块化与组件化概念
##### 模块
1)理解: 向外提供特定功能的js程序, 一般就是一个js文件
2)为什么:  js代码更多更复杂
3)作用: 复用js, 简化js的编写, 提高js运行效率

##### 组件
1)理解: 用来实现特定(局部)界面功能效果的代码集合(html/css/js/image)
2)为什么: 一个界面的功能很复杂
3)作用: 复用编码, 简化项目编码, 提高运行效率

**模块化**
当应用的js都以模块来编写的, 这个应用就是一个模块化的应用

**组件化**
当应用是以多组件的方式实现, 这个应用就是一个组件化的应用, 应用的开发方式就是组件化的

##### 组件化开发
分两大步：**静态页面实现** 和  **动态交互实现**

静态页面实现：
  1. 拆分组件	拆分页面 定义组件   最大化重用（html,css,图片）

  2. 组装组件     就是把各个组件组装起来放在App.vue里面

  3. 渲染组件     就是把组件拼装完后，不考虑数据，先展示出来

动态组件界面：
  1. **初始化数据动态显示**
     - 初始化数据分析
       - 数据类型    一般我们的数据最终都是放在一个数组内部，数组内部放对象
       - 数据名称    comments:[{},{},{}]
       - 定义组件的原则
            > - 数据用到不是说展示就代表用，而是说数据的增删改查都叫用到数据
            > - 如果这个数据只是某一个组件用的，那么数据就在这一个组件当中定义
            > - 如果这个数据在某些个组件当中用的，那么就找这些个共同的祖先组件去定义
       - **注意**：组件标签名和属性名大小写问题：
         
         - 基本规则：要么原样去写，要么转小写中间用-连接

```js
        AddComment
        <AddComment/>  或者  <add-comment>
```

   1. **用户的交互**
   - 对于数据的操作：
      - 数据在哪，操作数据的方法就要在哪定义，而不是随便的在某一个组件当中去操作数据
      - 想要操作数据的组件，可以通过调用操作数据的方法，间接去操作数据
   - 添加和删除：
      - 子组件添加事件和事件回调，事件回调当中去调用外部操作数据的方法
      - 数据所在的组件去添加操作数据的方法

  1. **组件化编码的基本规范**

> 子组件里面不要去更新父组件当中的数据
> 1、分析数据在哪个组件
> 2、数据在哪个组件，那么更新数据的行为（方法）就在哪个组件
> 3、父组件的数据传递给子组件，是用来让子组件读取显示使用的，而不是让子组件去修改的（可以但是不该）
> 4、子组件需要更新数据，那么需要调用父组件传递过来的更新数据方法

   1. **组件的使用**

- 模板页面

```js
  <template>
      // 页面模板
  </template>
      // 2)JS模块对象
    <script>
      export default {
        data() {return {}},
        methods: {},
        computed: {},
        components: {}
      }
    </script>
      // 3)样式
    <style>  
      // 样式定义
    </style>
```

#### vue组件通信方式
- 组件关系  
  - 父子 
  - 兄弟  
  - 祖孙  
  - 其它

##### 1. **props 组件通信的方式：**
   - 是组件通信最常用最简单的一种方式,最基础的通信，用的也比较多
   - 父可以给子传递函数数据和非函数数据
​	    1.  传递非函数数据，本质就是父亲给儿子传数据
​	    2.  传递函数数据，本质是父亲想要儿子的数据，通过函数调用传参的方式把数据传递给父亲

   - 使用场合：
        > 父子最好
        > 父向非子后代传递，必须逐层去传递   麻烦
        > 不是父子关系的组件，必须借助相同的父组件去通信  麻烦
   - 不足（不是父子就狠麻烦） 兄弟关系，就必须先把一个数据给了父亲，然后通过父亲再给另一个

##### 2. **vue自定义事件**   
  a.  `$on(eventName, listener)`: 绑定自定义事件监听
  b.  `$emit(eventName, data)`: 分发自定义事件
  c.  `$off(eventName)`: 解绑自定义事件监听
  d.  `$once(eventName, listener)`: 绑定事件监听, 但只能处理一次
    - 事件类型 :  无数个  
   - 回调函数 ： 谁调用 （自己调用）  调用时候默认的参数 （有可能有也可能没有  如果调用时候传了参数，默认参数就有 如果没有传，那就没有（undefined））	
   - 使用方法

```js
    父组件当中去给子组件对象绑定事件监听  

	 @直接在组件标签对象当中去绑定，和绑定系统事件一致
	 $on，在mounted当中去绑定，但是需要获取到子组件标签对象（通过ref指定，然后获取到）
	 $once()和$on()类似，但是只能触发一次

    在子组件当中适当的位置去触发事件并传递参数
        $emit(),在子组件当中去触发，子组件对象触发
        
    $off()可以在销毁之前解绑事件
```
   - 适用场合
     - 子向父传递数据，其余情况都不能用

##### 3. **通信方式 全局事件总线**
  - 事件总线(对象)满足的两个条件：
     - 1、所有的组件对象都能找到它  
     - 2、可以调用$on和$emit
  - 原理
   > 本身自定义事件可以完成子向父之间的传递，因为父组件中可以看到子组件，可以为子组件绑定事件，子组件中可以触发事件
   > 但是如果不是子向父，那么其余的就没办法了，因为两个组件互相是看不到的，没办法再其中一个给另外一个绑定事件
   > 此时我们可以借助中间人，也就是他们都可以同时看到的一个人，就是全局事件总线（所有的组件对象都能看到

   > **在接收数据的组件中，获取总线绑定事件**
   > **在发送数据的组件中，获取总线触发事件**

  - 使用
    - 全局事件总线说到底就是个对象，我们通常就是用vm对象作为全局事件总线使用,把vm对象添加到Vue原型对象  就形成全局事件总线（vm）
    - 示例

```vue
    new Vue ({
        beforeCreate() {
            Vue.prototype.$bus = this   //配置总线  就是把vm挂到Vue的原型上，让所有的组件对象都能找到他，进而调用$on和$emit  
        },

        el:'#app',
        render:h => h(App)
    })
```
- 适用场合： 任何场合

##### 4. **通信方式 slot插槽**
  - 简介
    - 一个组件会多次使用，但是又有少部分结构数据会发生变化，（当然可以用不同的子组件）那么就得通过父组件告诉子组件变化的内容是什么，此时就要用到这个插槽
    - 子组件当中`<slot></sloat>`其实就是占位用的，让父组件给它填充内容，可以带标签
  - **默认插槽**和**具名插槽**

```vue
    <template>
      <div>
    <!--vue当中内置的组件标签  -->
            <slot>
                <!-- 默认插槽 -->
                <!-- slot内部的东西 是等待着父组件使用的时候给传递过来的 -->
                <span>嘿嘿</span>
            </slot>

    ​        <slot name="xxx">
    ​            <!-- 具名插槽 -->
    ​        </slot>

    ​    </div>
    </template>
```
   - **作用域插槽**
   > 子组件的slot可以通过 属性传递值给父组件，然后父组件可以根据不同需求改变这个slot内部的显示结构
   > 把子组件的值，传给父组件固定的区域进行操作
   > 父组件的数据是给子组件展示的
   > 子组件展示过程当中，数据的结构由父组件决定的。

```vue
    <template>
        <div>
            <ul>
                <li v-for="(todo,index) in todos" :key="todos.id">
                    <slot :todo="todo">
                        {{todo.content}}
                    </slot>
                </li>
            </ul>
        </div>
    </template>
```
   - 适用场合
```md
  1.当一个组件有不确定的结构时, 就需要使用slot技术了
  2.注意: 插槽内容是在父组件中编译后, 再传递给子组件
  3.如果决定结构的数据在父组件, 那用默认slot或命名命名slot
         (1) 当只有一个不确定的结构时, 可以使用默认slot
         (2) 当有多个不确定的结构时, 可以使用命名slot
  4.如果决定结构的数据在子组件, 那需要使用作用域slot
```

##### 5. **消息订阅(subscribe)与发布(publish)**
   1. [在线文档](https://github.com/mroderick/PubSubJS)
   2. 下载: `npm install -S pubsub-js`



#### vue中解决跨域
**跨域：**
[跨域是什么](https://yyshino.top/posts/20614.html#%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F)

**配置代理服务器解决跨域**
1、本身我们现在就跑在开发服务器 `webpack-dev-server` 而这个服务器带了一个模块，这个模块可以支持我们使用代理

2、原理：在浏览器发请求的时候，把这个请求发给服务器上的这个代理模块
      再由这个代理模块转发给我们真正的服务器
      这样的话，我们原来由浏览器直接发送请求到服务器就转化为服务器到服务器之间的请求

3、你要让代理转发，那么得告诉代理你的这个请求什么情况需要转发，配置以固定什么开头的路径需要代理转发，代理看到这个路径是以它开头就会帮你转发

4、代理转发的时候会把路径交给真正的请求服务器，作为请求路径，需要把固定的开头去除

```json
	changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
	
	proxy: {
	        "/api": {
	            target: "http://localhost:4000",
	            pathRewrite: {"^/api" : ""},  //要看真正的后台接口路径当中有没有包含/api，有就不用去掉，没有就得去掉
	            changeOrigin:true
	    }
	}
```

#### vue-ajax
vue-axios与axios官方库大同小异
不过多赘述,想了解的可以
    参考[axios文档](https://axios-http.com/zh/)
    我的博客[ajax-axios](https://yyshino.top/posts/20614.html)


#### vueui组件库
**1. 移动端UI组件库**
1)`Vant`  https://youzan.github.io/vant/#/zh-CN/
2)`Cube UI`  https://didi.github.io/cube-ui/#/zh-CN
3)`Mint UI`  http://mint-ui.github.io/ (经常不能访问)

**2. PC端UI组件库**
4)`Element UI`  https://element.eleme.cn/#/zh-CN
5)`IView UI`  https://www.iviewui.com/

#### vue-router
1. `vue-router`的理解
     1) vue的一个插件库
     2) 专门用来实现一个SPA应用
     3) 基于vue的项目基本都会用到此库
     4) 中文文档: http://router.vuejs.org/zh-cn/
     5) 下载: `npm install vue-router -S`
2. `SPA`的理解
     1) 单页Web应用（single page web application，SPA）
     2) 整个应用只有一个完整的页面
     3) 点击页面中的链接不会刷新页面, 本身也不会向服务器发请求
     4) 当点击路由链接时, 只会做页面的局部更新
     5) 数据都需要通过ajax请求获取, 并在前端异步展现


3) **VueRouter(): 用于创建路由器的构建函数**
```js
    new VueRouter({
      // 多个配置项
    })
```
2) **路由配置**
```js
    routes: [
      { // 一般路由
        path: '/about',
        component: About
      },
      { // 自动跳转路由
        path: '/', 
        redirect: '/about'
      }
    ]
```
3) **注册路由器**
```js
	import router from './router'
	new Vue({
		router
	})
```
4) **使用路由组件标签**

1. `<router-link>` 用来生成路由链接
```js
		<router-link to="/xxx">Go to XXX</router-link>
```
1. `<router-view>` 用来显示当前路由组件界面
```js
		<router-view></router-view>
```
5) **配置嵌套路由**
```js
    path: '/home',
    component: home,
    // 嵌套路由
    children: [
      {
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message
      }
    ]
```
6) **向路由组件传递参数**

   1) 配置路由
```js
      children: [
        {
          path: 'mdetail/:id',
          component: MessageDetail
        }
      ]
```
   2) 路由路径
```js
    <router-link :to="'/home/message/mdetail/'+m.id">{{m.title}}<router-link>
```
   3) 路由组件中读取请求参数
      `this.$route.params.id`

7. 编程式路由导航
    1)  `this.$router.push(path)`: 相当于点击路由链接(可以返回到当前路由界面)
    2)  `this.$router.replace(path)`: 用新路由替换当前路由(不可以返回到当前路由界面)
    3)  `this.$router.back()`: 请求(返回)上一个记录路由
    4)  `this.$router.go(-1)`: 请求(返回)上一个记录路由
    5)  `this.$router.go(1)`: 请求下一个记录路由

8. router 守卫

适用场合
**校验token**
```js
// 全局前置导航守卫
router.beforeEach(async (to, from,next) => {
    // 全局前置导航守卫
    // to 代表准备驱动地方的路由对象
    // from 从哪个地方来的路由对象
    // next 是一个函数
    // next() 代表无条件放行
    // next(false) 代表不放行，停在原地
    // next('/')    next({path:'/'})    代表最终让它去哪

    // token校验
    
    let token = store.state.user.token

    if(token){
        // 代表登录了或者之前登录过
        if(to.path === '/login'){
            // 登录鼓励，又想去登录页，直接跳转到首页
            next('/')
        }else{
            // !! 转化为bool值
            let hasuserInfo = !!store.state.user.userInfo

            if(hasuserInfo){
                // 此时 代表登录了 ， 去的不是登录页，用户信息存在，直接无条件放行
                next()
            }else{
                                
                // 此时代表登录了，去的不是登录页，用户信息不存在   那我们要根据token发请求获取用户真实信息
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // 出现错误 跳转到login页面，并清楚用户信息
                    alert('用户的token过期')
                    // 清空用户信息
                    store.dispatch('resetUserInfo')
    
                    next('/login')
                }
            }
        }
    }else{
        // 代表用户没登录或者之前也没有登录过
        
        // 后期我们需要判断用户是不是订单相关的页面，如果是娜美就先登录


        next()
    }
})
```

#### vuex
与redux大同小异
1) [github站点](https://github.com/vuejs/vuex)
2) [在线文档](https://vuex.vuejs.org/zh-cn/)
3) 简单来说: 对vue应用中多个组件的共享状态进行集中式的管理(读/写)

**状态管理**是什么：
- Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**，是一个官方插件。
它采用集中式存储管理应用的所有组件的状态（数据），并以相应的规则保证状态以一种可预测的方式发生变化。
​- 我们也可以认为它也是一种组件间通信的方式，并且适用于任意组件

**适用场合**
- Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。
- 也就是说应用简单（组件比较少）就不需要使用（但是可以），如果应用复杂，使用就会带来很大的便捷

**Vuex核心**：把所有的共享状态数据拿出来放在Vuex中进行集中式管理	


vuex简单模板
```js
// 1、安装

// 2、引入并声明使用vuex插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 3、向外暴露一个store的实例化对象

// state是一个包含多个属性（不是方法）的对象，其实就是用来存储数据用的
const state = {
    // 代表初始状态数据    是一个包含n个属性（不是方法）的对象
}

// mutations也是一个对象，是一个包含了多个方法的对象，其实就是用这个里面的方法去直接操作数据的
// 这个里面的方法不能包含  if  for  异步，是直接操作的
const mutations = {
    // 代表直接修改数据的数据  是一个包含n个直接修改状态数据方法的对象 （用来让action的行为调用）	
    // 注意：只能通过mutations的方法去直接修改，也就是说要想写state数据必须通过mutations
}

// actions也是一个对象，是一个包含了多个方法的对象。这个对象内部的方法是用来和vue当中用户的操作去关联的
// 这个里面的方法可以包含 if for 异步。
const actions = {
    // 代表用户行为数据    是一个包含n个用户行为回调方法的对象，（用来映射组件用户的行为回调函数）
}

// getters也是一个对象，是一个包含了多个方法的对象。这个对象内部的每个方法对应了一个计算属性的get，就是
// 通过state当中的数据  计算出来的一个新的想要的属性数据 
const getters = {
    // 代表计算属性数据    是一个包含n个计算属性的方法的对象
}

export default new Vuex.Store({
    // 包含了6个核心概念，
    // 现在讲4个
    state,
    mutations,
    actions,
    getters
})

// 4、将暴露出去的store实例化对象引入到实例化Vue的配置对象(main.js)当中使用

```

**注册store**
```
  import store from './store'

  new Vue({
    store, // 注册vuex的store对象  ==> 所有组件对象都有一个$store属性
  })
```

