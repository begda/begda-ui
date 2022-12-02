// import dataV from '@jiaminghi/data-view/dist/datav.map.vue';
// import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import Vant from 'vant';
// import 'vant/lib/index.css';
import BegdaUI from '../../dist/begda-ui';
import '../../dist/begda-ui/theme/index.css';
console.log(BegdaUI);
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
    // Vue.use(dataV);
    // Vue.use(Element);
    // Vue.use(Vant);
    Vue.use(BegdaUI);
};
