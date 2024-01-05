---
title: Diffing算法原理
tags: 
  - Diffing
categories: 
  - FrontEnd
# abbrlink: 62098
date: 2022-05-16 12:43:06
summary: Diffing算法
description: Diffing算法
autoGroup-7: 源码篇
---

### Diffing算法
#### 简介

```jsx
    - 当对比两棵树时，React 首先比较两棵树的根节点。不同类型的根节点元素会有不同的形态。
    对比不同类型的元素

    - 当根节点为不同类型的元素时，React 会拆卸原有的树并且建立起新的树。举个例子，当一个
    元素从 <a> 变成 <img>，从 <Article> 变成 <Comment>，或从 <Button> 变成 <div> 都会触发一个完整的重建流程。

    - 当卸载一棵树时，对应的 DOM 节点也会被销毁。组件实例将执行 componentWillUnmoun()
    方法。当建立一棵新的树时，对应的 DOM 节点会被创建以及插入到 DOM 中。组件实例将执行 
    UNSAFE_componentWillMount() 方法，紧接着 componentDidMount() 方法。所有与之前的
    树相关联的 state 也会被销毁。
```
———— [react文档](https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm)

---

#### 理解
- 1:  diffing 算法最小颗粒度是标签  (只可以精确到标签的位置)
    diffing 算法最小颗粒度是标签  (会一直递归循环遍历下去)

- 2：只要状态改变就会触发 render 函数 (实时修改状态)  (状态修改就会触发render函数);
在React/Vue 中 key属性有什么作用？ (index 的内部原理是什么？)

##### 渲染中key的选择

- 3.开发中如何选择key?:

  - ​     1.最好使用每条数据的唯一标识作为key,比如id、手机号、身份证号、学号等唯一值。

  - ​     2.如果确定只是简单的展示数据,用index也是可以的。

  ```jsx
    经典面试题:
          1). react/vue中的key有什么作用? (key的内部原理是什么?)
          2). 为什么遍历列表时, key最好不要用index?
          
          1.虚拟DOM中key的作用
              1).简单的说:key是虚拟DOM对象的标识,在更新显示时key起着极其重要的作用。
              
              2).详细的说:当状态中的数据发生变化时, react会根据【新数据】生成【新的虚拟DOM】,
              随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较,比较规则如下:
              
                          a.I旧虚拟DOM中找到了与新虚拟DOM相同的key:
                                  (1).若虚拟DOM中内容没变,直接使用之前的真实DOM
                                  (2).若虚拟DOM中内容变了,则生成新的真实DOM,随后替换掉页面中之前的真实DOM
                          
                          b.旧虚拟DOM中未找到与新虚拟DOM相同的key
                          根据数据创建新的真实DOM,随后渲染到到页面
                          
          2.用index作为key可能会引发的问题:
                      1.若对数据进行:逆序添加、逆序删除等破坏顺序操作:
                              会产生没有必要的真实DOM更新==>界面效果没问题,但效率低。
                      
                      2.如果结构中还包含输入类的DOM:
                              会产生错误DOM更新==>界面有问题。
                              
                      3,注意!如果不存在对数据的逆序添加、逆序删除等破坏顺序操作,
                      仅用于渲染列表用于展示,使用index作为key是没有问题的。
  ```


