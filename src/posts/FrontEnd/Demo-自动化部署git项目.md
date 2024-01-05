---
title: 自动化部署git项目
tags: 
    - 整合
categories: 
    - Component
summary: 创建脚本自动化部署指定文件夹下的项目，一般用于blog等常推送，但只推送打包文件，不推送配置文件
description: 创建脚本自动化部署指定文件夹下的项目，一般用于blog等常推送，但只推送打包文件，不推送配置文件
# sticky: 2
# abbrlink: 1873
date: 2022-10-7 08:16:27
---



### 创建部署脚本`deploy.sh`

```sh
    #!/usr/bin/env sh

    # 确保脚本抛出遇到的错误
    set -e

    # 生成静态文件
    npm run build

    # 进入生成的文件夹
    cd docs/.vuepress/dist

    # 如果是发布到自定义域名
    # echo 'www.yourwebsite.com' > CNAME

    git init
    git add -A
    git commit -m 'deploy'

    # 如果你想要部署到 https://USERNAME.github.io
    git push -f git@github.com:USERNAME/USERNAME.github.io.git master

    # 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
    # git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

    cd -

```


### `package.json`添加发布命令
```json
    "scripts": {
        "deploy": "bash deploy.sh"
    }

```


### 运行发布命令
```yaml
    npm run deploy

    or

    yarn deploy
```


### 参考

[Pages 部署](https://vuepress-theme-reco.recoluan.com/views/other/deploy.html#github)

[使用 GitHub Actions 自动部署博客](https://vuepress-theme-reco.recoluan.com/views/other/github-actions.html)

[基于VuePress搭建博客系统及优化过程（持续更新...）](https://blog.csdn.net/qq_42937522/article/details/122676915)


