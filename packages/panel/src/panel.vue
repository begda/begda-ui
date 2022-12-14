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
            <!--    ????????????-->
            <div v-if="$slots.top" ref="top" class="top">
                <slot name="top"></slot>
            </div>

            <!--    ????????????-->
            <template v-if="scroll">
                <!--              ???????????????-->
                <ba-scrollbar :style="bodyStyle">
                    <div :class="bodyClass" ref="body" v-loading="loading">
                        <slot></slot>
                    </div>
                </ba-scrollbar>
            </template>
            <template v-else>
                <!--              ??????????????????-->
                <div :class="[...bodyClass]" ref="body" v-loading="loading">
                    <slot></slot>
                </div>
            </template>

            <!--??????-->
            <div v-if="$slots.bottom" ref="bottom">
                <slot name="bottom" />
            </div>

            <!--  ??????bar  -->
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
        isNavbar: { type: Boolean, default: true }, //??????????????????
        title: { type: String, default: '' },
        titlePosition: { type: String, default: 'center' }, //????????????, left center right ????????????
        leftText: { type: String, default: '' }, //????????????
        rightText: { type: String, default: '' }, //????????????
        leftArrow: { type: Boolean, default: false }, //????????????
        rightArrow: { type: Boolean, default: false }, //????????????
        scroll: { type: Boolean, default: true }, //????????????,??????????????????
        fullWindow: { type: Boolean, default: false }, //????????????,
        height: { type: Number, default: null }, //????????????
        loading: { type: Boolean, default: false }, //????????????
        padding: { type: Boolean, default: true }, //????????????????????????
        className: { type: String, default: 'begda-panel' }, //????????????????????????
        shadow: { type: String, default: 'always' }, //????????????

        //??????????????????
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
            const winHeight = window.innerHeight; // ????????????
            const headerHeight = domRef(this.$refs.header).height(); // header??????
            const topHeight = domRef(this.$refs.top).height();
            const bottomHeight = domRef(this.$refs.bottom).height();
            const bottombarHeight = domRef(this.$refs.bottombar).height();
            const otherHeight = headerHeight + topHeight + bottomHeight + bottombarHeight; //????????????????????????
            let bodyHeight = winHeight - otherHeight; //????????????????????????
            // ??????padding
            if (self.padding) {
                self.bodyClass.push('p-3');
            }
            //????????????,?????????panel?????????????????????????????????
            if (self.fullWindow) {
                self.panelStyle.height = `${winHeight}px`; //??????????????????????????????
            } else {
                self.panelStyle.height = `${self.height}px`;
            }
            self.bodyStyle.height = `calc(100% - ${otherHeight}px)`; //????????????????????????
            const bodyWidth = domRef(this.$refs.body).width(); //????????????????????????
            self.$emit('resize', bodyHeight, bodyWidth); //????????????????????????
        },
        // ??????????????????????????????
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
