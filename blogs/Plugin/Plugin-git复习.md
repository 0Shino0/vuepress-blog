---
title: git复习
tags: 
  - Github
categories: 
  - FrontEnd
summary: Git 常用命令小结
description: Git 常用命令小结
abbrlink: 10243
date: 2022-08-28 16:58:53
autoGroup-6: 工具篇
---

::: tip
   git命令 | git脚本
:::

<!-- more -->

## Git 常用命令小结

* git init 仓库初始化
* git add -A 将工作区修改添加至『暂存区』
* git commit 提交 存档
* git branch 查看分支
  * git branch name 创建
  * git branch -d name 删除分支
  * git merge name 分支合并
  * git checkout name 切换分支
  * git checkout -b name 创建并切换
* git remote 远程仓库别名管理
  * add 新增别名
  * remove 移除别名
  * rename 重命名别名
* git push 将本地仓库的『分支』推送到远端仓库
  * git push -u origin master
  * git push dev master
  * git push dev master:main
* git pull 拉取指定仓库的指定分支
  * git pull origin master
* git clone 克隆仓库
* git status 查看仓库状态
* 忽略文件
* 冲突解决


注意

- 移动或删除本地仓库不会影响远程存储库.
- 含有node_module的文件夹移动时---过慢---压缩后移动
- .git不能够嵌套


## Git Flow

经典模型的问题
- 必须使用dev分支
- 复杂度高hotfix与release分支
- 多次Merge合并

### 两种高效的Git Flow

one
- 适用于持续集成多环境场景
- 上游分支向下游发展
- 流程Bug->New Branch-> master -> pre branch-> Target Branch

![Git Flow](https://shinoimg.yyshino.top/img/202210221516510.png)

two
- 适用于版本项目
- 稳定版本从master检出bug修复在分支
- master->Stable-> new branch-> bug fix->version

### Git Flow重要意义

- 多人协作,权限控制
- 解决冲突
- 溯源,问题Issue

### Branch创建原则

- 按需创建
- 重要的版本管理(版本历史)
- 学会使用Tags


## gitignore

忽略不需要 | 重复 的文件

三种快速创建gitignore的方法
- gitignore仓库[https://github.com/github/gitignore](https://github.com/github/gitignore)
- 在线gitignore.io[https://www.toptal.com/developers/gitignore/](https://www.toptal.com/developers/gitignore/)
- vscode插件——`.gitignore generator`