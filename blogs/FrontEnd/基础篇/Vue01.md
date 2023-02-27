---
title: Vue2
tags: 
    - Vue2
categories: 
    - FrontEnd
abbrlink: 43782
date: 2022-05-17 22:15:31
summary: vue2入门
description: vue2入门
---

## Vue基础
### 介绍
渐进式javaScript框架————[Vue](https://cn.vuejs.org/)

#### 与其他框架的关系
- 1)借鉴angular的**模板**和**数据绑定技术**
- 2)借鉴react的**组件化**和**虚拟DOM技术**

#### 扩展插件
- 1)`vue-cli`: vue脚手架
- 2)`vue-resource`(axios): ajax请求
- 3)`vue-router`: 路由
- 4)`vuex`: 状态管理
- 5)`vue-lazyload`: 图片懒加载
- 6)`vue-scroller`: 页面滑动相关
- 7)`mint-ui`: 基于vue的UI组件库(移动端)
- 8)`element-ui`: 基于vue的UI组件库(PC端)

#### 前置知识

```js
<div id="app">
    <!-- 这个挂载点一旦被VM挂载，那么内部就不是我们单纯的html，被称作模板 -->
    <!-- 模板是由两部分组成 html + js -->
    <!-- 模块语法   指令和差值 -->
    <!-- 指令是用来修改模板当中标签（属性   内容    样式） -->
    <!-- 差值是专门用来修改模板当中标签的内容值 {{}} -->
</div>
<script>
    // 1.引入vue.js
    // 2.在body当中必须写一个挂载点
    // 3.实例化一个Vue的实例化对象，和挂载点进行挂载
    vm对象
    const vm = new Vue({
        el:'#app',      //被称作挂载点  本质上是一个css的选择器字符串，标识着vm要和谁去绑定挂载
        data:{
            
        }
    })
    //	vm对象和传递的配置对象是不是同一个
 //	不是同一个对象
 //	数据代理：使用vm代理了配置对象当中data的数据，vm身上也有和data当中同名的属性模  板当中		访问的都是vm身上的属性
 //	vm代理了data当中的数据，找vm获取数据其实最终还是拿的data当中的属性值
 //	修改vm的数据其实本质是在修改data当中的数据
</script>
```

#### 01-差值
```js
    // 差值  {{}}
    <p>{{msg}}</p>
    <p>{{msg.toUpperCase()}}</p>
```

#### 02-数据的绑定
指令
**单向数据绑定**
- 功能: 指定变化的属性值
- 完整写法:  `v-bind:xxx='yyy'` //yyy会作为表达式解析执行
- 简洁写法:  `:xxx='yyy'`

**双向数据绑定**
- `v-model`

![MVVM](https://shinoimg.yyshino.top/img/MVVM.png)
一般情况下只针对表单类才使用双向数据绑定
    **MVVM** 说的就是双向数据绑定模型
        M代表model就是我们的**数据**    
        V代表的view 就是我们的**页面** 
        Vm代表的就是Vue的**实例化对象**
双向数据绑定：数据可以从data流向页面    页面的数据被更新，也会从页面流向data
    (当data的数据更改后，又会重新流向页面)

#### 2.5自动获取表单
示例
```js
<div id="app">
    <!-- 数据绑定的两种方法    简单来说就是点击文字可以让 input生效 -->
    <!-- 第一种 -->
    <!-- v-model默认收集的其实是你表单元素当中的value值 -->
    <label for="in1">用户名：</label>
    <input type="text" id="in1" v-model="userInfo.username">

    <!-- 第二种 -->
    <label>
        密码：<input type="text" v-model="userInfo.password">
    </label>

    <br>

    <!-- name相同时 单选框才会绑定在一组 -->
    <!-- v-model默认收集的其实是你表单元素当中的value值,因此需要给radio添加value属性 -->
    性别：
    <label>
        男：<input type="radio" name="sex" value="male" v-model="userInfo.gender">
    </label>
    <label>
        女：<input type="radio" name="sex" value="female" v-model="userInfo.gender">
    </label>

    <br>

    爱好：
    <label>
        ☀<input type="checkbox" value="sum" v-model="userInfo.favas">
    </label>
    <label>
        卍<input type="checkbox" value="N解" v-model="userInfo.favas">
    </label>
    <label>
        ♬<input type="checkbox" value="music" v-model="userInfo.favas">
    </label>

    <br>

    <!-- select 这个标签他的value值是选中的option的value值 -->
    城市：
    <select v-model="userInfo.cityId">
        <option :value="city.id" v-for="(city,index) in citys" :key="city.id">{{city.name}}</option>
    </select>

    <br>

    <textarea cols="30" rows="10" >

    </textarea>

    <br>

    <button type="">提交</button>
</div>
<script src="./js/vue.js"></script>
<script type="text/javascript" >
    new Vue({
        el:'#app',
        data:{

            citys:[
                {id:1,name:'北京'},
                {id:2,name:'上海'},
                {id:3,name:'深圳'},
            ],

            // 代表收集的数据
            userInfo:{
                username:"",
                password:"",
                gender:'',
                favas:[],        //favas 必须是一个数组 因为它需要收集多个数据
                cityId:1,
                desc:''
            }
        },
        methods:{
            submit(){
                axios({
                    url:'后台给你的接口地址',
                    method:'post',
                    data:this.userInfo
                })
            }
        },
    });
</script>
```



#### 03-计算属性和watch监视
- 1.计算属性
  - 1)在computed属性对象中定义计算属性的方法
  - 2)在页面中使用{{方法名}}来显示计算的结果
- 2.watch
  - 1)通过通过vm对象的$watch()或watch配置来监视指定的属性
  - 2)当属性变化时, 回调函数自动调用, 在函数内部进行计算

示例
```js
  <div id="app">
      姓：<input type="text" v-model="firstName">
      名：<input type="text" v-model="lastName">
      <!-- 第一种方法不用 使用js的拼接 数据在模板当中 this全部指向的是vm 只不过模板当中的this可以省略 -->
      <!-- <p>{{this.firstName + '-' + this.lastName}}</p> -->
      <p>{{firstName + '-' + lastName}}</p>
      <!-- 第二种方法不用 封装函数去写 -->
      <p>{{getFullName()}}</p>
      <!-- <p>{{getFullName()}}</p>
      <p>{{getFullName()}}</p> -->

      <!-- 第三种方法重要：计算属性 -->
      <p>{{fullName}}</p>
      <!-- <p>{{fullName}}</p>
      <p>{{fullName}}</p> -->

      <!-- 第四种方法：watch监视 -->
      <p>{{fullName2}}</p>
      
      <!-- 使用computed异步放回数据，不行 -->
      <p>{{fullName3}}</p>

      <!-- 使用watch异步更新数据，可行 -->
      <p>{{fullName4}}</p>

      <!-- 计算属性的set方法 -->
      <input type="text" v-model="fullName">

  </div>
  <script src="./js/vue.js"></script>
  <script type="text/javascript" >
  
      const vm = new Vue({
          el:'#app',
          data(){
              return {
                  firstName:'li',
                  lastName:'huazhou',
                  fullName2:'',        //监视的时候必须有这个属性,属性值是什么不确定,后面根据监视去给他赋值
                  fullName4:''
              }
          },
          methods:{
              getFullName(){
                  console.log('方法被调用了');
                  //在vue中所有的函数内部的this都指向vm，因为这些方法或者函数都会被vm代理
                  return this.firstName + '-' + this.lastName
              }
          },

          // 当我需要一个数据,但是这个数据我又没有，并且这个数据又目前计算而来的，那就要用计算属性
          computed:{
              // 计算属性的完整写法
              fullName:{
                  get(){
                      return this.firstName + '-' + this.lastName
                  },
                  // 当计算属性的数据能被修改时候使用（表单类元素在双向绑定计算属性值）
                  set(val){
                      // 目前没用
                      let arr = val.split('-')
                      this.firstName = arr[0]
                      this.lastName = arr[1]
                  },
              },
              // 如果计算属性当中只有get方法，那么可以简写为如下方法
              // 计算属性的j简写写法
                  // fullName(){
                  //     console.log('computed被调用了');
                  //     return this.firstName + '-' + this.lastName
                  // },

                  // computed内部只能是同步放回数据，不能异步放回数据 
                  fullName3(){
                      let a = null
                      setTimeout(()=>{
                        //函数体\
                        a = '嘿嘿'
                      },1000)
                      return a
                  }
          },

          //使用方法去获取姓名和使用计算属性去计算姓名的区别(贼重要)
          // 对于方法调用：
          // 你使用了几次方法调用，那么这个方法被调用了几次
          // 对于计算属性：
          // 你使用了不管多少次计算属性，计算属性的get方法只调用一次
          // 计算属性一定存在缓存，这些缓存使用多次的时候效率比使用方法高的多

          // 推荐重要
          watch:{
              firstName:{
                  // 这个对象是一个配置对象
                  // 当数据发生改变的时候会自动调用hander回调
                  handler(newVal,odlVal){

                      this.fullName2 = newVal + '-' + this.lastName

                      // 
                      setTimeout(()=>{
                        //函数体
                          this.fullName4 = '嘿嘿'
                      },1000)
                  },
                  immediate:true   //配置这个配置项的作用是无论监视到属性发生不发生变化，都要强制执行一次回调
              },
              // lastName:{

              // }
          },
      })

      // 第二种方式使用watch，不推荐
      vm.$watch('lastName',function(newVal,oldVal){
            //this决定是否可以使用箭头函数
            console.log(this);
            this.fullName2 = this.firstName + '-' + newVal
      })

      // computed是   计算属性,一般是没有这个值但是想要用这个值，那么根据已有的去做计算
      // watch   是   监视属性,监视的属性已经后期要更改的属性都没有必须有
      // 通常能用computed的场合都可以使用watch去解决，但是能用watch解决的computed不一定能解决
      // computed函数当中只能使用同步，而watch当中可以是同步也可以是异步  

      // 当我们去比较computed和watch的时候起始比较的是计算属性的get方法

      // 计算熟悉的set没什么说的，其实仅仅是对计算的属性添加了监视（当计算属性的值修改后会，调用set）

  </script>

```

#### 04-实现动态样式效果

- **class绑定**
```js 
    1):class='xxx'
    2)表达式是字符串: 'classA'
    3)表达式是对象: {classA:isA, classB: isB}
    4)表达式是数组: ['classA', 'classB']
```
- **style绑定**
```js
    1):style="{ color: activeColor, fontSize: fontSize + 'px' }"
    2)其中activeColor/fontSize是data属性
```

#### 04.5-过渡和动画
![transition原理图](https://shinoimg.yyshino.top/img/transition.png)

`xxx-enter-active`: 指定**显示**的transition
`xxx-leave-active`: 指定**隐藏**的transition
`xxx-enter`/`xxx-leave-to`: 指定**隐藏时**的样式

```vue
在进入/离开的过渡中，会有 6 个 class 切换。

    v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

    v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

    v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

    v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

    v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

    v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。


对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 <transition>，则 v- 是这些类名的默认前缀。如果你使用了 <transition name="my-transition">，那么 v-enter 会替换为 my-transition-enter。

v-enter-active 和 v-leave-active 可以控制进入/离开过渡的不同的缓和曲线
```
——————取自[Vue官网](https://cn.vuejs.org/v2/guide/transitions.html)


#### 05-条件渲染和列表渲染
##### 条件渲染
指令
```js
    v-if与v-else
    v-show
```
- 比较v-if与v-show
  - 3)如果需要频繁切换 v-show 较好
  -  4)当条件不成立时, v-if的所有子节点不会解析(项目中使用)

##### 列表显示
- 指令
```vue
    数组: v-for / index
    对象: v-for / key
```
- 列表的更新显示
   - 删除item
   - 替换item

- 高级用法(列表的**过滤**以及**排序**)


```js

<div id="app">
    <input type="text" placeholder="请输入过滤的条件" v-model="keyword">
    <ul>
        <li v-for="(persons,index) in newPersons" :key="persons.id">
            {{persons.id}} ---- {{persons.name}} ---- {{persons.age}}
        </li>
    </ul>
    <!-- <button @click="test(1)">按年龄升序</button>
    <button @click="test(2)">按年龄降序</button>
    <button @click="test(0)">按原样排序</button> -->

    <button @click="sortType = 1">按年龄升序</button>
    <button @click="sortType = 2">按年龄降序</button>
    <button @click="sortType = 0">按原样排序</button>
</div>
<script src="./js/vue.js"></script>
<script type="text/javascript" >
    
    Vue.config.productionTip = false;       //消除启动浏览器的生产提示信息
    const vm = new Vue({
        el:'#app',
        data:{
            keyword:'',
            persons:[
                {id:1,name:'zhaoliying',age:33},
                {id:2,name:'yanmi',age:34},
                {id:3,name:'qiwei',age:40},
                {id:4,name:'dilireba',age:20}
            ],
            // 排序首先要设计这个数据，标致用户点击到底是什么排序类型
            // 
            sortType:0      //0 -1 2  0代表原样  1代表升序  2代表降序
        },

        methods:{
            test(num){
                // 当函数当中如果只有一行代码，可以省略函数，直接把代码写在上面 
                this.sortType = num
            }
        },


        computed:{
            newPersons(){   //判断是否简写（数据是否可改）（是否需要set）
                let {keyword,persons,sortType} = this

                // 根据获取的两个计算新的数据
                //函数和方法最重要的是三要素
                //功能      从原数组当中过滤一个新的数组
                // 参数     回调函数（同步的回调） 
                            // 回调函数的参数：当前项的索引  当前遍历的数组
                            // 功能：对遍历的每一项执行回调函数
                            // 返回值：返回的是一个布尔值,(布尔值,条件表达式)，根据这个布尔值的真假来决定当前遍历的这项
                            // 要不要收集到数组中
                
                // 返回值      返回的是新的数组

                // 什么是运算符 什么是表达式
                // 参与运算的符号
                // 由变量或者常量和运算符组成的是在就是表达式   表达式都是有值的

                // 非箭头函数
                // let arr = persons.filter(function(item,index){
                //     return item.name.indexOf(keyword) !== -1
                // })

                // 箭头函数
                let arr = persons.filter(item => (item.name.indexOf(keyword) !== -1))
                
                // 在过滤的基础上排序完成再返回
                 //   if(sortType === 1){
                 //     return a.age - b.age
                 //   }else{
                 //       return b.age - a.age
                 //   }
                if(sortType !== 0){
                    arr.sort((a,b) => sortType === 1 ? a.age - b.age : b.age - a.age)
                }


                return arr;
            }
        }
    });
</script>

```

#### 06-深入了解Vue的响应式数据
- 在vue当中 一开始data中的属性数据都是响应式的
  - **数组的数据**   说的每个数组当中元素整体
  - **对象的数据**   说的对象的属性

Vue 当中处理响应式数据对于数组和对象是不一样的

- 1、如果修改的是对象的属性，随便改，都是响应式的。
因为Vue一开始就为data当中所有的属性通过`Object.defineProperty`添加了`get`和`set`

- 2、数组修改的时候，必须使用**特定的几个方法**才能是响应式，如果直接通过下标操作数组的数据，不是响应式式
  - 为什么数组的方法就可以响应式？
  - 此splice非原生的splice，vue当中给数组部分方法添加了修改页面的功能(重写方法)
```vue
    push() pop() shift() unshift() splice() sort() reverse()
```
  方法的语法以及使用并没有改变，简单的用法.可以参考我这篇文章 [js数组总结](https://0shino0.github.io/2022/05/13/javascript/)

**总结**
```vue
    面试高频点
    总结 vue在对待数组和对象的时候处理响应式是不一样的 
    对象是通过Object.defineProperty添加了get和set
    数组  重写数组的方法
```

#### 07-Vue事件相关
**绑定监听**
1)`v-on:xxx="fun"`
2)`@xxx="fun"`
3)`@xxx="fun(参数)"`
4)默认事件形参: `event`
5)隐含属性对象: `$event`

**事件修饰符**
1)`.prevent` : 阻止事件的默认行为 event.preventDefault()
2)`.stop` : 停止事件冒泡 event.stopPropagation()

**按键修饰符**
1)`.keycode` : 操作的是某个keycode值的键
2)`.keyName` : 操作的某个按键名的键(少部分)

示例
```js
<div id="app">
    <!-- 事件初始写法 -->
    <button v-on:click="test1">test1</button>

    <!-- 事件写法可以简写 -->
    <button @click="test1">test1</button>

    <!-- 事件回调函数如果我们想要传递自己的参数,那么默认的事件对象的参数会被覆盖 -->
    <button @click="test3('Kanade')">test3</button>

    <!-- 事件回调函数如果我们想要传递自己的参数,而且还想要用到事件对象，此时需要手动传递事件对象-->
    <button @click="test4('Kanade',$event)">test4</button>

    
    <!-- 事件的阻止冒泡 -->
    <div style="width:200px;height:200px;background:red" @click="outer">
        <div style="width:100px;height:100px;background:blue" @click.stop="inner"></div>
    </div>

    <!-- 事件当中取消浏览器默认行为 -->
    <a href="http://www.bilibili.com" @click.prevent="cancelDefault">点我去学习</a>
    
    <!-- 键盘事件都用在表单元素或者document身上 -->
    <input type="text" @keyup.enter="keyEnter">

</div>
<script src="./js/vue.js"></script>
<script type="text/javascript" >

    Vue.config.productionTip = false       //配置不用提示开发帮本的信息

    let vm = new Vue({
        el:'#app',
        data(){
            return{

            }
        },
        methods:{
            test1(event){
                console.log(event.target.innerText);
            },
            test3(name,event){
                console.log(name,event);
            },
            test4(name,event){
                console.log(name,event);
            },
            outer(){
                console.log('outer');
            },
            inner(){
                console.log('inner');
                // event.stopPropagation();
            },
            cancelDefault(event){

                // event.preventDefault();
            },
            keyEnter(event){
                //
                // if(event.keyCode === 13 ){
                //     console.log('回车了');
                // }
                console.log('回车了');
            }
        }
    });
</script>
```

#### 08-Vue生命周期
<img src="https://shinoimg.yyshino.top/img/lifecycle.png" alt="Vue生命周期" style="zoom:50%;" />

1)初始化显示
```vue
    beforeCreate()
    created()
    beforeMount()
    mounted()
```
2)更新状态: `this.xxx = value`
```vue
    beforeUpdate()
    updated()
```
3)销毁vue实例: `vm.$destory()`
```vue
    beforeDestory()
    destoryed()
```
常用钩子
1)`mounted()`: 发送**ajax请求**, **启动定时器**等**异步**任务
2)`beforeDestory()`: 做收尾工作, 如: **清除定时器**

示例
```js
    <div id="app">
        <p ref="pp" v-show="isShow">我爱你{{isShow?'刘亦菲':'杨幂'}}</p>
        <button @click="destory">点我卸载组件</button>
    </div>

    <script src="./js/vue.js"></script>
    <script type="text/javascript">

        new Vue({
            el:'#app',
            // template:'<p>{{isShow}}</p>',

            data(){
                return {
                    isShow:true,

                }
            },

            methods:{
                destory(){
                    this.$destroy()     //必须在某个特定的场合下 自己手动调用vm.$destroy()方法  才能进入销毁的阶段
                }
            },

            // 初始化阶段有两个钩子 beforeCreate    created
            beforeCreate(){
                // 初始化之前最大的特点是数据还没有代理好，打印不到
                console.log(this,this.isShow);
            },
            created(){
                // 初始化之后数据就可以被访问了
                console.log(this.isShow);
            },

            // 挂载阶段,挂在前和挂载后

            beforeMount(){
                console.log(this.$refs.pp);
            },

            mounted(){
                // 这个钩子用的是最多的
                // 一般用于发送ajax请求获取数据
                // 还用于开启定时器
                // 添加一些事件
                console.log(this.$refs.pp);

                this.timer = setInterval(()=>{
                  //函数体
                  this.isShow = !this.isShow

                },2000)
            },

            // 前两个阶段完成 代表初始化展示页面就完成了

            // 页面数据更新前和页面数据更新后 不是vm的数据
            beforeUpdate(){
                // 页面更新前 vm 的数据已经做了更新了，但此时数据还没有更新过来
                console.log(this.isShow,this.$refs.pp.innerHTML);
            },

            updated(){
                // 页面更新前 vm 的数据已经做了更新了，页面的数据也更新过来了
                console.log(this.isShow,this.$refs.pp.innerHTML);
            },

            // 销毁阶段
            beforeDestroy(){
                // 销毁之前
                // 一般这个钩子用的也是比较频繁,通常是在销毁前解绑事件监听  取消定时器等操作
                clearInterval(this.timer)   //定时器管理模块会把这个定时器给停止，但是并没有把这个编号从timer当中销毁
                this.timer = null
            },

            // 销毁之后
            destroyed(){
                // 没什么用
                console.log('vm销毁了');
            },
        })
        
    </script>
```

#### 09-Vue可复用性和组合

##### Vue的内置指令以及自定义指令
**常用内置指令**
`v-text` : 更新元素的 textContent
`v-html` : 更新元素的 innerHTML
`v-if` : 如果为true, 当前标签才会输出到页面
`v-else`: 如果为false, 当前标签才会输出到页面
`v-show` : 通过控制display样式来控制显示/隐藏
`v-for` : 遍历数组/对象
`v-on` : 绑定事件监听, 一般简写为@
`v-bind` : 强制绑定解析表达式, 可以省略v-bind
`v-model` : 双向数据绑定
`ref` : 指定唯一标识, vue对象通过$els属性访问这个元素对象
`v-cloak` : 防止闪现, 与css配合: [v-cloak] { display: none }


##### 过滤器
可以用全局方法 `Vue.filter()` 注册一个自定义过滤器，它接收两个参数：**过滤器 ID** 和**过滤器函数**。过滤器函数以值为参数，返回转换后的值

##### 自定义指令
全局注册
```js
    // 注册一个全局自定义指令 `v-focus`
    Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
    })
```

局部注册
```js
    directives: {
    focus: {
        // 指令的定义
        inserted: function (el) {
        el.focus()
        }
    }
    }
```











#### 10-Vue Cli引言

定义非单文件组件
```js
// 全局注册
    // 1、定义组件  (定义的组件之后都是全局组件)   本质上是根据一个配置对象定义返回一个函数，后期是当构造函数使用
    // 麻烦写法
    const VueComponent = Vue.extend({
        // 组件配置对象和Vue配置对象很相似，除了el
        data(){
            // 组件的配置对象当中data只能写函数
            return{
                count:0
            }
        },

        data:{
            // 组件当中不能写对象
            count:0
        },
        template:'<div><h2>I love you </h2><button @click="count++">你爱了{{count}}次</button></div>'
    })
    // 3.使用


    // 定义组件的简单写法（定义带注册）
    // 1、定义带注册
    // 本质上 内部还是使用extend生成一个函数，然后再去和mybutton绑定
    Vue.component('mybutton',{
        // 组件配置对象和Vue配置对象很相似，除了el
        data(){
            // 组件的配置对象当中data只能写函数
            return{
                count:0
            }
        },
        // data:{                                       
        //     // 组件当中不能写对象
        //     count:0
        // },
        template:'<div><h2>I love you </h2><button @click="count++">你爱了{{count}}次</button></div>'
    })

    // 2、使用


    // 一般情况下  我们定义的都是全局组件   因为这个组件只在一个地方用到
    // 但是当一个组件被多个组件都使用的时候，我们定义为全局组件比较方便

// 局部注册
// 在vm组件中注册

```
→→→→→[Vue脚手架](https://yyshino.top/posts/4795.html)