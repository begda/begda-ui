<template>
    <div>
        <!--              循环所有平台名字-->
        <div v-for="item in platformArr">
            <!--      平台返回的name 和当前props传入的name 都一样才会显示插槽-->
            <template v-if="platformName === name && item === name">
                <slot></slot>
            </template>
        </div>
    </div>
</template>
<script>
/*
 * 这里说一下 这个组件的思路
 *
 * 先导入platform js文件,这个文件主要是来判断是在那个平台下面,然后返回一个对象集合,
 * 每个单独的属性,都回返回当前判断好的运行平台的名字
 *
 * 用Object.keys(Platform) 这个方法把对象的集合的名字都取出来,然后返回一个数组.
 * 拿到这个数组,就开始循环Platform对象集合,然后把回调方法返回的值赋值给组件的 platformName 变量
 * 这个platformName变量,就是给组件html使用的确认当前运行环境的值
 *
 * */

import { Platforms } from './platforms';
export default {
    name: 'BaPlatform',
    props: {
        name: { type: String, default: null } //是否在弹窗里显示地图
    },
    data() {
        return {
            platformName: '',
            platformArr: []
        };
    },
    mounted() {
        this.platformArr = Object.keys(Platforms); //获取所有的平台名字,变成一个数组
        this.platformArr.map(item => {
            //通过props传入的组件调用的值,来确定是否在那个平台运行
            if (this.name === item) {
                Platforms[item](res => {
                    this.platformName = res;
                });
            }
        });
    }
};
</script>
<style lang="less" scoped></style>
