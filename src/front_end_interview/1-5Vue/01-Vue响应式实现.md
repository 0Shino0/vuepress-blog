---
# 这是文章的标题
title: Vue响应式实现
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: file
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: yyshino
# 设置写作时间
date: 2024-04-24
# 一个页面可以有多个分类
category:
  - FrontEnd
# 一个页面可以有多个标签
tag:
  - JS
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---





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
   2. 第二个参数 handler: TargetType.COLLECTION = 2， targetType = 1， 所以 handler为 baseHandlers
   3. 那这个 baseHandlers 是什么呢？

4. 在 reactive 方法中可知， baseHandlers 是触发 createReactiveObject 传递的第三个参数: mutableHandlers
5.  而 mutableHandlers 则是 packages/reactivity/src/baseHandlers.ts 中导出的对象
6.  所以我们到 packages/reactivity/src/baseHandlers.ts 中，为它的 get (createGetter)和 set (createSetter) 分别打入一个断点
7.  我们知道 get 和 set 会在 取值 和 赋值 时触发，所以此时这两个断点 不会执行
8.  最后 reactive方法内执行了 proxyMap.set(target, proxy)方法
9.  最后返回了代理对象。
10.  那么至此 reactive 方法执行完成。

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

 

### 参考

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect