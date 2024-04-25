---
title: Vue3状态管理Pinia
tags: 
    - Vue3
categories: 
    - FrontEnd
summary: 状态管理Pinia
description: 状态管理Pinia
date: 2023-03-23 18:42:39
---



### Pinia



Pinia对比Vuex

| 作用     | Vue Component | Vuex                | Pinia   |
| -------- | ------------- | ------------------- | ------- |
| 数据管理 | data          | state               | state   |
| 数据计算 | computed      | getters             | getters |
| 行为方法 | methods       | mutations / actions | actions |



在 Vuex ，如果想通过方法来操作 state 的更新，必须通过 mutation 来提交；而异步操作需要更多一个步骤，必须先通过 action 来触发 mutation ，非常繁琐！

Pinia 所有操作都集合为 action ，无需区分同步和异步，按照平时的函数定义即可更新 state ，具体操作详见 [管理 actions](https://vue3.chengpeiquan.com/pinia.html#管理-actions-new) 一节。

