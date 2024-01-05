import { navbar } from "vuepress-theme-hope";

// node 
import fs from "fs"
import path_ from "path"

function getNav(folder:string) {
  // F:\Project\Blog\Vuepress\blogs
  // path = 'F:/Project/Blog/Vuepress/vuepress-blog/blogs/' + folder + '/';
  const blogDirname = path_.resolve('../posts') + '\\';
  console.log('blogDirname',blogDirname)
  let path = blogDirname + folder + '/';

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

export default navbar([
  "/",
  "/demo/",
  {
    "text": "主页",
    "link": "/",
    "icon": "reco-home",
    "children": [
      {
        "text": "本站",
        "icon": "icon-cat2",
        "link": "/"
      },
      {
        "text": "Hexo博客",
        "icon": "icon-dog",
        "link": "https://blog.yyshino.top/",
      },
    ]
  },
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      // {
      //   text: "苹果",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果1", icon: "pen-to-square", link: "1" },
      //     { text: "苹果2", icon: "pen-to-square", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // }
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
