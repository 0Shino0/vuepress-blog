---
# 这是文章的标题
title: SEO优化
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: file
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: yyshino
# 设置写作时间
date: 2023-12-12
# 一个页面可以有多个分类
category:
  - FrontEnd
# 一个页面可以有多个标签
tag:
  - 浏览器
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---


## SEO优化



### meta元信息处理

html头部中

```
  <title></title>
  <meta name="keywords" content="" />
  <meta name="description" content="" />
```



Vue-Router中

```
const routes = [
 // ...
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: '标题',
      keywords: '关键词（空格隔开）',
      description: '网页描述',
      keepAlive: false
    }
  },
  // ... 
 ]
```

