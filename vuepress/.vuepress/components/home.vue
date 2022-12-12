<template>
    <div>
        <!--      大屏幕显示头部-->
        <div class="hidden md:block home-header">
            <div style="position: absolute; top: 10px; right: 10px; color: #5ba17c">
                <template v-for="item in nav">
                    <a :href="`${item.link}`" :target="item.target" style="color: #dbedff">{{ item.text }}</a>
                    &nbsp;&nbsp;
                </template>
            </div>
            <img :src="logo" class="home-header-logo" />
            <div style="font-size: 40px; margin-bottom: 20px; margin-top: 10px; text-shadow: black 0.1em 0.1em 0.1em">
                {{ $site.locales['/'].title }}
            </div>
            <!--            <h3 style="font-size: 20px; color: #fbec56">{{ $site.locales['/'].description }}</h3>-->

            <h3 style="font-size: 20px; color: #eaecef; text-shadow: black 0.1em 0.1em 0.1em">
                {{ headerInfo.hitokoto }}
            </h3>
            <h3 style="font-size: 14px; color: #eaecef; text-shadow: black 0.1em 0.1em 0.1em">{{ headerInfo.from }}</h3>
        </div>
        <!--      小屏幕显示头部-->
        <div class="md:hidden block text-center bg-[#143764] pt-8">
            <img :src="logo" class="home-header-logo" />
            <h1 class="text-white">
                {{ $site.locales['/'].title }}
            </h1>
            <div class="p-3" style="background-color: #022659">
                <template v-for="item in nav">
                    <a :href="`${item.link}`" :target="item.target" style="color: #dbedff">{{ item.text }}</a>
                    &nbsp;&nbsp;
                </template>
            </div>
        </div>

        <!--      中间区域-->
        <div class="md:mx-auto md:w-[1200px] px-5">
            <div class="p-5 text-center mt-4">
                <h1>我自己常用的库</h1>
                <h4>这些库都是频繁使用或者需要查看手册的</h4>
            </div>
            <div class="md:grid md:grid-cols-4 gap-8">
                <!--             显示所有的 lib库-->
                <div v-for="(item, key) in libs">
                    <panel :is-navbar="false" :height="400" :padding="false">
                        <template #top>
                            <div class="panel-header" :style="{ background: item.background }">
                                <div class="language">
                                    <template v-for="item in item.frontmatter.language">
                                        <i style="font-size: 10px"> {{ item }}</i>
                                    </template>
                                </div>
                                <div class="panel-header-title">{{ item.title }}</div>
                                <div class="panel-header-info">
                                    {{ item.frontmatter ? item.frontmatter.description : '' }}
                                </div>
                            </div>
                        </template>
                        <!--                      循环显示文件列表-->
                        <template v-for="(item2, key) in item.children">
                            <!--                          如果有文件列表的话就显示-->
                            <template v-if="item2">
                                <van-cell is-link @click="onClick(item.path, item2)">
                                    <template #title> {{ key + 1 }}.{{ item2 | paiban }} </template>
                                </van-cell>
                            </template>
                            <!--                          没有文件列表的时候显示 md文档的内部标题-->
                            <template v-else>
                                <van-cell
                                    is-link
                                    @click="onClick(item.path + '#' + item3.title)"
                                    v-for="(item3, key3) in item.headers"
                                >
                                    <template #title> {{ key3 + 1 }}.{{ item3.title }} </template>
                                </van-cell>
                            </template>
                        </template>
                    </panel>
                    <!--                  移动端站位用的-->
                    <div class="md:hidden pb-8"></div>
                </div>
            </div>

            <div style="padding: 20px; text-align: center; margin-top: 30px">
                <h1>所有文章</h1>
                <h4>这是给搜索引擎用的</h4>
                <div style="height: 20px"></div>
            </div>
            <!--          显示所有文章-->
            <div class="grid grid-cols-2 gap-5 text-center md:grid-cols-4">
                <div v-for="(item, key) in $site.pages" v-if="item.title">
                    <panel :is-navbar="false" shadow="hover">
                        <a :href="`.${item.path}`">{{ item.title }}</a>
                    </panel>
                </div>
            </div>
        </div>

        <!--      底部-->
        <div style="margin-top: 100px; text-align: center; padding: 20px; border-top: 1px #ececec solid">
            Copyright © {{ Copyright }} | <a :href="author.link">{{ author.name }}</a> |
            <template v-for="item in nav">
                <a :href="`${item.link}`" :target="item.target">{{ item.text }}</a> |
            </template>
            {{ $site.locales['/'].description }}
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
export default {
    name: 'home',
    data() {
        return {
            logo: '',
            nav: [],
            libs: [],
            sidebar: [],
            Copyright: '0000',
            author: {},
            headerInfo: {}
        };
    },
    filters: {
        //去掉前面的数字
        paiban(val) {
            let newVal = val.split('.');
            return newVal[1];
        }
    },
    created() {
        this.logo = '.' + this.$site.themeConfig.logo;
        this.sidebar = this.$site.themeConfig.sidebar;
        this.libs = this.lib();
        this.Copyright = new Date().getFullYear();
        this.author = this.$site.themeConfig.author;
        this.nav = this.$site.themeConfig.nav;
        console.log(this.$site.pages);
        // console.log(this.$page);
        // console.log(this.$frontmatter);
    },
    mounted() {
        //获取每日一言
        fetch('https://v1.hitokoto.cn')
            .then(response => response.json())
            .then(data => {
                this.headerInfo = data;
            });
    },
    methods: {
        //组合lib库数据,给lib添加 frontmatter 的所有数据,用于显示 每个库的简介
        lib() {
            let pages = this.$site.pages;

            let arr = Object.keys(this.sidebar); //获取对象的名字
            let 置顶 = [];
            let 后面的 = [];
            let libArr = []; //存储组合好的 数据
            arr.map(item => {
                if (item != '/Lib/') {
                    let pageArr = []; //存储pages循环的数据
                    pages.map(item2 => {
                        if (item === item2.path) {
                            //如果两个路径一样,就取出frontmatter 数据,里面有当前库的简介
                            pageArr.push(item2);
                        }
                    });
                    libArr.push({
                        ...this.sidebar[item][0],
                        path: item,
                        frontmatter: pageArr[0].frontmatter,
                        order: pageArr[0].frontmatter.order, //获取排序数值
                        background: pageArr[0].frontmatter.background, //获取背景图,或者背景颜色
                        headers: pageArr[0].headers //获取背景图,或者背景颜色
                    });
                }
            });

            // document.getElementById("xxx").scrollIntoView(); 跳转到锚点
            console.log(_.orderBy(libArr, ['order'], ['asc']));

            // `asc` 升序排序 ,  `desc` 以降序排序。
            return _.orderBy(libArr, ['order'], ['asc']);
        },
        onClick(key, item) {
            if (item) {
                window.open(`.${key}${item}.html`);
            } else {
                window.open(`${key}`);
            }
            console.log(key, item);
        }
    }
};
</script>

<style scoped>
h4 {
    margin: 0;
    padding: 0 !important;
}
.home-header {
    padding-bottom: 180px;
    padding-top: 180px;
    text-align: center;
    background-color: #02407a;
    background-image: url('../public/images/bg9.jpg');
    background-size: 100% 100%;
    color: #ffffff;
}

.home-header-logo {
    width: 120px;
    border-radius: 50%;
    padding: 5px;
    background: #ffffff;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.4) 0 0 20px;
}

.panel-header {
    border-radius: 5px 5px 0 0;
    color: #ffffff;
    width: 100%;
    position: relative;
    background: #02407a;
    //font-size: 30px;
    //font-weight: 300;
    text-align: center;
    //line-height: 130px;
    border-bottom: 4px #ffcc00 solid;
    padding-bottom: 20px;
}
.panel-header-title {
    display: inline-block;
    width: 100%;
    font-size: 30px;
    font-weight: 600;
    line-height: 100px;
    height: 80px;
    vertical-align: bottom;
}
.panel-header-info {
    font-size: 13px;
    font-weight: 200;
    line-height: 1.5;
    height: 35px;
    padding: 0 15px;
    text-align: center;
    overflow: hidden;
}

.language {
    color: rgba(255, 255, 255, 0.3);
    position: absolute;
    top: 3px;
    right: 5px;
    height: 10px;
    line-height: 10px;
}
</style>
