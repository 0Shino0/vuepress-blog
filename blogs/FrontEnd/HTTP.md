---
title: HTTP
tags: 
    - HTTP
categories: 
    - FrontEnd
abbrlink: 35944
date: 2022-05-14 16:50:27
summary: web基础
description: web基础
autoGroup-2: 基础篇
---

### HTTP

#### 定义

- 超文本传输协议（Hyper Text Transfer Protocol，HTTP）是一个简单的请求-响应协议，它通常运行在TCP之上。它指定了客户端可能发送给服务器什么样的消息以及得到什么样的响应。请求和响应消息的头以ASCII形式给出；而消息内容则具有一个类似MIME的格式。这个简单模型是早期Web成功的有功之臣，因为它使开发和部署非常地直截了当。                    ————百度

#### 实战

##### 利用http模块创建一个简单的服务器

```js
  // 1.引入 http 模块
  const http = require('http');
  
  // 2.调用方法 创建服务器对象
  /* 
      * request 请求报文的封装对象
      * response 响应报文的封装对象
  */
  const server = http.createServer(function(request,response){
  
      response.end('Hello HTTP server');
  
  });
      
  // 3.监听端口  启动服务
  /* 
      端口号    计算的服务端口窗口  总共65536个  8000 3000 9000 8080
      默认端口 80 
      ctrl + c 停止服务
  */
  server.listen(8000,function(){
      console.log('服务器已经启动，端口 8000 坚挺中......');
  })
  
```

  ##### 将服务器拆分为 不同组件

  主函数 **`app.js`**

  ```js
    const server = require('./server');
    
    server(8000);
  ```

 回调函数 **`callback.js`**

```js
    module.exports = (request,response) =>{
        response.end('Hello NPM');
    };
```

 服务对象 **`server.js`**

```js
    module.exports = function (port) {
        const http = require('http');

        // 2.调用方法 创建服务器对象
        /* 
        * request 请求报文的封装对象
        * response 响应报文的封装对象
        */
        const callback = require('./callback');
        const serverCb = require('./serverOkCallback')
        const server = http.createServer(callback);


        // 3.监听端口  启动服务
        server.listen(port, serverCb);
    }
```

  监听端口 **`serverOkCallback.js`**

```js
    module.exports = () =>{
        console.log('服务器已经启动，端口坚挺中......');
    }
```

  在`server.js`中我们可以做很多事情

```js
    // 获取请求报文  GET    /s?wd=关键字 (URL)   HTTP/1.1
    // 1.请求的类型
    // console.log(request.method);
    // console.log(request.method);

    // 2.请求的URL
    // console.log(request.url);

    // 3.HTTP协议版本
    // console.log(request.httpVersion);

    // 4.获取URL中的路径部分
    // 二 调用方法获取参数
    // console.log(url.parse(request.url).pathname); 

    // 5.获取查询字符串
    // console.log(url.parse(request.url,true).query);

    // 6.请求头信息
    // console.log(request.headers);
```

  也可以添加事件

```js
    // 提取请求体数据 POST请求

    // 1.声明一个字符串变量
    let body = '';

    // 2.绑定data事件
    request.on('data',chunk =>{
        // 拼接
        body += chunk.toString();
    });

    // 3.绑定end事件
    request.on('end',()=>{
        console.log(body);
        // 调用 qs 对象的方法
        console.log(qs.parse(body));
        response.end('body recevie');
    })
```

