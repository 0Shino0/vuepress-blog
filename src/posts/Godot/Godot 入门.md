---
title: Godot 入门
tags:
  - godot
categories:
  - 游戏引擎
date: 2025-03-02 22:18:00
summary: Godot 入门
description: Godot 入门
---

# 入门推荐

- **[godot docs](https://docs.godotengine.org/zh-cn/4.x/index.html)** ：godot文档
- **[learn-gdscript](https://github.com/GDQuest/learn-gdscript)**：快速入门 gdscript
- **[# godot 4.x 教程 100集](https://www.bilibili.com/video/BV14Y411h7Po/?spm_id_from=333.1387.favlist.content.click&vd_source=fb3505db9b87542728213f28843a6d74)** ：B站视频教程，本人之后打算学习
- **[# 2025年，独立游戏开发者必备的16款软件！](https://www.bilibili.com/video/BV1ytrpY7Emm/?spm_id_from=333.1387.homepage.video_card.click)**：[秦无邪OvO](https://space.bilibili.com/335835274)老师，本人大学期间学习过他的Unity教程，这个视频课主要介绍工具


# 原则


- 节点通信时的经验法则 
	- 父子节点：`Call down ，signal up`  往下用调用，往上用信号
		- 父节点应该调用子节点的函数，反之则不然
		- 子节点应该用信号给父节点


# Godot Shader

