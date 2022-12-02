import pkg from '../package.json' assert {type: 'json'};
import copy from "rollup-plugin-copy";
import resolve from "@rollup/plugin-node-resolve"; //帮助寻找node_modules里的包
import vuePlugin from "rollup-plugin-vue"; //vue2 必须用 rollup-plugin-vue^5.1.9 + vue-template-compiler 这两个组合
import commonjs from "@rollup/plugin-commonjs"; // 用于将 CommonJS 模块转换为 ES6
import babel from "@rollup/plugin-babel"; // rollup 的 babel 插件，ES6转ES5
import postcss from "rollup-plugin-postcss";
import pxtorem from "postcss-pxtorem";
import json from "@rollup/plugin-json";
import tailwindcss from "tailwindcss";
import tailwindConfig from "../tailwind.config.js";
import terser from "@rollup/plugin-terser";
import watch from "rollup-plugin-watch";
// import livereload from "rollup-plugin-livereload";
// import serve from "rollup-plugin-serve";

// 先定义一个 base 配置 ${pkg.name} v${pkg.version}
// 创建打包文件的头部信息
const createBanner = () => {
    return `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}
  * @license ISC
  */`;
};
const ENV = process.env.NODE_ENV;
const isProductionEnv = process.env.NODE_ENV === "production";

export default [
    {
        external: ["lodash", "vue",'vant',"echarts"], //外部库， 使用'umd'文件时需要先引入这个外部库
        input: "packages/index.js",
        output: [
            {
                file: "dist/begda-ui/index.js",
                format: "umd",
                name: "BegdaUI",
                sourcemap: true,
                banner: createBanner(),
                globals: {
                    vue: "Vue",
                    lodash: "_",
                    echarts: "echarts",
                },
            }
        ],
        //有顺序
        plugins: [
            json(),
            resolve(), //解决第三方依赖打包问题
            commonjs(),
            //在上面处理好以后,才能运行vue插件,否则就不会编译vue文件 vue自带有 less  scss 解析库,不用专门配置安装
            vuePlugin({
                css: false, //提取vue中的css到 dist目录
            }),

            //这个是全局把es6 转换为es5的插件
            babel({
                babelHelpers: "bundled",
                include: 'node_modules/**',
                // exclude: 'node_modules/**'
            }),

            //postcss自带有 less  scss 解析库,不用专门配置安装
            postcss({
                // include: ['node_modules/**'],
                // modules: true,  //具有单独命名空间的css
                extract: "theme/index.css",
                sourceMap: true,
                // minimize: true,  //压缩
                // exclude: ['node_modules/**'],
                plugins: [
                    tailwindcss(tailwindConfig),
                    pxtorem({
                        rootValue: 16, //表示根元素html的fontSize值,一般都是16像素的字体
                        propList: ['*'], //设置px转换成rem的属性值，*表示所有属性的px转换为rem
                    })
                ],
            }),

            //复制资源文件到 dist目录
            copy({
                targets: [
                    {
                        src: "packages/theme/src/images",
                        dest: "dist/theme",
                    },
                    {
                        src: "packages/theme/src/images",
                        dest: "dist/begda-ui/theme",
                    },
                ],
            }),
            // terser(),

            // serve({
            //   openPage:'dist/index.html',
            //   open: true, // 是否打开浏览器
            //   contentBase: ".", //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
            //   host: "localhost",
            //   port: 8020, //端口号，默认10001
            // }),
            // livereload("dist/"), //watch dist目录，当目录中的文件发生变化时，刷新页面
        ],
    },
];
