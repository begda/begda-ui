---
title: pnpm 简介
language:
    - js
categories:
    - pnpm
    - lib
    - monorepo配置
tags:
    - pnpm
    - lib
    - monorepo配置
description: pnpm速度快、节省磁盘空间的软件包管理器。
---

## 官网

> [中文官网](https://www.pnpm.cn/) [英文官网](https://pnpm.io/)

## 安装

```shell
npm  i pnpm -g
```

## 常用命令

在根目录执行命令，比如在根目录安装依赖，那么这个依赖可以在所有的 packages 中使用

### -w 或者 --workspace-root

```shell
pnpm i -w
```

> 在过滤的指定包运行命令，我们可以通过下面的命令在指定的 package 安装依赖，这个依赖只可以该 package 中使用

### -F 或者 --filter

```shell
pnpm -F @packages/xxx add lodash
```

## 搭建 monorepo 项目

#### 创建项目

```shell
mkdir advance  #创建 advance 文件夹
cd advance     #打开目录
pnpm init      #初始化pnpm配置文件
```

## 新建.npmrc 文件

在根目录下新建.npmrc，增加以下内容

```text
shamefully-hoist=true
strict-peer-dependencies=false
ignore-workspace-root-check=true
```

> `shamefully-hoist` 是否提升依赖，如果某些工具仅在根目录的 `node_modules` 时才有效，可以将 shamefully-hoist 设置为 true 来提升那些不在根目录的 node_modules，就是将你安装的依赖包的依赖包的依赖包的都放到同一级别（扁平化）。说白了就是不设置为 true 有些包就有可能会出问题。
>
> strict-peer-dependencies 当 peerDependencies 错误时，命令是否成功

## pnpm-workspace.yaml

在根目录下新建 pnpm-workspace.yaml，增加以下内容

这个文件定义了工作空间的根目录，并能够使您从工作空间中包含或排除目录，

```yaml
packages:
    # 包含子目录中的所有包
    - 'packages/*'
    # 包含组件目录中的所有包
    - 'components/**'
    # 排除所有目录中的 test文件夹
    - '!**/test/**'
```

## 新建 packages 文件夹

在项目根目录里面创建 /packages

```shell
mkdir advance/packages  #创建 packages 文件夹
```

## 创建子项目

### 创建子项目 test-1

在里面/packages，创建一个名为的新文件夹 test-1。

> 创建 packages/test-1/package.json

```json
{
    "name": "test-1",
    "version": "0.0.1",
    "main": "index.js"
}
```

> 创建 packages/test-1/index.js

```js
export const liaohui = 99999999999999;
```

### 创建子项目 test-tow

在里面/packages，创建一个名为的新文件夹 test-tow。

导入本地 test-1 到 test-tow 里面

> 创建 packages/test-tow/package.json

```json
{
    "name": "test-tow",
    "version": "0.0.1",
    "main": "index.js",
    "scripts": {
        "dev": "echo 'dev命令'"
    },
    "dependencies": {
        "test-1": "workspace:*" //导入本地test-1包
    }
}
```

> 创建 packages/test-tow/index.js

```js
import { liaohui } from 'test-1'; //导入本地包test-1
export const liaohuiTow = 666666666;
console.log(liaohui);
```

## 安装依赖

### 给所有子项目安装依赖

```shell
pnpm install
```

### 给特定子项目安装依赖

使用 pnpm 的-F 命令找到对应的包单独安装依赖

我们这里的命名为 test-1 子项目，安装 vue-router 依赖模块

```shell
pnpm add vue-router -F test-1
```

### 安装本地项目内的依赖包

比如`nuxt-app`项目需要依赖`is-liaohui2`项目的功能，那么这个时候需要互相依赖，执行下面的命令

```shell
# 这个是在项目根目录下运行
pnpm add is-liaohui2 -F nuxt-app

#这个是在 nuxt-app 子项目目录运行
pnpm add is-liaohui2 -d
```

这条命令表示在`nuxt-app`项目安装`is-liaohui2`， 安装完成后 package.json 的依赖就有了`is-liaohui2`

## 根目录下执行子项目命令

根据上面操作，我们会发现我要运行 `test-tow` 的命令就到 cd 到这个目录，这样的操作太麻烦了，我们可以通过修改根目录下的 package.json 来实现在根目录下就能够执行不同包的命令

```json
{
  ...,
  "scripts": {
    ...,
    "dev:app": "pnpm -F test-tow dev"
  },
}
```
