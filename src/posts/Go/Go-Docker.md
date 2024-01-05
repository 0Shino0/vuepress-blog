---
title: Docker
tags: 
   - Docker
categories: 
   - Go
summary: Docker入门
description: Docker入门
date: 2022-12-1 11:02:29
---

::: tip Docker快速入门

  Docker常用命令 | Dockerfile构建镜像 | docker-compose构建多容器项目

:::

![docker](https://shinoimg.yyshino.top/img/202212011258419.jpeg)
<!-- more -->

## 应用容器

### 基本介绍

- 什么是应用容器

我们可以把它看成虚拟机，能在一台服务器上隔离出若干个互不干扰的环境。把自己的应用放入容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。它具有启动快、资源占用少、体积小、易操作等等。相比虚拟机有很多优势。

- 为什么要使用应用容器

因为软件更新发布及部署低效，过程繁琐且需要人工介入。环境一致性难以保证，不同环境之间迁移成本太高。有了应用容器部署可以很大程度解决上面的问题。

- Docker 应用容器部署

`Docker`是一个开源的应用容器引擎，目前有三大类。

（1）提供一次性的环境。比如，本地测试他人的软件、持续集成的时候提供单元测试和构建的环境。

（2）提供弹性的云服务。因为`Docker`容器可以随开随关，很适合动态扩容和缩容。

（3）组建微服务架构。通过多个容器，一台机器可以跑多个服务，因此在本机就可以模拟出微服务架构



### 安装下载

- `Mac`

[在 Mac | 上安装码头工人文档 (docker.com)](https://docs.docker.com/desktop/install/mac-install/)

- `Windows`

[在 Windows | 上安装码头工人文档 (docker.com)](https://docs.docker.com/desktop/install/windows-install/)

- `Linux`

[在 Linux | 上安装码头工人文档 (docker.com)](https://docs.docker.com/desktop/install/linux-install/)



### 配置镜像

由于国内外网络问题，我们需要配置国内镜像源，提高拉去速度。

- 阿里云镜像

访问 [容器镜像服务 (aliyun.com)](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors) 获取你的阿里云镜像

```json
    {
      "registry-mirrors": ["https://nrxbdvhi.mirror.aliyuncs.com"]
    }
```

`Linux`

使用配置文件`/etc/docker/daemon.json`（没有时新建该文件）。

```sh
    vim /etc/docker/daemon.json
    # 添加如下内容，可以自己替换。默认地址是我的创建的
    {
      "registry-mirrors": ["https://mr63yffu.mirror.aliyuncs.com"]
    }
```

重启`Docker Daemon`即可。

```sh
    systemctl daemon-reload
```



`Windows`

在如图所示位置添加配置镜像

![添加配置镜像](https://shinoimg.yyshino.top/img/202212011254446.png)



### 架构概念

通过下图可以得知，`Docker`在运行时分为`Docker引擎（服务端守护进程）`和`客户端工具`，我们日常使用各种`docker命令`，其实就是在使用`客户端工具`与`Docker`引擎进行交互。

![docker](https://shinoimg.yyshino.top/img/202212011258419.jpeg)



#### Client 客户端

`Docker`是一个客户端-服务器（C/S）架构程序。`Docker`客户端只需要向`Docker`服务器或者守护进程发出请求，服务器或者守护进程将完成所有工作并返回结果。`Docker`提供了一个命令行工具`Docker`以及一整套`RESTful API`。你可以在同一台宿主机上运行`Docker`守护进程和客户端，也可以从本地的`Docker`客户端连接到运行在另一台宿主机上的远程`Docker`守护进程。



#### Host 主机(Docker 引擎)

一个物理或者虚拟的机器用于执行`Docker`守护进程和容器。



#### Image 镜像

什么是`Docker`镜像？简单的理解，`Docker`镜像就是一个`Linux`的`文件系统（Root FileSystem）`，这个文件系统里面包含可以运行在`Linux`内核的程序以及相应的数据。

通过镜像启动一个容器，一个镜像就是一个可执行的包，其中包括运行应用程序所需要的所有内容：包含代码，运行时间，库，环境变量和配置文件等。

Docker 把 App 文件打包成为一个镜像，并且采用类似多次快照的存储技术，可以实现：

- 多个`App`可以共用相同的底层镜像（初始的操作系统镜像）；
- `App`运行时的`IO`操作和镜像文件隔离；
- 通过挂载包含不同配置/数据文件的目录或者卷（Volume），单个`App`镜像可以用来运行无数个不同业务的容器。



#### Container 容器

镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。

| Docker | 面向对象 |
| ------ | -------: |
| 镜像   |       类 |
| 容器   |     对象 |



#### 像分层

Docker 支持通过扩展现有镜像，创建新的镜像。实际上，`Docker Hub`中`99%`的镜像都是通过在`base`镜像中安装和配置需要的软件构建出来的。

![docker](https://shinoimg.yyshino.top/img/202212011257616.png)

从上图可以看到，新镜像是从`base`镜像一层一层叠加生成的。每安装一个软件，就在现有镜像的基础上增加一层。

镜像分层最大的一个好处就是共享资源。比如说有多个镜像都从相同的`base`镜像构建而来，那么`Docker Host`只需在磁盘上保存一份`base`镜像；同时内存中也只需加载一份`base`镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。

如果多个容器共享一份基础镜像，当某个容器修改了基础镜像的内容，比如`/etc`下的文件，这时其他容器的`/etc`是不会被修改的，修改只会被限制在单个容器内。这就是容器`Copy-on-Write`特性。



#### Volume 数据卷

实际上我们的容器就好像是一个简易版的操作系统，只不过系统中只安装了我们的程序运行所需要的环境，前边说到我们的容器是可以删除的，那如果删除了，容器中的程序产生的需要持久化的数据怎么办呢？容器运行的时候我们可以进容器去查看，容器一旦删除就什么都没有了。

所以数据卷就是来解决这个问题的，是用来将数据持久化到我们宿主机上，与容器间实现数据共享，简单的说就是将宿主机的目录映射到容器中的目录，应用程序在容器中的目录读写数据会同步到宿主机上，这样容器产生的数据就可以持久化了，比如我们的数据库容器，就可以把数据存储到我们宿主机上的真实磁盘中。



#### 注册中心Registry 注册中心

`Docker`用`Registry`来保存用户构建的镜像。`Registry`分为公共和私有两种。`Docker`公司运营公共的`Registry`叫做`Docker Hub`。用户可以在`Docker Hub`注册账号，分享并保存自己的镜像。

`Docker`公司提供了公共的镜像仓库`https://hub.docker.com`（Docker 称之为 Repository）提供了庞大的镜像集合供使用。

一个`Docker Registry`中可以包含多个仓库（Repository）；每个仓库可以包含多个标签（Tag）；每个标签对应一个镜像。

通常，一个仓库会包含同一个软件不同版本的镜像，而标签对应该软件的各个版本。我们可以通过`<仓库名>:<标签>`的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以`latest`作为默认标签。

![alibaba-docker](https://shinoimg.yyshino.top/img/202212011258049.png)



### 镜像命令

官方文档：`https://docs.docker.com/reference`



#### 查看镜像

执行命令：`docker images`

| 属性       |               说明 |
| ---------- | -----------------: |
| REPOSITORY | 镜像在仓库中的名称 |
| TAG        |           镜像标签 |
| IMAGE ID   |            镜像 ID |
| CREATED    |     镜像的创建日期 |
| SIZE       |           镜像大小 |

这些镜像都是存储在`Docker`宿主机的`/var/lib/docker`目录下。



#### 搜索镜像

如果你需要从网络中查找需要的镜像，可以通过以下命令搜索。

执行命令：`docker search 镜像名称`

| 属性        |                说明 |
| ----------- | ------------------: |
| NAME        |            镜像名称 |
| DESCRIPTION |            镜像描述 |
| STARS       |            用户评价 |
| OFFICIAL    |      是否为官方构建 |
| AUTOMATED   | Docker Hub 自动构建 |



#### 拉取镜像

拉取镜像就是从中央仓库下载镜像到本地。

执行命令：`docker pull 镜像名称`

如果不声明`tag`镜像标签信息则默认拉取`latest`版本。



#### 删除镜像

按镜像`ID`删除单个镜像。

执行命令：`docker rmi 镜像ID`

按镜像`ID`删除多个镜像。

执行命令：`docker rmi 镜像ID 镜像ID 镜像ID`

`docker images -q`可以查询到所有镜像的`ID`，通过组合命令可以实现删除所有镜像的操作。

执行命令：`docker rmi docker images -q`


::: Tips

  注意：如果通过某个镜像创建了容器，则该镜像无法删除。
  解决办法：先删除镜像中的容器，再删除该镜像。

:::



### 容器命令



#### 查看容器

| 容器命令                     | 描述                             |
| ---------------------------- | -------------------------------- |
| `docker ps`                  | 查看正在运行的容器。             |
| `docker ps -f status=exited` | 查看停止的容器。                 |
| `docker ps -a`               | 查看所有容器（包括运行和停止）。 |
| `docker ps -l`               | 查看最后一次运行的容器。         |
| `docker ps -n 5`             | 列出最近创建的 n 个容器。        |

概念介绍

| 属性         |                 说明 |
| ------------ | -------------------: |
| CONTAINER ID |              容器 ID |
| IMAGE        |             所属镜像 |
| COMMAND      | 启动容器时运行的命令 |
| CREATED      |             创建时间 |
| STATUS       |             容器状态 |
| PORTS        |                 端口 |
| NAMES        |             容器名称 |



#### 创建与启动容器

`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

| 容器命令                                                 | 说明         |
| -------------------------------------------------------- | ------------ |
| `docker run -it --name 容器名称 镜像名称:标签 /bin/bash` | 表示运行容器 |



#### 创建并进入容器

`docker run -it --name 容器名称 镜像名称:标签 /bin/bash`

| 容器命令     |                 说明 |
| ------------ | -------------------: |
| CONTAINER ID |              容器 ID |
| IMAGE        |             所属镜像 |
| COMMAND      | 启动容器时运行的命令 |
| CREATED      |             创建时间 |
| STATUS       |             容器状态 |
| PORTS        |                 端口 |
| NAMES        |             容器名称 |



#### 其他命令

| 容器命令                                       |               说明 |
| ---------------------------------------------- | -----------------: |
| `exit`                                         |       退出当前容器 |
| `docker run -di --name 容器名称 镜像名称:标签` | 守护式方式创建容器 |
| `docker exec -it 容器名称|容器ID /bin/bash`    | 登录守护式容器方式 |
| `docker stop 容器名称|容器ID`                  |           停止容器 |
| `docker start 容器名称|容器ID`                 |           启动容器 |



#### 文件拷贝

| 容器命令                                           | 说明                   |
| -------------------------------------------------- | ---------------------- |
| `docker cp 需要拷贝的文件或目录 容器名称:容器目录` | 将文件拷贝到容器内     |
| `docker cp 容器名称:容器目录 需要拷贝的文件或目录` | 将文件从容器内拷贝出来 |



#### 目录挂载

我们可以在创建容器的时候，将宿主机的目录与容器内的目录进行映射，这样我们就可以通过修改宿主机某个目录的文件从而去影响容器，而且这个操作是双向绑定的，也就是说容器内的操作也会影响到宿主机，实现备份功能。

但是容器被删除的时候，宿主机的内容并不会被删除。如果多个容器挂载同一个目录，其中一个容器被删除，其他容器的内容也不会受到影响。

创建容器添加`-v`参数，格式为宿主机目录:容器目录，例如：

```sh
    docker run -di -v /home/ruoyi/data:/usr/local/data --name centos7-01 centos:7

    # 多目录挂载
    docker run -di -v /宿主机目录:/容器目录 -v /宿主机目录2:/容器目录2 镜像名
```

::: Tips

  目录挂载操作可能会出现权限不足的提示。这是因为`CentOS7`中的安全模块`SELinux`把权限禁掉了，在`docker run`时通过`--privileged=true`给该容器加权限来解决挂载的目录没有权限的问题。

:::



| 容器命令                                                     | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `docker run -di -v /usr/local/data --name centos7-02 centos:7` | **匿名挂载**只需要写容器目录即可，容器外对应的目录会在`/var/lib/docker/volumes`中生成。 |
| `docker run -di -v docker_centos_data:/usr/local/data --name centos7-03 centos:7` | **具名挂载**就是给数据卷起了个名字，容器外对应的目录会在`/var/lib/docker/volume`中生成。 |
| `docker run -di -v /宿主机目录:/容器目录 -v /宿主机目录2:/容器目录2 镜像名` | **指定目录挂载** 之前挂载方式就属于指定目录挂载，这种方式的挂载不会在`/var/lib/docker/volume`目录生成内容 |
| `docker volume ls`                                           | 查看 volume 数据卷信息                                       |
| `docker volume inspect 数据卷名称`                           | 可以查看该数据卷对应宿主机的目录地址                         |
| `docker inspect 容器ID或名称`                                | 在返回的`JSON`节点中找到`Mounts`，可以查看详细的数据挂载信息 |
| `docker run -it -v /宿主机目录:/容器目录:ro 镜像名`          | 只读。只能通过修改宿主机内容实现对容器的数据管理。           |
| `docker run -it -v /宿主机目录:/容器目录:rw 镜像名`          | 读写，默认。宿主机和容器可以双向操作数据。                   |



#### 删除容器

| 容器命令                                    | 说明            |
| ------------------------------------------- | --------------- |
| `docker rm 容器名称|容器ID`                 | 删除指定容器    |
| `docker rm 容器名称|容器ID 容器名称|容器ID` | 容器ID 容器名称 |



#### 查看容器 IP 地址

```sh

# 容器命令                                                     说明
docker inspect 容器名称|容器ID                             # 查看容器的元信息
docker inspect --format='{{.NetworkSettings.IPAddress}}' 容器名称|容器ID` # 直接输出 IP 地址

```


### 应用部署

#### Nacos

| Nacos部署命令                                                | 说明                |
| ------------------------------------------------------------ | ------------------- |
| `docker pull nacos/nacos-server`                             | 拉取官方`nacos`镜像 |
| `docker run --env MODE=standalone --name nacos -d -p 8848:8848 nacos/nacos-server` | 启动`nacos`         |

- `MODE=standalone`表示单机启动



#### Nginx

拉取官方`nginx`镜像

执行命令：`docker pull nginx`

创建`Nginx`容器。

```sh
    docker run -di --name nginx -p 80:80 nginx
```



将容器内的配置文件拷贝到指定目录（请先提前创建好目录）。

```sh
    # 创建目录
    mkdir -p /home/ruoyi/nginx

    # 将容器内的配置文件拷贝到指定目录
    docker cp nginx:/etc/nginx /home/ruoyi/nginx/conf
```



终止并删除容器

```sh
    docker stop nginx
    docker rm nginx
```



创建`Nginx`容器，并将容器中的`/etc/nginx`目录和宿主机的`/home/ruoyi/nginx/conf`目录进行挂载。

```sh
    docker run -di --name nginx -p 80:80 -v /home/ruoyi/nginx/conf:/etc/nginx nginx
```



#### Mysql

拉取官方`mysql5.7`镜像

执行命令：`docker pull mysql:5.7`

- 创建容器

在本地创建`mysql`的映射目录

```sh
    mkdir -p /home/mysql/data /home/mysql/logs /home/mysql/conf
```



创建容器，将数据、日志、配置文件映射到本机

```sh
    docker run -p 3306:3306 --name mysql -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/logs:/logs -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7
```



- -d: 后台运行容器
- -p 将容器的端口映射到本机的端口
- -v 将主机目录挂载到容器的目录
- -e 设置参数

进入容器/执行命令：`docker exec -it mysql /bin/bash`



### Redis

拉取官方`redis`镜像

执行命令：`docker pull redis`

创建容器。

```sh
    docker run -di --name redis -p 6379:6379 redis
```



连接容器中的`Redis`时，只需要连接宿主机的`IP + 指定的映射端口`即可。



## 镜像构建

Docker 支持自己构建镜像，还支持将自己构建的镜像上传至公共仓库

| 容器命令        | 说明                         |
| --------------- | ---------------------------- |
| `docker commit` | 从容器创建一个新的镜像       |
| `docker build`  | 配合`Dockerfile`文件创建镜像 |



### 示例

接下来我们通过基础镜像`centos:7`，在该镜像中安装`jdk`和`tomcat`以后将其制作为一个新的镜像`mycentos:7`。

创建镜像

```sh
    # 拉取镜像
    docker pull centos:7

    # 创建容器
    docker run -di --name centos7 centos:7
```



拷贝资源

```sh
    # 将宿主机的jdk和tocat拷贝至容器
    docker cp jdk-8u111-linux-x64.tar.gz centos7:/root

    docker cp apache-tomcat-8.5.27.tar.gz centos7:/root
```



安装资源

```sh
    # 进入容器
    docker exec -it centos7 /bin/bash

    # 切换至 /root目录
    cd root/

    # 创建java和tomcat目录
    mkdir -p /usr/local/java
    mkdir -p /usr/local/tomcat

    # 将jdk和tomcat解压至容器 /usr/local/java 和 /usr/local/tomcat/
    tar -zxvf jdk-8u111-linux-x64.tar.gz -C /usr/local/java/
    tar -axvf apache-tomcat-8.5.27.gz -C /usr/local/tomcat/

    # 配置jdk环境变量
    vi /etc/profile

    # 在环境变量文件中添加以下内容
    export JAVA_HOME = /usr/local/java/jdk1.8.0_111/
    export PATH = $PATH:$JAVA_HOME/bin

    # 重新加载环境变量文件
    source /etc/profile

    # 测试环境变量是否配置成功
    java -version

    # 删除容器内 jdk和 tomcat
    rm jdk-8u111-linux-x64.tar.gz apache-tomcat-8.5.27.tar.gz -rf
```



构建镜像

```sh
    docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
    docker commit -a="ruoyi" -m="jdk8 and tomcat8" centos7 mycentos:7
```

- -a：提交的镜像作者；
- -c：使用 Dockerfile 指令来创建镜像；
- -m：提交时的说明文字；
- -p：在 commit 时，将容器暂停。



使用构建的镜像创建容器

```sh
    # 创建容器
    docker run -di --name mycentos7 -p 8080:8080 mycentos:7

    # 进入容器
    docker exec -it mycentos7 /bin/bash

    # 重新加载配置文件
    source /etc/profile

    # 测试java环境变量
    java -version

    # 启动 tomcat
    /usr/local/tomcat/apache-tomcat-8.5.27/bin/startup.sh
    # 访问http://{ip}:{port}，看到tomcat页面说明环境表示成功
```



### Dockerfile

在`Docker`中构建镜像最常用的方式，就是使用`Dockerfile`。`Dockerfile`是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。官方文档：`https://docs.docker.com/engine/reference/builder`



#### Dockerfile 常用指令

| 指令       | 语法                                            |                                                         说明 |
| ---------- | ----------------------------------------------- | -----------------------------------------------------------: |
| FROM       | `FROM <image>:<tag>`                            | 指明构建的新镜像是来自于哪个基础镜像，如果没有选择`tag`，那么默认值为`latest` |
| MAINTAINER | `MAINTAINER <name>`                             | 指明镜像维护者及其联系方式（一般是邮箱地址）。官方说明已过时，推荐使用`LABEL` |
| LABEL      | `LABEL <key>=<value> ...`                       |        功能是为镜像指定标签。也可以使用`LABEL`来指定镜像作者 |
| RUN        | `RUN <command>`                                 | 构建镜像时运行的`Shell`命令，比如构建的新镜像中我们想在`/usr/local`目录下创建一个`java`目录 |
| ADD        | `ADD <src>... <dest>`                           | 拷贝文件或目录到镜像中。src 可以是一个本地文件，还可以是一个`url`。然后自动下载和解压 |
| COPY       | `COPY <src>... <dest>`                          | 拷贝文件或目录到镜像中。用法同 ADD，只是不支持自动下载和解压 |
| EXPOSE     | `EXPOSE <port> [<port>/<protocol>...]`          | 暴露容器运行时的监听端口给外部，可以指定端口是监听 TCP 还是 UDP，如果未指定协议，则默认为 TCP |
| ENV        | `ENV <key>=<value> ...`                         |                                           设置容器内环境变量 |
| CMD        | `CMD ["executable","param1","param2"]`          | 启动容器时执行的`Shell`命令。在`Dockerfile`中只能有一条`CMD`指令。如果设置了多条`CMD`，只有最后一条会生效 |
| ENTRYPOINT | `ENTRYPOINT ["executable", "param1", "param2"]` | 启动容器时执行的 Shell 命令，同 CMD 类似，不会被 docker run 命令行指定的参数所覆盖，如果设置了多条`ENTRYPOINT`，只有最后一条会生效 |
| WORKDIR    | `WORKDIR param`                                 |        为 RUN、CMD、ENTRYPOINT 以及 COPY 和 AND 设置工作目录 |
| VOLUME     | `VOLUME ["param"]`                              | 指定容器挂载点到宿主机自动生成的目录或其他容器。一般的使用场景为需要持久化存储数据时 |



#### 构建镜像

`Dockerfile`文件编写好以后，真正构建镜像时需要通过`docker build`命令。

`docker build`命令用于使用`Dockerfile`创建镜像。

```sh
    # 使用当前目录的 Dockerfile 创建镜像
    docker build -t mycentos:7 .

    # 通过 -f Dockerfile 文件的位置创建镜像
    docker build -f /home/ruoyi/docker/Dockerfile -t mycentos:7 .
```



##### Dockerfile实践

接下来我们通过基础镜像`centos:7`，在该镜像中安装`jdk`和`tomcat`以后将其制作为一个新的镜像`mycentos:7`

创建目录，编写`Dockerfile`文件

```sh
    mkdir -p /usr/local/`dockerfile`
```



执行命令：`vi Dockerfile`,写入信息

```sh
    # 指明构建的新镜像是来自于`centos:7`基础镜像
    FROM centos:7
    # 通过镜像标签声明了作者信息
    LABEL maintainer = "ruoyi.vip"

    # 设置工作目录
    WORKDIR /usr/local
    # 新镜像构建成功以后创建指定目录
    RUN mkdir -p /usr/local/java && mkdir - p /usr/local/tomcat
    # 拷贝文件到镜像中并解压
    ADD jdk-8u111-linux-x64.tar.gz /usr/local/java
    ADD apache-tomcat-8.5.27.tar.gz /usr/local/tomcat
    # 暴露容器运行时的8080监听端口给外部
    EXPOSE 8080
    # 设置容器内 JAVA_HOME 环境变量
    ENV JAVA_HOME /usr/local/java/jdk1.8.0_111
    ENV PATH:$JAVA_HOME/bin
    # 启动容器时启动tomcat
    CMD ["/usr/local/tomcat/apache-tomcat-8.5.27/bin/catalina.sh", "run"]
```



构建镜像

```sh
    docker build -f /home/ruoyi/docker/Dockerfile -t mycentos:test .
```



启动镜像

```sh
    docker run -di --name mycentos -p 8080:8080 mycentos:test
```



进入容器

```sh
    docker exec -it mycentos7 /bin/bash
```



##### 镜像构建历史

`docker history 镜像名称:标签|ID`

```sh
    docker history mycentos:7
```



### 镜像仓库

我们使用的镜像都是从`DockerHub`公共仓库拉取的，我们也学习了如何制作自己的镜像，但是通过`tar`包的方式实现镜像的备份恢复迁移对于团队协作开发并不是特别友好，我们也可以将镜像推送至`DockerHub`仓库方便使用。

温馨提示：如果构建的镜像内携带了项目数据，建议还是使用私有仓库比较好。



#### 注册账号

官网 [Docker Hub 官网](https://hub.docker.com/)



#### 登录账号

`docker login`



#### 推送镜像至仓库

```sh
    docker tag hello-world:latest ruoyivip/test-hello-world:1.0.0
    docker push ruoyivip/test-hello-world:1.0.0
```



#### 查看仓库

[Docker Hub](https://hub.docker.com/repositories)



#### 拉取镜像

通过`docker pull ruoyivip/test-hello-world:1.0.0`测试镜像是否可以拉取。



#### 退出账号

通过`docker logout`退出账号



### Docker Compose

通过前面几篇文章的学习，我们可以通过`Dockerfile`文件让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况，或者开发一个`Web`应用，除了`Web`服务容器本身，还需要数据库服务容器、缓存容器，甚至还包括负载均衡容器等等。

`Docker Compose`恰好满足了这样的需求，它是用于定义和运行多容器`Docker`应用程序的工具。通过`Compose`，您可以使用`YAML`文件来配置应用程序所需要的服务。然后使用一个命令，就可以通过`YAML`配置文件创建并启动所有服务。

`Docker Compose`项目是`Docker`官方的开源项目，来源于之前的`Fig`项目，使用`Python`语言编写。负责实现对`Docker`容器集群的快速编排。项目地址为：`https://github.com/docker/compose/releases`


`Docker Compose`使用的三个步骤为：

- 使用`Dockerfile`文件定义应用程序的环境；
- 使用`docker-compose.yml`文件定义构成应用程序的服务，这样它们可以在隔离环境中一起运行；
- 执行`docker-compose up`命令来创建并启动所有服务。



#### Compose安装

[Overview | Docker Documentation](https://docs.docker.com/compose/install/)



#### docker-compose.yml 文件详解

官方文档：`https://docs.docker.com/compose/compose-file/`

`Docker Compose`允许用户通过`docker-compose.yml`文件（YAML 格式）来定义一组相关联的容器为一个工程（project）。一个工程包含多个服务（service），每个服务中定义了创建容器时所需的镜像、参数、依赖等。

`Docker Compose`模板文件我们需要关注的顶级配置有`version`、`services`、`networks`、`volumes`几个部分，除`version`外，其他几个顶级配置下还有很多下级配置，后面也会详细给大家介绍，先来看看这几个顶级配置都什么意思：

- `version`：描述`Compose`文件的版本信息，当前最新版本为`3.8`，对应的`Docker`版本为`19.03.0+`
- `services`：定义服务，可以多个，每个服务中定义了创建容器时所需的镜像、参数、依赖等
- `networkds`：定义网络，可以多个，根据`DNS server`让相同网络中的容器可以直接通过容器名称进行通信
- `volumes`：数据卷，用于实现目录挂载



##### 示例

```sh
    # 描述 Compose 文件的版本信息
    version: "3.8"

    # 定义服务，可以多个
    services:
        nginx: # 服务名称
            image: nginx # 创建容器时所需的镜像
            contaainer_name: mynginx # 容器名称，默认为"工程名称_服务条目名称_序号"
            ports: # 宿主机与容器的端口映射关系
                - "80:80" # 左边宿主机端口:右边容器端口
            networks: # 配置容器连接的网络,引用顶级 networks 下的条目
                - nginx-net

    # 定义网络, 可以多个。如果不声明，默认会创建一个网络名称为"工程名称_defaul"的bridge网络
    networks:
        nginx-net: # 一个具体网络的条目名称
            name: nginx-net # 网络名称, 默认为"工程名称_网络条目名称"
            driver: bridge # 网络模式，默认为bridge

```

使用`docker-compose up`创建并启动所有服务

```sh
    # 前台启动
    docker-compose up

    # 后台启动
    docker-compose up -d
```

浏览器访问：http://192.168.10.10/ 结果如下

使用`docker-compose down`可以停止并删除容器、网络。



##### `version` 版本信息

以下为`Compose`文件的版本信息所对应的`Docker`版本。

| Compose file format | Docker Engine release |
| ------------------- | --------------------: |
| 3.8                 |              19.03.0+ |
| 3.7                 |              18.06.0+ |
| 3.6                 |              18.02.0+ |
| 3.5                 |              17.12.0+ |
| 3.4                 |              17.09.0+ |
| 3.3                 |              17.06.0+ |
| 3.2                 |              17.04.0+ |
| 3.1                 |               1.13.1+ |
| 3.0                 |               1.13.0+ |
| ...                 |                 1.x.x |



##### services 定义服务

`services`用来定义服务，可以多个，每个服务中定义了创建容器时所需的镜像、参数、依赖等，就像将命令行参数传递给`docker run`一样。同样，网络和数据卷的定义也是一样的。

比如，通过`docker run`命令构建一个`MySQL`应用容器的命令如下：

```sh
    docker run -di --name mysql8 -p 3306:3306 -v /mydata/docker_mysql/conf:etc/mysql/conf.d -v /mydata/docker_mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 mysql:8
```

使用`ocker-compose.yml`以后则可以这样定义:

```yml
    version: "3.8"
    # 定义服务，可以多个
    services:
        mysql: # 服务名称
            image: mysql:8 # 创建容器时所需的镜像
            container_name: mysql8 # 容器名称,默认为"工程名称_服务条目名称_序号"
            posts: # 宿主机遇容器的端口映射关系
                - "3306:3306" # 左边宿主机端口:右边容器端口
            environment: # 创建容器时所需的环境变量
                MYSQL_ROOT_PASSWORD: 1234
            volumes:
                - "/mydata/docker_mysql/conf:/etc/mysql/conf.d"
                - "/mydata/docker_mysql/data:/var/lib/mysql"

```



##### image镜像名称标签

指定创建容器时所需的镜像名称标签或者镜像`ID`。如果镜像在本地不存在，会去远程拉取。

```yml
    services:
        web:
            image: hello-world
```



##### build构建容器

除了可以基于指定的镜像构建容器，还可以基于`Dockerfile`文件构建，在使用`up`命令时会执行构建任务



##### context文件路径

该选项可以是`Dockerfile`文件的绝对/相对路径，也可以是远程`Git`仓库的`URL`，当提供的值是相对路径时，相对当前`docker-compose.yml`文件所在目录。

```yml
    build:
        context: . # 相对当前 docker-compose.yml 文件所在目录, 基于名称为 Dockerfile文件构建镜像
```



##### dockerfile构建镜像

一般情况下，默认都基于文件名叫`Dockerfile`的文件构建镜像，当然也可以是自定义的文件名，使用`dockerfile`声明，不过这个选项只能声明文件名，文件所在路径还是要通过`centext`来声明

```yml
    build:
        context: . # 相对当前docker-compose.yml 文件多种目录
        dockerfile: Dockerfile-alternate # 基于名称为Dockerfile-alternate 的文件构建镜像
```



##### container_name容器名称

`Compose`创建的容器默认生成的名称格式为：`工程名称_服务条目名称_序号`。如果要使用自定义名称，使用`container_name`声明

```yml
    services:
        mycentos:
            build: .
            container_name: mycentos7 # 容器名称,默认为"工程名称_服务条目名称_序号"
```

因为`Docker`容器名称必须是唯一的,所有如果指定了自定义名称,就不能将服务扩展至多个容器。这样做可能会导致错误。



##### depend_on 容器依赖

使用`Compose`最大的好处就是敲最少的命令做更多的事情，但一般项目容器启动的顺序是有要求的，如果直接从上到下启动容器，必然会因为容器依赖问题而启动失败。例如在没有启动数据库容器的情况下启动了`Web`应用容器，应用容器会因为找不到数据库而退出。`depends_on`就是用来解决容器依赖、启动先后问题的配置项

```yml
    version: "3.8"

    services:
        web:
            build: .
            depends_on:
                - db
                - redis
            redis:
                image: redis
            db:
                image: mysql
```

上述`YAML`文件定义的容器会先启动`db`和`redis`两个服务，最后才启动`web`服务



##### ports暴露端口

容器对外暴露的端口, 格式: 坐标宿主机端口:右边容器端口

```yml
    ports:
        - "8080"
        - "8080:8080
```



##### expose接受端口范围

容器暴露的端口不映射到宿主机, 只允许能被连接的服务访问。

```yml
    expose:
        - "80"
        - "8080"
```



##### restart重启策略

容器重启策略, 简单的理解就是`Docker` 重启以后容器要不要一起启动

- no: 默认的重启策略，在任何情况下都不会重启容器;
- no-failure: 容器非正常退出是，比如退出状态为非0(异常退出),才会重启容器
- always: 容器总是重新启动，即使容器被手动停止了，当`Docker`重启时容器也还是会一起启动;
- unless-stopped: 容器总是重新启动, 除非容器被停止 (手动或其他方式), 那么`Docker`重启时容器则不会启动

```yml
    services:
        nginx:
            image: nginx
            container_name: mynginx
            posts:
                - "80:80"
            restart: always
```



##### environment环境变量

添加环境变量。可以使用数组也可以使用字典。布尔相关的值（true、false、yes、no）都需要用引号括起来，以确保 YML 解析器不会将它们转换为真或假

```yml
    environment:
        RUOYI_ENV: development
        SHOW: "true"
        SESSION_SECRET:
```

或者一下格式

```yml
    environment:
        - RUOYI_ENV=development
        - SHOW=true
        - SESSION_SECRET
```



**env_file文件获取环境变量**

从文件中获取环境变量，可以指定一个或多个文件，其优先级低于`environment`指定的环境变量

```yml
    env_file:
        - /opt/runtime_opts.env # 绝对路径
        - ./common.env # 相对路径，相对当前 docker-compose.yml 文件所在目录
        - ./apps/web.env # 相对路径，相对当前 docker-compose.yml 文件所在目录
```

注意：env 文件中的每一行需采用`键=值`格式。以`#`开头的行会被视为注释并被忽略。空行也会被忽略



##### command执行命令

覆盖容器启动后默认执行的命令

```yml
    command: echo "helloworld"
```

该命令也可以是一个列表

```yml
    command: ["echo","helloworld"]
```



##### volumes目录挂载

数据卷，用于实现目录挂载，支持指定目录挂载、匿名挂载、具名挂载。

- 指定目录挂载的格式为：左边宿主机目录:右边容器目录，或者左边宿主机目录:右边容器目录:读写权限；
- 匿名挂载格式为：容器目录即可，或者容器目录即可:读写权限；
- 具名挂载格式为：数据卷条目名称:容器目录，或者数据卷条目名称:容器目录:读写权限。

```yml
# 描述 Compose文件的版本信息
version: "3.8"

# 定义服务，可以多个
serveices:
	mysql: #服务名称
		image: mysql:8 # 创建容器所需的镜像
		container_name: mysql8 # 容器名称，默认为"工程名称_服务条目名称_序号"
		ports: # 宿主机与容器的端口:右边容器端口
			- "3306:3306" # 左边宿主机端口:右边容器端口
		environment: # 创建容器时所需要的环境变量
			MYSQL_ROOT_PASSWORD: 1234
		volumes:
			# 绝对路径
			- "/mydata/docker_mysql/data:/var/lib/mysql"
			# 相对路径, 相对当前docker-compose.yml 文件所在目录
			- "./conf:/etc/mysql/conf.d"
			# 匿名挂载, 匿名挂载只需要写容器目录即可, 容器外对应的目录会在 /var/lib/docker/volume 中生成
			- "/var/lib/mysql"
			# 具名挂载，就是给数据卷起了个名字，容器外对应的目录会在/var/lib/docker/volume 中生成
			- "mysql-data-volume:/var/lib/mysql"

# 定义数据卷，可以多个
volumes:
	mysql-data-volume: # 一个具体数据卷的条目名称
		name: mysql-data-volume # 数据卷名称, 默认为"工程名称_数据卷条目名称"
			
```



##### network_mode网络模式

设置网络模式，类似 `docker run` 时添加的参数 `--net host` 或者 `--network host` 的用法

```yml
    network_mode: "bridge"
    network_mode: "host"
    network_mode: "none"
    network_mode: "service:[service name]"
    network_mode: "container:[container name/id]"
```



##### networks

配置容器连接的网络，引用顶级 networks 下的条目。

```yml
    # 定义服务，可以多个
    services:
      nginx: # 服务名称
        networks: # 配置容器连接的网络，引用顶级 networks 下的条目
          - nginx-net # 一个具体网络的条目名称

    # 定义网络，可以多个。如果不声明，默认会创建一个网络名称为"工程名称_default"的 bridge 网络
    networks:
      nginx-net: # 一个具体网络的条目名称
        name: nginx-net # 网络名称，默认为"工程名称_网络条目名称"
        driver: bridge # 网络模式，默认为 bridge
```



##### aliases

网络上此服务的别名。同一网络上的其他容器可以使用服务名或此别名连接到服务容器。同一服务在不同的网络上可以具有不同的别名。

```yml
    # 定义服务，可以多个
    services:
      nginx: # 服务名称
        networks: # 配置容器连接的网络，引用顶级 networks 下的条目
          nginx-net: # 一个具体网络的条目名称
            aliases: # 服务别名，可以多个
              - nginx1 # 同一网络上的其他容器可以使用服务名或此别名连接到服务容器

    # 定义网络，可以多个。如果不声明，默认会创建一个网络名称为"工程名称_default"的 bridge 网络
    networks:
      nginx-net: # 一个具体网络的条目名称
        name: nginx-net # 网络名称，默认为"工程名称_网络条目名称"
        driver: bridge # 网络模式，默认为 bridge
```



#### Compose常用命令



```sh
Commands:
  build              # 构建或重新构建服务
  create             # 创建服务
  up                 # 创建并启动所有服务的容器。指定多个yml加-f选项。以守护进程模式运行加-d选项。
  down               # 停止并删除所有服务的容器、网络、镜像、数据卷
  pull               # 拉取服务依赖的镜像
  push               # 推送服务图片
  start              # 启动服务容器
  stop               # 停止服务容器
  top                # 显示正在运行的进程
  pause              # 暂停服务容器
  unpause            # 恢复服务容器。
  events             # 从容器接收实时事件
  exec               # 进入服务容器
  help               # 查看帮助
  images             # 打印服务容器所对应的镜像
  kill               # 通过发送SIGKILL信号停止指定服务的容器。
  logs               # 查看服务容器的输出日志
  port               # 打印指定服务容器的某个端口所映射的宿主机端口
  ps                 # 列出工程中所有服务的容器
  restart            # 重启服务容器
  rm                 # 删除服务（停止状态）容器
  run                # 列出工程中所有服务的容器
  scale              # 设置服务的容器数
  version            # 显示Docker Compose版本信息
  bundle             # 从compose中生成一个Docker包
  config             # 验证并查看Compose文件,docker-compose config -q验证docker-compose.yml文件。当配置正确时，不输出任何内容，当配置错误时，输出错误信息
```





## 参考

[码头工人桌面|码头工人文档 (docker.com)](https://docs.docker.com/desktop/)

[应用容器部署 | RuoYi](http://doc.ruoyi.vip/ruoyi-cloud/cloud/dokcer.html)

[Reference documentation | Docker Documentation](https://docs.docker.com/reference/)

[Dockerfile reference | Docker Documentation](https://docs.docker.com/engine/reference/builder/)

[Docker Hub Container Image Library | App Containerization](https://hub.docker.com/)