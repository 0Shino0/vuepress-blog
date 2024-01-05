import { sidebar } from "vuepress-theme-hope";


// node 
// import fs from "fs"
// import path_ from "path"

// function getSideBar(folder) {
//   // 只能用绝对路径
//   // path = 'F:/Project/Blog/Vuepress/vuepress-blog/blogs/' + folder + '/';
//   const blogDirname = path_.resolve('../posts') + '\\';

//   console.log('blogDirname',blogDirname)
//   let path = blogDirname + folder + '/';
//   let file_list = fs.readdirSync(path);
//   for (let i = 0; i < file_list.length; i++) {
//     file_list[i] = file_list[i].slice(0, -3);
//   }
//   return file_list;
// }

export default sidebar({
  "/demo/": "structure",
  "/posts/": "structure",
  "/front_end_interview/": "structure",
  "/reading_notes/": "structure",
  "/": [
    "" /* / */,
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
  ],
});
