---
title: 初入Node全栈
tags: 
    - Nodejs
categories:
    - FrontEnd
abbrlink: 11307
date: 2022-06-15 21:15:59
summary: node后端
short_title: node后端
description: node后端
autoGroup-5: Node篇
---

::: tip Node
   Node后端 | Express | Koa | 全栈
:::

<!-- more -->

## 简介
普通的前端能做的太少，仅仅对页面的布局与调用接口。做了一些简单的项目有所感悟，时常为了做项目而去找接口，没有接口就不想做项目，有种感觉失去接口后就寸步难行的感觉。因此我决定由JavaScript过渡到Node全栈，最后过渡到java全栈.一方面原因降低学习成本，有了JavaScript的基础入门node相对简单，上手快。另一方面，我想看看Node作为后端到底和Java相差多少。



## Node



## 框架



### express



### koa/koa2



## 云服务器与Nginx代理



### 云服务器

本地远程连接远程云服务器

```shell
ssh root@服务器公网ip

输入登录密码
```



### Nginx介绍

#### 安装与基本使用



#### 配置文件

```
Main	#全局配置区,Nginx核心功能配置
events{ # events 事件区,子进程核心配置

}

http {#http服务器配置区
	server{ #不同服务配置区
		location{ # location不同请求路径配置区
			#具体配置选项
		}	
	}
}	

mail{ #邮件代理配置区
	server{ #邮件服务配置区
		#具体配置选项
		}
}
```



#### Nginx反向代理



#### Nginx常用命令



### HTTPS安全协议





## Nest框架

Nest 是一个用于构建高效，可扩展的 [Node.js](http://nodejs.cn/) 服务器端应用程序的框架。它使用渐进式 JavaScript，内置并完全支持 [TypeScript](https://www.tslang.cn/)（但仍然允许开发人员使用纯 JavaScript 编写代码）并结合了 OOP（面向对象编程），FP（函数式编程）和 FRP（函数式响应编程）的元素。

在底层，Nest使用强大的 HTTP Server 框架，如 Express（默认）和 Fastify。Nest 在这些框架之上提供了一定程度的抽象，同时也将其 API 直接暴露给开发人员。这样可以轻松使用每个平台的无数第三方模块。——**[Nest中文文档](https://docs.nestjs.cn/8/introduction)**



### 安装与使用

```yaml
npm i -g @nest/

```





### `nest` 命令



| name          | alias       | description                                  |
| ------------- | ----------- | -------------------------------------------- |
| application   | application | Generate a new application workspace         |
| class         | cl          | Generate a new class                         |
| configuration | config      | Generate a CLI configuration file            |
| controller    | co          | Generate a controller declaration            |
| decorator     | d           | Generate a custom decorator                  |
| filter        | f           | Generate a filter declaration                |
| gateway       | ga          | Generate a gateway declaration               |
| guard         | gu          | Generate a guard declaration                 |
| interceptor   | itc         | Generate an interceptor declaration          |
| interface     | itf         | Generate an interface                        |
| middleware    | mi          | Generate a middleware declaration            |
| module        | mo          | Generate a module declaration                |
| pipe          | pi          | Generate a pipe declaration                  |
| provider      | pr          | Generate a provider declaration              |
| resolver      | r           | Generate a GraphQL resolver declaration      |
| service       | s           | Generate a service declaration               |
| library       | lib         | Generate a new library within a monorepo     |
| sub-app       | app         | Generate a new application within a monorepo |
| resource      | res         | Generate a new CRUD resource                 |



### Nest集成Swagger

[秘籍 (nestjs.cn)](https://docs.nestjs.cn/8/recipes?id=swagger)



