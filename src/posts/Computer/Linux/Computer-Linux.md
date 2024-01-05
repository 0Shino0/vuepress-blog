---
title: Linux
tags: 
  - Linux
categories: 
  - Computer
summary: Linux
description: Linux
date: 2023-5-9 22:56:20
---



## Linux



## 一 Linux基本命令



### 网络测试

ping

ipconfig



### 帮助命令

`--help`

`man`命令

`info`命令



## 三 Linux系统 统计 查询

### grep命令

Linux grep (global regular expression) 命令用于**查找文件里符合条件的字符串或正则表达式。**

grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 **-**，则 grep 指令会从标准输入设备读取数据。

```shell
grep [options] pattern [files]
或
grep [-abcEFGhHilLnqrsvVwxy][-A<显示行数>][-B<显示列数>][-C<显示列数>][-d<进行动作>][-e<范本样式>][-f<范本文件>][--help][范本样式][文件或目录...]
```



### find命令

Linux find 命令用于在指定目录下查找文件和目录。

它可以使用不同的选项来过滤和限制查找的结果。



`find -name 'main*'`



`find -name practice -print`



`find ~ -atime 0`



`find -size 16`



`find -type c`



### wc命令

Linux wc命令用于计算字数。

利用wc指令我们可以计算文件的Byte数、字数、或是列数，若不指定文件名称、或是所给予的文件名为"-"，则wc指令会从标准输入设备读取数据。



### sort命令

Linux sort 命令用于将文本文件内容加以排序。

sort 可针对文本文件的内容，以行为单位来排序。



## 四 Linux vi编辑器的使用

所有的 Unix Like 系统都会内建 vi 文书编辑器，其他的文书编辑器则不一定会存在。

但是目前我们使用比较多的是 vim 编辑器。

vim 具有程序编辑的能力，可以主动的以字体颜色辨别语法的正确性，方便程序设计。

![img](https://shinoimg.yyshino.top/img/202305092313708.gif)



### vi [文件名]

命令模式（Command mode）：输入字符都作为命令来解释执行。不显示输入内容。

输入模式（Insert mode）：输入的任何字符都将作为文件内容被保存，并显示在屏幕上。

末行模式（Last line mode）：在屏幕最末行接收行命令输入，并执行。

练习3种工模间的切换



### 退出相关命令

三个退出命令的区别

`:q`

如果文件有修改，:q 会提示有修改，是否退出，输入y退出



`:wq`

:wq 如果文件设置为只读了的话，用 :wq命令是不能保存并退出的



`:q!`

若曾修改过档案，又不想储存，使用 ! 为强制离开不储存档案。



### 一般模式

可用的光标移动、复制粘贴、搜索替换等



### 增删查改

#### 插入/删除命令（iao,dd dw x)

| 命令 | 描述                                                         |
| ---- | ------------------------------------------------------------ |
| dd   | 剪切游标所在的那一整行(常用)，用 p/P 可以粘贴。              |
| dw   |                                                              |
| iao  |                                                              |
| x    | 在一行字当中，x 为向后删除一个字符 (相当于 [del] 按键)， X 为向前删除一个字符(相当于 [backspace] 亦即是退格键) (常用) |



#### 查询

#### 修改/替换命令

| 命令  | 描述                                                         |
| ----- | ------------------------------------------------------------ |
| /word | 向光标之下寻找一个名称为 word 的字符串。例如要在档案内搜寻 vbird 这个字符串，就输入 /vbird 即可！ (常用) |
| ?word | 向光标之上寻找一个字符串名称为 word 的字符串。               |
| n     | 这个 n 是英文按键。代表重复前一个搜寻的动作。举例来说， 如果刚刚我们执行 /vbird 去向下搜寻 vbird 这个字符串，则按下 n 后，会向下继续搜寻下一个名称为 vbird 的字符串。如果是执行 ?vbird 的话，那么按下 n 则会向上继续搜寻名称为 vbird 的字符串！ |
| N     | 这个 N 是英文按键。与 n 刚好相反，为『反向』进行前一个搜寻动作。 例如 /vbird 后，按下 N 则表示『向上』搜寻 vbird 。 |



示例

| 示例命令                                           | 描述                                                         |
| -------------------------------------------------- | ------------------------------------------------------------ |
| :n1,n2s/word1/word2/g                              | n1 与 n2 为数字。在第 n1 与 n2 行之间寻找 word1 这个字符串，并将该字符串取代为 word2 ！举例来说，在 100 到 200 行之间搜寻 vbird 并取代为 VBIRD 则： 『:100,200s/vbird/VBIRD/g』。(常用) |
| **:1,$s/word1/word2/g** 或 **:%s/word1/word2/g**   | 从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 word2 ！(常用) |
| **:1,$s/word1/word2/gc** 或 **:%s/word1/word2/gc** | 从第一行到最后一行寻找 word1 字符串，并将该字符串取代为 word2 ！且在取代前显示提示字符给用户确认 (confirm) 是否需要取代！(常用) |



### 复制撤销

#### 拷贝/粘贴命令| 撤销/重做命令

| 命令     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| yy       | 复制游标所在的那一行(常用)                                   |
| nyy      | n 为数字。复制光标所在的向下 n 行，例如 20yy 则是复制 20 行(常用) |
| y1G      | 复制游标所在行到第一行的所有数据                             |
| yG       | 复制游标所在行到最后一行的所有数据                           |
| y0       | 复制光标所在的那个字符到该行行首的所有数据                   |
| y$       | 复制光标所在的那个字符到该行行尾的所有数据                   |
| p, P     | p 为将已复制的数据在光标下一行贴上，P 则为贴在游标上一行！ 举例来说，我目前光标在第 20 行，且已经复制了 10 行数据。则按下 p 后， 那 10 行数据会贴在原本的 20 行之后，亦即由 21 行开始贴。但如果是按下 P 呢？ 那么原本的第 20 行会被推到变成 30 行。 (常用) |
| J        | 将光标所在行与下一行的数据结合成同一行                       |
| c        | 重复删除多个数据，例如向下删除 10 行，[ 10cj ]               |
| u        | 复原前一个动作。(常用)                                       |
| [Ctrl]+r | 重做上一个动作。(常用)                                       |
|          | 这个 u 与 [Ctrl]+r 是很常用的指令！一个是复原，另一个则是重做一次～ 利用这两个功能按键，你的编辑，嘿嘿！很快乐的啦！ |
| .        | 不要怀疑！这就是小数点！意思是重复前一个动作的意思。 如果你想要重复删除、重复贴上等等动作，按下小数点『.』就好了！ (常用) |



### sed命令

Linux sed 命令是利用脚本来处理文本文件。

sed 可依照脚本的指令来处理、编辑文本文件。

Sed 主要用来自动编辑一个或多个文件、简化对文件的反复操作、编写转换程序等。

语法

```linux
sed [-hnV][-e<script>][-f<script文件>][文本文件]
```



[菜鸟教程sed命令](https://www.runoob.com/linux/linux-comm-sed.html)



### awk命令

AWK 是一种处理文本文件的语言，是一个强大的文本分析工具。

之所以叫 AWK 是因为其取了三位创始人 Alfred Aho，Peter Weinberger, 和 Brian Kernighan 的 Family Name 的首字符。

语法

```linux
awk [选项参数] 'script' var=value file(s)
或
awk [选项参数] -f scriptfile var=value file(s)
```



[菜鸟教程awk命令](https://www.runoob.com/linux/linux-comm-awk.html)



## 五 Linux用户组管理

1)	查看用户账号文件―>/etc/passwd，说明其一行的格式及各域作用
2)	查看影子文件―>/etc/shadow，说明其中一行的格式及各域作用
3)	查看组文件―>/etc/group，说明其中一行的格式及各域作用



### 用户相关命令练习

1)	练习添加新用户命令：useradd；
2)	练习设置用户口令命令：passwd；
3)	练习切换用户身份命令：su；
4)	练习删除用户命令：userdel；
5)	练习修改用户信息命令：usermod；



### 组相关命令练习

1)	练习添加组命令：groupadd；
2)	练习删除组命令：groupdel；
3)	练习修改组信息命令：groupmod；
4)	添加/删除组成员：gpasswd；



### 文件相关命令练习
1)	修改权限命令：chmod
2)	改变文件拥有者：chown；
3)	更改文件所属的组：chgrp；



### 用户组管理

1)	建立一个标准的组group1，GID=900；
2)	建立一个标准组group2，选项为默认，观察该组的信息有什么变化；
3)	新建用户ah、xh，再新建一个组group3，把root、u1、user2用户添加到group1组中，把ah、xh添加到group2组，
4)	把group3组改名为g3，GID=1000；
5)	查看user2所属于的组，并记录；
6)	删除user1组与g3组，观察有什么情况发生；



## 六 Linux常用软件安装过程



### whereis&which

whereis: 可以帮助快速的找到某个命令的二进制文件、帮助页面、源码所在路径。

which: 也是可以显示命令的二进制文件的路,shows the full path of (shell) commands.



### systemctl &service (sv==servicename)

添加开机启动 systemctl enable sv 

禁止开机启动 systemctl disable sv 

查看服务文件内容 systemctl cat sv

\------------------------

立即启动服务 systemctl start sv service sv start

立即停止服务 systemctl stop sv service sv stop

重新启动服务 systemctl restart sv service sv restart 

重新加载服务配置 systemctl reload sv service sv reload 

查看服务状态 systemctl status sv service sv status 



### 查看端口占用

netstat -anp |grep :80 ,不存在 netstat 可 yum install net-tools

或 ss -anp | grep :80



### 防火墙相关

开放端口 firewall-cmd --permanent --zone=public --add-port=80/tcp 

开放多个端口 firewall-cmd --permanent --zone=public --add-port=8080-8083/tcp

关闭某个端口 firewall-cmd --permanent --zone=public --remove-port=81/tcp

修改后重载配置 firewall-cmd --reload

列出开放的端口 firewall-cmd --list-ports 



### yum相关命令

设置yum源 : 参考阿里 或华为镜像中说明 

安装 yum install softwarename     

卸载 yum remove softwarename     

列出所有 yum list package

列出已有 yum list installed

查找 yum serach jdk



### tar 压缩/解压缩

对应 .tar 文件：

解包：tar xvf FileName.tar

打包：tar cvf FileName.tar DirName

 

.tar.gz 和 .tgz文件：

解压：tar -zxvf FileName.tar.gz

压缩：tar -zcvf FileName.tar.gz DirName



### 任务

安装apache

安装python3

安装jdk8

安装tomcat

安装nginx

安装MySQL



## 八 Linux 进程管理与定时任务

### 静态显示系统进程信息

#### ps命令

inux ps （英文全拼：process status）命令用于显示当前进程的状态，类似于 windows 的任务管理器。

语法

```linux
ps [options] [--help]
```



### 动态显示系统进程信息

#### top命令

使用top命令，实时显示系统各个进程的资源占用情况。说明输出信息中列的含意。

在top基本视图中，按h键进入另一个视图。

在top基本视图中，按f键进入另一个视图，在这里可以编辑基本视图中的显示字段。

在top基本视图中，按c键进入另一个视图,可以显示进程的路径。

在top基本视图中，按k键，可以在不退出top命令的情况下杀死某个正在运行的进程。

在top基本视图中，按b键，高亮显示当前正在运行的进程。



### 其他命令练习

1. Kill
2. killall
3. jobs
4. fg
5. bg
6. nice
7. renice



### 定时任务练习

#### 定时任务1

利用at设置一个任务自动化，在当天11：00钟，在根目录下自动创建一个abc目录，并进入到abc目录中，建立一个空的文件test，同时对该文件进行打包成test.tar;



#### 定时任务2

Cron应用：每周2,4,6早上3点重新启动系统



题目6 – 
请回答如下问题：

1)	什么是进程？
一般来讲，进程定义为正在运行的程序的实例，简单地说，进程就是一个正在运行的程序。程序被触发后，运行者的权限与属性、程序的程序码与所需数据等都会被加载内存中， 操作系统并给予这个内存内的单元一个识别码 (PID)，可以说，进程就是一个正在运行中的程序。


2)	进程与程序的区别？
程序：通常为二进制，放置在储存媒体中 (如硬盘、光盘、软盘、磁带等)， 为实体文件的型态存在；
进程：程序被触发后，运行者的权限与属性、程序的程序码与所需数据等都会被加载内存中， 操作系统并给予这个内存内的单元一个识别码 (PID)，可以说，进程就是一个正在运行中的程序。

3)	进程的三种状态？
运行态：进程占有CPU且正在运行；
就绪态：进程具备运行状态，等待系统分配CPU以便运行；
等待态：又叫阻塞态或睡眠态，指进程不具备运行条件，正在等待某个事件的完成；


4)	如何后台启动进程

1.	Nohup

2.	Setsid

3.	Subshell



## 九 Linux 下 GCC 的使用

### gcc

-o：指定生成文件的名称

-E：激活预处理。生成预处理文件（ .i 文件）

-S：激活预处理、编译。生成汇编代码（ .s 文件）

-c：激活预处理、编译、汇编。生成目标文件（ .o 文件）

-I：指定头文件目录

![image-20230509235123641](https://shinoimg.yyshino.top/img/202305092351782.png)



### 预处理（编译）

使编译器将 C 源代码中的包含的头文件如stdio.h编译进来，替换宏(如符号常量)。

```sh
gcc -E hello.c -o hello.i 
cat hello.i	查看生成文件
```



### 编译

GCC 首先要检查代码的规范性、是否有语法错误等，以确定代码的实际要做的工作，在检查无误后，GCC 把代码翻译成汇编语言。

```sh
gcc –S hello.i –o  hello.s #进行到编译阶段停止，并生成 汇编文件 
cat hello.s #查看生成的文件
```



### 汇编

把编译阶段生成的 ”.s” 文件转成二进制目标代码。

```sh
gcc –c hello.s –o hello.o
cat 查看文件
```



### 链接

```sh
# 1)	链接到库中(链接其他目标文件)，生成可执行文件。
gcc hello.o –o hello.out
# 2)	执行文件
./hello.out
```



### 一次性完成

```sh
# 输入命令，可以一次性完成上述步骤
gcc hello.c -o hello3.out

# 运行编译后的可执行程序./hello
```



### 多个文件编译

现在有 3 个文件，分别是 main.c，print.c，print.h

```sh
#1）多个文件一起编译：
gcc print.c main.c -o main_print
执行生成文件
#2）分别编译各个源文件，再对编译后输出的目标文件（.o）链接
gcc -c print.c -o print.o
gcc -c main.c -o main.o
gcc print.o main.o -o main_print
#执行生成文件
```



如果头文件和源文件不在一同目录中，如何解决？

```sh
# 头文件所在目录：myInclude
 
# 主要是要加 -I 指定头文件目录：
gcc print.c main.c -o main_print -I myInclude
# 运行文件
```



### makefile

在使用gcc命令时，一个工程又有多个文件（比如100个文件），如果按照上述编译方法，往往需要输入很多指令，而且修改文件也不方便，因此引入makefile文件解决该问题。



### 父子进程

使用fork创建子进程，功能是：
父进程输出main,子进程输出child
使用gcc编译，并运行
注意事项
查看一个函数功能的方法：man fork
需要包含的头文件：#include <unistd.h>
fork返回值
成功时，父进程返回子进程的进程ID号；子进程返回0。
失败时，父进程返回-1，子进程创建失败。



## 十 LInux Shell程序设计

### 变量

#### 定义变量

定义变量时，变量名不加美元符号（$，PHP语言中变量需要），如：

your_name="runoob.com"

注意，变量名和等号之间不能有空格，这可能和你熟悉的所有编程语言都不一样。同时，变量名的命名须遵循如下规则：

- 命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
- 中间不能有空格，可以使用下划线 **_**。
- 不能使用标点符号。
- 不能使用bash里的关键字（可用help命令查看保留关键字）。



#### 使用变量

使用一个定义过的变量，只要在变量名前面加美元符号即可

```sh
your_name="qinjx"
echo $your_name
echo ${your_name}
```

变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界，比如下面这种情况：

```sh
for skill in Ada Coffe Action Java; do
    echo "I am good at ${skill}Script"
done
```



#### 只读变量

使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。

下面的例子尝试更改只读变量，结果报错：

```sh
#!/bin/bash

myUrl="https://www.google.com"
readonly myUrl
```



#### 删除变量

使用 unset 命令可以删除变量。语法：

```sh
unset variable_name
```



### 特定变量



### if语句



### 两数求和



### 删除文件



### 求所有参数的和



### 求1-100的和



### 统计文件数量
