<template>
  <svg class="circular" viewBox="25 25 50 50">
    <circle class="path" cx="50" cy="50" r="20" fill="none" />
  </svg>
</template>

<script>
export default {
  name: 'BaLoading',
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
<style scoped>
body,
html {
  background: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
.circular {
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;
}

.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
}

@keyframes loading-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>
