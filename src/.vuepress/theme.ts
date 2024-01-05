import { hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";
import {compareDate} from "vuepress-shared"

export default hopeTheme({
  hostname: "https://v-blog.yyshino.top",
  author: {
    name: "yyshino",
    url: "https://v-blog.yyshino.top",
  },
  
  iconAssets: "fontawesome-with-brands",
  
  logo: "https://shinoimg.yyshino.top/img/avatar.png",
  
  repo: "0Shino0/vuepress-blog",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "<a href='https://beian.miit.gov.cn/#/Integrated/index' target='_blank'>湘ICP备2021015837号</a>",

  displayFooter: true,

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      BiliBili: "https://space.bilibili.com/34716040",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:yyshino@foxmail.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/Shino00",
      GitHub: "https://github.com/0Shino0",
      Gitlab: "https://gitlab.com/0Shino0/0shino0",
      Gmail: "mailto:a11419941931@gmail.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      Steam: "https://steamcommunity.com/profiles/76561198273083365/",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      Zhihu: "https://www.zhihu.com/people/yyshino",
      // MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/posts/Me/": ["nullnullnull"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,

    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    seo: {
      /**是否自动生成描述 */
      autoDescription: true,
      /**首选链接 */
      canonical: "https://v-blog.yyshino.top",
      /**首选链接 */
      fallBackImage: "https://shinoimg.yyshino.top/img/avatar.png",
      /**内容的年龄分级，格式为 [int]+，如 "13+" */
      // restrictions: ,
      /** twitterID用户名 */
      twitterID: "yyshino",
      /** 是否是文章 */
      // isArticle: (page) => {
      //   console.log('page',page);

      //   return true
      // },

    },
    /** vuepress-plugin-feed2 设置RSS */
    feed: {
      rss: true,
      icon: "https://shinoimg.yyshino.top/img/avatar.png",
      sorter: (pageA, pageB): number =>
      compareDate(
        pageA.data.git?.createdTime
          ? new Date(pageA.data.git?.createdTime)
          : pageA.frontmatter.date,
        pageB.data.git?.createdTime
          ? new Date(pageB.data.git?.createdTime)
          : pageB.frontmatter.date,
      )
    }
  },
});

