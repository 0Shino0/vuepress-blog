import { navbar } from "vuepress-theme-hope";

// node 
// import fs from "fs"
// import path_ from "path"

// function getNav(folder:string) {
//   // F:\Project\Blog\Vuepress\blogs
//   // path = 'F:/Project/Blog/Vuepress/vuepress-blog/blogs/' + folder + '/';
//   const blogDirname = path_.resolve('../posts') + '\\';
//   console.log('blogDirname',blogDirname)
//   let path = blogDirname + folder + '/';

//   let file_list = fs.readdirSync(path);
//   let nav_text = [];
//   for (let i = 0; i < file_list.length; i++) {
//     // let name = file_list[i].split(/[.]|-/);
//     nav_text.push({
//       text: file_list[i].slice(0, -3),
//       link: '/blogs/' + folder + '/' + file_list[i].slice(0, -3)
//     });
//   }
//   return nav_text;
// }

export default navbar([
  // "/",
  {
    text: "博客首页",
    icon: "fa-solid fa-paw",
    link: "/",
  },
  {
    text: "Hexo博客",
    icon: "fa-solid fa-dog",
    link: "https://blog.yyshino.top/",
  },
  // "/demo/",
  "/front_end_interview/",
  "/posts/",
  "/reading_notes/",
  {
    text: "博客信息",
    icon: "book",
    prefix: "/",
    children: [
      {
        text: "文章列表",
        icon: "newspaper",
        link: "article",
      },
      {
        text: "分类",
        icon: "fa-solid fa-table-list",
        link: "category",
      },
      {
        text: "标签",
        icon: "tag",
        link: "tag",
      },
      {
        text: "收藏",
        icon: "star",
        link: "star",
      },
      {
        text: "时间线",
        icon: "timeline",
        link: "timeline",
      },
    ]
  },
  {
    text: "Demo",
    icon: "pen-to-square",
    prefix: "/demo/",
    children: [
      { text: "游戏/特效", icon: "pen-to-square", link: "01-accumulate" },
      { text: "工具导航", icon: "pen-to-square", link: "02-navigate" },
      { text: "相册", icon: "pen-to-square", link: "03-photo" },
      // {
      //   text: "苹果",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果2", icon: "pen-to-square", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // }
    ],
  },
]);
