import { defineUserConfig } from "vuepress";
import type {
  Plugin, PluginObject,
  // PluginConfig
} from "vuepress";
import theme from "./theme.js";

// import ribbonAnimation from "vuepress-plugin-ribbon-animation"
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchConsolePlugin } from 'vuepress-plugin-china-search-console'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "yyshino blogs",
  description: "欢迎",

  theme,

  // plugins: 
  plugins: [
    /** 丝带特效 */
    [
      googleAnalyticsPlugin({
        // 配置项
        id: "G-CXE35CDKKW"
      })
    ],
    searchConsolePlugin({
      baiduId: "608eab7308db4001f24e4ee23a547041",
      toutiaoAutoPushId: "6842fb3265d0fda35db1351986ae3583a963a3a6071b773452467c9a26b2361dfd5c4a3974f9cd3eeb674bde712b4782cc4f323247d55c2ed2efd47b7c83521adc648ee828d46e7d3689a9c59fd080f6",
      autoPushBaiduSwitch: true,
      // autoPush360Switch: true,
    }) as Plugin<PluginObject>
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
  
});
