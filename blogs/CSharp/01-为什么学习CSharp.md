---
title: 为什么学习CSharp
tags: 
    - CSharp
categories: 
    - AfterEnd
summary: 为什么学习CSharp
description: 为什么学习CSharp
date: 2023-6-17 17:33:18
---



## 为什么学习CSharp

最近一直在找前端方向的工作，奈何一直找不到[哭]。现实的重压到了我的头上，焦虑焦虑焦虑。有时候想想又还好，有时候又很焦虑。大一的时候学习的CSharp+Unity本来想一直坚持下去，但是之后被ShaderLab以及美术、建模啥的啥的劝退，然后学习了前端，学了一年自信了不少，结果找不到工作又给我打回去了[哭]。目前想的是把这两结合起来吧。

:::为什么不学Java？

​	太卷了，太卷了。Java比前端还卷我不想去蹭

:::



## 类型和变量

类型定义 C# 中的任何数据的结构和行为。 类型的声明可以包含其成员、基类型、它实现的接口和该类型允许的操作。 变量是用于引用特定类型的实例的标签。

C# 有两种类型：*值类型*和*引用类型*。 值类型的变量直接包含它们的数据。 引用类型的变量存储对数据（称为“对象”）的引用。 对于引用类型，两个变量可以引用同一个对象；对一个变量执行的运算可能会影响另一个变量引用的对象。 借助值类型，每个变量都有自己的数据副本；因此，对一个变量执行的运算不会影响另一个变量（`ref` 和 `out` 参数变量除外）。

标识符是变量名称。 标识符是不包含任何空格的 unicode 字符序列。 如果标识符的前缀为 `@`，则该标识符可以是 C# 保留字。 在与其他语言交互时，使用保留字作为标识符很有用。

C# 的值类型进一步分为：简单类型、枚举类型、结构类型、可以为 null 的值类型和元组值类型。 C# 引用类型又细分为类类型、接口类型、数组类型和委托类型。

以下大纲概述了 C# 的类型系统。

- 值类型
  - 简单类型
    - [有符号整型](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)：`sbyte`、`short`、`int`、`long`
    - [无符号整型](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)：`byte`、`ushort`、`uint`、`ulong`
    - [Unicode 字符](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/character-encoding-introduction)：`char`，表示 UTF-16 代码单元
    - [IEEE 二进制浮点](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types)：`float`、`double`
    - [高精度十进制浮点数](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types)：`decimal`
    - 布尔值：`bool`，表示布尔值（`true` 或 `false`）
  - 枚举类型
    - `enum E {...}` 格式的用户定义类型。 `enum` 类型是一种包含已命名常量的独特类型。 每个 `enum` 类型都有一个基础类型（必须是八种整型类型之一）。 `enum` 类型的值集与基础类型的值集相同。
  - 结构类型
    - 格式为 `struct S {...}` 的用户定义类型
  - 可以为 null 的值类型
    - 值为 `null` 的其他所有值类型的扩展
  - 元组值类型
    - 格式为 `(T1, T2, ...)` 的用户定义类型
- 引用类型
  - 类类型
    - 其他所有类型的最终基类：`object`
    - [Unicode 字符串](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/character-encoding-introduction)：`string`，表示 UTF-16 代码单元序列
    - 格式为 `class C {...}` 的用户定义类型
  - 接口类型
    - 格式为 `interface I {...}` 的用户定义类型
  - 数组类型
    - 一维、多维和交错。 例如：`int[]`、`int[,]` 和 `int[][]`
  - 委托类型
    - 格式为 `delegate int D(...)` 的用户定义类型