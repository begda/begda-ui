---
title: Git使用心得

language:
    - git
categories:
    - lib
    - git
description: git使用中的技巧,和问题解决.
---

[[toc]]

## .gitignore 规则不生效

### 错误原因

在项目开发过程中个，一般都会添加 .gitignore 文件，规则很简单，但有时会发现，规则不生效。

原因是 .gitignore 只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore 是无效的。

### 解决方案

解决方法就是先把本地缓存删除（改变成未 track 状态），然后再提交。

```shell
git rm -r --cached .

git add .

git commit -m 'update .gitignore'

```

<br/>
<br/>

## GitHub push 超时

### 错误原因

> 由于墙的原因 造成提交超时
>
> LibreSSL SSL_read: error:02FFF03C:system library:func(4095):Operation timed out, errno 60

### 解决方案

> 需要有自己的的代理服务器

1. 设置针对 github.com 本身(如果你需要代理的仓库，都是 github 上面的，只要设置这个)的代理：

```shell
#只对github.com
# 找到自己的代理的port的4个数字的端口就行，不一定是1080口的
git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
#上面是别人的，如果你的代理是http类型的，如下设置：
git config --global http.https://github.com.proxy 'http://127.0.0.1:代理的port'

#取消代理
git config --global --unset http.https://github.com.proxy

```

2. 针对所有仓库包含 github.com 之外的仓库的代理

```shell
# 找到自己的代理的port的4个数字的端口就行，不一定是1080口的
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'

#上面是别人的，如果你的代理是http类型的，如下设置：
# 找到自己的代理的port的4个数字的端口就行，不一定是1080口的
git config --global http.proxy  'http://127.0.0.1:代理的port'
git config --global https.proxy  'http://127.0.0.1:代理的port'

```
