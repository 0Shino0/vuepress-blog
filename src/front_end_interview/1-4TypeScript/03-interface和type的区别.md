---
title: interface和type的区别
# author: SunshowerC
date: 2024-04-26
# 一个页面可以有多个分类
category:
  - FrontEnd
tag:
  - TS
sticky: false
star: false
---



>本文转自 [typescript 中的 interface 和 type 到底有什么区别](https://github.com/SunshowerC/blog/issues/7)
>
>作者：[SunshowerC](https://github.com/SunshowerC)



# interface VS type

大家使用 typescript 总会使用到 interface 和 type，[官方规范](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md) 稍微说了下两者的区别

> - An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.
> - An interface can have multiple merged declarations, but a type alias for an object type literal cannot.
>   但是没有太具体的例子。

明人不说暗话，直接上区别。

## 相同点

### 都可以描述一个对象或者函数

#### interface

```
interface User {
  name: string
  age: number
}

interface SetUser {
  (name: string, age: number): void;
}
```



#### type

```
type User = {
  name: string
  age: number
};

type SetUser = (name: string, age: number): void;
```



### 拓展（extends）与 交叉类型（Intersection Types）

interface 可以 extends， 但 type 是不允许 extends 和 implement 的，**但是 type 缺可以通过交叉类型 实现 interface 的 extend 行为**，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 与 interface 类型 交叉 。

**虽然效果差不多，但是两者语法不同**。

#### interface extends interface

```
interface Name { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```



#### type 与 type 交叉

```
type Name = { 
  name: string; 
}
type User = Name & { age: number  };
```



#### interface extends type

```
type Name = { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
```



#### type 与 interface 交叉

```
interface Name { 
  name: string; 
}
type User = Name & { 
  age: number; 
}
```



## 不同点

### type 可以而 interface 不行

- type 可以声明基本类型别名，联合类型，元组等类型

```
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
```



- type 语句中还可以使用 typeof 获取实例的 类型进行赋值

```
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
```



- 其他骚操作

```
type StringOrNumber = string | number;  
type Text = string | { text: string };  
type NameLookup = Dictionary<string, Person>;  
type Callback<T> = (data: T) => void;  
type Pair<T> = [T, T];  
type Coordinates = Pair<number>;  
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
```



### interface 可以而 type 不行

interface 能够声明合并

```
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```



# 总结

一般来说，如果不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type 。其他更多详情参看 [官方规范文档](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)