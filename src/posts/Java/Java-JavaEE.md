---
title: JavaEE
tags: 
  - Java
categories: 
  - AfterEnd
summary: JavaEE期末复习
description: JavaEE期末复习
date: 2022-11-18 15:18:34
# sticky: 2
autoGroup-3: 编程语言
# subSidebar: auto
---



## JavaEE



## JSP

### `JSP`脚本



#### 1、jsp注释

jsp注释的内容不会出现在生成的`servlet`中

```html
<%-- 注释的内容 --%>
```

不同情况下使用注释的语法规则：

| **语法**         | 描述                                                 |
| :--------------- | :--------------------------------------------------- |
| `<%-- 注释 --%>` | JSP注释，注释内容不会被发送至浏览器甚至不会被编译    |
| `<!-- 注释 -->`  | HTML注释，通过浏览器查看网页源代码时可以看见注释内容 |
| `<\%`            | 代表静态 <%常量                                      |
| `%\>`            | 代表静态 %> 常量                                     |
| `\'`             | 在属性中使用的单引号                                 |
| `\"`             | 在属性中使用的双引号                                 |



#### 2、jsp脚本断

因为是写在方法体中的，所以里面不能继续写方法

```html
<%  %>
```



#### 3、`jsp`声明

一个声明语句可以声明一个或多个变量、方法，供后面的Java代码使用。在JSP文件中，您必须先声明这些变量和方法然后才能使用它们。

写在类中，即写在了_jspService方法外，根据类体规范来写

```html
<%! declaration; [ declaration; ]+ ... %>

<%-- 示例 --%>
<%! int i = 0; %>
<%! int a, b, c; %>
<%! Circle a = new Circle(2.0); %>
```



#### 4、`jsp`表达式

一个JSP表达式中包含的脚本语言表达式，先被转化成String，然后插入到表达式出现的地方。由于表达式的值会被转化成String，所以您可以在一个文本行中使用表达式而不用去管它是否是HTML标签。表达式元素中可以包含任何符合Java语言规范的表达式，但是不能使用分号来结束表达式。

```html
<%= %>
    
<%-- 示例 --%>
<p>
   今天的日期是: <%= (new java.util.Date()).toLocaleString()%>
</p>
<%-- 今天的日期是: 2022-12-12 15:18:53 --%>
```



### `JSP`编译指令

JSP指令用来设置整个JSP页面相关的属性，如网页的编码方式和脚本语言。

语法格式

```html
<%@ directive attribute="value" %>
```

| **指令**             | **描述**                                                |
| :------------------- | :------------------------------------------------------ |
| `<%@ page ... %>`    | 定义网页依赖属性，比如脚本语言、error页面、缓存需求等等 |
| `<%@ include ... %>` | 包含其他文件                                            |
| `<%@ taglib ... %>`  | 引入标签库的定义                                        |



#### `Page`指令

Page指令为容器提供当前页面的使用说明。一个JSP页面可以包含多个page指令。

```html
<%@ page attribute="value" %>
```

等价的`xml`格式

```xml
<jsp:directive.page attribute="value" />
```

| **属性**             | **描述**                                            |
| :------------------- | :-------------------------------------------------- |
| `buffer`             | 指定out对象使用缓冲区的大小                         |
| `autoFlush`          | 控制out对象的 缓存区                                |
| `contentType`        | 指定当前JSP页面的MIME类型和字符编码                 |
| `errorPage`          | 指定当JSP页面发生异常时需要转向的错误处理页面       |
| `isErrorPage`        | 指定当前页面是否可以作为另一个JSP页面的错误处理页面 |
| `extends`            | 指定servlet从哪一个类继承                           |
| `import`             | 导入要使用的Java类                                  |
| `info`               | 定义JSP页面的描述信息                               |
| `isThreadSafe`       | 指定对JSP页面的访问是否为线程安全                   |
| `language`           | 定义JSP页面所用的脚本语言，默认是Java               |
| `session`            | 指定JSP页面是否使用session                          |
| `isELIgnored`        | 指定是否执行EL表达式                                |
| `isScriptingEnabled` | 确定脚本元素能否被使用                              |



#### `include`指令

JSP可以通过include指令来包含其他文件。被包含的文件可以是JSP文件、HTML文件或文本文件。包含的文件就好像是该JSP文件的一部分，会被同时编译执行。

```html
<%@ include file="文件相对url地址" %>
```

**include** 指令中的文件名实际上是一个相对的 URL 地址。

如果您没有给文件关联一个路径，JSP编译器默认在当前路径下寻找。

等价的XML语法：

```xml
<jsp:directive.include file="文件相对 url 地址" />
```



#### `Taglib`指令

`JSP API`允许用户自定义标签，一个自定义标签库就是自定义标签的集合。

`Taglib`指令引入一个自定义标签集合的定义，包括库路径、自定义标签。

```html
<%@ taglib uri="uri" prefix="prefixOfTag" %>
```

uri属性确定标签库的位置，prefix属性指定标签库的前缀。

等价的XML语法：

```xml
<jsp:directive.taglib uri="uri" prefix="prefixOfTag" />
```



### `jsp`动作元素

与JSP指令元素不同的是，JSP动作元素在请求处理阶段起作用。JSP动作元素是用XML语法写成的。利用JSP动作可以动态地插入文件、重用JavaBean组件、把用户重定向到另外的页面、为Java插件生成HTML代码。

动作元素只有一种语法，它符合XML标准：

```xml
<jsp:action_name attribute="value" />
```



标准动作元素

| 语法              | 描述                                                |
| :---------------- | :-------------------------------------------------- |
| `jsp:include`     | 在页面被请求的时候引入一个文件。                    |
| `jsp:useBean`     | 寻找或者实例化一个`JavaBean`。                      |
| `jsp:setProperty` | 设置`JavaBean`的属性。                              |
| `jsp:getProperty` | 输出某个`JavaBean`的属性。                          |
| `jsp:forward`     | 把请求转到一个新的页面。                            |
| `jsp:plugin`      | 根据浏览器类型为Java插件生成`OBJECT`或`EMBED`标记。 |
| `jsp:element`     | 定义动态`XML`元素                                   |
| `jsp:attribute`   | 设置动态定义的`XML`元素属性。                       |
| `jsp:body`        | 设置动态定义的`XML`元素内容。                       |
| `jsp:text`        | 在JSP页面和文档中使用写入文本的模板                 |

所有的动作要素都有两个属性：`id`属性和`scope`属性

- id属性：

  id属性是动作元素的唯一标识，可以在JSP页面中引用。动作元素创建的id值可以通过PageContext来调用。

- scope属性：

  该属性用于识别动作元素的生命周期。 id属性和scope属性有直接关系，scope属性定义了相关联id对象的寿命。 scope属性有四个可能的值： (a) page, (b)request, (c)session, 和 (d) application。



#### `<jsp:include>`

`<jsp:include>`动作元素用来包含静态和动态的文件。该动作把指定文件插入正在生成的页面。语法格式如下：

```xml
<jsp:include page="相对 URL地址" flush="true" />
<!------- 
它是在JSP文件被转换成Servlet的时候引入文件，
而这里的jsp:include动作不同，插入文件的时间是在页面被请求的时候。 
----->
```

| 属性    | 描述                                       |
| :------ | :----------------------------------------- |
| `page`  | 包含在页面中的相对URL地址。                |
| `flush` | 布尔属性，定义在包含资源前是否刷新缓存区。 |



#### `<jsp:useBean>`

`jsp:useBean` 动作用来加载一个将在JSP页面中使用的JavaBean。

这个功能非常有用，因为它使得我们可以发挥 Java 组件复用的优势。

`jsp:useBean`动作最简单的语法为：

```xml
<jsp:useBean id="name" class="package.class" />
<!------- 
在类载入后，我们既可以通过 jsp:setProperty 和 jsp:getProperty 
动作来修改和检索bean的属性。
----->
```

| 属性       | 描述                                                        |
| :--------- | :---------------------------------------------------------- |
| `class`    | 指定Bean的完整包名。                                        |
| `type`     | 指定将引用该对象变量的类型。                                |
| `beanName` | 通过 java.beans.Beans 的 instantiate() 方法指定Bean的名字。 |



#### `<jsp:setProperty>`

`jsp:setProperty`用来设置已经实例化的Bean对象的属性，有两种用法。首先，你可以在`jsp:useBean`元素的外面（后面）使用jsp:setProperty，如下所示：

```xml
<jsp:useBean id="myName" ... />
...
<jsp:setProperty name="myName" property="someProperty" .../>
```

此时，不管`jsp:useBean`是找到了一个现有的Bean，还是新创建了一个Bean实例，`jsp:setProperty`都会执行。第二种用法是把`jsp:setProperty`放入`jsp:useBean`元素的内部，如下所示：

```xml
<jsp:useBean id="myName" ...>
    ...
    <jsp:setProperty name="myName" property="someProperty" .../>
</jsp:useBean>
```

`jsp:setProperty`只有在新建Bean实例时才会执行，如果是使用现有实例则不执行`jsp:setProperty`。

| 属性       | 描述                                                                                                                                                                                                                                                                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`     | `name`属性是必需的。它表示要设置属性的是哪个Bean。                                                                                                                                                                                                                                                                                                          |
| `property` | `property`属性是必需的。它表示要设置哪个属性。有一个特殊用法：如果property的值是"*"，表示所有名字和Bean属性名字匹配的请求参数都将被传递给相应的属性set方法。                                                                                                                                                                                                |
| `value`    | `value` 属性是可选的。该属性用来指定Bean属性的值。字符串数据会在目标类中通过标准的valueOf方法自动转换成数字、boolean、Boolean、 byte、Byte、char、Character。例如，boolean和Boolean类型的属性值（比如"true"）通过 Boolean.valueOf转换，int和Integer类型的属性值（比如"42"）通过Integer.valueOf转换。 　　value和param不能同时使用，但可以使用其中任意一个。 |
| `param`    | `param` 是可选的。它指定用哪个请求参数作为Bean属性的值。如果当前请求没有参数，则什么事情也不做，系统不会把null传递给Bean属性的set方法。因此，你可以让Bean自己提供默认属性值，只有当请求参数明确指定了新值时才修改默认属性值。                                                                                                                               |



#### `<jsp:getProperty>`

jsp:getProperty动作提取指定Bean属性的值，转换成字符串，然后输出。语法格式如下：

```xml
<jsp:useBean id="myName" .../>
...
<jsp:getProperty name="myName" property="someProperty" ... />
```

| 属性       | 描述                                   |
| :--------- | :------------------------------------- |
| `name`     | 要检索的Bean属性名称。Bean必须已定义。 |
| `property` | 表示要提取Bean属性的值                 |



#### `<jsp:forward>`

`jsp:forward`动作把请求转到另外的页面。`jsp:forward`标记只有一个属性page。语法格式如下所示：

```xml
<jsp:forward page="相对 URL地址" />
```

| 属性   | 描述                                                                                                                     |
| :----- | :----------------------------------------------------------------------------------------------------------------------- |
| `page` | page属性包含的是一个相对URL。page的值既可以直接给出，也可以在请求的时候动态计算，可以是一个JSP页面或者一个 Java Servlet. |



#### `<jsp:plugin>`

`jsp:plugin`动作用来根据浏览器的类型，插入通过`Java`插件 运行`Java Applet`所必需的OBJECT或EMBED元素。如果需要的插件不存在，它会下载插件，然后执行`Java`组件。 `Java`组件可以是一个`applet`或一个`JavaBean`。`plugin`动作有多个对应HTML元素的属性用于格式化`Java` 组件。`param`元素可用于向`Applet` 或 `Bean` 传递参数。

```xml
<jsp:plugin type="applet" codebase="dirname" code="MyApplet.class"
            width="60" height="80" >
    <jsp:param name="fontcolor" value="red" />
    <jsp:param name="background" value="black" />
    
    <jsp:fallback>
    	Unable to initialize Java Plugin    
    </jsp:fallback>
    
</jsp:plugin>
```



#### `<jsp:element>`、`<jsp:attribute>`、`<jsp:body>`

`<jsp:element>` 、 `<jsp:attribute>`、 `<jsp:body>`动作元素动态定义XML元素。动态是非常重要的，这就意味着XML元素在编译时是动态生成的而非静态。

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
<jsp:element name="xmlElement">
<jsp:attribute name="xmlElementAttr">
   属性值
</jsp:attribute>
<jsp:body>
   XML 元素的主体
</jsp:body>
</jsp:element>
</body>
</html>
```

编译后

```html
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h2>jsp:element 、 jsp:attribute、jsp:body 动作元素动态定义XML元素。动态是非常重要的，这就意味着XML元素在编译时是动态生成的而非静态。</h2>

    <xmlElement xmlElementAttr="属性值">
            XML主题
        </xmlElement>


</body>
</html>
```



#### `<jsp:text>`

`<jsp:text>`动作元素允许在JSP页面和文档中使用写入文本的模板，语法格式如下：

```xml
<jsp:text>模拟数据</jsp:text>
```



### 控制流语句

#### 判断 `if...else`

```html
<% if (day == 1 || day == 7) { %>
      <p>今天是周末</p>
<% } else { %>
      <p>今天不是周末</p>
<% } %>
```



#### 判断`switch...case`

```html
<% 
switch(day) {
case 0:
   out.println("星期天");
   break;
case 1:
   out.println("星期一");
   break;
case 2:
   out.println("星期二");
   break;
case 3:
   out.println("星期三");
   break;
case 4:
   out.println("星期四");
   break;
case 5:
   out.println("星期五");
   break;
default:
   out.println("星期六");
}
%>
```



#### 循环 `for`

```html
<%for ( fontSize = 1; fontSize <= 3; fontSize++){ %>
   <font color="green" size="<%= fontSize %>">
    菜鸟教程
   </font><br />
<%}%>
```



#### 循环`while`

```html
<%while ( fontSize <= 3){ %>
   <font color="green" size="<%= fontSize %>">
    菜鸟教程
   </font><br />
<%fontSize++;%>
<%}%>
```



### `JSP`隐式对象 (内置对象)

JSP隐式对象是JSP容器为每个页面提供的Java对象，开发者可以直接使用它们而不用显式声明。JSP隐式对象也被称为预定义变量。

| **对象**      | **描述**                                                         |
| :------------ | :--------------------------------------------------------------- |
| `request`     | **HttpServletRequest** 接口的实例                                |
| `response`    | **HttpServletResponse** 接口的实例                               |
| `out`         | **JspWriter**类的实例，用于把结果输出至网页上                    |
| `session`     | **HttpSession**类的实例                                          |
| `application` | **ServletContext**类的实例，与应用上下文有关                     |
| `config`      | **ServletConfig**类的实例                                        |
| `pageContext` | **PageContext**类的实例，提供对JSP页面所有对象以及命名空间的访问 |
| `page`        | 类似于Java类中的this关键字                                       |
| `Exception`   | **Exception**类的对象，代表发生错误的JSP页面中对应的异常对象     |

[详细]([JSP 隐式对象 | 菜鸟教程 (runoob.com)](https://www.runoob.com/jsp/jsp-implicit-objects.html))



### 浏览器相关

#### HTTP请求头

当浏览器请求一个网页时，它会向网络服务器发送一系列不能被直接读取的信息，因为这些信息是作为HTTP信息头的一部分来传送的。您可以查阅HTTP协议来获得更多的信息。

下表列出了浏览器端信息头的一些重要内容，在以后的网络编程中将会经常见到这些信息：

| **信息**              | **描述**                                                                                                                |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| `Accept`              | 指定浏览器或其他客户端可以处理的MIME类型。它的值通常为 **image/png** 或 **image/jpeg**                                  |
| `Accept-Charset`      | 指定浏览器要使用的字符集。比如 ISO-8859-1                                                                               |
| `Accept-Encoding`     | 指定编码类型。它的值通常为 **gzip** 或**compress**                                                                      |
| `Accept-Language`     | 指定客户端首选语言，servlet会优先返回以当前语言构成的结果集，如果servlet支持这种语言的话。比如 en，en-us，ru等等        |
| `Authorization`       | 在访问受密码保护的网页时识别不同的用户                                                                                  |
| `Connection`          | 表明客户端是否可以处理HTTP持久连接。持久连接允许客户端或浏览器在一个请求中获取多个文件。**Keep-Alive** 表示启用持久连接 |
| `Content-Length`      | 仅适用于POST请求，表示 POST 数据的字节数                                                                                |
| `Cookie`              | 返回先前发送给浏览器的cookies至服务器                                                                                   |
| `Host`                | 指出原始URL中的主机名和端口号                                                                                           |
| `If-Modified-Since`   | 表明只有当网页在指定的日期被修改后客户端才需要这个网页。 服务器发送304码给客户端，表示没有更新的资源                    |
| `If-Unmodified-Since` | 与If-Modified-Since相反， 只有文档在指定日期后仍未被修改过，操作才会成功                                                |
| `Referer`             | 标志着所引用页面的URL。比如，如果你在页面1，然后点了个链接至页面2，那么页面1的URL就会包含在浏览器请求页面2的信息头中    |
| `User-Agent`          | 用来区分不同浏览器或客户端发送的请求，并对不同类型的浏览器返回不同的内容                                                |



#### HTTP响应头

状态行包含HTTP版本信息，比如HTTP/1.1，一个状态码，比如200，还有一个非常短的信息对应着状态码，比如OK。

下表摘要出了HTTP1.1响应头中最有用的部分，在网络编程中您将会经常见到它们：

| **响应头**            | **描述**                                                                                                                                                                                                  |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Allow`               | 指定服务器支持的request方法（GET，POST等等）                                                                                                                                                              |
| `Cache-Control`       | 指定响应文档能够被安全缓存的情况。通常取值为 **public****，****private** 或**no-cache** 等等。 Public意味着文档可缓存，Private意味着文档只为单用户服务并且只能使用私有缓存。No-cache 意味着文档不被缓存。 |
| `Connection`          | 命令浏览器是否要使用持久的HTTP连接。**close****值** 命令浏览器不使用持久HTTP连接，而keep-alive 意味着使用持久化连接。                                                                                     |
| `Content-Disposition` | 让浏览器要求用户将响应以给定的名称存储在磁盘中                                                                                                                                                            |
| `Content-Encoding`    | 指定传输时页面的编码规则                                                                                                                                                                                  |
| `Content-Language`    | 表述文档所使用的语言，比如en， en-us,，ru等等                                                                                                                                                             |
| `Content-Length`      | 表明响应的字节数。只有在浏览器使用持久化 (keep-alive) HTTP 连接时才有用                                                                                                                                   |
| `Content-Type`        | 表明文档使用的MIME类型                                                                                                                                                                                    |
| `Expires`             | 指明啥时候过期并从缓存中移除                                                                                                                                                                              |
| `Last-Modified`       | 指明文档最后修改时间。客户端可以 缓存文档并且在后续的请求中提供一个 **If-Modified-Since**请求头                                                                                                           |
| `Location`            | 在300秒内，包含所有的有一个状态码的响应地址，浏览器会自动重连然后检索新文档                                                                                                                               |
| `Refresh`             | 指明浏览器每隔多久请求更新一次页面。                                                                                                                                                                      |
| `Retry-After`         | 与503 (Service Unavailable)一起使用来告诉用户多久后请求将会得到响应                                                                                                                                       |
| `Set-Cookie`          | 指明当前页面对应的cookie                                                                                                                                                                                  |



#### HTTP状态码

| **状态码** | **消息**                      | **描述**                                                                                   |
| :--------- | :---------------------------- | :----------------------------------------------------------------------------------------- |
| 100        | Continue                      | 只有一部分请求被服务器接收，但只要没被服务器拒绝，客户端就会延续这个请求                   |
| 101        | Switching Protocols           | 服务器交换机协议                                                                           |
| 200        | OK                            | 请求被确认                                                                                 |
| 201        | Created                       | 请求时完整的，新的资源被创建                                                               |
| 202        | Accepted                      | 请求被接受，但未处理完                                                                     |
| 203        | Non-authoritative Information |                                                                                            |
| 204        | No Content                    |                                                                                            |
| 205        | Reset Content                 |                                                                                            |
| 206        | Partial Content               |                                                                                            |
| 300        | Multiple Choices              | 一个超链接表，用户可以选择一个超链接并访问，最大支持5个超链接                              |
| 301        | Moved Permanently             | 被请求的页面已经移动到了新的URL下                                                          |
| 302        | Found                         | 被请求的页面暂时性地移动到了新的URL下                                                      |
| 303        | See Other                     | 被请求的页面可以在一个不同的URL下找到                                                      |
| 304        | Not Modified                  |                                                                                            |
| 305        | Use Proxy                     |                                                                                            |
| 306        | *Unused*                      | 已经不再使用此状态码，但状态码被保留                                                       |
| 307        | Temporary Redirect            | 被请求的页面暂时性地移动到了新的URL下                                                      |
| 400        | Bad Request                   | 服务器无法识别请求                                                                         |
| 401        | Unauthorized                  | 被请求的页面需要用户名和密码                                                               |
| 402        | Payment Required              | *目前还不能使用此状态码*                                                                   |
| 403        | Forbidden                     | 禁止访问所请求的页面                                                                       |
| 404        | Not Found                     | 服务器无法找到所请求的页面                                                                 |
| 405        | Method Not Allowed            | 请求中所指定的方法不被允许                                                                 |
| 406        | Not Acceptable                | 服务器只能创建一个客户端无法接受的响应                                                     |
| 407        | Proxy Authentication Required | 在请求被服务前必须认证一个代理服务器                                                       |
| 408        | Request Timeout               | 请求时间超过了服务器所能等待的时间，连接被断开                                             |
| 409        | Conflict                      | 请求有矛盾的地方                                                                           |
| 410        | Gone                          | 被请求的页面不再可用                                                                       |
| 411        | Length Required               | "Content-Length"没有被定义，服务器拒绝接受请求                                             |
| 412        | Precondition Failed           | 请求的前提条件被服务器评估为false                                                          |
| 413        | Request Entity Too Large      | 因为请求的实体太大，服务器拒绝接受请求                                                     |
| 414        | Request-url Too Long          | 服务器拒绝接受请求，因为URL太长。多出现在把"POST"请求转换为"GET"请求时所附带的大量查询信息 |
| 415        | Unsupported Media Type        | 服务器拒绝接受请求，因为媒体类型不被支持                                                   |
| 417        | Expectation Failed            |                                                                                            |
| 500        | Internal Server Error         | 请求不完整，服务器遇见了出乎意料的状况                                                     |
| 501        | Not Implemented               | 请求不完整，服务器不提供所需要的功能                                                       |
| 502        | Bad Gateway                   | 请求不完整，服务器从上游服务器接受了一个无效的响应                                         |
| 503        | Service Unavailable           | 请求不完整，服务器暂时重启或关闭                                                           |
| 504        | Gateway Timeout               | 网关超时                                                                                   |
| 505        | HTTP Version Not Supported    | 服务器不支持所指定的HTTP版本                                                               |



#### HTTP方法

我们在浏览网页的时候，经常需要向服务器提交信息，并让后台程序处理。浏览器中使用 GET 和 POST 方法向服务器提交数据。

------

##### GET 方法

GET方法将请求的编码信息添加在网址后面，网址与编码信息通过"?"号分隔。如下所示：

```
http://www.runoob.com/hello?key1=value1&key2=value2
```

GET方法是浏览器默认传递参数的方法，一些敏感信息，如密码等建议不使用GET方法。

用get时，传输数据的大小有限制 （注意不是参数的个数有限制），最大为1024字节。

------

##### POST 方法

一些敏感信息，如密码等我们可以通过POST方法传递，POST提交数据是隐式的。

POST提交数据是不可见的，GET是通过在url里面传递的（可以看一下你浏览器的地址栏）。

JSP使用getParameter()来获得传递的参数，getInputStream()方法用来处理客户端的二进制数据流的请求。



### `JSP`客户端请求

`HttpServletRequest类`

[详细]([JSP 客户端请求 | 菜鸟教程 (runoob.com)](https://www.runoob.com/jsp/jsp-client-request.html))





### `JSP`服务器响应

`HttpServletResponse类`

[详细]([JSP 服务器响应 | 菜鸟教程 (runoob.com)](https://www.runoob.com/jsp/jsp-server-response.html))



### `JSP`表单处理

#### 获取表单数据

| 方法                   | 描述                                                                           |
| ---------------------- | ------------------------------------------------------------------------------ |
| `getParameter()`       | 使用 request.getParameter() 方法来获取表单参数的值。                           |
| `getParameterValues()` | 获得如checkbox类（名字相同，但值有多个）的数据。 接收数组变量 ，如checkbox类型 |
| `getParameterNames()`  | 该方法可以取得所有变量的名称，该方法返回一个 Enumeration。                     |
| `getInputStream()`     | 调用此方法来读取来自客户端的二进制数据流。                                     |







## 常见问题

### 中文编码问题

如果我们要在页面正常显示中文，我们需要在 JSP 文件头部添加以下代码：

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
```





## 基础知识

1. 请简要解释HTML、JavaEE、JSP、JDBC的英文含义和中文含义。

   - `HTML`:文本标记语言，即HTML（`Hypertext Markup Language`），是用于描述网页文档的一种标记语言。
   - `JavaEE`: Java EE，Java 平台企业版（`Java Platform Enterprise Edition`），之前称为 `Java 2 Platform, Enterprise Edition (J2EE)`，2018年3月更名为 Jakarta EE
   - `JSP`: （全称 `Java Server Pages`）是由Sun Microsystems公司倡导和许多公司参与共同创建的一种使软件开发者可以响应客户端请求，而动态生成HTML、XML或其他格式文档的Web网页的技术标准。JSP可以嵌套在html中。 简单地说就是java服务器端页面，控制各种页面的跳转和数据的输入输出。
   - `JDBC`: JDBC英文名为：`Java Data Base Connectivity(Java数据库连接) `，官方解释它是Java编程语言和广泛的数据库之间独立于数据库的连接标准的Java [API](https://so.csdn.net/so/search?q=API&spm=1001.2101.3001.7020)，根本上说JDBC是一种规范，它提供的接口，一套完整的，允许便捷式访问底层数据库。

2. 请简要叙述Servlet和JSP在软件开发时的作用与地位。

   1. JSP文件必须在JSP服务器内运行。

   2. JSP文件必须生成Servlet才能执行。

   3. 每个JSP页面的第一个访问者速度很慢，因为必须等待JSP编译成Servlet。

   4. JSP页面的访问者无须安装任何客户端，甚至不需要可以运行Java的运行环境，因为JSP页面输送到客户端的是标准HTML页面。

      ```text
      JSP和Servlet会有如下转换：
      1.JSP页面的静态内容、JSP脚本都会转换成Servlet的xxxService()方法，类似于自行创建Servlet时service()方法。
      2.JSP声明部分，转换成Servlet的成员部分。所有JSP声明部分可以使用private,protected,public,static等修饰符，其他地方则不行。
      3.JSP的输出表达式(<%= ..%>部分)，输出表达式会转换成Servlet的xxxService()方法里的输出语句。
      4.九个内置对象要么是xxxService()方法的形参，要么是该方法的局部变量，所以九个内置对象只能在JSP脚本和输出表达式中使用。
      ```

      

3. 请简要说明JSP页面第一次运行时的过程。

   1. 客户端发出请求
   2. web容器将jsp转化为servlet代码（.java）
   3. web容器将转化为servlet代码编译（.class）
   4. web容器加载编译后的代码并执行
   5. 将执行结果响应给客户端

   

4. 请简要叙述MVC设计模式，JSP、JavaBean和Servlet在MVC设计模式中的作用。

   - **MVC模式（Model-View-Controller），是系统分为三个基本部分：模型（Model）、视图（View）和控制器(Controller)：可以理解为：JSP充当视图，Servlet充当控制器，JavaBeans充当模型。**
     - View层（JSP）,前台交互,比如我们注册时的数据等等,serlvet就是与前台数据进行交互的
     - Contrller层（servlet充当）：Model与View之间沟通的桥梁， 这个层有业务处理,用户的注册登录就可以看做是User的业务,我们就需要将相关的处理代码写到这个层中。
     - Model层：实现系统的业务逻辑，即javaBean，常见的就是封装对象的属性、数据库连接操作等。
       常规会写一个dao层，是属于mvc里面Model层抽出来。目的就是更单纯的和数据库打交道,将servlet的数据和数据库进行交互。

   - Servlet+JSP+JavaBean。模式(MVC)适合开发复杂的web应用，在这种模式下，servlet负责处理用户请求，jsp负责数据显示，javabean负责封装数据。 Servlet+JSP+JavaBean模式程序各个模块之间层次清晰，web开发推荐采用此种模式。

5. 请简要叙述include指令和include动作的功能，以及它们的区别。

   - `include指令`指的是jsp的一种指令标记

     ```html
     <%@include file="文件的URL">
     ```

     

   - `include动作`指的是jsp的一种动作标记

     ```html
     <jsp:include page="文件的URL"/>
     ```

   - 区别

     - `include指令`执行时将被导入页面的jsp代码完全融入,两个页面融合成一个Servlet;而`include动作`则在Servlet中使用include方法来引入被导入页面的内容。因此`include指令`执行时不需编译,速度快;`include动作`需要加载执行,速度慢。
     - `include指令`执行时导入页面的编译指令会起作用;而`include动作`执行时被导入页面的编译指令则失去作用,只是插入被导入页面的body内容。
     - `include动作`还可以用param动作来为被导入页面传递参数。
     - `include指令`通过file属性指定被包含的文件，放在页面的顶部，file属性不支持任何的表达式；`include动作`是通过page属性来指定被包含的文件的，page属性支持jsp表达式。

6. 请简要叙述JavaBean的四种生存范围。

   - `page`：page范围的JavaBean只在本页有效，跳转后无效。

     ```html
     <jsp:useBean id="属性名" scope="范围" class="类对应的可执行文件的包路径名"/>
     ```

     

   - `request`: 客户端跳转无效，因为发送了两次请求。服务器跳转有效，只向服务器发送了一次请求，只调用了一次构造函数。

   - `application`: 客户端和服务器端跳转都有效，但是只会调用一次构造函数。这个范围是所有用户共同拥有的，只要申明后就会在服务器中保存，除非关闭了服务器。

   - `session`: 都有效，只调用一次构造函数。

7. 请简要描述Servlet的基本工作流程。

   1. Web客户向Servlet容器（tomcat）发出Http请求；
   2. Servlet容器解析Web客户的Http请求；
   3. Servlet容器创建一个HttpRequest对象，在这个对象中封装Http请求信息；
   4. Servlet容器创建一个HttpResponse对象；
   5. Servlet容器调用HttpServlet的service方法，把HttpRequest和HttpResponse对象作为service方法的参数传给HttpServlet对象；
      - *HttpServlet事实上是servlet的一种子类实例也是最一般的实例。当编写一个servlet时,必须直接或间接实现servlet接口,最可能实现的方法就是扩展javax.servlet.genericservlet或javax.servlet.http.httpservlet，其中genericservlet类提供了servlet接口的基本实现,httpservlet类扩展了genericservlet并且提供了servlet接口中具体于http的实现。
   6. HttpServlet调用HttpRequest的有关方法，获取HTTP请求信息；
   7. HttpServlet调用HttpResponse的有关方法，生成响应数据；
      - 一般通过HttpServletRequest和HttpServletResponse获取HTTP请求信息和返回响应。事实上servlet理论上可以处理多种形式的请求响应形式 http只是其中之一 所以HttpServletRequest HttpServletResponse分别是ServletRequest和ServletResponse的子类。一般，HttpServlet对应HttpServletRequest和HttpServletResponse。
   8. Servlet容器把HttpServlet的响应结果传给Web客户。

   

   

8. 请简要说明JDBC访问数据库的基本步骤。

   1. 加载（注册）数据库驱动（到JVM）。
   2. 建立（获取）数据库连接。
   3. 创建（获取）数据库操作对象。
   4. 定义操作的SQL语句。
   5. 执行数据库操作。
   6. 获取并操作结果集。
   7. 关闭对象，回收数据库资源（关闭结果集-->关闭数据库操作对象-->关闭连接）。
   8. 

9. 请简要叙述利用JDBC访问数据库时常用的类和接口有哪些。

   1. `DriverManager类` : DriverManager类是JDBC的管理层，用来管理数据库中的驱动程序，在使用java操作数据库之前，必须使用class类的静态方法forName（String classname）加载能够连接数据库的驱动程序。
   2. `Connection接口`: Connection接口代表java端与指定数据库之间的连接
   3. `Statement接口`: Statement接口是用来执行静态SQL语句的工具接口
   4. `PreParedStatement接口`: PreParedStatement接口是Statement接口的子接口，是用来执行动态SQL语句的工具接口
   5. `ResultSet接口`: ResultSet接口类似于一个临时表，用来暂时存放对数据库中的数据执行查询操作后的结果，ResultSet对象具有指向当前数据行的指针，指针开始的位置在第一条记录上，通过next()方法可向下移动指针

10. 请简要解释下列JSP内置对象的主要用途：request、response、session、application。

    1. `request 对象`是javax.[servlet](https://so.csdn.net/so/search?q=servlet&spm=1001.2101.3001.7020).http.HttpServletRequest类型的对象，代表客户端的请求信息，主要用于获取客户端的参数和流。
    2. `response 对象`和request是一对相应的内置对象，代表对客户端的响应
    3. `session 对象`是由服务器自动创建的与请求相关的对象，服务器为每个用户都生成一个session对象，用于保存该用户的信息，跟踪用户的操作状态。session内部使用Map来保存数据，即key-value对
    4. `application 对象`是javax.servlet.ServletContext类型的对象，可将信息保存在服务器中，直到服务器关闭，否则application对象中保存的信息会整个应用中都有。





材料分析题考点（填空）

1. 表单

   ```html
   <!DOCTYPE html>
   <html>
   <head>
   <meta charset="UTF-8">
   <title>Insert title here</title>
   </head>
   <body>
   <form>
   学号:<input type="text"name="no"><br/><br/>
   姓名：<input type="text"name="name"><br/><br/>
   班级：<input type="text"name="class"><br/><br/>
   专业：<input type="text"name="major"><br/><br/>
   政治面貌：<input type="text"name="zhengzhimianmao"><br/><br/>
   爱好：<input type="text"name="no"><br/><br/>
   性别：<input type="radio"name="sex"value="1">男<input type="radio"name="sex"value="0">女
   出生日期：
   <select name="年">
   <option>1997</option>
   <option>1998</option>
   <option>1999</option>
   <option>2000</option>
   <option>2001</option>
   <option>2002</option>
   <option selected>2003</option>
   <option>2004</option>
   <option>2005</option>
   <option>2006</option>
   <option>2007</option>
   <option>2008</option>
   </select>年
   <select name="月">
   <option>1</option>
   <option>2</option>
   <option>3</option>
   <option>4</option>
   <option>5</option>
   <option>6</option>
   <option selected>7</option>
   <option>8</option>
   <option>9</option>
   <option>10</option>
   <option>11</option>
   <option>12</option>
   </select>月
   <select name="日">
   <option selected>1</option>
   <option>2</option>
   <option>3</option>
   <option>4</option>
   <option>5</option>
   <option>6</option>
   <option>7</option>
   <option>8</option>
   <option>9</option>
   <option>10</option>
   <option>11</option>
   <option>12</option>
   <option>13</option>
   <option>14</option>
   <option>15</option>
   <option>16</option>
   <option>17</option>
   <option>18</option>
   <option>19</option>
   <option>20</option>
   <option selected>21</option>
   <option>22</option>
   <option>23</option>
   <option>24</option>
   <option>25</option>
   <option>26</option>
   <option>27</option>
   <option>28</option>
   <option>29</option>
   <option>30</option>
   <option>31</option>
   </select>日<br/><br/>
   <input type="submit"value="提交"/>
   <input type="reset"value="重置"/>
   <br/><br/>
   
   
   </form>
   
   </body>
   </html>
   
   ```

   

2. JSP脚本

   ```html
   // jsp 脚本
   ```

   

3. request对象、session对象、application对象

4. JavaBean及在JSP中使用JavaBean

5. 基于JDBC访问数据库

6. Servlet



编程题

1. 编写JavaBean

   ```
   // javaBean
   
   ```

   

2. JSP脚本





## 参考

- [Jsp+JavaBean模式，Jsp+Servlet模式，MVC模式介绍_江湖一点雨的博客-CSDN博客](https://blog.csdn.net/ITBigGod/article/details/86515893)
- [include指令和include动作的区别_凯哥多帅哦的博客-CSDN博客](https://blog.csdn.net/qq_31957747/article/details/53750386)
- [JavaBean的四种范围 - 简书 (jianshu.com)](https://www.jianshu.com/p/30617da21516)
- [JSP——JavaBean的四种生命周期_明子～的博客-CSDN博客](https://blog.csdn.net/lmm0513/article/details/89599754)
- [(27条消息) servlet工作流程_Rosso_的博客-CSDN博客](https://blog.csdn.net/yuyibo95/article/details/88950951)
- [(27条消息) javaJDBC中常用的类和接口_程程呀的博客-CSDN博客](https://blog.csdn.net/qq_31755183/article/details/103727431)
- [JSP 语法 | 菜鸟教程 (runoob.com)](https://www.runoob.com/jsp/jsp-syntax.html)

