---
# 这是文章的标题
title: 手写Promise相关方法
author: yyshino
# 设置写作时间
date: 2024-4-19
# summary: 算法指标
# description: 算法指标
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
---

### Promise.all

特点：

- Promise.all() 方法接收一个promise的iterable类型（MDN）
- 只返回一个promise实例
- 当传入的参数promise全部成功时，最后的结果才会成功（成功的结果是所有的promise的成功的结果组成的数组），只要有一个promise失败，all返回的实例就是一个失败的promise（失败的结果是传入的参数中的第一个失败的promise的结果）

```js
let p1 = new Promise(resolve => {
    setTimeout(resolve, 200, 1)
});
let p2 = new Promise((resolve, reject) => reject(2));
let p3 = 3;
console.log(Promise.all([p1, p2, p3]));//all方法
let myAll = function(parr) {
    let result = [],//最后成功的结果
        count = 0,//累加器，与len比较判断是否全部成功了
        len = parr.length;
    return new Promise((resolve, reject) => {
        for (let p of parr) {// 依次测试传入的参数（转化为promise）是否是成功的
            Promise.resolve(p).then(res => {
                result[count] = res;// 成功就加入到结果中
                count++;// 累加器加一
                if (count == len) {// 如果相等，说明都成功了，可以走成功resolve
                    resolve(res);
                }
            }, err => {
            // 只要有一个失败了，直接走失败reject
                reject(err);
            })
        }
    })
}
console.log(myAll([p1, p2, p3]));
```





### Promise.race（比比谁先改变状态！）

###### 特点：

1. **传入的参数和返回的结果形式和all方法一样**
2. **区别：只要传入的promise有一个状态改变了，最后的结果就会立即改变**
3. **例如有一个成功，直接走race的resolve，如果有一个失败，直接走reject**



```js
let p1 = new Promise(resolve => {
    // setTimeout(resolve, 0, 1)//大家猜猜如果是这句，最后是什么结果
    resolve(1);
});
let p2 = new Promise((resolve, reject) => reject(2));
let p3 = 3;
let myRace = function(parr) {
    return new Promise((resolve, reject) => {
        for (let p of parr) {//一次检查
            Promise.resolve(p).then(resolve, reject);//只要是状态改变了就直接走对应的函数
            //也可以是这样
            //Promise.resolve(p).then(res => {
          	//  	resolve(res);
            //},err=>{
			//	reject(err);
			//});
        }
    })
}
console.log(myRace([p1, p2, p3]));
```



### Promise.any

特点：
几乎和all方法“一样”
区别：all是所有都成功最后才成功,一个失败了，最后就失败，allSettled是只要有一个成功了最后就是成功了，遇到失败的还是继续监测，直到找到成功的或者检查完。
好理解一点就是，all方法类似于Array的every方法，any类似于Array的some方法



### Promise.allSettled

特点：
传参和返回值和all方法一样

返回值都是已成功状态（不论传入的是已成功还是已失败的promise）

一旦所指定的 promises 集合中每一个 promise 已经完成，无论是成功的达成或被拒绝，未决议的 Promise将被异步完成。那时，所返回的 promise 的处理器将传入一个数组作为输入，该数组包含原始 promises 集中每个 promise 的结果。
对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。如果值为 rejected，则存在一个 reason 。value（或 reason ）反映了每个 promise 决议（或拒绝）的值。



### Promise.prototype.finally

特点：
在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式。
避免了同样的语句需要在then()和catch()中各写一次的情况。



### 参考

```
https://blog.csdn.net/weixin_45774485/article/details/122462081
```

