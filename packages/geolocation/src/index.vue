<template>
  <div>
    <span @click="onDingwei()">
      <!--      判断是否有值-->
      <template v-if="$slots">
        <slot />
      </template>
      <template v-else>
        <van-button type="info" round size="mini" icon="location-o"></van-button>
      </template>
    </span>
    <!--        地图显示 mapShow控制是否显示地图-->
    <div v-if="mapShow">
      <van-action-sheet v-model="show" title="正在定位">
        <div style="text-align: center" v-show="loading">
          <van-loading color="#1989fa" />
        </div>

        <div v-show="!loading" id="container" class="geolocation"></div>
        <div
          v-if="!loading"
          style="font-size: 12px; padding: 15px; text-align: left; background-color: #0073cf; color: #ffffff"
        >
          <div>北纬：{{ zuobiao.position.lat }}东经：{{ zuobiao.position.lng }}</div>
          <div>地址：{{ zuobiao.formattedAddress }}</div>
        </div>

        <div v-else></div>
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
//这个插件强依赖 高德 api https://webapi.amap.com/maps?v=1.4.15&key=abb89bfe34e5be2fe527764105154410
let map;
import axios from 'axios';

export default {
  name: 'BaGeolocation',

  data() {
    return {
      loading: true,
      zuobiao: { position: '' },
      show: false
    };
  },
  props: {
    mapShow: { type: Boolean, default: false }, //是否在弹窗里显示地图
    auto: { type: Boolean, default: false }, //是否在弹窗里显示地图
    https: { type: Boolean, default: true } //是否需要https定位,默认是需要
  },
  components: {},

  watch: {
    $route(to, from, next) {}
  },

  created() {},

  async mounted() {
    if (this.auto) {
      this.onDingwei();
    }
  },
  methods: {
    onDingwei() {
      this.show = true;
      setTimeout(() => {
        if (this.https) {
          this.locationInit();
        } else {
          this.dingweiNoHttps();
        }
      }, 1);
    },

    //需要https才能定位,主要用在小程序内部,不用调用定位权限就可以定位
    locationInit() {
      let self = this;
      self.loading = true;
      map = new AMap.Map('container', {
        resizeEnable: true
        // zoom: 11
      });
      console.log('https定位程序');
      console.log(map);
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 4000, //超过10秒后停止定位，默认：5s
          buttonPosition: 'RB', //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
          noIpLocate: 0, //是否禁止使用IP定位，默认值为0，可选值0-3
          noGeoLocation: 0 //是否禁止使用IP定位，默认值为0，可选值0-3
        });

        geolocation.getCurrentPosition();
        map.addControl(geolocation);
        AMap.event.addListener(geolocation, 'complete', data => {
          console.log('位置获取成功', data);
          self.$toast.success('获取位置成功');
          self.$emit('success', onComplete(data)); //把定位数据抛出
          self.zuobiao = onComplete(data); //把定位数据赋值给页面
          self.loading = false;
          if (!self.mapShow) {
            self.show = false;
          }
        });
        AMap.event.addListener(geolocation, 'error', () => {
          self.$toast.fail('获取位置失败');
          console.error('定位失败', data);
          self.loading = false;
          if (!self.mapShow) {
            self.show = false;
          }
          self.$emit('fail', data);
        });
      });

      //解析定位结果
      function onComplete(data) {
        //这个东西有时候无法获取
        let addressComponent = data.addressComponent ? data.addressComponent : {};

        let zuobiao = {
          ...addressComponent,
          formattedAddress: data.formattedAddress,
          location_type: data.location_type,
          position: {
            Q: data.position.Q,
            R: data.position.R,
            lat: data.position.lat,
            lng: data.position.lng
          }
        };
        // console.log(zuobiao)
        return zuobiao;
      }
    },

    //通过手机定位,不使用https也能定位,主要用在app端,需要调用手机的定位权限
    dingweiNoHttps() {
      let self = this;
      if (window.plus) {
        plusReady();
      } else {
        self.$toast.fail('定位只支持app');
        document.addEventListener('plusready', plusReady, false);
      }

      function plusReady() {
        plus.geolocation.getCurrentPosition(
          function (p) {
            console.log(p);
            self.geocoder([p.coords.longitude, p.coords.latitude]);
          },
          function (e) {
            self.$toast.fail(e.message);
            console.error('定位失败', e.message);
            self.$emit('fail', false); //把定位数据抛出
          },
          { provider: 'amap', enableHighAccuracy: true } //使用高德坐标,开启高精度定位
        );
      }
    },
    //通过高德经纬度获取地址
    geocoder(lnglats) {
      let self = this;
      //调用高德 webjs接口
      axios
        .get(`https://restapi.amap.com/v3/geocode/regeo`, {
          params: {
            key: '433eb47749e804f06bf958e7cefdb25a',
            output: 'json',
            location: `${lnglats[0]},${lnglats[1]}`,
            radius: '100',
            extensions: 'base'
          }
        })
        .then(res => {
          self.$toast.success('获取位置成功');
          let newData = {
            regeocode: res.data.regeocode,
            location_type: 'app',
            position: {
              lat: lnglats[1],
              lng: lnglats[0]
            }
          };
          self.$emit('success', newData); //把定位数据抛出
        });
    }
  },
  computed: {}
};
</script>

<style>
.geolocation {
  height: 300px;
  width: 100%;
}
</style>
