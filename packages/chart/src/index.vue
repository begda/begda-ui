<template>
    <div style="overflow: hidden" @click="onClick">
        <div ref="chartID" :style="{ height: height + 'px' }"></div>
    </div>
</template>

<script>
export default {
    name: 'BaChart',
    props: {
        options: { required: true, type: [Object] },
        height: { type: Number, default: 300 }
    },
    data() {
        return {
            loading: true
        };
    },
    watch: {
        // options(newData, oldData) {
        options() {
            this.init();
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let type = typeof this.options === 'object' ? this.options : false;
            if (!type) {
                throw new Error('BaChart组件的 options属性 只能是 object类型');
            }
            this.setOptions(this.options);
        },
        onClick() {
            this.$emit('onClick', callback => {
                callback();
            });
        },
        create() {
            // let chartId = uuid();
            // this.$refs.chartID.innerHTML = `<div id="${chartId}"  style="height: 300px">正在加载...</div>`;
            // 基于准备好的dom，初始化echarts实例
            // return echarts.init(document.getElementById(chartId));
            if (echarts) {
                return echarts.init(this.$refs.chartID);
            } else {
                console.error('没有全局变量 echarts');
                throw Error;
            }
        },
        setOptions(opt) {
            if (Object.keys(opt).length > 0) {
                this.loading = false;
            } else {
                this.loading = true;
            }
            let Chart = this.create();
            Chart.resize();
            Chart.setOption(opt);
            this.$emit('load', Chart);
            window.onresize = function () {
                Chart.resize(); //myEchart为echarts.init初始化得到的对象
            };
        }
    }
};
</script>

<style scoped></style>
