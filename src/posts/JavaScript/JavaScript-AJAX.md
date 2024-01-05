---
title: AJAX
tags: 
  - ajax/axios
categories: 
  - FrontEnd
# abbrlink: 20614
date: 2022-05-14 20:00:35
summary: web基础
description: web基础
autoGroup-2: 基础篇
---

### ajax
#### 简介
- Asynchronous JavaScript + XML（异步JavaScript和XML）, 其本身不是一种新技术，而是一个在 2005年被Jesse James Garrett提出的新术语，用来描述一种使用现有技术集合的‘新’方法，包括: HTML 或 XHTML,  CSS, JavaScript, DOM, XML, XSLT, 以及最重要的 XMLHttpRequest。当使用结合了这些技术的AJAX模型以后， 网页应用能够快速地将增量更新呈现在用户界面上，而不需要重载（刷新）整个页面。这使得程序能够更快地回应用户的操作。
尽管X在Ajax中代表XML, 但由于JSON的许多优势，比如更加轻量以及作为Javascript的一部分，目前JSON的使用比XML更加普遍。JSON和XML都被用于在Ajax模型中打包信息。
————[MDN文档](https://developer.mozilla.org/zh-CN/docs/Glossary/AJAX)
- **实现界面无刷新获取数据**

#### 利用Ajax发送请求
##### get请求

```js
    // 发送 ajax请求
        //1.创建Xhr实例对象
        const xhr = new XMLHttpRequest();

        // 绑定监听
        xhr.onreadystatechange = () => {

            //  函数体
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status <= 300) {
                    console.log(xhr.response);
                    content.innerHTML = `<h3>${xhr.response}</h3>`
                }
            }
        }
        
        // 2.指定发送请求的: method、url、参数
        /*
            1.形如：key=value&key=value 就是query参数是surlencoded编码
            2.形如：/xx/xxx/老刘/18 就是params参数
        */
        // xhr.open('GET', 'http:///127.0.0.1:8080/test_get?name=老刘&age=18'); 			  // 携带query参数
        xhr.open('GET', 'http:///127.0.0.1:8080/test_get2/老刘/18'); //携带
        
        // 3.发送请求
        xhr.send();
```
    
##### post请求

```js
    // 发送 ajax请求
        //1.创建Xhr实例对象
        const xhr = new XMLHttpRequest();
        // 绑定监听
        xhr.onreadystatechange = () => {
            //  函数体
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status <= 300) {
                    console.log(xhr.response);
                    content.innerHTML = `<h3>${xhr.response}</h3>`
                }
            }
        }
        
        // 2.指定发送请求的: method、url、参数
        /*
            1.形如：key=value&key=value 就是query参数是surlencoded编码
            2.形如：/xx/xxx/老刘/18 就是params参数
        */
        // xhr.open('GET', 'http:///127.0.0.1:8080/test_get?name=老刘&age=18'); //携带query参数
        xhr.open('POST', 'http:///127.0.0.1:8080/test_post'); //携带
        
        //追加响应头用于标识携带参数的编码形式---urlencoded
        // xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')

        //追加响应头用于标识携带参数的编码形式---json
        xhr.setRequestHeader('Content-type','application/json')


        // 3.发送请求
        const person = {name:'老刘',age:18}

        // xhr.send('name=老刘&age=18'); //携带urlencoded编码形式的请求体参数
        //send中的参数 为请求体参数
        //send中 参数的 编码格式为 urlencoded

        xhr.send(JSON.stringify(person)) //携带json编码形式的请求参数
```


### Axios
#### 简介
- Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。
#### **特性**
  - 从浏览器创建 XMLHttpRequests
  - 从 node.js 创建 http 请求
  - 支持 Promise API
  - 拦截请求和响应
  - 转换请求和响应数据
  - 取消请求
  - 自动转换JSON数据
  - 客户端支持防御XSRF
————[Axios官网](https://axios-http.com/zh/docs/intro)

#### 三种参数
-  `params`
     参数是路径的一部分，并且这个参数只能在url路径当中出现
-  `query` 
    查询参数
    这个参数可以出现在url当中也可以 出现在配置项当中配置url当中是 ? 后面的 key = value &key =value在配置项当中 配置项的名称叫做params
-  `body`
  请求体参数
  通常用在post和put当中，只能在配置对象当中配置;
  data这个配置项就是你的body请求体参数,这个数据必须是一个对象

注意：
   -  携带query参数时，编写的配置项叫做params
   -  携带params参数时，就需要自己手动拼在url中
#### 利用Axios发送请求

##### get请求

```js
const axios = require('axios');

// 向给定ID的用户发起请求
axios.get('/user?ID=12345')
  .then(function (response) {
    // 处理成功情况
    console.log(response);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .then(function () {
    // 总是会执行
  });

// 上述请求也可以按以下方式完成（可选）
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 总是会执行
  });  

// 支持async/await用法
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```
    
##### post请求

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

发起多个并发请求
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```

#### 拦截器
#### 请求拦截器
```js
    axios.interceptors.request.use(): 添加请求拦截器
```
1.是什么？
   - 在真正**发请求前**执行的一个回调函数


2.作用：
   - 对所有的请求做统一的处理：追加请求头、追加参数、界面loading提示等等

#### 响应拦截器
```js
    axios.interceptors.response.use(): 添加响应拦截器
```
1.是什么？
 - 得到响应之后执行的一组回调函数

2.作用：

​- **若请求成功，对成功的数据进行处理**

​- **若请求失败，对失败进行统一的操作**



### async和await
#### 简介
-  async awiat  是使用**同步代码实现异步效果**

#### 返回值
- async 函数返回的是promise
- async 函数返回值不看 return **必然返回promise**
- async  函数返回的promise是成功还是失败   看return
- return的结果代表promise是成功还是失败


1、如果return是一个非promise的值   代表async函数返回的promise是成功
    - 成功的结果是return的结果

2、如果返回的是成功的promise   代表async函数返回的promise函数返- mise也是成功的（他们不是一个promise）
  - 成功的结果是return的promise的成功结果

3、如果返回的是失败的promise   代表async函数返回的promise是失败的
  - 失败的原因是return的promise失败的原因

4、如果throw出错误，代表async函数返回的promise是失败的
  - 失败的原因是抛出的错误的原因


#### 解决跨域
##### 1、配置代理服务器
```js
    devServer:{   //只用与开发环境
      proxy:{
        'api':{       //支队请求路由以/api开头的其你去进行代理转发
          target:'http://gmall-h5-api.atguigu.cn',    //转发的目标url
          changeOrigin:true,       //支持跨域
          // pathRewrite:{'^/api':''}     // 后台接口都有/api
        }
      }
    }
```


##### 2、jsonp解决跨域
**跨域**
1、是什么
​		浏览器上的**同源策略**

**特点：**
​	1、跨域只存在于浏览器
​	2、不在浏览器发请求是不会存在跨域问题的
​	3、`http`请求分为两大类： 普通`http`请求和`ajax`请求（跨域是出现在ajax请求）

**1、普通请求和`ajax`请求区别** 
​		普通请求  一般只有get（a标签和地址栏输入回车）和 `post`(`form`表单)  页面会刷新  不会跨域
​		`ajax`请求  一般 `get`  `post`  `delete`  `put`  一般都是异步发送的  页面不刷新  局部更新

**2、在什么地方会出现跨域**
    浏览器给服务器发ajax请求会跨域 因为跨域（同源策略）只存在于浏览器
    服务器给服务器发ajax请求不会

**3、什么条件会跨域**
    同源（协议  ip  端口一致）不跨域  
    不同源就跨域（三个中间有一个不一样就跨域）	
    http://localhost:8080/     -------  》 github    

**4、解决跨域：**
前端可以解决、后端解决。一般后端解决比前端解决容易

```js
    // 1.创建script节点
         const scriptNode = document.createElement('script')
         // 2.给节点指定src属性（请求地址）
         scriptNode.src = 'http://localhost:8080/test_jsonp?callback=peiqi';
         // 3.将节点放入界面
         document.body.appendChild(scriptNode)

         window.peiqi = (a) =>{
             console.log(a);
         }
         //5.移除已经使用过的script节点
         document.body.removeChild(scriptNode)

    //总结：Jsonp解决跨域，本质上是避开了 xhr 不受同源策略的限制 利用
    //script 标签发起请求，拿到数据
 ```

    

##### 3、cors解决跨域（后端）

```js
  node.js
    //在后端服务器 添加特殊响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Expose-Origin','*')
    response.setHeader('Access-Control-Allow-Methods','*')
    
    //引入cors包
    use(cors())
    //可以直接为所有请求添加特殊响应头
```
