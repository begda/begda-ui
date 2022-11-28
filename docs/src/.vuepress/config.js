/** @format */

const path = require('path');
// console.log(path.resolve('public','vuepress'))
module.exports = {
  // docs/.vuepress/theme/plugin/util/index.js

  //处理 element-ui core-js版本错误问题
  chainWebpack(config) {
    //在https://github.com/vuejs/vuepress/issues/2275中发现，原来是element ui依赖core-js的2.x版本，而webpress项目依赖core-js的3.x版本导致的
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },
  base: '/', //连接的基础路径
  port: 4002,
  dest: path.resolve('docs', 'dist'), //编译输出目录
  // 国际化相关
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'Begda',
      description: '学习系统文章的记录'
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/css/css.css' }],
    //高德地图key
    ['script', { src: `https://webapi.amap.com/maps?v=1.4.15&key=abb89bfe34e5be2fe527764105154410` }]
    // ['script', { src: 'https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/locale/af.js' }]
    // ['script', { src: 'https://unpkg.com/element-ui/lib/index.js' }]
  ],
  // theme: require.resolve('./vuepress-theme-reco'), //设置主题
  markdown: {
    lineNumbers: true, // 代码块显示行号
    extractHeaders: ['h2', 'h3'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    // // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // // markdown-it-toc 的选项
    toc: { includeLevel: [2, 3, 4] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-***'))
    }
  },
  plugins: [
    'demo-container',
    [
      'vuepress-plugin-auto-sidebar' //自动侧边栏菜单生成工具
    ]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    smoothScroll: true, //启用页面滚动效果。
    // mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    // modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
    noFoundPageByTencent: false, //关闭公益广告
    // type: 'blog', //设置首页为blog组件
    sidebarDepth: 1, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: '更新时间', // 文档更新时间：每个文件git最后提交的时间
    activeHeaderLinks: true, // 默认值：true
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: '首页', link: '/' },
      { text: 'BegdaUI', link: '/BegdaUI/' },
      { text: 'Blog', link: '/Blog/' }
    ],
    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'begda', // 必需
      link: 'https://github.com/xugaoyi' // 可选的
    }
  }
};
