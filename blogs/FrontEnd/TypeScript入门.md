---
title: TypeScript入门
tags: 
  - TypeScript
categories: 
  - FrontEnd
abbrlink: 33883
date: 2022-07-30 08:43:12
summary: TypeScript入门
description: TypeScript入门
autoGroup-2: 基础篇
---

## 回顾js

### 原型`protorype`和原型链`_proto_`



## 配置


### TS安装


### TS配置文件


### TS插件
| ts插件  | 描述 |
| ------- | ---- |
| ts-node |      |
|         |      |
|         |      |



# 语法入门

## TS class类

### 简介

- 类的定义(修饰符)与继承extends
- 构造函数使用new时会自动执行
- 类类型接口、接口继承类



#### class 开头

```typescript
class Person{
    // 
}
```



#### 访问修饰符

- public: 公开
- protected: 可以在本类和子类中访问，不能再类的外部使用
- private: 只允许在本类中访问
- 注意
  - 默认: public
  - 父类方法的访问范围【访问修饰符】必须小于子类中方法重写的访问范围【访问修饰符】
  - 父类方法不能是private 



#### 构造函数 `constructor`



#### super的使用

- super代表 **父类的构造函数名** 或 **父类的类名**
- 通过"super"关键字只能访问基类的公共方法和受保护方法。
- 获取 / 重写 父类方法



#### 类类型接口

interface



#### 接口继承类

1. 接口可以继承类,当接口继承了类之后,会继承成员(类型),但是不包括实现;
2. 接口还会继承private和protected修饰的成员,但是这个接口只可被这个类或它的子类实现

`interface B extends A{}`



1. 类与类,接口与接口之间使用extends
2. 类与接口, implements

`class C implements B{}`



### 重载

#### 方法重载 (methodoverload)



#### 函数重载



#### 构造器重载



### 多态



## 断言

as

#### 类型断言中的不能相互重叠问题:

- 两个类之间断言的规则:
  - 两个类中任意一个的属性和方法是另一个类的属性和方法完全相同或子集，则这两个类可以相互断言
  - 否则这两个类就不能相互断言
- 任何数据类型都可以转换成any 或unknown类型



#### 适用性

- 对象中的Symbol数据类型取值问题
- 加法计算,巧用as any。



## TS类型守卫

- 类型判断: `typeof`
  - `typeof` 检测变量的类型范围包括：  “string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" 等数据类型。
  - `typeof`的局限性
    - 检测`null`: `typeof null` 的结果是 `object`
    - 检测数组变量: `typeof []` 的结果是 `object`
    - 检测`Set` `Map`变量:  结果也是 `object`
  - 替代方案 `Object.protorype.toString.call()`
    - 依然无法解决的问题:无法获取一个自定义的类的实例变量或构造函数的对象变量的真正创建类型，答案是使用 instanceof 来解决。
- 属性或者方法或者函数判断: `in`
- 实例判断: `instanceof`
- 字面量相等判断: `==` `===` `!=` `!==`



## `interface`接口

接口 -> ts最重要的概念->定义任意的结构或者类型



## 泛型`<T>`



### 约束泛型`<T extends >`

让传入类型满足特定条件



### 泛型在类和接口中的使用



## 其他



### 类型别名 `type`

为繁杂的类型创建一个简单的写法



### 字面量

只能是原始数据类型



### 交叉类型 `&`



## 声明文件







## other

### 静态属性

#### 区别 

##### 对象属性



##### 静态属性

static



#### 分类

#### 静态引用属性

#### 静态基本类型属性



#### 源码



```js
//TS类 双重性质  即是类型【new实例时TS类是类型】 当用TS类直接获取属性时就是对象
//JS函数 双重性质  即是类型【new实例时JS函数也是类型】 当用JS类直接获取属性时就是对象
```

