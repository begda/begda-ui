<template>
  <van-cell :is-link="isLink" class="cell-box">
    <div class="cell-box-header">
      <div class="cell-box-title">{{ title }}</div>
      <div class="cell-box-value">{{ value }}</div>
    </div>
    <div class="cell-box-label" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="cell-box-label" v-else>
      {{ label }}
    </div>
  </van-cell>
</template>

<script>
export default {
  name: 'BaCell',
  props: {
    title: { type: String, default: '' },
    value: { type: String, default: '' },
    label: { type: String, default: '' },
    isLink: { type: Boolean, default: false }
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped></style>
