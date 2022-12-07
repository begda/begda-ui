---
title: lerna 简介
language:
    - js
categories:
    - lerna
    - lib
tags:
    - lerna
    - lib
description: Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。
---

### 官网

> [中文官网](https://www.lernajs.cn/) > [英文官网](https://lerna.js.org/docs/getting-started)

### 安装

```shell
npm install --global lerna
```

### 常用命令

[常用命令文档](https://gitcode.gitcode.host/docs-cn/lerna-docs-cn/commands/add/index.html)

### 创建一个包命令

```shell
    #包的配置
   package.json
     "workspaces": [
          "packages/begda/**/*",
          "packages/lr/**/*",
          "packages/xc/shuang1ya2shan1/*"  #只有包这样配置,才能在shuang1ya2shan1文件夹下面创建包
      ],

    #在 shuang1ya2shan1 文件夹下创建包
    lerna create @xc/tu2biao3jian1ce4 packages/xc/shuang1ya2shan1


```

lerna create @xc/e4er2duo1si1-zong1he2fen1xi1 packages/xc/e4er2duo1si1

lerna create @ai/ai-zhi4neng2fen1xi1 packages/ai/zhi4neng2fen1xi1
