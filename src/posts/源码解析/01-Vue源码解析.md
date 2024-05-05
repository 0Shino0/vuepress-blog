---
# 这是文章的标题
title: Vue3源码解析
# 设置作者
author: yyshino
# 设置写作时间
date: 2024-05-05
# 一个页面可以有多个分类
category:
  - FrontEnd
tag:
  - Vue
  - 源码分析
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---



## Vue响应式



### 原理

#### `Proxy`与`Object.defineProperty`

1. `Proxy` 
   1. `Proxy` 将代理一个对象（被代理对象），得到一个新的对象（代理对象），同时拥有被代理对象中所有的属性。
   2. 当想要修改对象的指定属性时,我们应该使用代理对象进行修改
   3. 代理对象 的任何一个属性都可以触发 `handler` 的 `getter` 和 `setter`
2. `Object.defineProperty`
   1. `Object.defineProperty` 为指定对象的指定属性设置属性描述符
   2. 当想要修改对象的指定属性时，可以使用原对象进行修改
   3. 通过属性描述符，只有 被监听 的指定属性，才可以触发 `getter` 和 `setter`



所以当 vue3 通过 Proxy 实现响应性核心 API 之后，vue 将 不会 再存在新增属性时失去响应性的问题。



#### `Reflect`

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect



#### `Reflect`+`Proxy`

当我们期望监听代理对象的 getter 和 setter 时,不应该使用 target[key] ,因为它在某些时刻（比如 fullName）下是不可靠的。而 应该使用 Reflect ，借助它的 get 和 set 方法，使用receiver （proxy 实例） 作为 this，已达到期望的结果（触发三次 getter）

最后如果我们想要“安全”的使用Proxy,还需要配合Reflect一起才可以,因为一旦我们在被代理对象的内部，通过 this 触发 getter 和 setter 时，也需要被监听到。



### Reactive的响应式 源码实现

核心

1. 创建 proxy
1. 收集 effect 的依赖
1. 触发收集的依赖



#### reactive方法

1. 触发 reactive 方法
2. 创建reactive对象: return createReactiveObject
3. 进入 new Proxy
   1.  第一个参数 target：为传入的对象
   2.  第二个参数 handler: TargetType.COLLECTION = 2， targetType = 1， 所以 handler为 baseHandlers
   3.  那这个 baseHandlers 是什么呢？

4. 在 reactive 方法中可知， baseHandlers 是触发 createReactiveObject 传递的第三个参数: mutableHandlers
5. 而 mutableHandlers 则是 packages/reactivity/src/baseHandlers.ts 中导出的对象
6. 所以我们到 packages/reactivity/src/baseHandlers.ts 中，为它的 get (createGetter)和 set (createSetter) 分别打入一个断点
7. 我们知道 get 和 set 会在 取值 和 赋值 时触发，所以此时这两个断点 不会执行
8. 最后 reactive方法内执行了 proxyMap.set(target, proxy)方法
9. 最后返回了代理对象。
10. 那么至此 reactive 方法执行完成。

由以上执行逻辑可知，对于 reactive 方法而言，其实做的事情非常简单：

1. 创建了 proxy
2. 把 proxy 加到了 proxyMap 里面
3. 最后返回了 proxy



#### effect

1. 在 packages/reactivity/src/effect.ts 第 170 行可以找到 effect 方法，在这里给一个断点
2. 执行 new ReactiveEffect(fn)，其中的 fn 就是我们传入的匿名函数：
   1. 这里涉及到了一个类 ReactiveEffect
   2. 查看该类可知，内部实现了两个方法：
      1. run
      2. stop
   3. 我们分别为这两个方法 增加断点
3. 代码继续进行
4. 可以发现执行了 run 方法，进入方法内部：
   1. 执行 activeEffect = this，赋值完成之后, activeEffect为传入的匿名函数fn
   2. 然后执行 return this.fn（） 触发 fn 函数
   3. 我们知道 fn 函数其实就是 传入的匿名函数，所以document.querySelector('#app').innerText = obj.name
5. 但是大家不要忘记，obj 是一个 proxy，obj.name会 触发 getter，所以接下来我们就会进入到 mutableHandlers 的 createGetter 中
   1. 在该代码中,触发了该方法 const res = Reflect.get(target, key, receiver)
   2. 此时的 res 即为 张三
   3. 注意：接下来触发了 track 函数，该函数是一个重点函数，track 在此为 跟踪 的意思，我们来看它内部都做了什么：
      1. 在 4-1 步中，为 activeEffect 进行了赋值，我们知道 activeEffect 代表的就是fn 函数
      2. 执行代码可知，rack 内部主要做了两件事情：
         1. 为 targetMap 进行赋值，targetMap 的组成比较复杂：
            1. key; target
            2. value: Map
               1. key: key
               2. value: Set
         2. 最后执行了 trackEffects(dep, eventInfo)1,其中eventInfo是一个对象,内部包含四个属性:其中 effect即为activeEffect 即 fn 函数
         3. 在 trackEffects 函数内部，核心也是做了两件事情：
            1. 为dep (targetMap[target][key]得到的Set实例) 添加了activeEffect函数
            2. 为activeEffect函数的静态属性deps，增加了一个值dep
            3. 即：建立起了dep和activeEffect的联系
   4. 那么至此，整个 track 的核心逻辑执行完成
   5. 我们可以把整个 track 的核心逻辑说成：收集了 activeEffect（即： fn)
6. 最后在 createGetter 函数中返回了 res （即：张三)
7. 至此，整个 effect 执行完成

由以上逻辑可知，整个 effect 主要做了3 件事情：

1. 生成ReactiveEffect实例
2. 触发fn方法，从而激活getter
3. 简历了targetMap和activeEffect之间的联系
   1. dep.add(activeEffect)
   2. activeEffect.deps.push(dep)



那么至此:页面中即可展示 obj.name ,但是不要忘记,等待两秒之后,我们会修改 obj.name 的值,我们知道,这样会触发 setter ,那么我们接下来来看 setter中又做了什么呢?

1. 两秒之后触发 setter ,会进入到 packages/reactivity/src/baseHandlers.ts 中的的createSetter 方法中
2. 创建变量: oldValue =张三
3. 创建变量: value=李四、
4. 执行 const result = Reflect,set(target, key, value, receiver），即： 修改了 obj 的值为“李四”I
5. 触发: trigger(target, TriggerOpTypes.SET, key, value, oldvalue),此时各参数的值为：
6. trigger 在这里为 触发 的意思，那么我们来看 trigger 内部做了什么?
   1. 首先执行： const depsMap = targetMap.get(target），其中 targetMap 即我们在track 函数中，保存 activeEffect 的 targetMap
   2. 然后代码执行到: deps.push(depsMap.get(key))。 depsMap.get(key)获取到的即为之前保存的 activeEffect，即 fn 函数
   3. 然后触发 triggerEffects(deps[0]，eventInfo)，我们来看 triggerEffects 中做了什么：
      1. 声明常量： const effects = isAray(dep) ? dep : [...dep]，此时的 effects 保存的为 fn 的集合
      2. 遍历 effects，执行：triggerEffect(effect， debuggerEventExtraInfo) 方法，那么我们来看 triggerEffect 做了什么
         1. 执行 effect.run(）方法，已知： effect 是一个ReactiveEffect 类型的对象，则run 方法会触发 ReactiveEffect 的 run ,那么我们接下来来看 这一次 进入run 方法时，内部做了什么？
            1. 首先还是为activeEffect = this赋值,但是要注意:此时的this不再是一个 fn，而是一个复杂对象：
            2. 最后执行this.fn() 即：effect时传入的匿名函数
            3. 至此，fn执行，意味着：document.querySelector('#app').innerText = 李四，页面将发生变化
      3. triggerEffects 完成
   4. triggerEffects 完成
7. trigger 完成
8. setter回调完成

由以上逻辑可知，整个setter主要做了2件事情：

1. 修改obj的值
2. 触发targetMap下保存的fn函数



![image-20240425162252067](https://shinoimg.yyshino.top/img/image-20240425162252067.png)

 

### Ref 复杂数据类型的响应性

1. 对于ref函数,会返回RefImpl类型的实例
2. 在该实例中，会根据传入的数据类型进行分开处理
   1. 复杂数据类型:转化为reactive返回的proxy实例
   2. 简单数据类型：不做处理
3. 无论我们执行obj.value.name还是obj.value.name = xxx本质上都是触发了get value
4. 之所以会进行 响应性 是因为 obj.value 是一个 reactive 函数生成的 proxy



#### 总结

那么到这里我们就已经完成了 ref 响应性函数的构建，那么大家还记不记得开篇时所问的三个问题：

1. ref 函数是如何进行实现的呢？
2. ref 可以构建简单数据类型的响应性吗？
3. 为什么 ref 类型的数据，必须要通过 .value 访问值呢？

大家现在再次面对这三个问题，是否能够回答出来呢？

1. 问题一: ref 函数是如何进行实现的呢？
   1. ref 函数本质上是生成了一个 RefImpl 类型的实例对象,通过 get 和 set 标记处理了value 函数
2. 问题二： ref 可以构建简单数据类型的响应性吗？
   1. 是的。 ref 可以构建简单数据类型的响应性
3. 问题三：为什么 ref 类型的数据，必须要通过 .value 访问值呢？
   1. 因为 ref 需要处理简单数据类型的响应性，但是对于简单数据类型而言，它无法通过proxy 建立代理。
   2. 所以vue通过get value() 和 set value() 定义了两个属性函数，通过主动触发这两个函数（属性调用）的形式来进行**依赖收集**和**依赖触发**



### `computed` && `watch`

#### computed

debugged调试，具体流程

1. 整个事件有obj.name开始
2. 触发 proxy 实例的 setter
3. 执行 trigger，第一次触发依赖
4. 注意，此时 effect 包含调度器属性，所以会触发调度器
5. 调度器指向`ComputedRefImpl`的构造函数中传入的匿名函数
6. 在匿名函数中会：再次触发依赖
7. 即:两次触发依赖
8. 最后执行：computed中的回调函数



### 总结

接下来我们来总结一下计算属性实现的重点：

1. 计算属性的实例,本质上是一个ComputedRefImpl的实例
2. ComputedRefImpl 中通过 dirty 变量来控制 run 的执行和 triggerRefValue 的触发
3. 想要访问计算属性的值,必须通过 .value ,因为它内部和 ref 一样是通过get value来进
4. 每次 .value 时都会触发 trackRefValue 即：收集依赖
5. 在依赖触发时，需要谨记，先触发 computed 的 effect ，再触发非 computed 的 effect行实现的



## Vue运行时核心





### 基础概念



虚拟DOM

>虚拟 DOM (Virtual DOM，简称 VDOM) 是一种编程概念，意为将目标所需的 UI 通过数据结构“虚拟”地表示出来，保存在内存中，然后将真实的 DOM 与之保持同步。这个概念是由 [React](https://reactjs.org/) 率先开拓，随后被许多不同的框架采用，当然也包括 Vue。



> [渲染管线](https://cn.vuejs.org/guide/extras/rendering-mechanism.html#render-pipeline)
>
> 从高层面的视角看，Vue 组件挂载时会发生如下几件事：
>
> 1. **编译**：Vue 模板被编译为**渲染函数**：即用来返回虚拟 DOM 树的函数。这一步骤可以通过构建步骤提前完成，也可以通过使用运行时编译器即时完成。
> 2. **挂载**：运行时渲染器调用渲染函数，遍历返回的虚拟 DOM 树，并基于它创建实际的 DOM 节点。这一步会作为[响应式副作用](https://cn.vuejs.org/guide/extras/reactivity-in-depth.html)执行，因此它会追踪其中所用到的所有响应式依赖。
> 3. **更新**：当一个依赖发生变化后，副作用会重新运行，这时候会创建一个更新后的虚拟 DOM 树。运行时渲染器遍历这棵新树，将它与旧树进行比较，然后将必要的更新应用到真实 DOM 上去。
>
> ... 



### h函数

查看 `packages/runtime-core/src/renderer.ts` 中第 354 patch 方法的代码可知，Vue 总共处理了：

1. Text: 文本节点
2. Comment：注释节点
3. Static: 静态 DOM 节点
4. Fragment:包含多个根节点的模板被表示为一个片段(fragment)括
5. ELEMENT: DOM 节点Imooc
6. COMPONENT：组件
7. TELEPORT:新的内置组件
8. SUSPENSE：新的 内置组件
9. ...



在vue中，组件本质上是 一个对象或一个函数（Function Component）



#### `shapeFlag`





## 组件的设计原理与渲染





### 简介



组件本身是一个对象(仅考虑对象的情况,忽略函数式组件)。它必须包含一个render函数，该函数决定了它的渲染内容。

如果我们想要定义数据，那么需要通过 data 选项进行注册。 data 选项应该是一个 函数，并且renturn一个对象，对象中包含了所有的响应性数据。

除此之外，我们还可以定义例如 生命周期、计算属性、 watch 等对应内容。





### 无状态基础挂着逻辑组件

> Vue 中通常把 状态 比作 数据 的意思。我们所谓的无状态，指的就是 无数据 的意思。



## Diff算法核心实现



### 前置知识

那么到目前为止，我们已经完成了 4 种 diff 场景的对应处理，经过前面的学习我们可以知道，对于前四种 diff 场景而言， diff 的处理本质上是比较简单的:

1. 自前向后的 diff对比：主要处理从前到后的相同 VNode。例如： (a b) c 对应(a b) d e
2. 自后向前的 diff对比:主要处理从后到前的相同VNode。例如: a (b c)对应d e (b c)
3. 新节点多余旧节点的 diff 对比：主要处理新增节点。
4. 旧节点多余新节点的 diff 对比：主要处理删除节点。



但是仅靠前四种场景的话,那么是无法满足实际开发中的所有更新逻辑的。所以我们还需要最关键的一种场景需要处理，那就是 乱序场景。



#### 最长递增子序列

1. 什么是最长递增子序列
2. 最长递增子序列在diff 中的作用是什么



>维基百科 -最长递增子序列
>
>在一个给定的数值序列中，找到一个子序列，使得这个子序列元素的数值依次递增，并且这个子序列的长度尽可能地大。





### 乱序下的diff比对

1. diff指的就是:添加、删除、打补丁、移动这四个行为
2. 最长递增子序列 是什么，如何计算的，以及在 diff 中的作用
   - 
3. 场景五的乱序，是最复杂的场景，将会涉及到 添加、删除、打补丁、移动 这些所有场景。



### 总结

1. 首先我们讲解了dom、节点、节点树和虚拟DOM,虚拟节点之间的概念。
2. 然后我们说明了 render 函数和 h 函数各自的作用。我们知道 h 函数可以得到一个 vnode ，而 render 函数可以渲染一个 vnode
3. 接下来我们讲解了挂载、更新、卸载,这三组概念。也知道了针对于不同的vnode节点,那么他们的挂载、更新、卸载方式也都是不同的。
4. 下面我们讲解了组件,我们知道组件本质上是一个对象(或函数) ,组件的挂载本质上是render 函数的挂载。
5. 组件内部维护了一个effect对象,以达到响应性渲染的效果。
6. 而针对于 setup 函数而言，它在实现上反而更加简单，因为我们不需要改变 this 指向了。
7. 结合所学，新旧节点的所有挂载和更新情况，可以被分为九种场景：
   1. 旧节点为纯文本时：
      1. 新节点为纯文本：执行文本替换操作
      2. 新节点为空:删除旧节点
      3. 新节点为数组：清空文本，添加多个新节点2. 
   2. 旧节点为空时：
      1. 新节点为纯文本：添加新节点
      2. 新节点为空：不做任何事情
      3. 新节点为数组时：添加多个新节点
   3. 旧节点是数组时：
      1. 新节点为纯文本：删除所有旧节点，添加新节点
      2. 新节点为空：删除所有旧节点
      3. 新节点为数组时：进行 diff 操作
8. 最后的 diff 分为 5 种场景，最后一种场景还是比较复杂的。



## 编译时核心设计原则

###  前言





#### 模版编译的核心流程

正常流程

![image-20240503142131784](https://shinoimg.yyshino.top/img/image-20240503142131784.png)



Vue中

![image-20240503142248493](https://shinoimg.yyshino.top/img/image-20240503142248493.png)







### 框架实现

接下来我们通过parseChildren方法处理所有的子节点,整个处理的过程分为两大块:

1. 构建有限自动状态机解析模板
2. 扫描 token 生成 AST 结构



### 总结

我们知道，整个 compiler 的过程，就是一个把：源代码（template）转化为目标代码（render函数）的过程。

在这个过程中，主要经历了三个大的步骤：

1. 解析( parse ) template模板,生成AST
2. 转化(transform) AST,得到JavaScript AST
3. 生成（generate） render 函数这

三步是非常复杂的一个过程，内部的实现涉及到了非常复杂的计算方法，并且会涉及到一些我们现在还没有了解过得概念，比如：自动状态机。

这些内容我们都会放到下一章进行讲解，本章我们只需要知道 compiler 的作用，以及三大步骤即可都在干什么即可。



## 构建compile编译器





### 总结

我们知道整个编辑器的处理过程分成了三部分：

1. 解析模板 template 为 AST1,在这一步过程中,我们使用了
   1. 有限自动状态机解析模板得到了 tokens
      1. 通过扫描 tokens 最终得到了`AST王
2. 转化 AST 为 JavaScript AST
   1. 这一步是为了最终生成 render 函数做准备
   2. 利用了深度优先的方式，进行了自下向上的逐层转化
3. 生成 render 函数
   1. 这一步是最后的解析环节,我们需要对JavaScript AST进行处理,得到最终的render函数



## 深入编辑器处理逻辑





## 参考

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
- https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model
- https://cn.vuejs.org/guide/extras/rendering-mechanism.html#virtual-dom

