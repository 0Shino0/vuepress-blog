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

