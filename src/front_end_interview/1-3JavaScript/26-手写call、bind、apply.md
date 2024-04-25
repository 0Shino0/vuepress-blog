---
# 这是文章的标题
title: 手写call、apply、bind
author: yyshino
# 设置写作时间
date: 2024-4-25
# summary: 算法指标
# description: 算法指标
category:
  - FrontEnd
tag:
  - JS
  - 手写系列
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
---





### 手写call、apply、bind

#### 总结

- 三者都可以改变函数的`this`对象指向
- 三者第一个参数都是`this`要指向的对象，如果如果没有这个参数或参数为`undefined`或`null`，则默认指向全局`window`
- 三者都可以传参，但是`apply`是数组，而`call`是参数列表，且`apply`和`call`是一次性传入参数，而`bind`可以分为多次传入
- `bind`是返回绑定this之后的函数，`apply`、`call` 则是立即执行



#### call

定义：`call`方法的第一个参数也是`this`的指向，后面传入的是一个参数列表

跟`apply`一样，改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```js
Function.prototype.call1 = function(){
	// 初始化
    const [context,...args] = [...arguments]
    // 在传入的对象上设置属性为待执行函数
    context.fn = this
    // 执行函数
    const res= context.fn(args)
    // 删除属性
    delete context.fn
    // 返回执行结果
    return res
}
```



#### apply

定义： 调用一个具有给定 this 值的函数，及以一个数组的形式提供的参数。

改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次

```js
Function.prototype.apply1 = function (context, args) {
    // 给传入的对象添加属性，值为当前函数
    context.fn = this;
	
    // 判断第二个参数是否存在，不存在直接执行，否则拼接参数执行
    let res = !args ? context.fn() : context.fn(...args)
    
    // 删除新增属性
    delete context.fn
    
    return res
}
```



#### bind

定义：创建一个新的函数，在 bind 被调用时，这个新函数的 this 被指定为 bind()的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```js
Function.prototype.bind1 = function (context) {
	// 将当前函数的this存放起来
	var _self = this
    // 绑定bind传入的参数，从第二个开始
    var args = Array.prototype.slice.call(arguments,1);
    
    // 声明一个空的构造函数
    function fNOP(){}
    
    var fBound = function(){
        // 绑定bind返回新的函数，执行所带的参数
        const bindArgs = Array.prototype.slice.apply(arguments)
        // 合并数组
        args.push.apply(args.bindArgs)
        // 普通函数 this指向window
        // 作为构造函数，this指向实例
        return _self.apply(this instanceof fNOP ? this : context,args)
    }
    
    if(this.prototype){
        // 修改返回函数的prototype为绑定函数的prototype，实例就可以继承绑定函数的原型中的值
        fNOP.prototype = this.prototype
    }
    
    fBound.prototype = new fNOP();
    
    return fBound;
}
```

