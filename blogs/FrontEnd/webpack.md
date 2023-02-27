---
title: Webpack
tags: 
    - Webpack
categories: 
    - FrontEnd
abbrlink: 15317
date: 2022-05-15 12:21:18
summary: webpack基础
description: webpack基础
autoGroup-6: 工具篇
---

### webpack
#### 简介
- webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。————[webpack文档](https://webpack.docschina.org/concepts/)

#### 简单的配置文件
```js
    /* 
    1. 该文件是webpack的配置文件，所有的webpack的任务、用到的loader、plugins都要配置在这里
    2. 该文件要符合CJS模块化规范 
    */

    // 引入Node中一个内置的path模块，专门用于解决路劲问题
    const {resolve} = require('path');
    // 引入html-webpack-plugin ，用于加工html文件
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    // 引入
    // const Webpack = require('webpack');
    // const WebpackDevServer = require('webpack-dev-server');

    //css  相关loader配置
    const baseCssLoader = ['style-loader','css-loader']
    // 使用CJS的模块化规范，暴露一个对象，该对象就是webpack的详细配置对象（规则）
    module.exports = {
    mode: 'development', //工作模式
    entry: './src/js/app.js',  //入口
    output: {  //出口（输出）
        path: resolve(__dirname, 'build'),  //输出文件的路径
        filename: 'js/app.js',  //输出文件名字
    },
    // module.rules中配置的一个一个的loader
    module: {
        rules: [
        // 配置解析css
        {
            test:/\.css$/,
            use:[...baseCssLoader]
        },
        // 配置解析less
        {
            test:/\.less$/,
            use:[
            ...baseCssLoader,// creates style nodes from JS strings and translates CSS into CommonJS
            'less-loader'  // compiles Less to CSS
        ]
        },
        // 配置解析样式中的图片
        {
            test: /\.(png|jpg|gif|bmp)$/,
            use: [{
            loader:'url-loader',
            options:{
                outputPath:'imgs',  //配置图片加工后，，存放的位置
                // publicPath:'/build/imgs'  //配置图片引入时前缀的路径
                name:'[hash:5].[ext]', //配置生成图片的名字+后缀
                limit:8 * 1024    //图片大小，小于8kb时，将图片转为base64编码 
            }
            }
            ],
        },
        // 配置解析html中的图片
        {
            test:/\.(html)$/,
            use:['html-loader']
        },
        // 配置解析字体文件
        {
        exclude: /\.(html|less|css|js|json|png|jpg|bmp|gif)$/,
            use: [{
            loader:'file-loader',
            options:{
                outputPath:'media',  //配置图片加工后，，存放的位置
                // publicPath:'/build/imgs'  //配置图片引入时前缀的路径
                name:'[hash:5].[ext]', //配置生成图片的名字+后缀
                
            }
            }
            ],
        },

        ],

    },
    // plugins中专门用于配置插件，插件必须经过实例化这一环节
    plugins:[
        new HtmlWebpackPlugin({
        template:'./src/index.html'  //模板的位置
        })

    ],
    // 配置devServer
    devServer:{
        // static:'./build',
        port:5500,  //开启服务器的端口号
        open:true,  //自动打开浏览器
        hot:true    //模块热更新(热膜替换)
    }

    };
```
