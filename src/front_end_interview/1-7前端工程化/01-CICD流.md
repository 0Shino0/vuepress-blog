---
# 这是文章的标题
title: CICD流
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: file
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: yyshino
# 设置写作时间
date: 2023-11-30
# 一个页面可以有多个分类
category:
  - FrontEnd
# 一个页面可以有多个标签
tag:
  - 前端工程化
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

GitHub CI/CD流

我使用的是腾讯云服务器

1. 云服务创建密匙对：在管理云服务器界面，创建SSH密钥（公匙和私匙），并绑定在该云服务器

2. 上传Github：将项目上传Github，并在项目中创建`.github`文件，在`.github`文件下创建`workflows`文件，在`workflows`下添加`push.yaml`，添加以代码

   ```yaml
   
   ```

3. 创建Github密匙：

   - 新建两个密匙`REMOTE_HOST` `PRIVATE_KEY`
   - `REMOTE_HOST` 为云服务器ip地址
   - `PRIVATE_KEY` 为私钥（.pem文件内容）

   ![image-20230614091014044](https://shinoimg.yyshino.top/img/202306140910899.png)

   4. 