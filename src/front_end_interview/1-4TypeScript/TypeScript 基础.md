---
# 这是文章的标题
title: 常用的12中工具类型
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: file
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: yyshino
# 设置写作时间
date: 2023-12-02
# 一个页面可以有多个分类
category:
  - FrontEnd
# 一个页面可以有多个标签
tag:
  - TS
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

## TypeScript中最常用的12中工具类型

| 工具类型                             | 描述                                                         | 发布版本 |
| ------------------------------------ | ------------------------------------------------------------ | -------- |
| `Awaited<Type>                       ` | 获取 Promise 中的结果类型                                    | 4.5      |
| `Partial<Type>                       ` | 将Type中的所有属性设置为**可选属性**,返回一个新的类型。      | 2.1      |
| `Required<Type>                      ` | 将 Type 中的所有属性设置为**必选属性**，返回一个新的类型。   | 2.8      |
| `Readonly<Type>                      ` | 将Type中的所有属性设置为**只读属性**,返回一个新的类型。      | 2.1      |
| `Record<Keys, Type>                  ` | 新建一个由Keys指定的属性和Type指定的值组成的对象类型。       | 2.1      |
| `Pick<Type, Keys>                    ` | 从 Type 中选择一个或多个属性，并返回一个新的类型。           | 2.1      |
| `Omit<Type, Keys>                    ` | 从 Type 中删除一个或多个属性，并返回一个新的类型。           | 3.5      |
| `Exclude<UnionType, ExcludedMembers> ` | 从UnionType中排除ExcludedMembers 中的所有类型,并返回一个新的类型。 | 2.8      |
| `Extract<UnionType, ExtractedMembers>` | 从 UnionType 中提取 ExtractedMembers 中的所有类型，并返回一个新的类型。 | 2.8      |
| `NonNullable<Type>                   ` | 从Type 中排除 null 和 undefined 类型，并返回一个新的类型。   | 2.8      |
| `Parameters<Type>                    ` | 获取函数类型 Type 的参数类型，以元组类型返回。               | 3.1      |
| `ReturnType<Type>                    ` | 获取函数类型 Type 的返回值类型。                             | 2.8      |


# interface和type的区别

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

