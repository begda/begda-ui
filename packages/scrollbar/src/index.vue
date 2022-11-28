<template>
  <el-scrollbar class="begda-scrollbar">
    <slot />
  </el-scrollbar>
</template>

<script>
export default {
  name: 'BaScrollbar',
  data() {
    return {
      // scrollWrapper:0
    };
  },
  computed: {
    // scrollWrapper() {
    //   return this.$refs.scrollContainer.$refs.wrap
    // }
  },
  mounted() {
    // this.scrollStyle.height = `calc(100% - 40px)`  //设置滚动条高度
  },
  methods: {
    // 当鼠标滚轮滚动时，控制滚动条移动
    handleScroll(e) {
      // console.log(e)
      // const eventDelta = e.wheelDelta || -e.deltaY * 40
      // const $scrollWrapper = this.$refs.scrollContainer
      // $scrollWrapper.scrollTop = e.deltaY
      this.$emit('scroll');
    }
  }
};
</script>
<style lang="less" scoped></style>
