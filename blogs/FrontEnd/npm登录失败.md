---
title: npm 踩坑
tags: 
    - Nodejs
    - Npm
categories:
    - FrontEnd
date: 2022-10-20 16:48:46
summary: npm 踩坑
short_title: npm 踩坑
description: npm 踩坑
autoGroup-5: Node篇
---

::: tip npm 踩坑
   npm登录失败 | npm踩坑
:::

<!-- more -->

## 简介

使用`npm`时，由于网络原因我们一般会使用淘宝镜像源`https://registry.npm.taobao.org/`,但是使用淘宝镜像源会使我们登录失败.

![loginerror](https://shinoimg.yyshino.top/img/202210201653102.png)

## 解决问题

使用如下命令即可

```yaml
    npm set registry https://registry.npmjs.org/
```

## 如果你正在发布您的npm包希望您继续往下看

当你使用`https://registry.npmjs.org/`去发布您的npm包，经常也会因为网络原因发布失败。这时候重新设置淘宝镜像源即可。

```yaml
    npm config set registry https://registry.npm.taobao.org
```

## 使用到的命令

- `npm whoami`——查看当前登录用户
- `npm login`or`npm adduser`——登录npm
- `npm set registry https://registry.npmjs.org/`——设置npm源
- `npm config set registry https://registry.npm.taobao.org`——设置npm淘宝镜像

## 最后

如果它对你有帮助，我希望您可以再来看看我的[博客](https://v-blog.yyshino.top/)的其它文章<[请点击这里](https://v-blog.yyshino.top/)>