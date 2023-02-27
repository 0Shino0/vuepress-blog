---
title: 数据库知识了解
tags: 
  - DataBase
categories: 
    - AfterEnd
summary: 数据库知识了解
description: 数据库知识了解
date: 2022-12-4 21:13:12

---

::: tip

​	数据库知识了解 | 关系型数据库 | 非关系型数据库

:::

![数据库](https://camo.githubusercontent.com/c2550829341c8ded9e8b49d1c8bcc0ba18754fd6508837f7e2b263a0979db78e/68747470733a2f2f692e706f7374696d672e63632f6b34584b517668342f44617461626173652e706e67)



<!-- more -->



## 数据库

概述

![数据库](https://camo.githubusercontent.com/c2550829341c8ded9e8b49d1c8bcc0ba18754fd6508837f7e2b263a0979db78e/68747470733a2f2f692e706f7374696d672e63632f6b34584b517668342f44617461626173652e706e67)

以上来自[wx-chevalier/Database-Series: 📚深入浅出数据库存储：数据库理论、关系型数据库、文档型数据库、键值型数据库、New SQL、搜索引擎、数据仓库与 OLAP、大数据与数据中台 (github.com)](https://github.com/wx-chevalier/Database-Series)



## 关系型数据库

### SQL

SQL 是 Structrued Query Language 的缩写，即结构化查询语言。它是负责与 ANSI(美国国家标准学会)维护的数据库交互的标准。SQL 作为关系数据库的标准语言，它已被众多商用 DBMS 产品所采用，使得它已成为关系数据库领域中一个主流语言，不仅包含数据查询功能，还包括插入、删除、更新和数据定义功能。最为重要的 SQL92 版本的详细标准可以查看[这里](http://www.contrib.andrew.cmu.edu/~shadow/sql/sql1992.txt)，或者在 [Wiki](https://en.wikipedia.org/wiki/SQL) 上查看 SQL 标准的变化。SQL 语言的功能包括查询、操纵、定义和控制，通常会将 SQL 语句分为以下几类：

- 数据定义语言（DDL）：DDL 包括用于创建表，删除表或创建和删除数据库的其他方面的命令。
- 数据操作语言（DML）：DML 包括用于查询和修改数据库的命令。它包括用于查询数据库的 select 语句，以及用于修改数据库的 insert，update 和 delete 语句。

作为查询语言，与普通编程语言相比，它还处于业务上层；SQL 最终会转化为关系代数执行，但关系代数会遵循一些等价的转换规律，比如交换律、结合律、过滤条件拆分等等，通过预估每一步的时间开销，将 SQL 执行顺序重新组合，可以提高执行效率。如果有多个 SQL 同时执行，还可以整合成一个或多个新的 SQL，合并重复的查询请求；在数据驱动商业的今天，SQL 依然是数据查询最通用的解决方案。















## 参考

[MySQL-Series/SQL at master · wx-chevalier/MySQL-Series (github.com)](https://github.com/wx-chevalier/MySQL-Series/tree/master/SQL)



