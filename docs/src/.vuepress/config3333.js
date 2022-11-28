var path= require("path")
// console.log(path.resolve('public','vuepress'))

module.exports = {
    title: '书籍学习日志',
    description: '学习系统文章的记录',
    base: '/vuepress/',
    port: 4002,
    dest: path.resolve('public', 'vuepress'), //编译输出目录
    head: [
        ['link', {rel: 'stylesheet', href: '/css/css.css'}]
    ],
    markdown: {
        lineNumbers: true, // 代码块显示行号
        // markdown-it-anchor 的选项
        anchor: {permalink: true},
        // markdown-it-toc 的选项
        toc: {includeLevel: [1, 2, 3,4]},
        config: md => {
            // 使用更多的 markdown-it 插件!
            // md.use(require('markdown-it-***'))
        }
    },
    // theme: 'reco', //设置主题
    theme: require.resolve('./vuepress-theme-reco'), //设置主题
    themeConfig: {

        // mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        // modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
        noFoundPageByTencent: false, //关闭公益广告
        author: '田辽辉', //设置全局作者姓名
        type: 'blog', //设置首页为blog组件
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '更新时间', // 文档更新时间：每个文件git最后提交的时间
        displayAllHeaders: false, // 默认值：false 侧边栏折叠所有页面的左侧标题链接
        activeHeaderLinks: true, // 默认值：true
        // search: true,
        searchMaxSuggestions: 10,
        nav: [
            {text: '博客首页', link: 'http://blog.tianliaohui.com/'},
            {text: '书籍首页', link: '/'},
            {text: '梅花易数', link: '/易经/梅花易数/首页'}, // 内部链接 以docs为根目录
            {text: '爻辞', link: '/易经/爻辞/爻辞首页'}, // 外部链接
            {text: '小说', link: '/小说/首页'}, // 外部链接
            {text: '收藏', link: '/收藏/网址'}, // 外部链接

            // // 下拉列表
            // {
            //     text: 'GitHub',
            //     items: [
            //         { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
            //         {
            //             text: '算法仓库',
            //             link: 'https://github.com/OBKoro1/Brush_algorithm'
            //         }
            //     ]
            // }
        ],
        // sidebar:'auto'
        //为以下路由添加侧边栏
        sidebar: {
            '/收藏/': ['网址', '语言精句'],
            '/易经/爻辞/': [
                {title: '乾', collapsable: true, children: ['乾/乾', '乾/九二', '乾/九三', '乾/九四', '乾/九五']},
                {title: '坤', collapsable: true, children: ['坤/坤']}
            ],
            '/易经/梅花易数/': [
                {title: '卷一', collapsable: true, children: ['卷一/象数义理', '卷一/起卦', '卷一/卦例/物卦起例', '卷一/卦例/自己的']},
                {title: '解卦', collapsable: true, children: ['解卦/体克用', '解卦/解卦诀窍', '解卦/起卦']},
            ],

            '/小说/':[
                {title: '我在明朝开淘宝', collapsable: true, children: ['我在明朝开淘宝/首页', '我在明朝开淘宝/第一次穿越']},
                {title: '来自未来的男人', collapsable: true, children: [ '来自未来的男人/首页']},
                {title: '素材', collapsable: true, children: ['素材/首页', '素材/人物/刘汉东2','素材/人物/朱小强']}
            ],

        }

    }

}
