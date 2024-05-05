## yyshino vuepress blog


## 使用主题

[vuepress-theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope)

## 预览

- [首页](https://v-blog.yyshino.top/)
- [前端面试题整合](https://v-blog.yyshino.top/front_end_interview/)
- [我的博客预览](https://v-blog.yyshino.top/posts/)
- [我的读书笔记](https://v-blog.yyshino.top/reading_notes/)

## 提高效率

### vscode 批量格式化日期

错误信息: `date in frontMatter should be a valid Date, found in front_end_interview/xxxx.md`

问题分析: 出现问题的原因是frontMatter中的data信息，例如`2023-3-25`或者`2023-03-5`就会出现上面的错误信息，修改为`2023-03-25`或者`2023-03-05`即可解决，但是因为长期的不规范书写导致太多的文件都存在这个错误，因此我们需要批量替换，因此我想到了利用vscode的批量正则替换

出现这个错误的原因：可能是因为格式化方法是采用`YYYY-MM-DD`这样的格式化方法，当我们`MM`只有一位时就会抛出warning

解决问题

1. vscode 全局搜索 
2. 搜索内容 `(.*)-([1-9])-(.*)`
3. 替换内容 `$1-0$2-$3`


## 最新的博客文章
<!-- BLOG-POST-LIST:START -->
 - 2024-04-25——[WeakMap与Map的区别](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/24-WeakMap%E4%B8%8EMap%E7%9A%84%E5%8C%BA%E5%88%AB.html)
 - 2024-04-25——[手写reduce](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/25-%E6%89%8B%E5%86%99Reduce.html)
 - 2024-04-25——[手写call、apply、bind](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/26-%E6%89%8B%E5%86%99call%E3%80%81bind%E3%80%81apply.html)
 - 2024-04-24——[Vue响应式实现](https://v-blog.yyshino.top/front_end_interview/1-5Vue/01-Vue%E5%93%8D%E5%BA%94%E5%BC%8F%E5%AE%9E%E7%8E%B0.html)
 - 2024-04-24——[TS路径映射如何实现](https://v-blog.yyshino.top/posts/TypeScript/02-TS%E8%B7%AF%E5%BE%84%E6%98%A0%E5%B0%84%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0.html)
 - 2024-04-24——[MVC-MVP-MVVM](https://v-blog.yyshino.top/posts/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/01-MVC-MVP-MVVM.html)
 - 2024-04-23——[Vue源码分析](https://v-blog.yyshino.top/posts/Vue/Vue2-%E6%BA%90%E7%A0%81-01.html)
 - 2024-04-19——[手写Promise相关方法](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/23-%E6%89%8B%E5%86%99Promise%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95.html)
 - 2024-04-18——[文件上传难点分析](https://v-blog.yyshino.top/front_end_interview/%E9%A1%B9%E7%9B%AE%E9%9A%BE%E7%82%B9/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.html)
 - 2024-04-01——[style-scoped原理与作用](https://v-blog.yyshino.top/front_end_interview/1-5Vue/07-style-scoped%E5%8E%9F%E7%90%86%E4%B8%8E%E4%BD%9C%E7%94%A8.html)
 - 2024-03-21——[泛型](https://v-blog.yyshino.top/front_end_interview/1-4TypeScript/02-%E6%B3%9B%E5%9E%8B.html)
 - 2024-03-21——[interface和type的区别](https://v-blog.yyshino.top/front_end_interview/1-4TypeScript/03-interface%E5%92%8Ctype%E7%9A%84%E5%8C%BA%E5%88%AB.html)
 - 2024-03-20——[算法指标](https://v-blog.yyshino.top/front_end_interview/0-0%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E7%AE%97%E6%B3%95/01-%E7%AE%97%E6%B3%95%E6%8C%87%E6%A0%87.html)
 - 2024-03-20——[手写常用排序算法](https://v-blog.yyshino.top/front_end_interview/0-0%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E7%AE%97%E6%B3%95/02-%E6%89%8B%E5%86%99%E5%B8%B8%E7%94%A8%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html)
 - 2024-03-20——[树的遍历](https://v-blog.yyshino.top/front_end_interview/0-0%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84-%E7%AE%97%E6%B3%95/05-%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86.html)
 - 2024-03-05——[Vue3快速过度到Nuxt3](https://v-blog.yyshino.top/posts/Vue/Vue3%E5%BF%AB%E9%80%9F%E8%BF%87%E5%BA%A6%E5%88%B0Nuxt3.html)
 - 2024-01-05——[跨域](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/28-%E8%B7%A8%E5%9F%9F.html)
 - 2024-01-04——[github webhooks转发工具](https://v-blog.yyshino.top/posts/Go/Go-github%20webhooks%E8%BD%AC%E5%8F%91%E5%B7%A5%E5%85%B7.html)
 - 2024-01-04——[XSS和CRSF攻击防御](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/27-XSS%E5%92%8CCRSF%E6%94%BB%E5%87%BB%E9%98%B2%E5%BE%A1.html)
 - 2024-01-03——[输入 URL 到页面加载显示完成发生了什么](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/26-%E8%BE%93%E5%85%A5URL%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E6%98%BE%E7%A4%BA%E5%AE%8C%E6%88%90%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88.html)
 - 2024-01-02——[一句话概括RESTFUL](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/19-%E4%B8%80%E5%8F%A5%E8%AF%9D%E6%A6%82%E6%8B%ACRESTFUL.html)
 - 2024-01-01——[Cookie如何防范XSS攻击](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/18-Cookie%E5%A6%82%E4%BD%95%E9%98%B2%E8%8C%83XSS%E6%94%BB%E5%87%BB.html)
 - 2023-12-31——[Cookie_sessionStorage_localStorage的区别](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/13.5-cookie_session%E5%8C%BA%E5%88%AB.html)
 - 2023-12-30——[Cookie_sessionStorage_localStorage的区别](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/13-Cookie_sessionStorage_localStorage%E7%9A%84%E5%8C%BA%E5%88%AB.html)
 - 2023-12-29——[fetch发送2次请求的原因](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/12-fetch%E5%8F%91%E9%80%812%E6%AC%A1%E8%AF%B7%E6%B1%82%E7%9A%84%E5%8E%9F%E5%9B%A0.html)
 - 2023-12-28——[Get和Post的区别](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/11.8-Get%E5%92%8CPost%E7%9A%84%E5%8C%BA%E5%88%AB.html)
 - 2023-12-27——[HTTP支持的方法](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/11.7-HTTP%E6%94%AF%E6%8C%81%E7%9A%84%E6%96%B9%E6%B3%95.html)
 - 2023-12-26——[HTTP强缓存和协商缓存](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/11.6-HTTP%E5%BC%BA%E7%BC%93%E5%AD%98%E5%92%8C%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98.html)
 - 2023-12-25——[GLSL](https://v-blog.yyshino.top/posts/GLSL/01-GLSL%E4%BB%8B%E7%BB%8D.html)
 - 2023-12-25——[HTTP常用请求头](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/11.5-HTTP%E5%B8%B8%E7%94%A8%E8%AF%B7%E6%B1%82%E5%A4%B4.html)
 - 2023-12-24——[301和302的区别](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/11.2-301%E5%92%8C302%E7%9A%84%E5%8C%BA%E5%88%AB.html)
 - 2023-12-23——[讲讲304和202](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/11.1-%E8%AE%B2%E8%AE%B2304%E5%92%8C200.html)
 - 2023-12-21——[补充400和401_403状态码](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/11-%E8%A1%A5%E5%85%85400%E5%92%8C401_403%E7%8A%B6%E6%80%81%E7%A0%81.html)
 - 2023-12-20——[介绍知道的http返回码](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/10.5-%E4%BB%8B%E7%BB%8D%E7%9F%A5%E9%81%93%E7%9A%84http%E8%BF%94%E5%9B%9E%E7%A0%81.html)
 - 2023-12-19——[说一下http2.0](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/10-%E8%AF%B4%E4%B8%80%E4%B8%8Bhttp2.0.html)
 - 2023-12-18——[一个图片_url访问后直接下载怎样实现](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/06-%E4%B8%80%E4%B8%AA%E5%9B%BE%E7%89%87_url%E8%AE%BF%E9%97%AE%E5%90%8E%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD%E6%80%8E%E6%A0%B7%E5%AE%9E%E7%8E%B0.html)
 - 2023-12-17——[HTTP请求的方式_HEAD方式](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/05-HTTP%E8%AF%B7%E6%B1%82%E7%9A%84%E6%96%B9%E5%BC%8F_HEAD%E6%96%B9%E5%BC%8F.html)
 - 2023-12-16——[WebSocket的实现和应用](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/04-WebSocket%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%92%8C%E5%BA%94%E7%94%A8.html)
 - 2023-12-15——[介绍页](https://v-blog.yyshino.top/intro.html)
 - 2023-12-15——[Demo](https://v-blog.yyshino.top/demo/)
 - 2023-12-15——[前端面试题整合](https://v-blog.yyshino.top/front_end_interview/)
 - 2023-12-15——[我的博客预览](https://v-blog.yyshino.top/posts/)
 - 2023-12-15——[我的读书笔记](https://v-blog.yyshino.top/reading_notes/)
 - 2023-12-15——[TCP和UDP的区别](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/03-TCP%E5%92%8CUDP%E7%9A%84%E5%8C%BA%E5%88%AB.html)
 - 2023-12-14——[TCP三次握手](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/02-TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.html)
 - 2023-12-13——[说一下HTTP和HTTPS](https://v-blog.yyshino.top/front_end_interview/1-0%E6%B5%8F%E8%A7%88%E5%99%A8/01-%E8%AF%B4%E4%B8%80%E4%B8%8BHTTP%E5%92%8CHTTPS.html)
 - 2023-12-12——[SEO优化](https://v-blog.yyshino.top/front_end_interview/1-0.5%E4%BC%98%E5%8C%96/02-SEO%E4%BC%98%E5%8C%96.html)
 - 2023-12-12——[meta标签](https://v-blog.yyshino.top/front_end_interview/1-1HTML/30-meta%E6%A0%87%E7%AD%BE.html)
 - 2023-12-12——[BFC](https://v-blog.yyshino.top/front_end_interview/1-2CSS/14-BFC.html)
 - 2023-12-12——[行内元素和块级元素](https://v-blog.yyshino.top/front_end_interview/1-2CSS/15-%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0%E5%92%8C%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0.html)
 - 2023-12-11——[UED优化](https://v-blog.yyshino.top/front_end_interview/1-0.5%E4%BC%98%E5%8C%96/01-UED%E4%BC%98%E5%8C%96.html)
 - 2023-12-05——[堆栈](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/14-%E5%A0%86%E6%A0%88.html)
 - 2023-12-05——[闭包陷阱](https://v-blog.yyshino.top/front_end_interview/1-6React/04-%E9%97%AD%E5%8C%85%E9%99%B7%E9%98%B1.html)
 - 2023-12-02——[原型链](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/01.5-%E5%8E%9F%E5%9E%8B%E9%93%BE.html)
 - 2023-12-02——[并发模型与事件循环](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/13.5%E5%B9%B6%E5%8F%91%E6%A8%A1%E5%9E%8B%E4%B8%8E%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.html)
 - 2023-12-02——[JS数据类型](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/15-JS%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html)
 - 2023-12-02——[script标签](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/16-script%E6%A0%87%E7%AD%BE.html)
 - 2023-12-02——[深拷贝与浅拷贝](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/17-%E6%B7%B1%E6%8B%B7%E8%B4%9D%E4%B8%8E%E6%B5%85%E6%8B%B7%E8%B4%9D.html)
 - 2023-12-02——[lodash](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/18-lodash.html)
 - 2023-12-02——[深度克隆函数](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/19-%E6%B7%B1%E5%BA%A6%E5%85%8B%E9%9A%86%E5%87%BD%E6%95%B0.html)
 - 2023-12-02——[ES6新特性](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/20-ES6%E6%96%B0%E7%89%B9%E6%80%A7.html)
 - 2023-12-02——[this指向](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/21-this%E6%8C%87%E5%90%91.html)
 - 2023-12-02——[进入和退出全屏](https://v-blog.yyshino.top/front_end_interview/1-3JavaScript/22-%E8%BF%9B%E5%85%A5%E9%80%80%E5%87%BA%E5%85%A8%E5%B1%8F.html)
 - 2023-12-02——[常用的12中工具类型](https://v-blog.yyshino.top/front_end_interview/1-4TypeScript/01-%E5%B8%B8%E7%94%A8%E7%9A%8412%E4%B8%AD%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%9E%8B.html)
 - 2023-12-01——[HTML标签的语义化](https://v-blog.yyshino.top/front_end_interview/1-1HTML/29-HTML%E6%A0%87%E7%AD%BE%E7%9A%84%E8%AF%AD%E4%B9%89%E5%8C%96.html)
 - 2023-12-01——[React内置Hooks](https://v-blog.yyshino.top/front_end_interview/1-6React/03-React%E5%86%85%E7%BD%AEHooks.html)
 - 2023-11-30——[Diff算法](https://v-blog.yyshino.top/front_end_interview/1-5Vue/02-Diff%E7%AE%97%E6%B3%95.html)
 - 2023-11-30——[精读《Vue3.0 Function API》](https://v-blog.yyshino.top/front_end_interview/1-5Vue/06-%E7%B2%BE%E8%AF%BB%E3%80%8AVue3.0%20Function%20API.html)
 - 2023-11-30——[Diff算法](https://v-blog.yyshino.top/front_end_interview/1-5Vue/08-nextTick%E5%8E%9F%E7%90%86.html)
 - 2023-11-30——[JSX与Vue模板的区别](https://v-blog.yyshino.top/front_end_interview/1-6React/01-JSX%E4%B8%8EVue%E6%A8%A1%E6%9D%BF%E7%9A%84%E5%8C%BA%E5%88%AB.html)
 - 2023-11-30——[Function Component入门](https://v-blog.yyshino.top/front_end_interview/1-6React/02-Function%20Component%E5%85%A5%E9%97%A8.html)
 - 2023-11-30——[CICD流](https://v-blog.yyshino.top/front_end_interview/1-7%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/01-CICD%E6%B5%81.html)
 - 2023-11-30——[精读《持续集成 vs 持续交付 vs 持续部署》](https://v-blog.yyshino.top/front_end_interview/1-7%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E7%B2%BE%E8%AF%BB%E3%80%8A%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%20vs%20%E6%8C%81%E7%BB%AD%E4%BA%A4%E4%BB%98%20vs%20%E6%8C%81%E7%BB%AD%E9%83%A8%E7%BD%B2%E3%80%8B.html)
 - 2023-11-29——[虚拟DOM](https://v-blog.yyshino.top/front_end_interview/1-5Vue/03-%E8%99%9A%E6%8B%9FDOM.html)
 - 2023-09-14——[TypeScript中最常用的12中工具类型](https://v-blog.yyshino.top/posts/TypeScript/01-%E5%B8%B8%E7%94%A8%E7%9A%8412%E4%B8%AD%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%9E%8B.html)
 - 2023-09-14——[uni-app Plugin](https://v-blog.yyshino.top/posts/MiniProgram/MiniApp-uniapp-Plugin.html)
 - 2023-09-14——[VSCode](https://v-blog.yyshino.top/posts/Plugin/Plugin-VSCode.html)
 - 2023-09-14——[常用linux&amp;windows命令](https://v-blog.yyshino.top/posts/Linux/Linux-%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html)
 - 2023-08-01——[DNS介绍](https://v-blog.yyshino.top/reading_notes/DNS%E4%BB%8B%E7%BB%8D.html)
 - 2023-07-01——[三次握手与四次挥手](https://v-blog.yyshino.top/reading_notes/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E4%B8%8E%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.html)
 - 2023-06-18——[Vue开发者如何学习React](https://v-blog.yyshino.top/posts/React/03-Vue%E5%BC%80%E5%8F%91%E8%80%85%E5%A6%82%E4%BD%95%E5%AD%A6%E4%B9%A0React.html)
 - 2023-06-17——[为什么学习CSharp](https://v-blog.yyshino.top/posts/CSharp/01-%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AD%A6%E4%B9%A0CSharp.html)
 - 2023-06-16——[00-WebGL](https://v-blog.yyshino.top/posts/WebGl/00-WebGL.html)
 - 2023-06-16——[00-WebGPU](https://v-blog.yyshino.top/posts/WebGl/00-WebGPU.html)
 - 2023-06-16——[ThreeJS入门](https://v-blog.yyshino.top/posts/WebGl/01-ThreeJS%E5%9F%BA%E7%A1%80.html)
 - 2023-06-16——[GSAP动画入门](https://v-blog.yyshino.top/posts/WebGl/02-GSAP%E5%8A%A8%E7%94%BB%E5%85%A5%E9%97%A8.html)
 - 2023-06-16——[图形学入门](https://v-blog.yyshino.top/posts/WebGl/%E5%9B%BE%E5%BD%A2%E5%AD%A6%E5%85%A5%E9%97%A8.html)
 - 2023-06-15——[WebGL踩坑](https://v-blog.yyshino.top/posts/WebGl/04-%E8%B8%A9%E5%9D%91.html)
 - 2023-06-15——[GLSL 中文手册](https://v-blog.yyshino.top/posts/WebGl/05-GLSL%E8%AF%AD%E6%B3%95%E7%AE%80%E4%BB%8B.html)
 - 2023-06-14——[什么是PBR](https://v-blog.yyshino.top/posts/WebGl/03-PBR%E7%89%A9%E7%90%86%E6%B8%B2%E6%9F%93.html)
 - 2023-06-06——[Linux常用知识](https://v-blog.yyshino.top/posts/Computer/Linux/Computer-Lunux%E5%B8%B8%E7%94%A8%E7%9F%A5%E8%AF%86.html)
 - 2023-06-01——[读书笔记-05-数据结构与算法JavaScript描述](https://v-blog.yyshino.top/reading_notes/%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0-05-%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95JavaScript%E6%8F%8F%E8%BF%B0.html)
 - 2023-05-31——[计算机体系结构](https://v-blog.yyshino.top/posts/Computer/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/Computer-%E8%8C%83%E5%9B%B4.html)
 - 2023-05-11——[编译原理](https://v-blog.yyshino.top/posts/Computer/%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86/Computer-%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86.html)
 - 2023-05-11——[编译原理作业题汇总](https://v-blog.yyshino.top/posts/Computer/%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86/%E4%BD%9C%E4%B8%9A%E9%A2%98%E6%B1%87%E6%80%BB.html)
 - 2023-05-11——[选填简答](https://v-blog.yyshino.top/posts/Computer/%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86/%E9%80%89%E5%A1%AB%E7%AE%80%E7%AD%94.html)
 - 2023-05-11——[计算机体系结构选填简答](https://v-blog.yyshino.top/posts/Computer/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84/%E9%80%89%E5%A1%AB%E7%AE%80%E7%AD%94.html)
 - 2023-05-09——[Linux](https://v-blog.yyshino.top/posts/Computer/Linux/Computer-Linux.html)<!-- BLOG-POST-LIST:END -->
