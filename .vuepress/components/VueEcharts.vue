<template>
  <div class="echats_globe3D_map_container">
    <button class="echarts_isShow" @click="changeShow()">
      {{ isShow === true ? "关闭" : "显示" }}
    </button>
    <div v-show="isShow" class="echats_map1" ref="globe3D"></div>
  </div>
</template>

<script>
/* 
可视化相关
*/
import * as echarts from "echarts";
import "echarts-gl";

export default {
  name: "VueEcharts",
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    // 初始化
    this.initChart();
  },
  methods: {
    initChart() {
      //初始化echart实例
      console.log(this.$refs.globe3D);
      const globe3D = echarts.init(this.$refs.globe3D);
      //配置项
      let option = {
        backgroundColor: "#000",
        globe: {
          baseTexture: "https://shinoimg.yyshino.top/img/202211101402339.jpg",
          shading: "lambert",
          environment: "https://shinoimg.yyshino.top/img/202211101347342.jpg",
          atmosphere: {
            show: true,
          },
          light: {
            ambient: {
              intensity: 0.1,
            },
            main: {
              intensity: 1.5,
            },
          },
        },
        series: [],
      };
      globe3D.setOption(option);
    },
    changeShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="stylus" scoped>
.echats_globe3D_map_container {
  text-align: center;

  .echarts_isShow {
    width: 100px;
    height: 50px;
    margin: 20px auto;
    background-color: #3EAF7C;
    border: 0px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    color: white;
  }

  .echarts_isShow:hover {
    cursor: pointer;
    background-color: #4ABF8A;
  }

  .echats_map1 {
    margin: 0 auto;
    width: 696px;
    height: 592px;
    /* 进入动画 */
    -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  /* 进入动画 */
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  /* 768<=pad<992 中屏，字体黄色，背景红色 */
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .echats_map1 {
      width: 696px;
      height: 592px;
    }
  }

  /* phone<768  小屏，字体黑色，背景蓝色 */
  @media screen and (max-width: 767px) and (min-width: 480px) {
    .echats_map1 {
      width: 348px;
      height: 296px;
    }
  }

  /* 超小屏，字体黑色，背景蓝色 */
  @media screen and (max-width: 480px) {
    #content {
      color: #000;
      background: #0ff;
    }
  }

  .scale-out-center {
    -webkit-animation: scale-out-center 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    animation: scale-out-center 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
}
</style>