<template>
    <div>
        <!--      循环所有平台名字-->
        <template v-for="item in envArr">
            <!--      平台返回的name 和当前props传入的name 都一样才会显示插槽-->
            <template v-if="envName === name && item === name">
                <slot></slot>
            </template>
        </template>
    </div>
</template>
<script>
/*
 * 这里说一下 这个组件的思路  这个是模仿 plateform组件写的,代码都一样,就是变量名字不一样
 *
 * 先导入useEnv js文件,这个文件主要是来判断是在那个平台下面,然后返回一个对象集合,
 * 每个单独的属性,都回返回当前判断好的运行平台的名字
 *
 * 用Object.keys(useEnv) 这个方法把对象的集合的名字都取出来,然后返回一个数组.
 * 拿到这个数组,就开始循环Platform对象集合,然后把回调方法返回的值赋值给组件的 envName 变量
 * 这个envName变量,就是给组件html使用的确认当前运行环境的值
 *
 * */

import { Env } from './env';

export default {
    name: 'BaEnv',
    props: {
        name: { type: String, default: null } //是否在弹窗里显示地图
    },
    data() {
        return {
            envName: '',
            envArr: []
        };
    },
    mounted() {
        this.envArr = Object.keys(Env); //获取所有的平台名字,变成一个数组
        this.envArr.map(item => {
            //通过props传入的组件调用的值,来确定是否在那个平台运行
            if (this.name === item) {
                Env[item](res => {
                    this.envName = res;
                });
            }
        });
    }
};
</script>
<style lang="less" scoped></style>
