
/* 
  自动配置侧边栏
*/
const fs = require('fs');
const path_ = require('path');

function getSideBar(folder) {
  // 只能用绝对路径
  // path = 'F:/Project/Blog/Vuepress/vuepress-blog/blogs/' + folder + '/';
  const blogDirname = path_.resolve('./blogs') + '/';

  console.log('blogDirname',blogDirname)
  path = blogDirname + folder + '/';
  let file_list = fs.readdirSync(path);
  for (let i = 0; i < file_list.length; i++) {
    file_list[i] = file_list[i].slice(0, -3);
  }
  return file_list;
}

function getNav(folder) {
  // F:\Project\Blog\Vuepress\blogs
  // path = 'F:/Project/Blog/Vuepress/vuepress-blog/blogs/' + folder + '/';
  const blogDirname = path_.resolve('./blogs') + '/';
  console.log('blogDirname',blogDirname)
  path = blogDirname + folder + '/';

  let file_list = fs.readdirSync(path);
  let nav_text = [];
  for (let i = 0; i < file_list.length; i++) {
    // let name = file_list[i].split(/[.]|-/);
    nav_text.push({
      text: file_list[i].slice(0, -3),
      link: '/blogs/' + folder + '/' + file_list[i].slice(0, -3)
    });
  }
  return nav_text;
}

module.exports = {
  "title": "yyshino",
  "description": "Blog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://shinoimg.yyshino.top/img/avatar.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        text: 'FrontEnd',
        items: getNav('FrontEnd')
      },
      {
        text: 'CSS',
        items: getNav('CSS')
      },
      {
        text: 'JavaScript',
        items: getNav('JavaScript')
      },
      {
        text: 'Vue',
        items: getNav('Vue')
      },
      {
        text: 'Plugin',
        items: getNav('Plugin')
      },
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home",
        "items": [
          {
            "text": "本站",
            "icon": "iconfont icon-cat2",
            "link": "/"
          },
          {
            "text": "Hexo博客",
            "icon": "iconfont icon-dog",
            "link": "https://blog.yyshino.top/",
          },
        ]
      },
      {
        "text": "归档",
        "icon": "reco-document",
        "items": [
          {
            "text": "分类",
            "link": "/categories/FrontEnd/",
            "icon": "reco-category",
          },
          {
            "text": "标签",
            "link": "/tag/",
            "icon": "reco-tag",
          },
          {
            "text": "时间轴",
            "link": "/timeline/",
            "icon": "reco-date",
          }
        ]
      },
      {
        "text": "Demo",
        "icon": "iconfont icon-game1",
        "items": [{
          "text": "Mini Demo",
          "items": [
            {
              "text": "导航",
              "icon": "iconfont icon-apps",
              "link": "/docs/extend/navigate"
            },
            {
              "text": "休息一会",
              "icon": "iconfont icon-Vue",
              "link": "/docs/extend/accumulate"
            },
            {
              "text": "可视化Demo",
              "icon": "iconfont icon-browser",
              "link": "/docs/extend/echarts"
            },
          ]
        }
        ]
      },
      {
        "text": "项目",
        "icon": "iconfont icon-tier-fill",
        "items": [
          {
            "text": "Vue2",
            "items": [
              {
                "text": "电商平台实时监控系统",
                "icon": "iconfont icon-Vue",
                "link": "https://e-admin.yyshino.top/#/screen"
              },
              {
                "text": "电商平台",
                "icon": "iconfont icon-Vue",
                "link": "https://c-shop.yyshino.top/",
              },
            ]
          },
          {
            "text": "Vue3",
            "items": [
              {
                "text": "Test",
                "icon": "iconfont icon-Vue",
                "link": "/"
              },
            ]
          },
          {
            "text": "其他",
            "items": [
              {
                "text": "发现导航",
                "icon": "iconfont icon-fly1",
                "link": "https://nav.yyshino.top/#/light"
              },
            ]
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/0Shino0",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": { //  '/pages/Python/': getSideBar('Python'),
      '/blogs/FrontEnd/': getSideBar('FrontEnd'),
      '/blogs/HTML/': getSideBar('HTML'),
      '/blogs/CSS/': getSideBar('CSS'),
      '/blogs/JavaScript/': getSideBar('JavaScript'),
      '/blogs/TypeScript/': getSideBar('TypeScript'),
      '/blogs/Vue/': getSideBar('Vue'),
      '/blogs/MiniProgram/': getSideBar('MiniProgram'),
      '/blogs/React/': getSideBar('React'),
      '/blogs/Java/': getSideBar('Java'),
      '/blogs/Go/': getSideBar('Go'),
      '/blogs/DataBse/': getSideBar('DataBse'),
      '/blogs/Linux/': getSideBar('Linux'),
      // '/blogs/Algorithm/': getSideBar('Algorithm'),
      // '/blogs/Computer/': getSideBar('Computer'),
      '/blogs/Plugin/': getSideBar('Plugin'),
      // '/blogs/Plugin/': getSideBar('Tool'),
      '/blogs/Me/': getSideBar('Me'),
    },
    "subSidebar": "auto", // auto为ture 在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "type": "blog",
    // 博客配置
    "blogConfig": {
      // "category": {
      //   "location": 2, // 在导航栏菜单中所占的位置，默认2
      //   "text": "分类" // 默认文案 “分类”
      // },
      // "tag": {
      //   "location": 3, // 在导航栏菜单中所占的位置，默认3
      //   "text": "标签" // 默认文案 “标签”
      // },
      "socialLinks": [ // 信息栏展示社交信息
        { "icon": 'reco-github', "link": 'https://github.com/0Shino0' },
        { "icon": 'reco-csdn', "link": 'https://blog.csdn.net/qq_41095561?spm=1000.2115.3001.5343' },
        { "icon": 'reco-sf', "link": 'https://segmentfault.com/u/yyshino' },
        { "icon": 'reco-bilibili', "link": 'https://space.bilibili.com/34716040' },
      ],
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "https://shinoimg.yyshino.top/img/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "yyshino",
    "authorAvatar": "https://shinoimg.yyshino.top/img/avatar.png",
    "record": "湘ICP备2021015837号",
    "recordLink": 'https://beian.miit.gov.cn/#/Integrated/index',
    "startYear": "2021",
    "valineConfig": {  // valineConfig 评论
      "appId": 'G0grGJik8keCVOMScmsGMqDL-gzGzoHsz',// your appId
      "appKey": 'ug7ViBaasghyVQzUYL1es52D', // your appKey
    },
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    // 只要把这个放进 config的plugins中就可以了 有木有很简单
    ["ribbon-animation", { // 丝带特效
      "size": 90,   // 默认数据
      "opacity": 0.3,  //  透明度
      "zIndex": -1,   //  层级
      "opt": {
        // 色带HSL饱和度
        "colorSaturation": "80%",
        // 色带HSL亮度量
        "colorBrightness": "60%",
        // 带状颜色不透明度
        "colorAlpha": 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        "colorCycleSpeed": 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        "verticalPosition": "center",
        // 到达屏幕另一侧的速度有多快
        "horizontalSpeed": 200,
        // 在任何给定时间，屏幕上会保留多少条带
        "ribbonCount": 2,
        // 添加笔划以及色带填充颜色
        "strokeSize": 0,
        // 通过页面滚动上的因子垂直移动色带
        "parallaxAmount": -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        "animateSections": true
      },
      "ribbonShow": false, //  点击彩带  true显示  false为不显示
      "ribbonAnimationShow": true  // 滑动彩带
    }],
    [ // 阅读进度条
      'reading-progress', {
        "fixed": 'top'
      }
    ],
    ['go-top'],
    [ // 生成站点地图
      'sitemap', {
        hostname: 'https://v-blog.yyshino.top',
        // 排除无实际内容的页面
        exclude: ["/404.html"]
      },
    ],
    [ // 功能代码展示插件，展示多种语言于一窗，增加易读性。
      '@vuepress-reco/extract-code'
    ],
    /* 
    // [// vuepress-plugin-auto-sidebar 自动生成侧边栏
    //   "vuepress-plugin-auto-sidebar", {
    //     sort: {
    //       mode: "asc",
    //       readmeFirst: true,
    //     },
    //     title: {
    //       mode: "titlecase",
    //       map: {}
    //     },
    //     sidebarDepth: 2,
    //     collapse: {
    //       open: true,
    //       collapseList: [],
    //       uncollapseList: [
    //         // "/blogs/FrontEnd/"
    //       ]
    //     },
    //     ignore: [],
    //     git: {
    //       trackStatus: 'all'
    //     },
    //     removeEmptyGroup: true
    //   }
    // ],
    // [ // vuepress-bar 自动生成侧边栏
    //   'autobar',
    //   {
    //     "rootDir": "blogs"
    //   }
    // ],
    // [ // 拼音地址兼容
    //   // 使用 vuepress-plugin-permalink-pinyin 此插件 请锁死 0.2.0 这个版本
    //   'permalink-pinyin',
    //   [
    //     'autobar', { 'pinyinNav': true }
    //   ]
    // ],
    // [ // 默认配置是针对 vuepress-plugin-autobar 的，它清理了繁琐的参数。
    //   'rpurl'
    // ], 
    */
    [
      // 显示数学公式
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    [ // 代码复制插件
      'vuepress-plugin-code-copy',
      true
    ],
    [
      /* 
        此插件有助于检查以下类型的死链接
        空链接。
        不存在的目标降价文件。
        非段化哈希。
        不存在的哈希。
        更喜欢.md.html (warn)
      */
      'check-md', {
        pattern: '**/*.md'
      }
    ],
    [
      /* 
      🔌为每个页面生成 SEO 友好的元标题
      npm i vuepress-plugin-seo -D
      */
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        // image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
        image: ($page, $site) => "https://shinoimg.yyshino.top/img/avatar.png",
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ],
    [ // 公告插件
      '@vuepress-reco/vuepress-plugin-bulletin-popover', {
        width: '300px', // 默认 260px
        title: '简介',
        body: [
          // {
          //   type: 'title',
          //   content: '欢迎来到yyshino 🎉🎉🎉',
          //   style: 'text-align: center;: center;font-size: 15px;'
          // },
          // {
          //   type: 'text',
          //   content: '关于',
          //   style: 'text-align: center;: center;font-size: 15px;line-height:15px;'
          // },
          {
            type: 'title',
            content: '放开些大胆的记录下来',
            style: 'text-align: center;: center;font-size: 14px;margin: 40px 0px 20px 0px;'
          },
          {
            type: 'title',
            content: '人活着总得留下点什么',
            style: 'text-align: center;: center;font-size: 14px;margin: 20px 0px 40px 0px;'
          },
          // {
          //   type: 'text',
          //   content: '其他',
          //   style: 'margin: 10px 0px;'
          // },
          // {
          //   type: 'text',
          //   content: `<a href=""><li>导航</li></a>`,
          //   style: 'margin: 10px 0px;'
          // },
          // {
          //   type: 'text',
          //   content: '<a href="/blogs/FrontEnd/大前端"><li>博客</li></a>',
          //   style: 'margin: 10px 0px;'
          // }
        ],
        footer: [
          {
            type: 'button',
            text: '关于',
            link: '/'
          }
        ]
      }
    ]
  ],
  configureWebpack: {
    node: { // 解决 Uncaught ReferenceError: global is not defined
      global: true,
      process: true
    },
  }
}