import { version } from '../package.json' assert { type: 'json' };

import Icon from 'vant/lib/icon';
import Cell from 'vant/lib/cell';
import CellGroup from 'vant/lib/cell-group';
import Field from 'vant/lib/field';
// import DatetimePicker from 'vant/lib/datetime-picker';
// import Popup from 'vant/lib/popup';
import ActionSheet from 'vant/lib/action-sheet';

import 'vant/lib/cell/style';
import 'vant/lib/cell-group/style';
import 'vant/lib/field/style';
// import 'vant/lib/popup/style';
import 'vant/lib/action-sheet/style';
import 'vant/lib/datetime-picker/style';
import 'vant/lib/icon/local.css';

// import 'vant/lib/index.css';
//导入datav的组件
import borderBox11 from '@jiaminghi/data-view/src/components/borderBox11/index.js';
import borderBox12 from '@jiaminghi/data-view/src/components/borderBox12/index.js';
import borderBox13 from '@jiaminghi/data-view/src/components/borderBox13/index.js';
import borderBox9 from '@jiaminghi/data-view/src/components/borderBox9/index.js';

//导入element的组件
import Scrollbar from 'element-ui/lib/scrollbar.js';
import 'element-ui/lib/theme-chalk/scrollbar.css';
import Loading from 'element-ui/lib/loading.js';
import 'element-ui/lib/theme-chalk/loading.css';
import Select from 'element-ui/lib/select.js';
import Option from 'element-ui/lib/option.js';
import OptionGroup from 'element-ui/lib/option-group.js';
import 'element-ui/lib/theme-chalk/select.css';
import 'element-ui/lib/theme-chalk/icon.css';

//我自己写的组件,强依赖上面的组件
import { Panel, BaPanel, BaPanelData } from './panel/index';
import { BaScrollbar } from './scrollbar/index';
import { BaSelect } from './select/index';
import { BaCell } from './cell/index';
import { BaWebView } from './webview/index';
import { BaChart } from './chart/index';
import { BaPlatform } from './plateform/index';
import { Platforms } from './plateform/src/platforms';
import { BaEnv } from './env/index';
import { Env } from './env/src/env';

import './theme/src/tailwind-main.css'; //tailwind配置导入
import './theme/src/index.less';

//我自己写的组件都在这里注册
const components = [Panel, BaPanel, BaPanelData, BaScrollbar, BaSelect, BaCell, BaWebView, BaChart, BaPlatform, BaEnv];
const install = function (Vue, opts = {}) {
    //datav组件库
    Vue.use(borderBox11);
    Vue.use(borderBox12);
    Vue.use(borderBox13);
    Vue.use(borderBox9);
    //element-ui组件库
    Vue.use(Scrollbar);
    Vue.use(Loading);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(OptionGroup);
    //vant组件库
    Vue.use(Icon);
    Vue.use(Cell);
    Vue.use(CellGroup);
    Vue.use(Field);
    // Vue.use(Popup);
    Vue.use(ActionSheet);
    // Vue.use(DatetimePicker);

    //加载自己的组件
    components.forEach(component => {
        Vue.component(component.name, component);
    });

    // Vue.use(borderBox1);

    // Vue.prototype.$ELEMENT = {
    //     size: opts.size || '',
    //     zIndex: opts.zIndex || 2000
    // };

    // Vue.prototype.$loading = Loading.service;
    // Vue.prototype.$msgbox = MessageBox;
    // Vue.prototype.$alert = MessageBox.alert;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.prototype.$notify = Notification;
    // Vue.prototype.$message = Message;

    Vue.prototype.$BaPlatforms = Platforms; // 给vue注册运行平台判断代码
    Vue.prototype.$BaEnv = Env; // 给vue注册运行平台判断代码
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);

    //下面这个是,配合tailwindcss 做暗色模式的js
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light';

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark';

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme');
}

/***
 在es模块中， 能被按需引入的变量需要用这些方式导出：
 export const a = 1
 export function a(){}
 export { a, b }
 而不能使用export default
 ***/
export default {
    install,
    version: version,
    BaScrollbar,
    Panel,
    BaPanel,
    BaPanelData,
    BaChart,
    BaSelect,
    BaCell,
    BaWebView,
    BaPlatform,
    Platforms,
    Env
};
