---
title: JavaScript
tags:
  - JS
categories:
  - FrontEnd
cover: true
coverImg: /medias/banner/bg_banner/1.jpg
summary: '简介：对常用的JavaScript数组方法和字符串方法以及遍历相关的知识进行总结,为React和Vue的学习打基础,同时自己方便复习。'
description: '简介：对常用的JavaScript数组方法和字符串方法以及遍历相关的知识进行总结,为React和Vue的学习打基础,同时自己方便复习。'
top: true
sticky: 1
# abbrlink: 9809
date: 2022-05-13 09:10:55
autoGroup-2: 基础篇
---

::: tip JavaScript简洁常用文档
   JavaScript简洁文档 | 常用总结 | 向着TypeScript前进的第一步
:::

<!-- more -->


### JavaScript



#### 遍历相关
```js
        - for          最基本的循环    用来专门遍历数组的      可以使用break和continue

        - for in       专门用来遍历对象的属性的，这个属性能遍历到还是遍历不到要看这个属性是不是
          ​     // for in 效率最低，因为除了遍历自身以外还要遍历原型

        - for of       
          - ​     // 专门遍历可迭代的数据  ...  (能用可迭代，就用三点) 
          - ​     // 数组有迭代器
          - ​     // 对象没有

        - forEach      是一个数组的方法，效率极高  但是不可以使用break和continue
```

#### 数组方法

##### `every`

##### `parseInt()`

- 描述

  ```js
    parseInt(string, radix)   解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。
  ```

- 语法参数

  ```js
      parseInt(string, radix);
      参数
      
      string
      要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用  ToString 抽象操作)。字符串开头的空白符将会被忽略。
      radix 可选
      从 2 到 36，表示字符串的基数。例如指定 16 表示被解析值是十六进制数。请注意，10不是默认值！文章后面的描述解释了当参数 radix 不传时该函数的具体行为。
  ```

- 返回值

  ```js
      从给定的字符串中解析出的一个整数。
      
      或者 NaN，当
      	radix 小于 2 或大于 36 ，或
      	第一个非空格字符不能转换为数字。
      	parseInt('123', 5) // 将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
  ```

  

##### `includes()`

- 描述


  ```js
    方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。
  ```

  - 语法以及参数


  ```js
    arr.includes(valueToFind[, fromIndex])

    valueToFind
        需要查找的元素值。
        
        备注：使用 includes()比较字符串和字符时是区分大小写的。
        
    fromIndex 可选
        从fromIndex 索引处开始查找 valueToFind。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜 （即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。
  ```

  - 返回值


  ```js

    返回一个布尔值 Boolean 。
    ]如果在数组中（或 fromIndex 指定的范围中）找到了 valueToFind，则返回 true，否则返回 false。
    0 的值将全部视为相等，与符号无关（即 -0 与 0 和 +0 相等），
    但 false 不被认为与 0 相等。
    备注： 技术上来讲，includes() 使用 零值相等 算法来确定是否找到给定的元素。

  ```

  - 示例


  ```js
    [1, 2, 3].includes(2);     // true
    [1, 2, 3].includes(4);     // false
    [1, 2, 3].includes(3, 3);  // false
    [1, 2, 3].includes(3, -1); // true
    [1, 2, NaN].includes(NaN); // true

  ```

- 注意

```js
  fromIndex 大于等于数组长度
  如果 fromIndex 大于等于数组的长度，则将直接返回 false，且不搜索该数组。

  计算出的索引小于 0
  如果 fromIndex 为负值，计算出的索引将作为开始搜索searchElement的位置。如果计算出的索引小于 0，则整个数组都会被搜索。

  作为通用方法的 includes()
  includes() 方法有意设计为通用方法。它不要求this值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。下面的例子展示了 在函数的 arguments 对象上调用的 includes() 方法。
```



##### `find()`

- 描述

  ```js
     find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
  ```

- 语法以及参数

  ```js
    arr.find(callback[, thisArg])
    
    参数
    
    callback
        在数组每一项上执行的函数，接收 3 个参数：
    
        element
            当前遍历到的元素。
        index可选
            当前遍历到的索引。
        array可选
            数组本身。
    
    thisArg可选
        执行回调时用作this 的对象。 
  ```

- 返回值

  ```js
    数组中第一个满足所提供测试函数的元素的值，否则返回 undefined。
  ```

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)



##### `sort()`

- **描述**

  ```js
    sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
  ```

- **语法及参数**

  ```js
    arr.sort([compareFunction])
    
    参数
    compareFunction 可选
        用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
    
        firstEl
            第一个用于比较的元素。
        secondEl
            第二个用于比较的元素。
    
    返回值
    排序后的数组。请注意，数组已原地排序，并且不进行复制。
  ```

- **注意**

  ```js
    也会影响原数组，默认会按照Unicode编码进行排序
    
    带有compareFunction 参数时,
        如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
        如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
        如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
        compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
        
        、、、通俗理解
        比较函数应该具有两个参数 a 和 b，其返回值如下：
    若 a 小于 b，即 a - b 小于零，则返回一个小于零的值，数组将按照升序排列。
    若 a 等于 b，则返回 0。
    若 a 大于 b, 即 a - b 大于零，则返回一个大于零的值，数组将按照降序排列。
  
  ```

  [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

  [简单使用](https://www.cnblogs.com/saifei/p/9043821.html)



##### `filter()`

- **描述**

  ```js
    filter() 方法创建一个新的数组，新数组中的元素是通过==检查指定数组中符合条件==的所有元素。
  ```

  

- **语法以及参数**

  ```js
    array.filter(function(currentValue,index,arr), thisValue)
    
    function(currentValue, index,arr) 	
    必须。函数，数组中的每个元素都会执行这个函数
    函数参数:
    	currentValue 	必须。当前元素的值
    	index 			可选。当前元素的索引值
    	arr 			可选。当前元素属于的数组对象
    thisValue 		可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
    	如果省略了 thisValue ，"this" 的值为 "undefined"
    
    返回值
    一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
  ```

- **总结**

  ```js
    //用作过滤器
    array.filter((currentValue,index,arr) => {
    		return (过滤条件)
    }, thisValue)
  
  ```

- **注意：** filter() 不会对空数组进行检测。

- **注意：** filter() 不会改变原始数组。



##### `reduce`

- 语法:

  ```js
    - arr.reduce((preValue, current, index, arr)=>f),initialValue)
    
      // 箭头函数
      reduce((previousValue, currentValue) => { /* ... */ } )
      reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
      reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
      reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)
    
      // 回调函数
      reduce(callbackFn)
      reduce(callbackFn, initialValue)
    
      // 内联回调函数
      reduce(function(previousValue, currentValue) { /* ... */ })
      reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
      reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
      reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
    
    arr:当前操作的数组
    
    ==**preValue**:**第一次**执行回调时为给定的**初始值initialValue**,**以后是上一次执行回调时的返回值**。==
    
    ​					==备注:若**没有传入initialValue**,则第一次的preValue值是数组中**第一个元素的值**。== 
    
    **current 表示当前正在处理的元素;**
    
    index 表示当前正在处理的数组元素的索引,若传入了initialValue值,则为0,否则为1;
    
    array  当前操作的数组(就是arr)
    
    **initialValue 表示初始值。一般做数学时设置为0,若为筛选最值可以不传。
  ```

- **用于数据分析**

  ```js
  	  let arr = [1,2,3,4,5,6,7,8,9,10,9]
  
      // 数组求和 
      /* const x = arr.reduce((preValue,current)=>{
        console.log(preValue,current);
        return preValue+current
      })
      console.log(x); */
  
      // 数组中偶数的和----(条件求和)
      // const x = arr.reduce((preValue,current)=>preValue+(current % 2 === 0 ? current:0),0)
      // console.log(x);
  
      //数组中偶数有几个---(条件统计)
      // const x = arr.reduce((preValue,current)=>preValue+(current%2===0 ? 1:0),0)
      // console.log(x);
  
      // 数组中所有偶数的积
      // const x = arr.reduce((preValue,current)=>preValue*(current%2===0 ? current:1),1)
      // console.log(x);
  
      // 数组中最小值----(筛选最值)
      /* const x = arr.reduce((preValue,current)=>
      {
          console.log(preValue,current);
          return Math.max(preValue,current)
      },1)
      console.log(x);
  ```




- **`map`**

  - **描述**

    ```js
      map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
    ```

  - **语法**

    ```js
      var new_array = arr.map(function callback(currentValue[, index[, array]]) {
       	//为new_array返回元素
          
      }[, thisArg])
    ```

  - **参数**

    ```js
      `callback`
      生成新数组元素的函数，使用三个参数：   
      
      `currentValue`
      
      	`callback` 数组中正在处理的当前元素。 
      
      	`index`可选  
      
      	`callback` 数组中正在处理的当前元素的索引。  
      
      `array`可选  
      
      	`map` 方法调用的数组。  
      
      `thisArg`可选
      
      执行 `callback` 函数时值被用作`this`。
    ```

  - **返回值**

    ```js
      一个由原数组每个元素执行回调函数的结果组成的新数组。
    ```

  - 例

    ```js
      简单用法
      const array1 = [1, 4, 9, 16];
      
      // pass a function to map
      const map1 = array1.map(x => x * 2);
      
      console.log(map1);
      // expected output: Array [2, 8, 18, 32]
    ```

  - **注意：** 

    ```js
      map() 不会对空数组进行检测。
      map() 不会改变原始数组。
    ```

    [官方文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)



##### `push()`

- 该方法可以向数组的末尾添加一个或多个元素，并返回数组的新的长度

- 可以将要添加的元素作为方法的参数传递，

- 这样这些元素将会自动添加到数组的末尾 

- 该方法会将数组新的长度作为返回值返回

##### `pop()`

- 该方法可以删除数组的最后一个元素,并将被删除的元素作为返回值返回

##### `unshift()`

- 向数组开头添加一个或多个元素，并返回新的数组长度

- 向前边插入元素以后，其他的元素索引会依次调整

##### `shift()`

 可以删除数组的第一个元素，并将被删除的元素作为返回值返回

##### `slice()`

可以用来从数组提取指定元素
- 该方法不会改变元素数组，而是将截取到的元素封装到一个新数组中返回
- 参数：
  1.截取开始的位置的索引,  包含  开始索引
  2.截取结束的位置的索引,  不包含  结束索引
  - 第二个参数可以省略不写,此时会截取从开始索引往后的所有元素

  - 索引可以传递一个负值，如果传递一个负值，则从后往前计算
	-1 倒数第一个
	-2 倒数第二个

##### `splice()`


- 描述（增删改一体化）

```js
  可以用于删除数组中的指定元素
  
  - 参数：
    		第一个，表示开始位置的索引
    		第二个，表示删除的数量
    		第三个  及以后。。
    			可以传递一些新的元素，这些元素将会自动插入到开始位置索引前边
```
   - 注意

```js
  使用splice()会影响到原数组，会将指定元素从原数组中删除，被删除的元素作为返回值返回
```

​     

##### `concat()`

- 可以连接两个或多个数组，并将新的数组返回

  - 该方法不会对原数组产生影响



##### `join()`

该方法可以将数组转换为一个字符串

 - 该方法不会对原数组产生影响，而是将转换后的字符串作为结果返回
 - 在join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符

```js
		如果不指定连接符，则默认使用,作为连接符
```



##### `reverse()`

 该方法用来反转数组（前边的去后边，后边的去前边）
  	- 该方法会直接修改原数组



#### 字符串方法

##### `indexOf()`

- 描述

  ```js
    indexOf()方法返回调用它的 String 对象中**第一次出现的指定值的索引**，从 **fromIndex** 处进行搜索。如果未找到该值，则返回 -1。
  ```

- **语法**

  ```js
    str.indexOf(searchValue [, fromIndex])
  ```

- **参数**

  ```js
    searchValue
        要被查找的字符串值。如果没有提供确切地提供字符串，searchValue 会被强制设置为 "undefined"， 然后在当前字符串中查找这个值。举个例子：'undefined'.indexOf() 将会返回0，因为 undefined 在位置0处被找到，但是 'undefine'.indexOf() 将会返回 -1 ，因为字符串 'undefined' 未被找到。
        
    fromIndex 可选
        数字表示开始查找的位置。可以是任意整数，默认值为 0。如果 fromIndex 的值小于 0，或者大于 str.length ，那么查找分别从 0 和str.length 开始。（译者注：  fromIndex 的值小于 0，等同于为空情况； fromIndex 的值大于或等于 str.length ，那么结果会直接返回 -1 。）举个例子，'hello world'.indexOf('o', -5) 返回 4 ，因为它是从位置0处开始查找，然后 o 在位置4处被找到。另一方面，'hello world'.indexOf('o', 11) （或 fromIndex 填入任何大于11的值）将会返回 -1 ，因为开始查找的位置11处，已经是这个字符串的结尾了。 
  ```

- **返回值**

  ```js
    查找的字符串 searchValue 的第一次出现的索引，如果没有找到，则返回 -1。
    
    若被查找的字符串 searchValue 是一个空字符串，将会产生“奇怪”的结果。如果 fromIndex 值为空，或者 fromIndex 值小于被查找的字符串的长度，返回值和以下的 fromIndex 值一样：
    			'hello world'.indexOf('') // 返回 0
    			'hello world'.indexOf('', 0) // 返回 0
    			'hello world'.indexOf('', 3) // 返回 3
    			'hello world'.indexOf('', 8) // 返回 8
    			
    另外，如果 fromIndex 值大于等于字符串的长度，将会直接返回字符串的长度（str.length）：
    			'hello world'.indexOf('', 11) // 返回 11
    			'hello world'.indexOf('', 13) // 返回 11
    			'hello world'.indexOf('', 22) // 返回 11
    			
    从前面一个例子可以看出，被查找的值是空值时，Javascript将直接返回指定的索引值。从后面一个例子可以看出，被查找的值是空值时，Javascript将直接返回字符串的长度。
  ```

- **注意**

  ```js
    字符串中的字符被从左向右索引。第一个字符的索引（index）是 0，变量名为 stringName 的字符串的最后一个字符的索引是 stringName.length - 1
    
    indexOf 方法是区分大小写的
    
    注意 0 并不会被当成 true ，-1 不会被当成 false 。所以当检测某个字符串是否存在于另一个字符串中时，可使用下面的方法：
    		'Blue Whale'.indexOf('Blue') !== -1    // true
    		'Blue Whale'.indexOf('Bloe') !== -1    // false
    		~('Blue Whale'.indexOf('Bloe'))        // 0, 这是一种错误用法
  ```

- [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)



##### trim

- 描述

  ```js
    `trim()`方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）。
  ```

  ```js
    `trim()` 方法返回一个从两头去掉空白字符的字符串，并不影响原字符串本身。
  ```

- 语法

  ```js
    str.trim()
  ```

- 返回值

  ```js
    一个代表调用字符串两端去掉空白的新字符串。
  ```

- 兼容久环境、

  ```js
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      };
    }
  
  ```



#### DOM操作
```js
//常用DOM操作
    getElementById()                  //返回带有指定ID 的元素。
    getElementsByTagName()            //返回包含带有指定标签名称的所有元素的节
                                      //    点列表(集合/节点数组)。
    getElementsByClassName()          //返回包含带有指定类名的所有元素的节
                                      //    点列表。
    getElementsByName('a')            //通过name属性获取一组元素节点对象
    document.querySelector('#a')      //通过CSS选择器来获取一个元素节点对象
    document.querySelectorAll('span') //通过CSS选择器来获取一组元素节点对象
    appendChild()                     //把新的子节点添加到指定节点。
    removeChild()                     //删除子节点。
    replaceChild()                    //替换子节点。
    insertBefore()                    //在指定的子节点前面插入新的子节点。
    createAttribute()                 //创建属性节点。


    createElement()                   //创建元素节点。
    createTextNode()                  //创建文本节点。
    getAttribute()                    //返回指定的属性值。
    setAttribute()                    //把指定属性设置或修改为指定的值。
    当前节点.paretNode                //表示当前节点的父节点
    当前节点.previousSibling          //表示当前节点的前一个兄弟节点
    当前节点.nextSibling              //表示当前节点的后一个兄弟节点
    父节点.firstchild                 //可以获取第一个子节点(包括空白文本节点)
    父节点.firstElementchild          //可以获取第一个子元素(不包括空白文本节点)
    父节点.childNodes                 //表示当前节点的所有子节点

```

#### BOM操作
- 浏览器对象模型
- BOM可以使我们通过JS来操作浏览器
- 在BOM中为我们提供了一组对象，用来完成对浏览器的操作
- **BOM对象**
	- **Window**
    	- 代表的是整个浏览器的窗口，同时window也是网页中的全局对象
	- **Navigator**
  	  - 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
	- **Location**
  		- 代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
	- **History**
  	  - 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录
      - 由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页而且该操作只在当次访问时有效
	- **Screen**
    	- 代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息


##### Screen获取元素的大小和位置

###### PC

- **client**系列

  ```js
      页可见区域宽： document.body.clientWidth;
      网页可见区域高： document.body.clientHeight;
  
  ```

- **offset**系列

  ```js
      网页可见区域宽： document.body.offsetWidth   (包括边线的宽);
      网页可见区域高： document.body.offsetHeight (包括边线的宽);
  ```

- **scroll**系列

  ```js
      网页正文全文宽： document.body.scrollWidth;
      网页正文全文高： document.body.scrollHeight;
      网页被卷去的高： document.body.scrollTop;
      网页被卷去的左： document.body.scrollLeft;
  ```

##### 移动端

  ```js
    网页正文部分上： window.screenTop;
    网页正文部分左： window.screenLeft;
    屏幕分辨率的高： window.screen.height;
    屏幕分辨率的宽： window.screen.width;
    屏幕可用工作区高度： window.screen.availHeight;
  ```



#### React打基础

js => jsx



```js
map
- 参数
- `callback`
  - 生成新数组元素的函数，使用三个参数：   
  - `currentValue`
    -   `callback` 数组中正在处理的当前元素。 
  - `index`可选  
    - `callback` 数组中正在处理的当前元素的索引。  
  - `array`可选  
    - `map` 方法调用的数组。  
- `thisArg`可选
  - 执行 `callback` 函数时值被用作`this`。
  
```



#### Vue打基础

js => vue



```js
object.keys(obj)   //返回的是参数对象的属性组成的数组，可以用数组的方法forEach去遍历对象

//例如
Object.keys(obj).forEach(item => console.log(item,obj[item]))

```

```js
// Object.defineProperty
        // 这个方法在为对象添加或者修改     属性为响应式属性
        /* 
        语法
            Object.defineProperty(obj, prop, descriptor)
              参数
                obj
                    要定义属性的对象。
                prop
                    要定义或修改的属性的名称或 Symbol 。
                descriptor
                    要定义或修改的属性描述符。

               返回值
                    被传递给函数的对象。
        */
```



