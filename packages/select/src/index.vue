<template>
  <div class="begda-select-input">
    <van-field v-model="model" v-bind="$attrs" :right-icon="showIcon" readonly v-on="$listeners" @click="onClick" />
    <template v-if="selectShow">
      <!--      这里显示的是自定义内容的上拉菜单-->
      <van-action-sheet :round="false" v-model="show2" @close="onClose" v-bind="$props.selectOptions">
        <slot />
      </van-action-sheet>
    </template>
    <template v-else>
      <!--      这里是直接使用上拉菜单的数据赋值的上拉菜单-->
      <van-action-sheet
        :round="false"
        v-model="show"
        v-bind="$props.selectOptions"
        @select="onSelect"
        @cancel="$emit('cancel')"
        ><slot />
      </van-action-sheet>
    </template>

    <!--    充当分割线使用-->
  </div>
</template>

<script>
export default {
  name: 'BaSelect',
  props: {
    // 输入框的 v-model绑定值
    value: { type: String, default: '' },
    // 在定义上拉菜单内容时候需要用这个参数来控制 菜单的展示和隐藏, 'show'是显示,'hide'是隐藏
    selectShow: { type: String, default: null },
    // 上拉菜单传入的配置参数
    selectOptions: { type: Object, default: null }
  },
  data() {
    return {
      show: false, //这里是直接使用上拉菜单的数据赋值的上拉菜单的显示隐藏参数
      show2: false //这里显示的是自定义内容的上拉菜单的显示隐藏控制参数
    };
  },
  computed: {
    // 在这里改变 输入框的 v-model
    model: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.value = newVal;
      }
    },

    showIcon() {
      if (this.show) {
        return 'arrow-up';
      } else {
        return 'arrow-down';
      }
    }
  },
  watch: {
    // 监控 自定义上拉菜单显示隐藏参数,并且把值传给 show2,开控制上拉菜单的显示隐藏
    selectShow(newData, oldData) {
      if (newData === 'show') {
        this.show2 = true;
      } else if (newData === 'hide') {
        this.show2 = false;
      } else {
        this.show2 = false;
      }
    }
  },
  mounted() {},
  methods: {
    // 输入框点击以后的事件,主要用于展示和隐藏上拉菜单
    onClick() {
      this.show = !this.show;
      this.show2 = !this.show2;
      if (this.show || this.show2) {
        return 'arrow-up';
      } else {
        return 'arrow-down';
      }
      this.$emit('click');
    },
    // 默认上拉菜单 点击菜单项以后触发的事件
    onSelect(obj) {
      this.show = false;
      this.$emit('select', obj);
    },
    onClose() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="less"></style>
