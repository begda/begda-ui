# 安装 BegdaUI

### NPM 使用库

```shell
# 安装库
npm i begda-ui

#使用库
import BegdaUI from 'begda-ui';
import 'begda-ui/lib/theme/index.css';
Vue.use(BegdaUI);

```

<div style="height: 30px"></div>

### CDN 使用库

我们建议使用 CDN 引入 BegdaUI 的用户在链接地址上锁定版本，以免将来 BegdaUI 升级时受到非兼容性更新的影响。锁定版本的方法请查看
unpkg.com。

```shell
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/begda-ui@0.0.25/lib/theme/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/begda-ui@0.0.25/lib/index.js"></script>

```

<div style="height: 30px"></div>

### Hello world

通过 CDN 的方式我们可以很容易地使用 BegdaUI 写出一个 Hello world 页面。在线演示

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- import CSS -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/begda-ui@0.0.25/lib/theme/index.css"
    />
  </head>
  <body>
    <div id="app">
      <ba-panel>面板</ba-panel>
    </div>
  </body>
  <!-- import Vue before BeggedUI-->
  <script src="https://unpkg.com/vue@2/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/begda-ui@0.0.25/lib/index.js"></script>

  <script>
    new Vue({
      el: "#app",
      data: function () {
        return { visible: false };
      },
    });
  </script>
</html>
```

## 开发

运行 `pnpm run dev` 启动开发环境

运行` pnpm run tailwind:watch` 监听 packages 文件夹内部组件样式变化,然后生成样式文件
packages/theme/src/tailwind-main.css

导入 `import BegdaUI from 'lib/index.js'` 文件 ,这是编译的组件库

导入 `import 'lib/theme/index.css'` 文件,这是编译的样式文件

```js
import BegdaUI from "lib/index.js"; //这是编译的组件库
import "lib/theme/index.css"; //这是编译的样式文件

Vue.use(BegdaUI); //使用组件库
```
