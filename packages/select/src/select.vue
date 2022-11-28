<template>
  <div>
    <div class="p-3">
      <van-cell-group>
        <van-cell is-link title="基础用法到底多" @click="show2 = true" />
        <van-cell is-link title="基础用法ddd" @click="show = true" />
      </van-cell-group>
      <van-action-sheet v-model="show" :actions="actions" />

      <van-action-sheet v-model="show2" :actions="actions" title="标题">
        <div class="content">内容</div>
      </van-action-sheet>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaSelect',
  data() {
    return {
      show: false,
      show2: false,
      actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]
    };
  },
  props: {
    isNavbar: { type: Boolean, default: true },
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

    shadow: { type: String, default: 'always' } //显示阴影
  },
  computed: {},
  created: function () {},
  mounted: function () {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
