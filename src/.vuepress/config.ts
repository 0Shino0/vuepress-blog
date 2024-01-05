import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "yyshino blogs",
  description: "欢迎",

  theme,

  // plugins: 

  // Enable it with pwa
  // shouldPrefetch: false,
});
