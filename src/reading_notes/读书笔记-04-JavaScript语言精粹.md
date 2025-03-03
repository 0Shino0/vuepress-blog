---
title: 读书笔记-04-JavaScript语言精粹
tags: 
  - JS
categories: 
  - FrontEnd
date: 2023-04-02 10:42:25
summary: 读书笔记-04-JavaScript语言精粹
description: 读书笔记-04-JavaScript语言精粹
---

## JavaScript语言精粹

## 简介

<img src="https://shinoimg.yyshino.top/img/202304021041174.png" alt="JavaScript语言精粹"  />

## 对象 Object

![对象 Object](https://shinoimg.yyshino.top/img/202304012300721.png)



## 函数 Function

![函数 Function](https://shinoimg.yyshino.top/img/202304012300935.png)



## 继承 Inheritance

![继承 Inheritance](https://shinoimg.yyshino.top/img/202304012300087.png)

## 数组 Array

![数组 Arrays](https://shinoimg.yyshino.top/img/202304020913552.png)

## 正则表达式 Regular Expressions

![正则表达式 Regular Expressions](https://shinoimg.yyshino.top/img/202304020914072.png)

## 方法 Methods

![方法 Methods](https://shinoimg.yyshino.top/img/202304020945938.png)

### 如何实现

### Array

#### array.pop( )

```javascript
// pop可以像这样实现：
Array.method('pop',function(){
    return this.splice()(this.length - 1,1)[0]
})
```



#### array.push(item...)

```javascript
// push可以像这样实现
Array.method('push',function(){
    this.splice.apply(
    	this,
[this.length,0].concat(Array.prototype.slice.apply(arguments)))
    return this.length;
})
```



#### array.shift()

```javascript
Array.method('shift',function(){
    return this.splice(0,1)[0];
})
```



#### array.splice(start, deleteCount, item...)

```javascript
// splice可以像这样实现：
Array.method('splice',function(start,deleteCount){
    var max = Math.max,
        min = Math.min,
        delta,
        element,
        insertCount = max(argments.length - 2, 0),
        k = 0,
        len = this.length,
        new_len,
        result = [],
        shift_count;
    
    start = start || 0;
    if(start < 0){
        start += len;
    }
    start = max(min(start,len),0);
    deleteCount = max(min(typeof deleteCount === 'number' ? deleteCount : len,len - start),0)
    delta = insertCount - deleteCount;
    new_len = len + delta;
    while(k < deleteCount){
        element = this[start + k];
        if(element !== undefined){
            result[k] = element;
        }
        k += 1;
    }
    shift_count = len - start - deleteCount;
    if(delta < 0){
        k = start + insertCount;
        while(shift_count){
            this[k] = this[k-delta];
            k +=1;
            shift_count -= 1;
        }
        this.length = new_len;
    }else if(delta>0){
        k = 1;
        while(shift_count){
            this[new_len - k] = this[len - k];
            k += 1;
            shift_count -= 1;
        }
        this.length = new_len;
    }
    for(k = 0; k< insertCount; k+=1){
        this[start += k] = arguments[k + 2];
    }
    return result;
})
```



#### array.unshift(item...)

```javascript
// unshift可以像这样实现：
Array.methods('unshift', function(){
    this.splice.apply(this,[0,0].concat(Array.prototype.slice.apply(arguments)));
    return this.length;
})
```





### RegExp

#### regexp.test(string)

```javascript
// test可以像这样实现：
RegExp.method('test',function(string){
    return this.exec(string) !== null;
})
```





### Srting



#### string.charAt(pos)

```javascript
// charAt可以像这样实现：
String.method('charAt',function(pos){
    return this.splice(pos,pos+1);
})
```



## 代码风格 Style

![代码风格优美的特性](https://shinoimg.yyshino.top/img/202304021037583.png)



## 毒瘤&糟粕

![毒瘤&糟粕](https://shinoimg.yyshino.top/img/202304021037296.png)