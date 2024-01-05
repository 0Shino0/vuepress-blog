---
title: JavaScript
tags:
  - JS
categories:
  - FrontEnd
summary: 
top: true
# # abbrlink: 9809
date: 2023-4-16 16:06:45
# autoGroup-2: 基础篇
---



## Map

**`Map`** 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者[基本类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)）都可以作为一个键或一个值。



## Map.prototype.size

**`size`** 是可访问属性，返回 [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 对象的成员数量。

### 返回值

 [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 对象的成员数量。



## Map.prototype.has()

**`has()`** 方法返回一个布尔值，指示具有指定键的元素是否存在。

### 返回值

`true|false`



## Map.prototype.values()

**`values()`** 方法返回一个新的[*迭代器*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)对象。它包含按顺序插入 `Map` 对象中每个元素的 `value` 值。

### 返回值

一个新的 [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 可迭代对象。



## Map.prototype.set(key,value)

**`set()`** 方法为 `Map` 对象添加或更新一个指定了键（`key`）和值（`value`）的（新）键值对。

### 返回值

`Map` 对象





## Map.prototype.get(key)

**`get()`** 方法从 `Map` 对象返回指定的元素。如果与所提供的键相关联的值是一个对象，那么你将获得该对象的引用，对该对象所做的任何更改都会有效地在 `Map` 对象中修改它。

### 返回值

与指定键相关联的元素，如果键在 `Map` 对象中找不到，则返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。



## Map.prototype.delete(key)

`delete()` 方法用于移除 `Map` 对象中指定的元素。

### 返回值

如果 `Map` 对象中的元素存在并已被移除，则为 `true`；如果该元素不存在，则为 `false`。



## Map.prototype.clear()

`clear()` 方法会移除 `Map` 对象中的所有元素。

### 返回值

[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。



## Map.prototype.keys()

**`keys()`** 返回一个引用的[*迭代器*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)对象。它包含按照顺序插入 `Map` 对象中每个元素的 key 值。

### 返回值

一个新的 [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 迭代器对象。



## Map.prototype.forEach()

**`forEach()`** 方法按照插入顺序依次对 `Map` 中每个键/值对执行一次给定的函数。



### 参数

- `callbackFn`

  Map 中每个元素所要执行的函数。它具有如下的参数：`value` 可选每个迭代的值。`key` 可选每个迭代的键。`map` 可选正在迭代的 Map。

- `thisArg` 可选

  在 `callbackFn` 执行中使用的 `this` 的值。

### 返回值

[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。



## Map.prototype.entries()

**`entries()`** 方法返回一个新的[*迭代器*](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)对象，其中包含 `Map` 对象中按插入顺序排列的每个元素的 `[key, value]` 对。在这种情况下，这个迭代器对象也是一个可迭代对象，因此可以使用 for-of 循环。当使用 `[Symbol.iterator]` 时，它返回一个函数，该函数在调用时返回迭代器本身。

### 返回值

一个新的 [`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 迭代器对象。