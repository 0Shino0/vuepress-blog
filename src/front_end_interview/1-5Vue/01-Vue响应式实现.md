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


