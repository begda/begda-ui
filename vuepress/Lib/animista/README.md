---
title: animista 简介
language:
    - css
categories:
    - animista
    - lib
tags:
    - animista
    - lib
description: 是一个可视化的生成 css 动画的库，提供 ui 界面调整动画参数。
---

### 官网

> [animista 官网](https://animista.net/play/basic/scale-up/scale-up-bl)

### 关于

animista 是一个可视化的生成 css 动画的库，提供 ui 界面调整动画参数。

进入官网，可以随时定制合适的动画

保持联系
如果您决定将 Animista 用于您的下一个很棒的项目或有任何建议/反馈，如果您在 cssanimista(at)gmail.com 上给我留言，那将是非常棒的！

### 使用示例

这是 class 的名字，通过 animation 调用动画关键帧来开始动画。

```css
.scale-up-bl {
    animation: scale-up-bl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
```

这是动画关键帧 cale-up-b。

```css
@keyframes scale-up-bl {
    0% {
        transform: scale(0.5);
        transform-origin: 0 100%;
    }
    100% {
        transform: scale(1);
        transform-origin: 0 100%;
    }
}
```
