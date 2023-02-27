# !/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git config user.name "0Shino0"
git config user.email "1471386835@qq.com"
git add -A
git commit -m `date +"%y/%m/%d"`

# 如果你想要部署到 https://USERNAME.github.io
# ssh git@gitlab.com:0Shino0/0shino0.git
# http https://gitlab.com/0Shino0/0shino0.git
# git remote add origin git@github.com:0Shino0/Test.git
# git remote add origin git@github.com:0Shino0/vuepress-blog.git
git pull
git push

# github
# git push -f git@github.com:0Shino0/Vuepress-Blog.git master

# git push -f 
# 通常，该命令拒绝更新远程引用 不是本地 ref 的祖先用来覆盖它。 此外，当使用选项时，该命令拒绝 更新当前值不匹配的远程引用 预期。--force-with-lease
# 此标志禁用这些检查，并可能导致远程存储库 丢失提交;小心使用它。
# 请注意，这适用于所有被推送的引用，因此 使用它通过多次推送来承受 Toor 配置了的目标可能会覆盖引用 除了当前分支（包括本地引用 严格落后于他们的远程对应方）。强制推送到仅 一个分支，使用 refspec 前面的 ain 进行推送（例如强制推送到分支）。有关详细信息，请参阅上面的部分。


# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

# 返回进入此目录之前所在目录 
cd - 