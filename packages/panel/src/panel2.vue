<template>
  <div>
    <div class="cardsss">啊上的发上</div>

    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div class="shrink-0">asdfasdfas</div>
      <div>
        <div class="text-xl font-medium text-black">asdfas</div>
        <p class="text-slate-500">asdfasd</p>
      </div>
    </div>
    。

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
    </el-row>

    <el-button type="text">文字按钮</el-button>
    <el-button type="text" disabled>文字按钮</el-button>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>
    </el-row>
    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <!-- ... -->
          </svg>
        </span>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
        space.
      </p>
    </div>

    <button class="btdddd">less设置的</button>
    <button class="btnaa">mian.css设置的</button>
    <button
      class="transition duration-300 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
    >
      拼装出来的d
    </button>
    <div class="text-red-500 dark:text-blue-500">啊上的发上的发</div>

    <div class="heise">
      <h1 class="aaaa bg-blue-500">Dark mode is here!</h1>
      <div class="aaaa">Lorem ipsum...</div>
    </div>
    <div ref="panel" :style="panelStyle" :class="[className, shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow']">
      <!--    最顶部区域-->
      <template v-if="title">
        <div class="begda-panel__header" ref="header" style="display: flex; justify-content: space-between">
          <div class="begda-panel__header-title">{{ title }}</div>
          <template v-if="action">
            <div @click="$emit('action')" class="begda-panel__header-action">{{ action }}</div>
          </template>
          <template v-else>
            <div>
              <slot name="action"></slot>
            </div>
          </template>
        </div>
      </template>
      <template v-else>
        <div ref="header">
          <slot name="header"></slot>
        </div>
      </template>

      <!--    头部区域-->
      <div v-if="$slots.top" ref="top" class="top">
        <slot name="top"></slot>
      </div>

      <!--    中间区域-->
      <template v-if="scroll">
        <scrollbar class="begda-scrollbar" :style="scrollStyle">
          <div class="begda-panel__body" :style="bodyStyle" ref="body" v-loading="loading">
            <slot></slot>
          </div>
        </scrollbar>
      </template>
      <template v-else>
        <div class="begda-panel__body" :style="bodyStyle" ref="body" v-loading="loading">
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
      scrollStyle: { height: '' },
      bodyStyle: { height: '' },
      panelStyle: { height: '' }
    };
  },
  props: {
    title: { type: String, default: '' },
    action: { type: String, default: '' }, //如果title存在,action才回生效
    scroll: { type: Boolean, default: true }, //是否滚动,默认是滚动的
    fullWindow: { type: Boolean, default: false }, //充满窗口,
    height: { type: Number, default: null }, //设置高度
    loading: { type: Boolean, default: false }, //设置高度
    padding: { type: Boolean, default: true }, //中间区域默认填充
    className: { type: String, default: 'begda-panel' }, //中间区域默认填充

    shadow: { type: String } //显示阴影
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
      if (!self.padding) {
        // 设置padding
        self.bodyStyle.padding = 0;
      }
      //窗口全屏,才设置panel的高度为整个窗口的高度
      if (self.fullWindow) {
        self.panelStyle.height = `${winHeight}px`; //设置为当前窗口的高度
      } else {
        self.panelStyle.height = `${self.height}px`;
      }

      self.scrollStyle.height = `calc(100% - ${otherHeight}px)`; //设置中间区域高度
      const bodyHeight = domRef(this.$refs.body).height(); //获取中间区域的高
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
