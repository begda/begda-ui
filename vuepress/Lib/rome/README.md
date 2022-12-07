---
title: rome 简介
language:
    - js
categories:
    - rome
    - lib
tags:
    - rome
    - lib
description: Rome可以把js代码解析成(AST)树,进行语法检查 。
---

[[toc]]

### 官网

> [中文官网](https://www.romejs.cn/docs/introduction/installation/) [Github](https://github.com/rome/tools)

### 介绍

Rome 可以把 js 代码解析成(AST)树,进行语法检查

### 安装

#### 克隆（clone）并构建

Rome 目前无法通过 npm 安装，必须从 GitHub 上下载源码才能安装。 选择一个空目录，然后克隆 rome 源码仓库：

```shell
git clone https://github.com/romejs/rome
#然后，进入该目录并构建 rome：
cd rome; ./scripts/build-release dist

#在 Windows 10 系统上，请在 PowerShell 7 中运行如下命令：
cd rome && node scripts/build-release dist

#然后，将 rome 安装到全局环境：
npm install -g ./dist/
```

恭喜你！Rome 已安装完毕。
当需要更新 Rome 时，请重复上述过程。npm 会 自动用新版本覆盖当前安装的 Rome 版本。

### 集成 Rome 到你的项目

[集成 Rome 到你的项目](https://www.romejs.cn/docs/introduction/getting-started)
