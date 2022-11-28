<template>
  <div>
    <component v-bind:is="componentName">
      <panel :className="className" v-bind="$attrs" v-on="$listeners" shadow="never">
        <template v-for="(item, key) in $slots">
          <template :slot="key">
            <slot :name="key" />
          </template>
        </template>
      </panel>
    </component>
  </div>
</template>
<script>
export default {
  name: 'BaPanelData',
  data() {
    return {
      className: 'begda-panel-data',
      componentName: 'dv-border-box-11'
    };
  },
  props: {
    theme: { type: String, default: 'panel-1' }
  },
  watch: {
    theme(newData, oldData) {
      this.onTheme(newData);
    }
  },
  created: function () {
    this.onTheme(this.theme);
  },
  mounted: function () {},
  methods: {
    onTheme(data) {
      switch (data) {
        case 'panel-1':
          this.className = 'begda-panel-data';
          this.componentName = 'dv-border-box-12';
          break;
        case 'panel-2':
          this.className = 'begda-panel-data-2';
          this.componentName = 'dv-border-box-11';
          break;
        case 'panel-3':
          this.className = 'begda-panel-data-3';
          this.componentName = 'dv-border-box-13';
          break;
        case 'panel-4':
          this.className = 'begda-panel-data-4';
          this.componentName = 'dv-border-box-9';
          break;
      }
    }
  }
};
</script>
<style lang="less"></style>
