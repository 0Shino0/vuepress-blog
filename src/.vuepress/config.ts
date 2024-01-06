import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

// import ribbonAnimation from "vuepress-plugin-ribbon-animation"
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "yyshino blogs",
  description: "欢迎",

  theme,

  // plugins: 
  plugins: [
    /** 丝带特效 */
    [googleAnalyticsPlugin({
      // 配置项
      id: "G-CXE35CDKKW"
    })]
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
  
});
