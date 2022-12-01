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
<div style="height: 30px"></div>

## NPM 使用库

```shell
# 安装库
npm i begda-ui

#使用库
import begdaUI from './public/begda-ui';
import './public/begda-ui/theme/index.css';
Vue.use(begdaUI);

```


## CDN 使用库

我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看
unpkg.com。

```shell
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/begda-ui@0.0.17/dist/theme/index.mini.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/begda-ui@0.0.17/dist/begda-ui.umd.mini.js"></script>

```


## Hello world
通过 CDN 的方式我们可以很容易地使用 Element 写出一个 Hello world 页面。在线演示

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!-- import CSS -->
    <link rel="stylesheet" href="https://unpkg.com/begda-ui@0.0.17/dist/theme/index.mini.css">
</head>
<body>
<div id="app">
    <ba-panel>面板</ba-panel>
</div>
</body>
<!-- import Vue before Element -->
<script src="https://unpkg.com/vue@2/dist/vue.js"></script>
<!-- import JavaScript -->
<script src="https://unpkg.com/begda-ui@0.0.17/dist/begda-ui.umd.mini.js"></script>

<script>
    new Vue({
        el: '#app',
        data: function () {
            return {visible: false}
        }
    })
</script>
</html>
```



::: slot footer
MIT Licensed | Copyright © 2022
:::
