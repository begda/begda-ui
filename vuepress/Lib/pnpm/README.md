---
title: pnpm 简介
language:
    - js
categories:
    - pnpm
    - lib
tags:
    - pnpm
    - lib
description:  pnpm速度快、节省磁盘空间的软件包管理器。
---

[[toc]]


### 官网

> [中文官网](https://www.pnpm.cn/) > [英文官网](https://pnpm.io/)

### 通过 npm 安装 pnpm

```shell
npm install -g pnpm
```

### 通过 Homebrew 安装 pnpm

```shell
brew install pnpm
```

### 常用命令

```shell
    #添加本地包
    pnpm add file:packages/begda/static-build

    #要彻底更新本地包,需要先删除 ,在添加,
    #删除本地包
    pnpm rm @begda/static-build
    #再添加包
    pnpm add file:packages/begda/static-build


    #更新本地包 只更新代码,目录变化,增删文件,不会改变
    pnpm up @begda/static-build
    pnpm up begda-ui
    pnpm add file:packages/begda/begda-ui

```
