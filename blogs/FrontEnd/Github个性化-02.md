---
title: Github个性化02——为你的Github添加commit snake
tags: 
    - Github
categories: 
    - FrontEnd
summary: 为你的Github添加commit snake
description: 为你的Github添加commit snake
date: 2022-12-3 17:01:50
autoGroup-10: 博客篇
---

![commit贪吃蛇](https://shinoimg.yyshino.top/img/202212031729209.svg+xml)

<!-- more -->


## 什么是Workflows



## Github Action

### 介绍

GitHub Actions 是一种持续集成和持续交付 （CI/CD） 平台，可用于自动执行生成、测试和部署管道。您可以创建工作流来构建和测试对存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

GitHub Actions 不仅仅是 DevOps，还允许您在仓库中发生其他事件时运行工作流。例如，您可以运行工作流，以便在有人在您的仓库中创建新问题时自动添加相应的标签。

GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行您的工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

以上是官网做出的介绍.



### 基本组件

1. **workflow** （工作流程）：持续集成一次运行的过程，就是一个 workflow。
2. **job** （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。
3. **step**（步骤）：每个 job 由多个 step 构成，一步步完成。
4. **action** （动作）：每个 step 可以依次执行一个或多个命令（action）。



### workflow文件

GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的`.github/workflows`目录。

workflow 文件采用 [YAML 格式](https://www.ruanyifeng.com/blog/2016/07/yaml.html)，文件名可以任意取，但是后缀名统一为`.yml`，比如`foo.yml`。一个库可以有多个 workflow 文件。GitHub 只要发现`.github/workflows`目录里面有`.yml`文件，就会自动运行该文件。

workflow 文件的配置字段非常多，详见[官方文档](https://help.github.com/en/articles/workflow-syntax-for-github-actions)。下面是一些基本字段。

**（1）`name`**

`name`字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名。

> ```bash
> name: GitHub Actions Demo
> ```

**（2）`on`**

`on`字段指定触发 workflow 的条件，通常是某些事件。

> ```bash
> on: push
> ```

上面代码指定，`push`事件触发 workflow。

`on`字段也可以是事件的数组。

> ```bash
> on: [push, pull_request]
> ```

上面代码指定，`push`事件或`pull_request`事件都可以触发 workflow。

完整的事件列表，请查看[官方文档](https://help.github.com/en/articles/events-that-trigger-workflows)。除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。

**（3）`on.<push|pull_request>.<tags|branches>`**

指定触发事件时，可以限定分支或标签。

> ```bash
> on:
>   push:
>     branches:    
>       - master
> ```

上面代码指定，只有`master`分支发生`push`事件时，才会触发 workflow。

**（4）`jobs.<job_id>.name`**

workflow 文件的主体是`jobs`字段，表示要执行的一项或多项任务。

`jobs`字段里面，需要写出每一项任务的`job_id`，具体名称自定义。`job_id`里面的`name`字段是任务的说明。

> ```javascript
> jobs:
>   my_first_job:
>     name: My first job
>   my_second_job:
>     name: My second job
> ```

上面代码的`jobs`字段包含两项任务，`job_id`分别是`my_first_job`和`my_second_job`。

**（5）`jobs.<job_id>.needs`**

`needs`字段指定当前任务的依赖关系，即运行顺序。

> ```javascript
> jobs:
>   job1:
>   job2:
>     needs: job1
>   job3:
>     needs: [job1, job2]
> ```

上面代码中，`job1`必须先于`job2`完成，而`job3`等待`job1`和`job2`的完成才能运行。因此，这个 workflow 的运行顺序依次为：`job1`、`job2`、`job3`。

**（6）`jobs.<job_id>.runs-on`**

`runs-on`字段指定运行所需要的虚拟机环境。它是必填字段。目前可用的虚拟机如下。

> - `ubuntu-latest`，`ubuntu-18.04`或`ubuntu-16.04`
> - `windows-latest`，`windows-2019`或`windows-2016`
> - `macOS-latest`或`macOS-10.14`

下面代码指定虚拟机环境为`ubuntu-18.04`。

> ```javascript
> runs-on: ubuntu-18.04
> ```

**（7）`jobs.<job_id>.steps`**

`steps`字段指定每个 Job 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。

> - `jobs.<job_id>.steps.name`：步骤名称。
> - `jobs.<job_id>.steps.run`：该步骤运行的命令或者 action。
> - `jobs.<job_id>.steps.env`：该步骤所需的环境变量。

下面是一个完整的 workflow 文件的范例。

> ```javascript
> name: Greeting from Mona
> on: push
> 
> jobs:
>   my-job:
>     name: My Job
>     runs-on: ubuntu-latest
>     steps:
>     - name: Print a greeting
>       env:
>         MY_VAR: Hi there! My name is
>         FIRST_NAME: Mona
>         MIDDLE_NAME: The
>         LAST_NAME: Octocat
>       run: |
>         echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
> ```

上面代码中，`steps`字段只包括一个步骤。该步骤先注入四个环境变量，然后执行一条 Bash 命令。



### Github Action 的使用限制

- 每个 Workflow 中的 job 最多可以执行 6 个小时
- 每个 Workflow 最多可以执行 72 小时
- 每个 Workflow 中的 job 最多可以排队 24 小时
- 在一个存储库的所有 Action 中，一个小时最多可以执行 1000 个 API 请求
- 并发工作数：Linux：20，Mac：5（专业版可以最多提高到 180 / 50）



## 示例

为你的readme添加 ， 从github用户贡献图生成一个蛇游戏

作者：[Platane/snk: 🟩⬜ Generates a snake game from a github user contributions graph and output a screen capture as animated svg or gif](https://github.com/Platane/snk)

效果图如下

![贪吃蛇](https://shinoimg.yyshino.top/img/202212031729209.svg+xml)



### 1.创建一个特殊的仓库

如果你没有相关知识，我推荐你去看

[Github 首页美化教程（一）：打造个性化的GitHub首页 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/454597068)



### 2.在仓库中添加文件夹workflows

`./github/workflows`用于存放工作流文件`.yml`



### 3.创建 `snake.yml`

添加如下代码

```yml
# GitHub Action for generating a contribution graph with a snake eating your contributions.
name: Generate Snake

on:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.4
      
      - name: Generate Snake
        uses: Platane/snk@master
        id: snake-gif
        with:
          github_user_name: ${{ github.repository_owner }}
          gif_out_path: ./contribution-snake/github-contribution-grid-snake.gif
          svg_out_path: ./contribution-snake/github-contribution-grid-snake.svg

      - name: Push to GitHub
        uses: EndBug/add-and-commit@v7.2.1
        with:
          branch: main # 你的当前分支
          message: ':rocket: Update'
```



保存即可





## 踩的一些坑

刚开始部署时候每次到`Push 阶段都会报个错`

```sh
  /usr/bin/git push --force ***github.com/0Shino0/0Shino0.git output
  remote: Permission to 0Shino0/0Shino0.git denied to github-actions[bot].
  fatal: unable to access 'https://github.com/0Shino0/0Shino0.git/': The requested URL returned error: 403
  Error: The process '/usr/bin/git' failed with exit code 128
```

干了两三小时，明明没什么问题，就是不让`Push`，找了些相关`Issues`。终于发现了原来是我没给`workflows`权限所有一直导致拒绝`Push`

`Issues`链接 [remote: Permission to git denied to github-actions[bot]. #96](https://github.com/ad-m/github-push-action/issues/96)

选则如图

![workflows](https://shinoimg.yyshino.top/img/202212031454925.png)

打开之后就正常了













## 参考

[Github Action 精华指南 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/164744104)

[GitHub Actions文档 - GitHub Docs](https://docs.github.com/cn/actions)

[GitHub Actions 入门教程 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

[Platane/snk: 🟩⬜ Generates a snake game from a github user contributions graph and output a screen capture as animated svg or gif](https://github.com/Platane/snk)