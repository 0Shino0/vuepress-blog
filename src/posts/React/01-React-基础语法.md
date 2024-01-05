---
title: React基础
tags: 
    - React
categories: 
    - FrontEnd
# abbrlink: 35233
date: 2022-05-15 22:32:04
summary: react入门
description: react入门
autoGroup-3: 框架篇
---

### React
#### 简介

React核心价值:组件化+数据驱动视图

React 是一个用于构建用户界面的 JavaScript 库。

- 声明式： React 让创建交互式 UI 变得轻松。为应用程序中的每个状态设计简单的视图，当你的数据发生变化时，React 将有效地更新和呈现正确的组件。声明式视图使您的代码更可预测、更易于理解和更易于调试。
- 基于组件：构建管理其状态的封装组件，然后将它们组合成复杂的 UI。由于组件逻辑是用 JavaScript 而不是模板编写的，因此您可以轻松地通过应用程序传递丰富的数据并将状态保持在 DOM 之外。
- 一次学习，随处编写：我们不对您的技术堆栈的其余部分做出假设，因此您可以在 React 中开发新功能而无需重写现有代码。React 还可以使用 Node 在服务器上呈现，并使用React Native为移动应用程序提供动力。

React一切皆组件

组件的价值和意义：

- 组件嵌套来组织UI结构,和HTML一样,无学习成本
- 组件拆分,利于代码维护,和多人协作开发
- 可封装公共组件(或第三方组件)复用代码,提高开发效率

#### JSX语法:

简介：

- JSX-JS的扩展,写在JS代码里面,组件的UI结构
- 语法和 HTML 很相似,学起来很容易
- 已成为 ES 规范（不是 React 独有）可用于其他框架，如 Vue3

JSX规则

- 1.创建虚拟DOM时，不要用引号

- 2.标签中想混入js表达式，需要用{}包裹

- 3.根标签只能有一个，或者使用Fragment

  ```jsx
    // Fragment 通过 <></> 包裹
    const list = (
      <>
        <ul>
          <li></li>
        </ul>
      </>
    )
  ```

- 4.标签必须闭合

- 5.样式的类名，不要用class，必须用className

- 6.内联的样式要用下列形式 ( 双括号会报错所以采取图片的形式展现 )
  ![style](https://shinoimg.yyshino.top/img/style.png)


- 7.标签可以随意的编写: **首字母大小写的区别，大写是自定义组件**
  -   (1).若标签首字母是【小写】的,则react会尝试将当前的jsx标签对应成一个html标签

      - ​                  若对应成了,直接渲染,展示

      - ​                  若无法对应,直接报错
  -   (1).若标签首字母是【大写】的,react会查找Haha组件的定义的位置



#### 组件

##### 函数式组件（官方建议）

```jsx
       <script type="text/babel"> 
            //1.定义组件(函数式组件)
            function MyComponent(){
            console.log(this); //此处的this是undefined，因为经过babel的编译后，开启了严格模式。
            return <h2>我是用函数定义的组件（适用于【简单组件】的定义）</h2>
            }
            function MyComponent2(){
            console.log(this); //此处的this是undefined，因为经过babel的编译后，开启了严格模式。
            return <h2>我是用函数定义的组件（适用于【简单组件】的定义2）</h2>
            }
            //2.渲染组件到页面
            ReactDOM.render(<MyComponent/>,document.getElementById('test'))
            ReactDOM.render(<MyComponent2/>,document.getElementById('test2'))
            /* 
            执行了ReactDOM.render后，发生了什么？
            1.React发现了<MyComponent/>标签，去寻找MyComponent组件定义的位置，发现MyComponent是用函数定义的。
            2.React调用MyComponent并获取MyComponent返回的虚拟DOM，随后转为真实DOM，随后渲染到页面。
            */
      </script>
```

##### 类式组件

```jsx
    <script type="text/babel"> 
        //定义组件
        class MyComponent extends React.Component{
            //render是放在哪里的？ —————— MyComponent的原型对象上，是给MyComponent的					实例对象用的。
            render(){
                console.log(this); //MyComponent的实例对象 <==> MyComponent组件实例对象
                return <h2>我是用类定义的组件（适用于【复杂组件】的定义）</h2>
            }
        }
        //渲染组件到页面
        ReactDOM.render(<MyComponent/>,document.getElementById('test'))
        /* 
                执行了ReactDOM.render后，发生了什么？
                        1.React发现了<MyComponent/>标签，去寻找MyComponent组件定义的位置，发现MyComponent是用类定义的。
                        2.React new了一个MyComponent实例对象--m
                        3.通过m调用到了MyComponent原型上的render方法，并获取到了返回的虚拟DOM，随后转为真实DOM，放在页面。
        */
    </script>
```

##### 生命周期相关
**旧**(react16.4之前)

  1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
      	  1.	constructor()
          2.	componentWillMount()
          3.	render()
          4.	==componentDidMount() \=\=\=\=> 常用
                   					一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息==
  2. 更新阶段: 由组件内部this.setSate()或父组件render触发this.forceUpdate()
     	1.	shouldComponentUpdate() 注意：强制更新不走“阀门”
          	2.	componentWillUpdate()
          	3.	==render()==
           componentDidUpdate()
  3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
     1. ==componentWillUnmount()  \=\=\=\=> 常用==

  ==一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息==

![react-life-old](https://shinoimg.yyshino.top/img/react-life-old.png)

- **新**(react16.4之后)

![react-life-new](https://shinoimg.yyshino.top/img/react-life-new.png)

##### 组件总结
- **最重要的三组件**
  - componentDidMount() 
  - render()
  - componentWillUnmount() 

 **组件的三大属性**

- **state**

  - 用来存储状态

  - 严重注意:**状态(state)中值是不能直接修改的**！！！下面这一行就是直接修改
  - ```jsx
      this.state.isHot = true;
    ```

  - **需要通过this.setState()方法来修改**


- **props**

  - 用于接收标签中传递的数据

- **refs**

  - 简介：对标签的一种标识，用于获取数据。类式标签中的id

  - **三种形式**

    - 字符串形式:

    ```jsx
        <input ref="input1" type="text" placeholder="点击按钮提示输入"/>
    ```

    - **回调形式(推荐):**

    ```jsx
        <input ref={c => {this.input1 = c}} type="text" placeholder="点击按钮提示输入"/>
    ```

    - createRef形式:

    ```jsx
        container1 = React.createRef()    //创建一个createRef() ，只能存储一个ref
        
        render(){
            return(
                <div>
                    <input ref={this.container1} type="text" placeholder="点击按钮提示输入"/>    
                    <button onClick={this.showData}>点我提示数据</button>
                    <input ref={this.container2} onBlur={this.showData2} type="text" placeholder="点击焦点提示输入"/>
                            </div>
                        )
                    }
    ```

##### React中的事件处理

- 通过onXxx属性指定事件处理函数(注意大小写)

​         1)React使用的是自定义(合成)事件, 而不是使用的原生DOM事件      ———————— 为了更好的兼容性

​         2)React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ———————— 为了提高效率

- 通过event.target得到发生事件的DOM元素对象

  

##### 受控组件和非受控组件

- 非受控的概念：现用现取

- 受控的概念：组件中输入类的DOM，随着用户的输入，将输入的值维护到state中

  

**高阶函数_函数的柯里化**

- **高阶函数**：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数

​        1.若A函数，接收的**参数是一个函数**，那么A就可以称之为高阶函数。

​        2.若A函数，调用的**返回值依然是一个函数**，那么A就可以称之为高阶函数。

​        常见的有：Promise、setTimeout、arr.forEach().....

- **函数的柯里化**：通过函数调用继续返回函数的方式，实现**多次接收参数最后 统一处理 的函数编码形式**


### React脚手架

#### react脚手架包含内容

1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目

   1. 包含了所有需要的配置（语法检查、jsx编译、devServer…）

   2. 下载好了所有相关的依赖

   3. 可以直接运行一个简单效果

2. react提供了一个用于创建react项目的脚手架库: create-react-app

3. 项目的整体技术架构为:  react + webpack + es6 + eslint

4. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

#### 使用方法
##### 创建项目并启动
- **第一步**，全局安装：
    ```jsx
        npm i -g create-react-app
    ```
- **第二步**，切换到想创项目的目录，使用命令：
    ```jsx
        create-react-app hello-react
    ```
- **第三步**，进入项目文件夹：

    ```jsx
        cd hello-react
    ```
- **第四步**，启动项目：
    ```jsx
        npm start
    ```

#### 项目结构
```jsx
    public ---- 静态资源文件夹
    		favicon.icon ------ 网站页签图标
    		index.html -------- 主页面
    		logo192.png ------- logo图
    		logo512.png ------- logo图
    		manifest.json ----- 应用加壳的配置文件
    		robots.txt -------- 爬虫协议文件
    src ---- 源码文件夹
    		App.css -------- App组件的样式
    		App.js --------- App组件
    		App.test.js ---- 用于给App做测试
    		index.css ------ 样式
    		index.js ------- 入口文件
    		logo.svg ------- logo图
    		reportWebVitals.js
    			--- 页面性能分析文件(需要web-vitals库的支持)
    		setupTests.js
    			---- 组件单元测试的文件(需要jest-dom库的支持)
```
