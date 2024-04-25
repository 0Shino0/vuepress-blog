---
# 这是文章的标题
title: WeakMap与Map的区别
author: yyshino
# 设置写作时间
date: 2024-04-25
# summary: 算法指标
# description: 算法指标
category:
  - FrontEnd
tag:
  - JS
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
---



### WeakMap与Map的区别



#### WeakMap

1. key必须是对象
2. key是弱引用



##### 弱引用与强引用

- 弱引用：不会影响垃圾回收机制。即： WeakMap 的 key 不再存在任何引用时，会被直接回收。

- 强引用：会影响垃圾回收机制。存在强应用的对象永远不会被回收。





### 对比示例

```html
<script>

    let obj1 = {
        name: '张三'
    }
    let obj2 = {
        name: '张三'
    }

    // 强引用
    const map = new Map()
    // 弱引用
    const weakMap = new WeakMap()
    map.set(obj1,'value')
    weakMap.set(obj2,'value')

    obj1 = null
    obj2 = null

    console.log('map',map) // Map(1) {{…} => 'value'}
    console.log('weakMap',weakMap) // WeakMap {} 空
    
    /**
    此时 WeakMap 中不存在任何值，即: obj2不存在其他引用时， WeakMap 不会阻止垃圾回收，基于obj2的引用将会被清除。这就证明了 WeakMap 的 弱引用特性。
    */
</script>
```





