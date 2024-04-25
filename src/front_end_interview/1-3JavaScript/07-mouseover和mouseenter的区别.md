---
title: mouseover和mouseenter的区别
tags: 
   - JS
categories: 
   - JS
summary: mouseover和mouseenter的区别
description: mouseover和mouseenter的区别
date: 2023-04-24 20:33:41
---





## mouseover和mouseenter的区别



- mouseover：当鼠标移入元素或其子元素都会触发事件，所以**有一个重复触发，冒泡的过程**。对应的移除事件是 mouseout
- mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是**不会冒泡**，对应的移除事件是 mouseleave

