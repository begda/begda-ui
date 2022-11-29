<template>
  <div>
    <div style="position: fixed; top: 10px; right: 10px; color: #5ba17c">
      <template v-for="item in nav">
        <a :href="`.${item.link}`">{{ item.text }}</a> &nbsp;&nbsp;
      </template>
    </div>
    <div
      style="
        padding-bottom: 180px;
        padding-top: 180px;
        text-align: center;
        background-color: #2d71b5;
        background-image: url(./begda-ui/images/bg.jpg);
        background-size: auto;
        color: #ffffff;
      "
    >
      <img :src="logo" style="width: 120px; border-radius: 50%; padding: 5px; background: #ffffff; margin: auto" />
      <div style="font-size: 40px; margin-bottom: 20px; margin-top: 10px">{{ $site.locales['/'].title }}</div>
      <h3 style="font-size: 20px; color: #fbec56">{{ $site.locales['/'].description }}</h3>
    </div>
    <div style="padding: 20px; text-align: center; margin-top: 30px">
      <h1>我自己常用的项目</h1>
      <div style="height: 20px"></div>
      <h4>这些项目都是频繁使用或者需要查看手册的项目</h4>
    </div>

    <div style="width: 1200px; margin: auto">
      <div style="display: flex; flex-wrap: wrap">
        <div v-for="(item, key) in sidebar" style="width: 25%">
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
        <a :href="`.${item.link}`">{{ item.text }}</a> |
      </template>
    </div>
  </div>
</template>

<script>
import Panel from '../../../../packages/panel/src/panel2';
import BaPanelData from '../../../../packages/panel/src/panel-data';
export default {
  name: 'home',
  components: { BaPanelData, Panel },
  data() {
    return {
      logo: '',
      nav: [],
      sidebar: [],
      Copyright: '0000',
      author: {}
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
    console.log(this.$site);
  },
  methods: {
    onClick(key, item) {
      if (item) {
        window.open(`${key}${item}.html`);
      } else {
        window.open(`${key}`);
      }
    }
  }
};
</script>

<style scoped></style>
