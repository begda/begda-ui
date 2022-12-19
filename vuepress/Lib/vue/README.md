---
title: VUE内容
order: 1
background: rgba(0,165,135,1)
language:
    - js
    - vue
categories:
    - lib
    - vue
tags:
    - lib
    - vue
description: 收集VUE相关的零散东西。
---

[[toc]]

## vue-seamless-scroll 无缝滑动

> [官网](https://chenxuan0000.github.io/vue-seamless-scroll/zh/guide/)

### 安装

```shell
npm install vue-seamless-scroll --save

<!-- https://cdn.jsdelivr.net/npm/vue-seamless-scroll@latest/dist/vue-seamless-scroll.min.js -->
<script src="vue-seamless-scroll.min.js"></script>
```

### 使用

```js
// 1.全局 install
import Vue from 'vue';
import scroll from 'vue-seamless-scroll';
Vue.use(scroll);

// 或者你可以自己设置全局注册的组件名 默认注册的组件名是 vue-seamless-scroll
Vue.use(scroll, { componentName: 'scroll-seamless' });
```

## BetterScroll 滚动条

> [官网](https://better-scroll.github.io/docs/zh-CN/guide/#%E8%B5%B7%E6%AD%A5) [Demo](https://better-scroll.github.io/examples/#/)

BetterScroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。它的核心是借鉴的 iscroll (opens new window)的实现，它的 API 设计基本兼容 iscroll，在 iscroll 的基础上又扩展了一些 feature 以及做了一些性能优化。
BetterScroll 是使用纯 JavaScript 实现的，这意味着它是无依赖的。

### 安装

```shell
npm install @better-scroll/core --save

import BScroll from '@better-scroll/core'

<script src="https://unpkg.com/@better-scroll/core@latest/dist/core.js"></script>

let wrapper = document.querySelector('.wrapper')
let scroll = new BScroll(wrapper,{
   // ...... 详见配置项
})
```

### vue 使用

```vue
<template>
    <div class="wrapper" ref="wrapper">
        <ul class="content">
            <li>...</li>
            <li>...</li>
            ...
        </ul>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.wrapper, {
                // ...... 详见配置项
            });
        });
    }
};
</script>
```


## Pinia 组合式 API 的 Vue 状态管理库

> [官网](https://pinia.vuejs.org/zh/introduction.html) 

Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 export const state = reactive({}) 来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。

### 安装

```shell
npm install pinia
```

### 使用

```vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```
