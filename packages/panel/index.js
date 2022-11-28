import Panel from './src/panel.vue';
import BaPanelData from './src/panel-data.vue';
let BaPanel = { ...Panel, name: 'BaPanel' }; //重新设置组件名字
const components = [Panel, BaPanel, BaPanelData];
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export { Panel, BaPanel, BaPanelData };
