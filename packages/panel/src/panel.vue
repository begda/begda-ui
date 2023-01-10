<template>
    <div>
        <div ref="panel" :style="panelStyle" :class="[className, isShadow]">
            <template v-if="isNavbar">
                <template v-if="$slots.header">
                    <div ref="header">
                        <slot name="header"></slot>
                    </div>
                </template>
                <template v-else>
                    <div class="begda-panel__header h-[50px]" :style="headerStyle" ref="header">
                        <div class="begda-panel__header-left">
                            <template v-if="$slots.left">
                                <slot name="left"></slot>
                            </template>
                            <template v-else>
                                <div class="flex justify-between text-hover" @click="$emit('left')">
                                    <div>
                                        <i class="el-icon-arrow-left" v-if="leftArrow"></i>
                                    </div>
                                    <div v-if="leftText">{{ leftText }}</div>
                                </div>
                            </template>
                        </div>
                        <div :class="['begda-panel__header-title', titlePositionClass]">{{ title }}</div>
                        <div class="begda-panel__header-right">
                            <template v-if="$slots.right">
                                <slot name="right"></slot>
                            </template>
                            <template v-else>
                                <div class="flex justify-between text-hover" @click="$emit('right')">
                                    <div v-if="rightText">{{ rightText }}</div>
                                    <div>
                                        <i class="el-icon-arrow-right" v-if="rightArrow"></i>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </template>
            <!--    头部区域-->
            <div v-if="$slots.top" ref="top" class="top">
                <slot name="top"></slot>
            </div>

            <!--    中间区域-->
            <template v-if="scroll">
                <!--              使用滚动条-->
                <ba-scrollbar :style="bodyStyle">
                    <div :class="bodyClass" ref="body" v-loading="loading">
                        <slot></slot>
                    </div>
                </ba-scrollbar>
            </template>
            <template v-else>
                <!--              不使用滚动条-->
                <div :class="[...bodyClass]" ref="body" v-loading="loading">
                    <slot></slot>
                </div>
            </template>

            <!--底部-->
            <div v-if="$slots.bottom" ref="bottom">
                <slot name="bottom" />
            </div>

            <!--  底部bar  -->
            <div v-if="$slots.bottombar" ref="bottombar">
                <slot name="bottombar" />
            </div>
        </div>
    </div>
</template>
<script>
import { domRef } from '../../uitl';

export default {
    name: 'Panel',
    data() {
        return {
            bodyStyle: { height: '' },
            panelStyle: { height: '' },
            bodyClass: ['begda-panel__body']
        };
    },
    props: {
        isNavbar: { type: Boolean, default: true }, //是否显示顶部
        title: { type: String, default: '' },
        titlePosition: { type: String, default: 'center' }, //标题位置, left center right 三个方向
        leftText: { type: String, default: '' }, //左侧文字
        rightText: { type: String, default: '' }, //右侧文字
        leftArrow: { type: Boolean, default: false }, //左侧箭头
        rightArrow: { type: Boolean, default: false }, //右侧箭头
        scroll: { type: Boolean, default: true }, //是否滚动,默认是滚动的
        fullWindow: { type: Boolean, default: false }, //充满窗口,
        height: { type: Number, default: null }, //设置高度
        loading: { type: Boolean, default: false }, //设置高度
        padding: { type: Boolean, default: true }, //中间区域默认填充
        className: { type: String, default: 'begda-panel' }, //中间区域默认填充
        shadow: { type: String, default: 'always' }, //显示阴影

        //设置头部样式
        headerStyle: {
            type: [Object],
            default() {
                return { backgroundColor: '#ffffff' };
            }
        }
    },
    computed: {
        isShadow() {
            switch (this.shadow) {
                case 'always':
                    return 'shadow-md';

                case 'hover':
                    return ' hover:shadow-md';

                case 'never':
                    return '';
            }
        },
        titlePositionClass() {
            switch (this.titlePosition) {
                case 'left':
                    return 'text-left';

                case 'center':
                    return 'text-center';

                case 'right':
                    return 'text-right';
            }
        }
    },
    created: function () {},
    mounted: function () {
        this.viewResize();
    },
    methods: {
        view() {
            let self = this;
            const winHeight = window.innerHeight; // 窗口高度
            const headerHeight = domRef(this.$refs.header).height(); // header高度
            const topHeight = domRef(this.$refs.top).height();
            const bottomHeight = domRef(this.$refs.bottom).height();
            const bottombarHeight = domRef(this.$refs.bottombar).height();
            const otherHeight = headerHeight + topHeight + bottomHeight + bottombarHeight; //上面所有高度的和
            let bodyHeight = winHeight - otherHeight; //获取中间区域的高
            // 设置padding
            if (self.padding) {
                self.bodyClass.push('p-3');
            }
            //窗口全屏,才设置panel的高度为整个窗口的高度
            if (self.fullWindow) {
                self.panelStyle.height = `${winHeight}px`; //设置为当前窗口的高度
            } else {
                self.panelStyle.height = `${self.height}px`;
            }
            self.bodyStyle.height = `calc(100% - ${otherHeight}px)`; //设置中间区域高度
            const bodyWidth = domRef(this.$refs.body).width(); //获取中间区域的宽
            self.$emit('resize', bodyHeight, bodyWidth); //获取面板宽高事件
        },
        // 根据窗口大小实时改变
        viewResize() {
            this.view();
            window.addEventListener('resize', () => {
                this.view();
            });
        }
    }
};
</script>
<style lang="less" scoped></style>
