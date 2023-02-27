# !/usr/bin/env sh

# 此脚本用于部署博客中md文件

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd blogs

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

# git init
# git config user.name "0Shino0"
# git config user.email "1471386835@qq.com"
git add -A
git commit -m `date +"%y/%m/%d"`
# git remote add origin git@github.com:0Shino0/vuepress-blog-md.git
# git pull git@github.com:0Shino0/vuepress-blog-md.git master
git pull
# github
git push

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -