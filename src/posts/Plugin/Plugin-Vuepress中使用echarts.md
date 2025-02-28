---
title: Vuepress中使用echarts
tags: 
    - Vuepress
categories: 
    - FrontEnd
date: 2022-11-11 22:10:49
summary: Vuepress中使用echarts
description: Vuepress中使用echarts
autoGroup-10: 博客篇
---


## 安装相关包
```yaml
npm install echarts echarts-gl -S
```


## 添加代码

在vuepress新建一个组件 `VueEcharts.vue`,添加以下代码

先
```vue
<template>
  <div class="echats_globe3D_map_container">
    <div v-show="isShow" class="echats_map1" ref="globe3D"></div>
    <div class="echats_chart"></div>
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

    };
  },
};
</script>
```

## 发现问题

```yaml
  Uncaught ReferenceError: global is not defined
```


## 解决问题

经过查阅资料后，发现根本的问题是webpack没配置好，我们可以在 `config.js` 中的 `themeConfig` 中添加如下配置


```js

module.exports = {
  // ...

  "themeConfig": {
    // ... 

    configureWebpack: {
      node: { // 解决 Uncaught ReferenceError: global is not defined
        global: true,
        process: true
      },
    }
  }
}
```



## 完整代码演示

```vue
<template>
  <div class="echats_globe3D_map_container">
    <button class="echarts_isShow" @click="changeShow()">
      {{ isShow === true ? "关闭" : "显示" }}
    </button>
    <div v-show="isShow" class="echats_map1" ref="globe3D"></div>
    <div class="echats_chart"></div>
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

  .scale-out-center {
    -webkit-animation: scale-out-center 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    animation: scale-out-center 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
}
</style>
```