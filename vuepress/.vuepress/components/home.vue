<template>
    <div>
        <div style="position: absolute; top: 10px; right: 10px; color: #5ba17c">
            <template v-for="item in nav">
                <a :href="`${item.link}`" :target="item.target" style="color: #dbedff">{{ item.text }}</a> &nbsp;&nbsp;
            </template>
        </div>
        <div class="home-header" style="">
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
        <div style="padding: 20px; text-align: center; margin-top: 30px">
            <h1>我自己常用的项目</h1>
            <div style="height: 20px"></div>
            <h4>这些项目都是频繁使用或者需要查看手册的项目</h4>
        </div>

        <div style="width: 1200px; margin: auto">
            <div style="display: flex; flex-wrap: wrap">
                <div v-for="(item, key) in sidebar" style="width: 25%">
                    <template v-if="item[0].title != 'Blog'">
                        <panel :is-navbar="false" :height="400" style="margin: 15px">
                            <template #top>
                                <div
                                    style="
                                        border-radius: 5px 5px 0 0;
                                        color: #ffffff;
                                        width: 100%;
                                        height: 130px;
                                        background: #02407a;
                                        font-size: 30px;
                                        font-weight: 300;
                                        text-align: center;
                                        line-height: 130px;
                                        border-bottom: 4px #ffcc00 solid;
                                    "
                                >
                                    {{ item[0].title }}
                                </div>
                            </template>
                            <template v-for="item2 in item[0].children">
                                <template v-if="!item2">
                                    <van-cell :title="`${item[0].title}首页`" is-link @click="onClick(key)"></van-cell>
                                </template>
                                <template v-else>
                                    <van-cell :title="item2" is-link @click="onClick(key, item2)"></van-cell>
                                </template>
                            </template>
                        </panel>
                    </template>
                </div>
            </div>

            <div style="padding: 20px; text-align: center; margin-top: 30px">
                <h1>所有文章</h1>
                <div style="height: 20px"></div>
                <h4>这是给搜索引擎用的</h4>
            </div>
            <div style="display: flex; flex-wrap: wrap">
                <div v-for="item in $site.pages">
                    <template v-if="item.title">
                        <panel :is-navbar="false" style="margin: 5px" shadow="hover">
                            <a :href="`.${item.path}`">{{ item.title }}</a>
                        </panel>
                    </template>
                </div>
            </div>
        </div>

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
import axios from 'axios';

export default {
    name: 'home',
    data() {
        return {
            logo: '',
            nav: [],
            sidebar: [],
            Copyright: '0000',
            author: {},
            headerInfo: {}
        };
    },
    created() {
        this.logo = '.' + this.$site.themeConfig.logo;
        this.sidebar = this.$site.themeConfig.sidebar;
        this.Copyright = new Date().getFullYear();
        this.author = this.$site.themeConfig.author;
        this.nav = this.$site.themeConfig.nav;
    },
    mounted() {
        //获取每日一言
        axios.get('https://v1.hitokoto.cn').then(res => {
            this.headerInfo = res.data;
        });
    },
    methods: {
        onClick(key, item) {
            if (item) {
                window.open(`.${key}${item}.html`);
            } else {
                window.open(`${key}`);
            }
        }
    }
};
</script>

<style scoped>
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
</style>
