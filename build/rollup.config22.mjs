import {nodeResolve} from '@rollup/plugin-node-resolve' //帮助寻找node_modules里的包
import vuePlugin from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs' // 用于将 CommonJS 模块转换为 ES6
import babel from '@rollup/plugin-babel' // rollup 的 babel 插件，ES6转ES5
import less from 'rollup-plugin-less';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default [
    {
        input: 'packages/index.js',
        output: [
            {
                file: 'dist/begda-ui.umd.js', format: 'iife', name: 'begdaUI',
                globals:{'begdaUI':'begdaUI'},
                plugins: []
            },
            // {file: 'dist/begda-ui.umd.js', format: 'umd', name: 'begdaUI', plugins: [terser()]},
            // {
            //     file: 'dist/begda-ui.es5.js', format: 'es',
            //     plugins: [
            //         getBabelOutputPlugin({presets: ['@babel/preset-env']}) //这个是把es6 转换为es5的插件
            //     ]
            // },
            // {file: 'dist/begda-ui.cjs.js', format: 'cjs'},
            // {file: 'dist/begda-ui.es.js', format: 'es'}
        ],
        //有顺序 先调用vue插件,才能保证 commonjs插件正常运行
        plugins: [
            vuePlugin(),
            json(),
            //这个是全局把es6 转换为es5的插件
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**'
            }),
            nodeResolve(),  //解决第三方依赖打包问题
            commonjs(),
            less({exclude: ['node_modules/**'], output: 'dist/begda-ui.css'}),
            terser()
        ],
        global: {
            'jquery': '$' //告诉rollup 全局变量$即是jquery
        },
        external: ['lodash', 'Vue']
    }
]
