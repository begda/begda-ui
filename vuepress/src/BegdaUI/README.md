---
home: true
autoIgnore: true
heroText: BegdaUI
tagline: 比较适合切换的UI组件库
actionText: 快速上手 →
actionLink: /BegdaUI/01.panel.md

features:
  - title: 啥都不是
    details: 不一定能维护下去。
  - title: 代码挺乱
    details: 就我自己用的,别太当真。
  - title: 依赖很多
    details: 依赖element-ui datav。
---

NPM 使用库
```shell
# 安装库
npm i begda-ui

#使用库
import begdaUI from './public/begda-ui';
import './public/begda-ui/theme/index.css';
Vue.use(begdaUI);

```

CDN 使用库

```shell
# 安装库
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/begda-ui@0.0.17/dist/theme/index.mini.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/begda-ui@0.0.17/dist/begda-ui.umd.mini.js"></script>
#使用库
import begdaUI from './public/begda-ui';
import './public/begda-ui/theme/index.css';
Vue.use(begdaUI);

```

::: slot footer
MIT Licensed | Copyright © 2022
:::
