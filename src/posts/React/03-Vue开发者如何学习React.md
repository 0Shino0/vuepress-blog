---
title: Vue开发者如何学习React
tags: 
    - React
categories: 
    - FrontEnd
summary: Vue开发者如何学习React
description: Vue开发者如何学习React
date: 2023-6-18 15:35:43
# autoGroup-3: 框架篇
# subSidebar: auto
---



## Vue开发者如何学习React

https://juejin.cn/post/7234687030017376312



React其实很简单

- 任何领域,强大的、高效的东西,一定是简单的·
- React就是JS ,外加一点模板语言JSX (像HTML)说 
- React 难的人，可能JS 语法都不熟练



## React核心价值

React核心价值:

1-组件化

2-数据驱动视图

- $ UI = f(state) $
- 理解：函数接收一个参数（数据），返回视图（UI、HTML）
- 好处
  - 定义好数据和 UI 的显示规则，即 UI = f(state)
  - 只关注业务数据的修改，不用再操作 DOM，增加开发效率
  - 尤其对于DOM 结构复杂的大型项目



## 创建项目

### 创建项目

使用Create-React-App 创建 React 项目

`npx create-react-app react-ts-demo --template typescript`

使用 Vite 创建 React 项目

`npm create vite my-react --template react-ts`

使用 eslint prettier husty 等，制定编码规则

### 制定编码规则

- 安装相关插件

  ```shell
  # prettier相关
  npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
  
  # eslint相关
  npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react --save-dev
  ```

  

- 项目根目录添加并配置`.eslintrc.js` 安装prettier插件、eslint插件

  ```js
  module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
      // "files": ["*.tsx", "*.ts"]
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {}
  }
  ```

- 配置`package.json`脚本

  - 正常情况下

    ```json
      "scripts": {
        "lint": " eslint 'src/**/*.+(js|ts|jsx|tsx)' ",
        "format": " prettier --write 'src/**/*.+(js|ts|jsx|tsx)' "
      },
    ```

  - 如果上面的不行，可以试一试下面的

    ```
        "lint": " eslint src/**/*.{js,ts,jsx,tsx} ",
        "format": " prettier --write src/**/*.{js,ts,jsx,tsx} ",
    ```

- 配置vscode，保存自动触发eslint

  - 项目根目录新建`.vscode`文件

  - 新建`setting.json`

    ```json
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      }
    }
    ```

- 自定义prettier

  - 项目根目录新建`.prettierrc.js`

    ```js
    module.exports = {
      // 箭头函数只有一个参数的时候可以忽略括号
      arrowParens: 'avoid',
      // 括号内部不要出现空格
      bracketSpacing: true,
      // 行结束符使用 Unix 格式
      endOfLine: 'lf',
      // true: Put > on the last line instead of at a new line
      jsxBracketSameLine: false,
      // 行宽
      printWidth: 100,
      // 换行方式
      proseWrap: 'preserve',
      // 分号
      semi: false,
      // 使用单引号
      singleQuote: true,
      // 缩进
      tabWidth: 2,
      // 使用 tab 缩进
      useTabs: false,
      // 后置逗号，多行对象、数组在最后一行增加逗号
      trailingComma: 'es5',
      parser: 'typescript',
    }
    ```
    
  - 或者新增`.prettierrc`
  
    ```json
    {
    
      "arrowParens": "avoid",
    
      "bracketSpacing": true,
    
      "endOfLine": "lf",
    
      "jsxBracketSameLine": false,
    
      "printWidth": 100,
    
      "proseWrap": "preserve",
    
      "semi": false,
    
      "singleQuote": true,
    
      "tabWidth": 2,
    
      "useTabs": false,
    
      "trailingComma": "es5",
      "parser": "typescript"
    }
    
    ```
  
    



#### husky

简介

- 一个 git hook 工具.在 
- git commit 之前执行自定义的命令
- 如执行代码风格的检查，避免提交非规范代码

##### 使用

git-hook 

安装依赖

```
npm install husky -save-dev 
// or 
pnpm install husky -save-dev
```

参考文档 https://github.com/typicode/husky 增加三个 `pre-commit` 命令

```shell
npm run lint
npm run format
git add .
```

可以故意制造一个错误：定义一个未使用变量（eslint 配置文件 `rules` 增加 `'no-unused-vars': 'error',`）<br>
然后执行 `git commit` 试试



## commit-lint

参考文档 https://github.com/conventional-changelog/commitlint#getting-started 安装设置即可

commit 规则查看 `node_modules/@commitlint/config-conventional` （在 `commitlint.config.js` 中有配置）

尝试 `git commit -m "test"` 会失败，再尝试 `git commit -m "chore: commit lint"` 会成功



常见类型 [commitlint-config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) 可以有以下:

| 类型     | 描述                                                   |
| :------- | :----------------------------------------------------- |
| build    | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
| chore    | 其他修改, 比如改变构建流程、或者增加依赖库、工具等     |
| ci       | 持续集成修改                                           |
| docs     | 文档修改                                               |
| feat     | 新特性、新功能                                         |
| fix      | 修改bug                                                |
| perf     | 优化相关，比如提升性能、体验                           |
| refactor | 代码重构                                               |
| revert   | 回滚到上一个版本                                       |
| style    | 代码格式修改, 注意不是 css 修改                        |
| test     | 测试用例修改                                           |

These can be modified by [your own configuration](https://github.com/conventional-changelog/commitlint#config).



## 条件循环

条件

- &&
- 三元表达式
- 函数



循环

- 定义数组+map遍历



## React Hooks

### 内置Hooks

#### useState

特点

- 会触发页面更新，重新渲染，触发state更新

- state是异步更新，state更新可能会被合并，使用函数state更新不会被合并

- 不可变数据（重要！！！）- 不去修改 state的值，而是传入一个新的值

  ```tsx
    // 修改对象
    const [userInfo, setUserInfo] = useState({ name: '666', age: 20 })
    function changeAge() {
      // 不可变数据 - 不去修改 state的值，而是传入一个新的值 - 重要
      setUserInfo({
        ...userInfo, // 解构语法
        age: 22,
      }) // ...解构
    }
  
    // 修改数组
    const [list, setList] = useState(['x', 'y'])
    function addItem() {
      // 不可变数据 - 不去修改 state的值，而是传入一个新的值 - 重要
      // list.push('z') // 修改失败
      // setList(list.push('z')) // 修改失败 push返回的不是一个数组，而是长度
      // setList(list.concat('z')) // 修改成功 cancat将元素添加到末尾并反回一个新数组
      setList([...list, 'z']) // 修改成功 解构
    }
  ```

  

如果说 一个变量 不用于 JSX 中显示，那就不要用 setState 来管理它，用useRef

```tsx
  const [count, setCount] = useState(0) // useState 可以触发组件的更新
  // const [name, setName] = useState('name')

  const add = () => {
    // count++
    setCount(count + 1) // 可能会被合并
    // setCount(() => count + 1) // 使用函数state更新不会被合并
    console.log('count ', count) // 异步更新无法直接拿到最新的state值

    // setName('x')
    // console.log(name) // 如果说 一个变量 不用于 JSX 中显示，那就不要用 setState 来管理它，用useRef
  }
```



##### state增删查改

**数组**

增

- concat

删

- filter

查

- filter

改

- map



状态提升：数据源在父组件中，子组件只需要负责展示。操作、数据由父组件实现、传递，子组件调用、渲染



##### immer

Immer 简化了不可变数据结构的处理。特别是对于 JS 语法没那么熟悉的人。



#### useEffect

##### useEffect执行两次

- React 18开始, useEffect在==**开发环境**==下会执行两次
- 模拟组件创建、销毁、再创建的完整流程,及早暴露问题
- 生产环境下会执行一次



- 当组件渲染完成时,加载一个Ajax网络请求
- 当某个state更新时,加载一个Ajax网络请求使用 
- useEffect 实现

示例

```jsx
// ......
const List2: FC = () => {
  useEffect(() => {
    console.log('初次渲染 加载 ajax 网络请求')

    return () => {
      console.log('销毁')
    }
  }, []) // 空数组，无依赖，| 初次渲染触发

  // const [count, setCount] = useState(0)
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  // useEffect(() => {
  //   console.log('questionList change list')
  // }, [questionList]) // 依赖于questionList, 初次渲染触发 + 当questionList变化时会触发

  // useEffect(() => {
  //   console.log('count change')
  // }, [count, questionList]) // 依赖于count、questionList, 初次渲染触发 + 当count、questionList 任意一个变化时会触发

  // .....
}
```





#### 其他内置Hooks



##### useRef

- 一般用于操作DOM
- 也可传入普通JS变量,但更新不会触发 rerender
- 要和Vue3 ref区分开(如果你用过Vue3)



##### useMemo

- 函数组件，每次state更新都会重新执行函数
- useMemo 可以缓存数据，不用每次执行函数都重新生成
- 可用于计算量较大的场景，缓存提高性能

```tsx
const Demo: FC = () => {
  console.log('demo...')
  // console.log('123 \u005c\u0075 123')

  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)
  const [text, setText] = useState('holll') // 更新 导致组件 rerender

  // useMemo
  const sum = useMemo(() => {
    console.log('gen sum') // 测试缓存

    return num1 + num2
  }, [num1, num2])

  return (
    <>
      <p>{sum}</p>
      <p>
        {num1} <button onClick={() => setNum1(num1 + 1)}>add num1</button>
      </p>
      <p>
        {num2} <button onClick={() => setNum2(num2 + 1)}>add num2</button>
      </p>
      <div>
        {/* form 组件 受控组件 */}
        <input type="text" pattern={text} onChange={e => setText(e.target.value)} value={text} />
      </div>
    </>
  )
}
```



##### useCallback

- 和 useMemo 作用一样
- 专门用于缓存函数

```tsx
  const [text, setText] = useState('hello')

  const fn1 = () => console.log('fn1 text', text)

  const fn2 = useCallback(() => {
    console.log('fn2 text: ', text)
  }, [text])
```





### 自定义Hooks（复用代码）

封装常用Hooks，比如工具库



### 第三方Hooks（提高效率）

- ahooks （国内）
- React use （国外）



### Hooks使用规则

- 必须用useXxx格式来命名
- 只能在两个地方调用Hook（组件内Hooks内）
- 必须保证每次的调用顺序一致（不能放在 if for 内部）



## 闭包陷阱

- 当异步函数获取 state 时，可能不是当前最新的 state
- 可使用 useRef 来解决
- （要提前了解JS 闭包）



## React中使用CSS

- 内联 style 的方式
- 引入 CSS 文件，使用 className
- 尽量不要用内联 style



className条件判断-第三方包

- classnames
- clax



尽量不要使用内联style

- 内联 style 代码多，性能差，扩展性不好
- 外链 CSS 文件可复用代码，可单独缓存文件
- PS :这和React无关,学HTML CSS时就应该知道



### 普通CSS的问题

- React 使用组件化开发
- 多个组件，就需要多个 CSS 文件
- 多个CSS文件很容易造成 className 重复,不好管理

解决方案

- 普通CSS的问题-className会重复.
- 解决方案 CSS Module
- 增加Sass支持



### CSS Module

- 每个CSS文件都当做单独的模块,命令xxx.module.css
- 为每个 className 增加后缀名，不让它们重复
- Create-React-App原生支持CSS Module



### CSS-in-JS

- 一种解决方案（而非工具名称），有好几个工具.
- 在JS 中写 CSS ,带来极大的灵活性
- 它和内联style完全不一样,也不会有内联style的问题

优缺点

- 优点:用JS写,有逻辑有变量,非常灵活,
- 缺点：JSX 和样式代码混在一块，代码较多；增加了编译成本；
- 适用场景：需要灵活变换样式

工具

- styled-component
- styled-jsx
- emotion



## React-Router

目标：为系统增加路由，支持多页面定义和切换

内容：

- 路由设计，网址和页面的关系

- 增加页面和 Layout 模板使用
- React-router 增加路由配置

Hooks

- useNavigate——跳转页面
- useParams——获取params参数
- useSearchParams——获取query参数





## React表单组件、受控组件

### 受控组件

表单值与state状态联动



### 表单组件

`input`-`textarea`

-  value 绑定 useState
- 监听`onChange()`事件，传入event事件对象，setState传入event.target.value新数据，更新数据

```tsx
  // input text
  const [text, setText] = useState<string>('hello')

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value)
  }

  function genHtml() {
    return { __html: text.replaceAll('\n', '<br>') }
  }

return (
<>
	<input value={text} onChange={handleChange} type="text" />
    <button onClick={() => console.log(text)}>打印</button>
    <button onClick={() => setText('测试')}>同步</button>
</>
)
```

```tsx
// textarea
  const [text, setText] = useState<string>('hello')

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value)
  }

  function genHtml() {
    return { __html: text.replaceAll('\n', '<br>') }
  }

<textarea value={text} onChange={handleChange}></textarea>
<p dangerouslySetInnerHTML={genHtml()}></p>
```



`radio`

- 

```tsx
  const [gender, setGender] = useState('male')+
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value)
  }

  const [checked, setChecked] = useState(false)
  function toggleChecked() {
    setChecked(!checked)
  }

return (<>
        <label htmlFor="radio1">男</label>
          <input
            type="radio"
            id="radio1"
            name="gender"
            checked={gender === 'male'}
            value="male"
            onChange={handleChange}
          />
          <label htmlFor="radio2">女</label>
          <input
            type="radio"
            id="radio2"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleChange}
          />
          <button onClick={() => console.log(gender)}>打印</button>
        </>)
```

`checkbox`

- 

```tsx
	    const [selectedCityList, setSelectedCityList] = useState<string[]>([])
        function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
          const city = event.target.value
          // state是不可变数据
          if (selectedCityList.includes(city)) {
            // 移除
            setSelectedCityList(
              selectedCityList.filter(c => {
                if (c === city) return false
                return true
              })
            )
          } else {
            // 添加
            setSelectedCityList(selectedCityList.concat(city))
          }
        }

		  <label htmlFor="">北京</label>
          <input
            type="checkbox"
            id="checkbox1"
            value="beijing"
            checked={selectedCityList.includes('beijing')}
            onChange={handleCityChange}
          />
          <label htmlFor="">上海</label>
          <input
            type="checkbox"
            id="checkbox2"
            value="shanghai"
            checked={selectedCityList.includes('shanghai')}
            onChange={handleCityChange}
          />
          <label htmlFor="">深圳</label>
          <input
            type="checkbox"
            id="checkbox3"
            value="shenzhen"
            checked={selectedCityList.includes('shenzhen')}
            onChange={handleCityChange}
          />
          {JSON.stringify(selectedCityList)}

          <input type="hidden" name="cities" value={JSON.stringify(selectedCityList)} />
```

`select`

- 

```tsx
    const [lang, setLang] = useState('js')
    function handleChnage(event: ChangeEvent<HTMLSelectElement>) {
      setLang(event.target.value)
    }

<select value={lang} onChange={handleChnage}>
    <option value="java">Java</option>
    <option value="js">JS</option>
    <option value="css">CSS</option>
</select>
```

`form`

- 

```tsx
        <form action="/api/post" onSubmit={handleSubmit}>
          <input type="text" name="k1" value="v1" />
          <br />
          <textarea name="k2" value="v2"></textarea>
          <br />
          <input type="hidden" />
          <button>提交</button>
        </form>
```



## 状态管理

- React内置功能Context和useReducer
- 第三方工具Redux和 MobX
- 使用 Redux 管理用户状态

解决问题：

- 页面足够复杂：组件很多，嵌套层级很深
- 通过 props 层层传递不合适
- 需要状态管理,即集中、统一管理页面数据



### Context

- 可跨层级传递，而不像 props 层层传递
- 类似于Vue 的 provide/inject
- 例如:切换主题、切换语言



### useReducer

- useState的代替方案
- 数据结构简单时用useState ,复杂时用useReducer
- 简化版的 redux

#### useReducer概念

- state或store
- action
- reducer
- dispatch

#### 使用总结

- 类似于redux的流程和API
- 结合Context 解决跨组件问题
- state dispatch 默认没有模块化,数据混在一起



### Redux

Redux和useReducer概念一致

- state或store
- action
- reducer
- dispatch

#### Context + useReducer 代替 Redux ?

- 社区热议的话题
- 简单场景可以,节省代码体积,更简单
- 复杂场景仍然建议用 Redux



### Mobx

声明式的修改数据，像Vue | 有一定学习成本

概念

- state 数据
- action 动作
- derivation 派生: computed observer



## 项目实战

imooc——React 仿问卷星 电子书



### 路由设计

##### 页面对应的路由

![image-20230625212522036](https://shinoimg.yyshino.top/img/202306252125537.png)

- 首页 `/`
- 登录 `/login`
- 注册 `/register`
- 问卷管理
  - 我的问卷 `/manage/list`
  - 星标问卷 `/manage/star`
  - 回收站 `/manage/trash`
- 问卷详情
  - 编辑问卷 `/question/edit/:id` （动态路由）
  - 问卷统计 `/question/stat/:id`
- 404

### Layout 模板

- MainLayout
- ManageLayout
- QuestionLayout





### 搜索、分页、下滑加载

改变浏览器url，而不是直接操作列表中的数据

好处：

- 降低不同组件之间的耦合
- 刷新时，防止数据丢失（从url中获取）



示例

#### 搜索

- 从url获取params参数
- 搜索时再url添加params参数

```tsx
import React, { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import { List_SEARCH_PARAM_KEY } from '../constant/index'

const { Search } = Input

const ListSearch: React.FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const [value, setValue] = useState('') // 响应式存储 搜索参数
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // 监听input onChange事件，动态设置 搜索参数
    setValue(event.target.value)
  }

  //  获取url参数，并设置到input value中
  const [searchParam] = useSearchParams()
  useEffect(() => {
    // 每当 searchParams 有变化，都会执行这个函数
    const newVal = searchParam.get(List_SEARCH_PARAM_KEY)
    setValue(newVal === null ? '' : newVal)
  }, [searchParam])
  function handleSearch(value: string) {
    // 跳转页面，增加url参数
    nav({ pathname, search: `${List_SEARCH_PARAM_KEY}=${value}` }) // 去掉page pageSize
  }

  return (
    <Search
      allowClear
      placeholder="输入关键字"
      value={value}
      style={{ width: '200px' }}
      onChange={handleChange}
      onSearch={handleSearch}
    />
  )
}

export default ListSearch
```



#### 分页

前提：使用antd组件库的pagination

- 从url获取params参数
- 监听onChange事件（Pagination封装的方法，当pageSize、page改变时执行）。在url中添加params参数

```tsx
import React, { FC, useEffect, useState } from 'react'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import { Pagination } from 'antd'

import { LIST_PAGE_SIZE, List_PAGE_PARAM_KEY, List_PAGE_SIZE_PARAM_KEY } from '../constant/index' // 获取常量

type PropsType = {
  total: number
}

const ListPage: FC<PropsType> = (props: PropsType) => {
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE) // 默认pageSize

  const [searchParams] = useSearchParams() // 获取 params 参数
  useEffect(() => {
    // params 改变时，与Pagination通信，替换current pageSize
    const page = parseInt(searchParams.get(List_PAGE_PARAM_KEY) || '') || 1 // 默认第一页
    const pageSize = parseInt(searchParams.get(List_PAGE_SIZE_PARAM_KEY) || '') || LIST_PAGE_SIZE // 每页默认 LIST_PAGE_SIZE 条

    setCurrent(page)
    setPageSize(pageSize)
  }, [searchParams])

  // 当page pageSize改变时，跳转页面（改变url）
  const nav = useNavigate()
  const { pathname } = useLocation()
  function handlePageChange(page: number, pageSize: number) {
    // console.log(page, pageSize)
    searchParams.set(List_PAGE_PARAM_KEY, page.toString())
    searchParams.set(List_PAGE_SIZE_PARAM_KEY, pageSize.toString())

    nav({
      pathname,
      search: searchParams.toString(),
      // 除了改变page pageSize以外，其他url参数要带着
      // 转化为string类型 如'a=1&b=2&c=3'
    })
  }

  const { total } = props
  return (
    <Pagination current={current} pageSize={pageSize} total={total} onChange={handlePageChange} />
  )
}

export default ListPage
```



#### LoadMore

- 每次请求累加列表



### AJAX

#### Mock

- 搭建mock服务（作为临时的服务端）
  - 重要性
    - 工作中,场景前后端并行开发,而非串行
    - 前后端商议好API格式,双方各自开发。前端使用mock服务
    - 待前后端都开发完,再对接联调功能
  - 技术选型
    - 使用mock.js
      - 只能劫持 XMLHttpRequest ,不能劫持 fetch ,有局限性
      - 要在生产环境（上线时）注释掉，否则线上请求也被劫持
      - 结论:不建议在项目中直接使用mock.js
    - 使用nodejs服务+ mock.js
      - 使用mock.js的Random能力
      - 定义 nodejs代码结构,考虑多模块的扩展性
      - 刻意延迟1s ,模拟loading效果
    - 使用在线 mock 平台
      - 如Fast-mock Y-API Swagger (国外)
      - 可能不稳定、不维护，或者网络不稳定
      - 可能存在敏感数据泄漏的风险
    - 总结
      - 直接在前端使用 mock.js - 不推荐
      - 使用 nodejs + mock.js - 推荐
      - 使用在线mock平台-不推荐(除非公司内部的)
-  使用Ajax和服务端通讯，并应用于现有功能
- API设计（使用Restful API设计）
- 实战：为列表页、登录页、注册页，增加Ajax请求



#### 基础知识和工具

- HTTP 协议，前后端通讯的桥梁

- API : XMLHttpRequest和fetch

  ```js
  // XMLHttpRequest
  var xhr = new XMLHttpRequest()
  xhr.open('get','/api/test',true);
  xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
          var result = JSON.parse(xhr.responseText);
      }
  }
  xhr.send();
  ```
  
  ```js
  // fetch
  fetch('/api/test')
  	.then(res => res.json())
  	.then(data => console.log(data))
  ```
  
- 常用工具 axios



#### API设计



### 用户

#### JWT

- JSON Web Token
- 登录成功后，服务端返回一个 token（令牌，一段字符串）
- 以后每次请求带着这个token,以表明自己的身份
