---
title: Vue总结
abbrlink: 51479
date: 2022-05-23 09:32:38
top: true
summary: vue2全家桶总结
description: vue2全家桶总结
cover: true
coverImg: /medias/banner/bg_banner/3.gif
tags: 
    - Vue2
categories: 
    - FrontEnd
autoGroup-3: 框架篇
---

## vue插值语法

```js
  //vue差值语法
        //{{}}中使用的数据必须在data中存在;
        //{{}} 虽然能够使用表达式， 不能出现js的语句，不能在{{}}中写if for;
        //{{}} 不能在属性中使用
```

## Vue指令

```js
	v-text		// 1.向其所在的节点中渲染文本内容。(更新元素的 textContent)
				//2.与插值语法的区别:v-text会替换掉节点中的内容，{{xx}}则不会。

	v-html		//向指定节点中渲染包含html结构的内容。(更新元素的 innerHTML)

	v-on       //绑定事件   简写@

	v-bind	   //单向数据绑定  ：

	v-model		//双向数据绑定
			//自动收集表单数据
		<input type="text"/>	//v-model默认收集的其实是你表单元素当中的value值

        <input type="radio"/>		//name相同时 单选框才会绑定在一组
									//v-model默认收集的其实是你表单元素当中的value值,因此需要给radio添加value属性
            
        <input type="checkbox" />
        //1.没有配置input的value属性，那么收集的就是checked（勾选or未勾选，是布尔值)

        //2.配置input的value属性:
                //(1)v-model的初始值是非数组，那么收集的就是checked（勾选or未勾选，是布尔值)

                //(2)v-model的初始值是数组，那么收集的的就是value组成的数组
        //备注: v-model的三个修饰符:
        		//lazy:失去焦点再收集数据
        		//number:输入字符串转为有效的数字

			
	v-for	   //列表渲染
        	// v-for="(item,index) in 遍历对象" :key=唯一值(一般不用index)
    
	v-if	   //条件渲染
	v-else		
	v-show	   //条件渲染
			// 1.如果需要频繁切换 v-show 较好
			// 2.当条件不成立时, v-if的所有子节点不会解析(项目中使用)
		//注意
			//v-for优先级高于v-if，当v-for和v-if放在同一标签上时，会先执行v-for，再执行v-if，这样会导致不符合v-if条件的元素也会被v-for

	ref	   //为特定的元素添加引用标识，实例的$refs内部可以获取到
    
    v-cloak //防止闪现, 与css配合: [v-cloak] { display: none }

```



## 过渡& 动画

`xxx-enter-active`: 指定**显示**的transition
`xxx-leave-active`: 指定**隐藏**的transition
`xxx-enter`/`xxx-leave-to`: 指定**隐藏时**的样式



## Vue事件处理

```js
		v-on       //绑定事件   简写@     


// vue事件修饰符
		prevent	//阻止默认事件（常用）;
       stop		//阻止事件冒泡（常用）;
        once	//事件只触发一次（常用）;
        capture		//使用事件的捕获模式;
        self		//只有event.target是当前操作的元素是才触发事件;
        passive		//事件的默认行为立即执行，无需等待事件回调执行完毕;

```



# Vue对象的选项

```js
el
    //指定dom标签容器的选择器
    //Vue就会管理对应的标签及其子标签

data
    //对象或函数类型
    //指定初始化状态属性数据的对象
    //vm也会自动拥有data中所有属性
    //页面中可以直接访问使用
    //数据代理: 由vm对象来代理对data中所有属性的操作(读/写)

    //data为什么用函数
    //不用function return每个组件的data都在内存的同一个地址，那一个data改变，就会影响其他组件的data
    //用function return相当于新建了个对象，分配新的内存地址，这样每个组件之间的data都是相互独立

methods
    //包含多个方法的对象
    //供页面中的事件指令来绑定回调
    //回调函数默认有event参数, 但也可以指定自己的参数
    //所有的方法由vue对象来调用, 访问data中的属性直接使用this.xxx
 
```

## computed和watch

- **`computed`计算属性**
  - 1) 在computed属性对象中定义计算属性的方法
  - 2)在页面中使用{{方法名}}来显示计算的结果
  - 3)computed有缓存，值不变不重新计算
  - 4)computed内部只能是同步放回数据，不能异步放回数据 
- **`watch`**
  - 1)通过通过vm对象的$watch()或watch配置来监视指定的属性
  - 2)watch不支持缓存，有数据变化直接触发,当属性变化时, 回调函数自动调用, 在函数内部进行计算
  - 3)watch支持异步获取数据



## Vue生命周期

![vue生命周期](https://shinoimg.yyshino.top/img/lifecycle.png)


### 主要生命周期钩子

1)`mounted()`: 发送**ajax请求**, **启动定时器**等**异步**任务
2)`beforeDestory()`: 做收尾工作, 如: **清除定时器**



## Vuex

#### 注册store

```js
 import store from './store'

  new Vue({
    store, // 注册vuex的store对象  ==> 所有组件对象都有一个$store属性
  })
```

#### 核心概念

- `State`

  - state是一个包含多个属性（不是方法）的对象  =>  初始化存储数据

  - `mapState`辅助函数

    - `mapState` 函数返回的是一个对象，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 `computed` 属性。但是自从有了[对象展开运算符](https://github.com/tc39/proposal-object-rest-spread)，我们可以极大地简化写法：

      
      
      ```js
      computed: {
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState({
          // ...
        })
      }
      ```
      
      

- `Mutation`

  - mutations也是一个对象，是一个包含了多个方法的对象 => 直接操作数据的
  - 里面的方法不能包含  if  for  异步，是直接操作的 (纯函数)

- `Action`

  - actions也是一个对象，是一个包含了多个方法的对象 => vue当中用户的操作去关联的

- `Getter`

  - 可以认为是 store 的计算属性

  - `mapGetters`辅助函数

    - `mapGetters` 辅助函数可以是将 `store` 中的 `getter`映射到局部计算属性

    ```js
      computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
    		// getter当中的 计算属性
        ])
      }
    ```

    

- `Module`

  - Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
  - Vuex推荐我们的项目结构

  ```sh
  ├── index.html
  ├── main.js
  ├── api
  │   └── ... # 抽取出API请求
  ├── components
  │   ├── App.vue
  │   └── ...
  └── store
      ├── index.js          # 我们组装模块并导出 store 的地方
      ├── actions.js        # 根级别的 action
      ├── mutations.js      # 根级别的 mutation
      └── modules
          ├── cart.js       # 购物车模块
          └── products.js   # 产品模块
  ```

  - 当我们想要访问cart.js中的`state`数据

  
  
  ```
  shopCartList:state => state.shopcart.shopCartList
  ```

#### vuex核心概念模板

```js
// 1、安装

// 2、引入并声明使用vuex插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 3、向外暴露一个store的实例化对象
const state = {
    // 代表初始状态数据    是一个包含n个属性（不是方法）的对象
}

const mutations = {
    // 代表直接修改数据的数据  是一个包含n个直接修改状态数据方法的对象 （用来让action的行为调用）	
    // 注意：只能通过mutations的方法去直接修改，也就是说要想写state数据必须通过mutations
}

const actions = {
    // 代表用户行为数据    是一个包含n个用户行为回调方法的对象，（用来映射组件用户的行为回调函数）
}

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



## Vue-Router

### [路由API](https://router.vuejs.org/zh/api/)

### 定义配置路由

```js
    routes: [
      { // 配置当前路由
        path: '/current',
        component: Current,
        children: [ 	// 配置嵌套子路由
      		{
        		path: 'children01',
        		component: Children01
      		},
            {
        		path: 'children02',
        		component: Children02
      		},

      },
      { // 自动跳转路由
        path: '/', 
        redirect: '/about'
      }
    ]
```

### 注册路由

```js
import Vue from 'vue'
import router from './router'
// 创建vue配置路由器
new Vue({
   el: '#app',
   router,
   render: h => h(app)
})
```

### 使用路由

- `<router-link>`		
  - 路由连接,跳转到to所指定的连接
  - 参数
    - `to`:目标路由的链接
    - `replace`:导航后不会留下历史记录
    - `active-class `:链接激活时，应用于渲染的 `<a>` 的 class。
    - 
- `<router-view>`
  - 路由组件显示区域，就是组件需要在哪显示



#### 声明式导航

在浏览器中，点击链接实现导航的方式，叫做声明式导航。 像 `<a>` `<router-link to="">`都属于声明式导航

#### 编程式路由导航

1)   `this.$router.push(path)`: 相当于点击路由链接(可以返回到当前路由界面)
2)   `this.$router.replace(path)`: 用新路由替换当前路由(不可以返回到当前路由界面)
3)   `this.$router.back()`: 请求(返回)上一个记录路由
4)   `this.$router.go(-1)`: 请求(返回)上一个记录路由
5)   `this.$router.go(1)`: 请求下一个记录路由



#### 路由传递数据

##### 方法一：路由路径携带参数(param/query)

```js
最原始的传参
			参数：params参数,是属于路径的一部分       /xxx/10
			      query参数路径后使用?去拼接起来的    /xxx/  ? aa = bb && xx = yy  
```

##### 方法2: \<router-view\>属性携带数据

```js
//路由链接组件传递数据给命名路由
//路由链接组件中给路由传参可以写成对象形式，前提需要给路由起名字name，也叫命名路由  
<router-view name='xxx' :msg="msg"></router-view>
```

##### 方法3:使用props简化路由传参给子组件操作（路由当中传参的三种操作）

```js
		1）布尔值  
			路由当中需要配置 props:true,只能接收params参数，它会把路由当中接收的参数，置为子组件的属性     
		2）对象
			很少用，只能给子组件传递默认静态值
		3）函数
			用的比较多，比较灵活，可以把params和query的参数都映射为子组件的属性
			props(route){ //route就是当前我这个路由对象
                            	//把路由对象当中的参数，不管什么参数
                            	//全部拿到作为子组件的属性去使用
                            	return {
                                		msgId:route.params.msgId,
                                		msgContent:route.query.msgContent
                            	}
                        	}
```



#### 路由守卫

1. **全局路由守卫**



```js
router.beforeEach((to, from, next)=>{
    //全局前置守卫，路由跳转前触发
}) 
router.beforeResolve((to, from, next)=>{
    //全局解析守卫 在所有组件内守卫和异步路由组件被解析之后触发
}) 
router.afterEach((to, from)=>{
    //全局后置守卫，路由跳转完成后触发
}) 
```



2. **路由独享守卫**



```js
beforeEnter((to,from,next)=>{
	//路由对象单个路由配置 ，单个路由进入前触发
}) 
```



3. **组件路由守卫**



```js
beforeRouteEnter((to,from,next)=>{
    //在组件生命周期beforeCreate阶段触发
})
beforeRouteUpdadte((to,from,next)=>{
    //当前路由改变时触发
})
beforeRouteLeave((to,from,next)=>{
    //导航离开该组件的对应路由时触发
})
```

4. **参数**

`to`： 即将要进入的目标路由对象

`from`： 即将要离开的路由对象

`next(Function)`：是否可以进入某个具体路由，或者是某个具体路由的路径

5. **应用**

`router.beforeEach`：token校验

```js
// 全局前置导航守卫	router.beforeEach
// token校验
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
            let hasuserInfo = !!store.state.user.userInfo.nickName
            
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
                    // 去到之前想去但是没有去成的地方，需要和登录逻辑去配合使用  
                    next('/login?redirect='+to.path)
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

`beforeEnter`：用于设置放行条件

```js
     //路由独享守卫
	 // 用于设置放行条件
    {
        path:'/addcartsuccess',
        component:AddCartSuccess,
        路由独享守卫
        beforeEnter:(to,from,next) => {
            let skuNum = to.query.skuNum
            let skuInfo =  sessionStorage.getItem('SKUINFO_KEY')

            // 如果skuNum 与 skuInfo 存在 则放行
            if(skuNum && skuInfo){
                next()
            }else{
                alert('必须带够参数')
                next('/')
            }
        }
    }
```



#### 路由组件的单独打包

```js
import GroupOrder from '@/pages/Center/GroupOrder'
// import from 这样的写法
// 一个是同步引入，从上往下依次执行引入
// 它不能动态引入
// 他是把所有的组件全部引入完成才执行下面的代码，webpack打包的时候会把所有的引入组件集体打包，打包成一个大文件
// 效率比较慢

const GroupOrder = () => import('@/pages/Center/GroupOrder')
// import 函数可以让路由组件单独打包    还支付动态引入
// 写法很简单，路由组件在注册的时候可以是一个组件也可以是一个函数
// 写成函数时，当路由被访问的时候,对应的函数就会调用,然后对应的import函数才会执行，动态引入并打包成单独的文件
// 浏览器在运行的时候，  加载   解析   渲染
```



## 组件间通信

### 1. 组件间多种通信方式:

1. 组件间通信1: props
2. 组件间通信2: vue自定义事件
3. 组件间通信3: 事件总线
4. 组件间通信4: v-model
5. 组件间通信5: .sync 属性修饰符
6. 组件间通信6: $attrs与$listeners
7. 组件间通信7: $children与$parent
8. 组件间通信8: provide与inject
9. 组件间通信9: vuex
10. 组件间通信10: 作用域插槽slot-scope

### 2. 组件间通信最基本方式: props

- 用来实现父子之间相互通信的最基本方式, 也是用得最多的方式
  - 父 ==> 子, 传递的是非函数类型的属性
  - 子 ==> 父, 传递的是函数类型的属性
- 问题: 其它关系的组件使用props就会比较麻烦


### 3. 组件间通信2: vue自定义事件

#### 1) 原生DOM事件

- 绑定原生DOM事件监听的2种情况
  - 在html标签上绑定DOM事件名的监听
  - 在组件标签上绑定DOM事件名的监听, 事件绑定在组件的根标签上
- 当用户操作对应的界面时, 浏览器就会自动创建并封闭包含相关数据的事件对象, 分发对应的事件, 从而触发事件监听回调函数调用
- 事件对象event, 本质是 "事件数据对象"
- event对象内的数据属性: target / offsetX / offsetY / keyCode等
- $event就是浏览器创建的event对象, 默认传递给事件监听回调函数的就是它

#### 2) vue自定义事件

- 绑定vue自定义事件监听
  - 只能在组件标签上绑定
  - 事件名是任意的, 可以与原生DOM事件名相同
- 只有当执行$emit('自定义事件名', data)时分发自定义事件, 才会触发自定义事件监听函数调用
- $event: 就是分发自定义事件时指定的data数据
- $event可以是任意类型, 甚至可以没有
- 用来实现子向父组件通信, 功能相当于函数类型的props



### 4. 组件间通信3: 事件总线

- 理解:

  - Vue原型对象上有3个事件处理的方法: $on() / $emit() / $off()
  - 组件对象的原型对象的原型对象是Vue的原型对象: 组件对象可以直接访问Vue原型对象上的方法

- 实现任意组件间通信

- 编码实现:

  - 将入口js中的vm作为全局事件总线对象: 

 ```js
   beforeCreate() {
   	Vue.prototype.$bus = this
   }
 ```

  - 分发事件/传递数据的组件: this.$bus.$emit('eventName', data)

  - 处理事件/接收数据的组件: this.$bus.$on('eventName', (data) => {})



### 5. 组件间通信4: v-model

#### 1) 原生input上的本质:  

动态的value属性与原生input事件监听

```html
<input type="text" :value="name2" @input="name2=$event.target.value">
```

#### 2) 组件标签上的本质:  

动态的value属性与自定义input事件监听

```js
// 父组件: 
<CustomInput :value="name4" @input="name4=$event"/>

// 子组件
props: ['value']
<input type="text" :value="value" @input="$emit('input', $event.target.value)">
```

#### 3) 利用v-model能做什么?

- v-model不仅能实现原生标签上的**双向数据绑定**, 也能实现父子组件间数据**双向通信(同步)**
- 应用
  - 一般用于封装带表单项的复用性组件
  - elment-ui中: Input/CheckBox/Radio/Select等表单项组件都封装了v-model



### 6. 组件间通信5: sync 属性修饰符

#### 1) 理解本质: 

绑定一个自定义事件监听, 用来接收子组件分发事件携带的最新数据来更新父组件的数据

```html
<child :money.sync="total"/>
<Child :money="total" @update:money="total=$event"/>
```

#### 2) 利用sync能做什么呢?

- 在原有父向子的基础上加上子向父通信
- 应用
  - 常用于封装可复用组件(需要更新父组件数据)
    - v-model一般用于带表单项的组件
    - sync一般用于不带表单项标签的组件
  - element-ui中: Dialog就利用sync来实现组件的隐藏



### 7. 组件间通信6: $attrs与$listeners

#### 1) 理解:

- $attrs: 排除props声明, class, style的所有组件标签属性组成的对象

- $listeners: 级组件标签绑定的所有自定义事件监听的对象

- v-bind: 的特别使用

  ```html
  <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
  ```

- v-on: 的特别使用: 

  ```html
  <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
  ```

  一般: v-bind与$attrs配合使用, v-on与$listeners配合使用

#### 2) 使用它们能做什么呢?

- 在封装可复用组件时: HintButton
  - 从父组件中接收不定数量/名称的属性或事件监听
  - 在组件内部, 传递给它的子组件
- element-ui中: Input就使用了v-bind与$attrs来接收不定的属性传递给input

#### 3) 扩展双击监听:

- `@dblclick="add2"`
      绑定是自定义事件监听, 而el-button内部并没处理(没有绑定对应的原生监听, 没有分发自定义事件)
      双击时, 不会有响应

- `@dblclick.native="add2"`
      绑定的是原生的DOM事件监听, 最终是给组件的根标签a绑定的原生监听
      当双击a内部的button能响应, 因为事件有冒泡



### 8. 组件间通信7: $children与$parent

#### 1) 理解:

- $children: 所有直接子组件对象的数组, 利用它可以更新多个子组件的数据
- $parent: 父组件对象, 从而可以更新父组件的数据
- $refs: 包含所有有ref属性的标签对象或组件对象的容器对象

#### 2) 利用它们能做什么?

- 能方便的得到子组件/后代组件/父组件/祖辈组件对象, 从而更新其data或调用其方法
- 官方建议不要大量使用, 优先使用props和event
- 在一些UI组件库定义高复用组件时会使用$children和$parent, 如Carousel组件

#### 3) 扩展: mixin

- 多个组件有部分相同的js代码如何复用 ?
- 答: 利用vue的mixin技术实现
- 本质: 实现Vue组件的JS代码复用, 简化编码的一种技术



### 9. 组件间通信8: provide与inject

#### 1) 理解

```js
用来实现祖孙组件直接通信
在祖组件中通过provide配置向后代组件提供数据
在后代组件中通过inject配置来读取数据
```

#### 2) 注意:

```js
不太建议在应用开发中使用, 一般用来封装vue插件
provide提供的数据本身不是响应式的 ==> 父组件更新了数据, 后代组件不会变化
provide提供的数据对象内部是响应式的 ==> 父组件更新了数据, 后代组件也会变化
```

#### 3) 应用: 

```js
element-ui中的Form组件中使用了provide和inject
```



### 10. 组件间通信9: vuex

1. 实现任意组件间通信

2. Vuex 是一个专为 Vue 应用程序设计的管理多组件共享状态数据的 Vue 插件
   任意组件都可以读取到Vuex中store的state对象中的数据

   任意组件都可以通过dispatch()或commit()来触发store去更新state中的数据

   一旦state中的数据发生变化, 依赖于这些数据的组件就会自动更新



### 11. 作用域插槽slot-scope

#### 1) 什么情况下使用作用域插槽?

- 父组件需要向子组件传递标签结构内容

- 但决定父组件传递怎样标签结构的数据在子组件中

#### 2) 编码

```html
<!: 子组件: >
<slot :row="item" :$index="index"></slot>

<!: 父组件: >
<template slot-scope="{row, $index}">
	<span>{{$index+1}}</span> &nbsp;&nbsp;
	<span :style="{color: $index%2===1 ? 'blue' : 'green'}" >{{row.text}}</span>
</template>
```

#### 3) 应用

- 对于封装列表之类的组件特别需要
- element-ui中: Table组件中就用到了slot-scope


我的微信公众号: https://mp.weixin.qq.com/s?__biz=Mzk0ODI5NjkzMw==&mid=2247483655&idx=1&sn=d4413b68679e3aeab341cdaa3f860bc1&chksm=c3688c8df41f059b39a44ae97a4059847a79d1c777f98f47dd76ba27460892a02b5abff0b3fd#rd









