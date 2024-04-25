---
# 这是文章的标题
title: 手写reduce
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



### MDN参考

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce



#### [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#语法)

```
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

#### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#参数)

- [`callbackFn`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#callbackfn)

  为数组中每个元素执行的函数。其返回值将作为下一次调用 `callbackFn` 时的 `accumulator` 参数。对于最后一次调用，返回值将作为 `reduce()` 的返回值。该函数被调用时将传入以下参数：[`accumulator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#accumulator)上一次调用 `callbackFn` 的结果。在第一次调用时，如果指定了 `initialValue` 则为指定的值，否则为 `array[0]` 的值。[`currentValue`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#currentvalue)当前元素的值。在第一次调用时，如果指定了 `initialValue`，则为 `array[0]` 的值，否则为 `array[1]`。[`currentIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#currentindex)`currentValue` 在数组中的索引位置。在第一次调用时，如果指定了 `initialValue` 则为 `0`，否则为 `1`。[`array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#array)调用了 `reduce()` 的数组本身。

- [`initialValue`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#initialvalue) 可选

  第一次调用回调时初始化 `accumulator` 的值。如果指定了 `initialValue`，则 `callbackFn` 从数组中的第一个值作为 `currentValue` 开始执行。如果没有指定 `initialValue`，则 `accumulator` 初始化为数组中的第一个值，并且 `callbackFn` 从数组中的第二个值作为 `currentValue` 开始执行。在这种情况下，如果数组为空（没有第一个值可以作为 `accumulator` 返回），则会抛出错误。

#### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#返回值)

使用“reducer”回调函数遍历整个数组后的结果。

#### [异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#异常)

- [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

  如果数组为空且未提供 `initialValue`，则会抛出异常。



### 手写实现

```js

/**
 * 手写reduce
 * @param {*} callbackFn 
 * @param {*} initialValue 
 * @returns 
 */
Array.prototype.myReduce = function(callbackFn, initialValue){
    let hasInitialValue = initialValue !== undefined;
    // 初始化
    // const [fn,...args] = [...arguments]
    const arr_ = this
    const length = arr_.length

    if(length === 0){
        if(hasInitialValue){
            return initialValue
        }else {
            throw TypeError("Reduce of empty array with initial value");
        }
    }

    let accumulator = hasInitialValue ? initialValue : this[0];
    let i = hasInitialValue ? 0 : 1;

    for(i;i<length;i++){
        accumulator = callbackFn(accumulator,arr_[i],arr_)
    }

    return accumulator;
}

const a = new Array(1,2,3)
console.log(a.myReduce((a,b) => {return a+b})) // 6
```

