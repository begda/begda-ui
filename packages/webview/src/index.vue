<template>
    <div class="ba-web-view">
        <iframe ref="webview" @load="load" :src="src" :style="webviewStyle" />
    </div>
</template>

<script>
export default {
    name: 'BaWebView',
    data() {
        return {
            webviewStyle: {
                width: '100%',
                padding: 0,
                margin: 0,
                border: 'none',
                height: '0'
            }
        };
    },
    watch: {
        height(newData, oldData) {
            this.view();
        }
    },
    props: {
        src: { type: String, default: null },
        height: { type: Number, default: 0 }
    },
    computed: {},
    mounted() {
        let self = this;
        this.$nextTick(() => {
            this.view();
        });
    },
    methods: {
        load() {
            this.$emit('load', 'load');
        },
        view() {
            let self = this;
            const winHeight = window.innerHeight; // 窗口高度
            let webview = this.$refs.webview;
            //如果设置了高度,就用设置的, 没有的话iframe就用窗口的高度
            if (self.height) {
                webview.style.height = `${self.height}px`;
            } else {
                webview.style.height = `${winHeight}px`;
            }
        }
    }
};
</script>

<style scoped></style>
