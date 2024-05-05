---
# 这是文章的标题
title: BFS和DFS
author: yyshino
article: false # 还未完成
# 设置写作时间
date: 2024-04-25
# summary: 算法指标
# description: 算法指标
category:
  - 算法
tag:
  - 算法
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在文章收藏中
star: false
---



## 深度优先算法 DFS

深度优先遍历分为三种：先序遍历（preorder tree walk）、中序遍历（inorder tree walk）、后序遍历（postorder tree walk），分别为：

- **1、前序遍历：**先访问当前节点，再依次递归访问左右子树。
- **2、中序遍历**：先递归访问左子树，再访问自身，再递归访问右子树。
- **3、后序遍历**：先递归访问左右子树，再访问自身节点。



## 广度优先算法 BFS 

**广度优先 (BFS)——树的层次遍历** 从顶部到底部逐层遍历二叉树，并在每一层按照从左到右的顺序访问节点。