---
title: 部署上线相关问题
tags: 
    - Vue
    - React
categories: 
  - FrontEnd
summary: 部署上线相关问题
description: 部署上线相关问题
# sticky: 4
date: 2023-04-15 22:50:55
---



## 部署上线



## 资源gzip压缩



## Nginx配置

配置参考

```nginx
user  www www; # 将用户设置为www www
worker_processes auto; # 工作进程数，默认1
error_log  /www/wwwlogs/nginx_error.log  crit; # 关键字-日志文件-错误日志级别
# 错误日志级别：常见的错误日志级别有[debug | info | notice | warn |error | crit | alert | emerg]，级别越高记录的信息越少。
# 生产场景一般是 warn | error | crit 这三个级别之一
pid        /www/server/nginx/logs/nginx.pid; # pid文件 记录nginx的进程pid好
worker_rlimit_nofile 51200; # 更改worker进程的最大打开文件数限制。如果没设置的话，这个值为操作系统的限制。设置后你的操作系统和Nginx可以处理比“ulimit -a”更多的文件，所以把这个值设高，这样nginx就不会有“too many open files”问题了。

stream { # 基于TCP/UDP端口的四层负载均衡
    log_format tcp_format '$time_local|$remote_addr|$protocol|$status|$bytes_sent|$bytes_received|$session_time|$upstream_addr|$upstream_bytes_sent|$upstream_bytes_received|$upstream_connect_time'; 
    # 一条是log_format，用来设置日志格式；另外一条是access_log，用来指定日志文件的存放路径、格式和缓存大小，可以参加ngx_http_log_module。一般在nginx的配置文件中日记配置(/usr/local/nginx/conf/nginx.conf)
  
    access_log /www/wwwlogs/tcp-access.log tcp_format;
    error_log /www/wwwlogs/tcp-error.log;
    include /www/server/panel/vhost/nginx/tcp/*.conf; 
    # 主配置文件nginx.conf中指定包含其他扩展配置文件，从而简化nginx主配置文件，实现多个站点功能
}

events
    { # 事件(Event)模块 | 
        use epoll; 
    # 选择一个可用的事件的模型(可以在编译时指定)，Nginx会自动选择事件的模型
    # select：只能在Windows下使用，这个事件模型不建议在高负载的系统使用
    #poll:Nginx默认首选，但不是在所有系统下都可用
    #kqueue:这种方式在FreeBSD 4.1+, OpenBSD2.9+, NetBSD 2.0, 和 MacOS X系统中是最高效的
    #epoll: 这种方式是在Linux 2.6+内核中最高效的方式
    # rtsig:实时信号，可用在Linux 2.2.19的内核中，但不适用在高流量的系统中
    /dev/poll: Solaris 7 11/99+,HP/UX 11.22+, IRIX 6.5.15+, and Tru64 UNIX 5.1A+操作系统最高效的方式
    # eventport: Solaris 10最高效的方式
        
        worker_connections 51200; # 定义每个worker进程连接数量
        multi_accept on; # 定义Nginx是否一次同意从监听队列所有到来的连接
    }

http
    {
        include       mime.types;
		#include luawaf.conf;

		include proxy.conf;

        default_type  application/octet-stream; # nginx响应类型default_type

        server_names_hash_bucket_size 512; # 用于设置域名哈希表的桶（bucket）的大小。默认值由处理器的缓存行来决定，详细信息可以在单独的文档中找到。
        client_header_buffer_size 32k; # 假设client_header_buffer_size的配置为1k，如果(请求行+请求头)的大小如果没超过1k，放行请求。如果(请求行+请求头)的大小如果超过1k，则以large_client_header_buffers配置为准
        large_client_header_buffers 4 32k; 
# 假设large_client_header_buffers的配置为4 32k，则对请求有如下要求
# 请求行(request line)的大小不能超过32k，否则返回414错误
# 请求头(request header)中的每一个头部字段的大小不能超过32k，否则返回400错误（实际是494错误，但nginx统一返回400了）
curl -H "header1=aaa" -H "header2=bbb" -v http://127.0.0.1/，这里的header1=xxx和header2=xxx就是请求头中的头部字段
# (请求行+请求头)的大小不能超过128k(4 * 32k)

        client_max_body_size 50m; # 文件大小限制，默认1m

        # 文件上传
        sendfile   on; # 指定是否使用sendfile系统调用来传输文件。sendfile系统调用在两个文件描述符之间直接传递数据(完全在内核中操作)，从而避免了数据在内核缓冲区和用户缓冲区之间的拷贝，操作效率很高，被称之为零拷贝。
        tcp_nopush on; # 开启或者关闭nginx在FreeBSD上使用TCP_NOPUSH套接字选项， 在Linux上使用TCP_CORK套接字选项。 选项仅在使用sendfile的时候才开启。 开启此选项允许在Linux和FreeBSD 4.*上将响应头和正文的开始部分一起发送；一次性发送整个文件。

        keepalive_timeout 60; 
        # 第一个参数：设置keep-alive客户端连接在服务器端保持开启的超时值（默认75s）；值为0会禁用keep-alive客户端连接；
		# 第二个参数：可选、在响应的header域中设置一个值“Keep-Alive: timeout=time”；通常可以不用设置；

        tcp_nodelay on;
        # sendfile可以开启高效的文件传输模式，
        # tcp_nopush开启可以确保在发送到客户端之前数据包已经充分“填满”， 这大大减少了网络开销，并加快了文件发送的速度。 然后，当它到达最后一个可能因为没有“填满”而暂停的数据包时，Nginx会忽略tcp_nopush参数， 然后，
        # tcp_nodelay强制套接字发送数据。由此可知，TCP_NOPUSH可以与TCP_NODELAY一起设置，它比单独配置TCP_NODELAY具有更强的性能。

# Fastcgi是CGI的更高级的一种方式，是用来提高CGI程序性能的。 web server（如nginx）只是内容的分发者。 比如，如果请求/index.html，那么web server会去文件系统中找到这个文件，发送给浏览器，这里分发的是静态资源。
        fastcgi_connect_timeout 300; # 指定nginx与后端fastcgi server连接超时时间
        fastcgi_send_timeout 300; # 指定nginx向后端传送请求超时时间（指已完成两次握手后向fastcgi传送请求超时时间）
        fastcgi_read_timeout 300; # 指定nginx接受后端fastcgi响应请求超时时间 （指已完成两次握手后nginx接受fastcgi响应请求超时时间）
        fastcgi_buffer_size 64k; # 指定nginx读取fastcgi响应第一部分需要用多大的缓冲区，这个值表示将使用一个64kb的缓冲区响应第一部分应答（应答头）可以设置为fastcgi_buffers缓存区大小
        fastcgi_buffers 4 64k; # 指nginx需要用多大的缓冲区缓冲fastcgi的应答请求（整个应答），如果一个php脚本所产生的页面大小为256kb，那么会分配4个64kb缓冲区来缓存，如果页面大于256kb，那么大于256kb的部分会缓存到fastcgi_temp指定的路径中，但是因为内存中数据处理远快于磁盘， 所以这个值应该为站点中php所产生的页面大小的中间值， 如果站点大部分php脚本产生的页面为：256kb， 那么可以设置成成"8 16k  4 64k"
        fastcgi_busy_buffers_size 128k; # 整个数据请求需要多大的缓存区，建议设置为fastcgi_buffers值的两倍
        fastcgi_temp_file_write_size 256k; # 写入缓存文件使用多大的数据块，默认值是fastcgi_buffer值的2倍
		fastcgi_intercept_errors on; # 这个指令指定是否传递4xx和5xx错误信息到客户端，或者允许nginx使用error_page处理错误信息。你必须明确的在error_page中指定处理方法使这个参数有效，正如Igor所说“如果没有适当的处理方法，nginx不会拦截一个错误，这个错误不会显示自己的默认页面，这里允许通过某些方法拦截错误。

        gzip on; # 决定是否开启gzip模块，on表示开启，off表示关闭；
        gzip_min_length  1k; # 设置允许压缩的页面最小字节(从header头的Content-Length中获取) ，当返回内容大于此值时才会使用gzip进行压缩,以K为单位,当值为0时，所有页面都进行压缩。建议大于1k
        gzip_buffers     4 16k; # 设置gzip申请内存的大小,其作用是按块大小的倍数申请内存空间,param2:int(k) 后面单位是k。这里设置以16k为单位,按照原始数据大小以16k为单位的4倍申请内存
        gzip_http_version 1.1; # 识别http协议的版本,早起浏览器可能不支持gzip自解压,用户会看到乱码
        gzip_comp_level 2; # 设置gzip压缩等级，等级越底压缩速度越快文件压缩比越小，反之速度越慢文件压缩比越大；等级1-9，最小的压缩最快 但是消耗cpu
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml; # 设置需要压缩的MIME类型,非设置值不进行压缩，即匹配压缩类型
        gzip_vary on; # 启用应答头"Vary: Accept-Encoding"
        
        gzip_proxied   expired no-cache no-store private auth; 
# nginx做为反向代理时启用,off(关闭所有代理结果的数据的压缩),expired(启用压缩,如果header头中包括"Expires"头信息),no-cache(启用压缩,header头中包含"Cache-Control:no-cache"),
# no-store(启用压缩,header头中包含"Cache-Control:no-store"),private(启用压缩,header头中包含"Cache-Control:private"),no_last_modefied(启用压缩,header头中不包含
  "Last-Modified"),no_etag(启用压缩,如果header头中不包含"Etag"头信息),auth(启用压缩,如果header头中包含"Authorization"头信息)
        
        gzip_disable   "MSIE [1-6]\."; # (IE5.5和IE6 SP1使用msie6参数来禁止gzip压缩 )指定哪些不需要gzip压缩的浏览器(将和User-Agents进行匹配),依赖于PCRE库

        limit_conn_zone $binary_remote_addr zone=perip:10m; # 指令描述会话状态存储区域。会话的数目按照指定的变量来决定，它依赖于使用的变量大小和memory_max_size的值。
		limit_conn_zone $server_name zone=perserver:10m;

        server_tokens off; # 该指令允许您定义 Nginx 是否应通知客户端运行版本号。Nginx 指示其版本号有以下三种情况：
# 在 HTTP 响应的服务器标头中（例如nginx/1.8.0）。如果设置server_tokens为off，则服务器标头将仅指示Nginx。
# 在错误页面上，Nginx 在页脚中指示版本号。如果设置server_tokens为off，则错误页面的页脚将仅显示Nginx。
# 如果使用构建值，Nginx 将输出编译时指定的构建值。
        access_log off;

    	server  { # 即虚拟服务，它用来描述我们站点一些访问规则。需要填写在 http 标签中，可定义多个，
    		listen		80;
			# server_addr # 接受请求的 server 名称
        server_name     43.142.74.200; # 接受请求的 server 端口
    		location / {
			root 	/www/wwwroot/share-study/font/dist;
    			index	/index.html;
    		}
    		location ^~ /api/ {
    			rewrite ^/api/(.*)$1 /$1 break;
    		# 	proxy_pass http://120.46.214.246:8080;
    		proxy_pass http://43.142.74.200:8080;
    			
    			proxy_redirect off;
      		proxy_set_header Host $host;    # 后端的Web服务器可以通过X-Forwarded-For>获取用户真实IP
      		proxy_set_header X-Real-IP $remote_addr;
      		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      		client_max_body_size 1024m; # 允许客户端请求的最大单文件字节数
      		client_body_buffer_size 1024k; # 缓冲区代理缓冲用户端请求的最大字节数
      		client_body_temp_path /www/wwwroot/share-study/font/temp_file; # 文件临时目录 需要有可读写权限
      		proxy_connect_timeout 180; #nginx跟后端服务器连接超时时间(代理连接超时)
      		proxy_read_timeout 180;      # 连接成功后，后端服务器响应时间(代理接收超时)
      		proxy_buffer_size 1024k;       # 设置代理服务器（nginx）保存用户头信息的缓冲区大小
      		proxy_buffers 6 500k;        # proxy_buffers缓冲区，网页平均在32k以下的话>，这样设置
      		proxy_busy_buffers_size 1024k; # 高负荷下缓冲大小（proxy_buffers*2）
      		proxy_temp_file_write_size 1024k; # 设定缓存文件夹大小，大于这个值，将从upstream服务器传
    		}
    	}
	
	server  {
          listen          81;
          server_name     43.142.74.200;
        
         # location 它是用来根据 URI 进行配置设置的
         # location [ = | ~ | ~* | ^~ ] uri { ... }
        # none，如果没有修饰符，则将该位置解释为前缀匹配。这意味着给定的位置将根据请求URI的开头进行匹配，以确定匹配
        # =，代表精确匹配，完全相等即匹配
        # ~，区分大小写的正则表达式匹配
        # ~*，不区分大小写的正则表达式匹配
        # ^~，普通字符匹配，如果该选项匹配，只匹配该选项
        
       # nginx 的匹配过程如下：
        # 精确匹配 =，如果匹配成功，搜索停止
        # 前缀匹配，最长位置匹配，如果该匹配具有 ^~，搜索停止
        # 正则匹配，按配置文件中定义的顺序进行匹配。
        # 如果第3条规则产生匹配的话，结果被使用。否则，使用第2条规则的结果。
          location / { # # 普通请求网页
        
                  root    /www/wwwroot/share-study/backend/dist;
                  index   /index.html;
          }
          location ^~ /api/  { # API请求代理
                  rewrite ^/api/(.*)$1 /$1 break;
                  proxy_pass  http://120.46.214.246:8080;
          }
  }
  
  	server  {
          listen          8083;
          server_name     43.142.74.200;
          location / {
                  root    /www/wwwroot/vue-match-echarts/dist;
                  index   /index.html;
          }
          location ^~ /api/  {
                  rewrite ^/api/(.*)$1 /$1 break;
                  proxy_pass  http://120.46.214.246:8080;
          }
  }
include /www/server/panel/vhost/nginx/*.conf;
}
```

### 参考

```
https://segmentfault.com/a/1190000012403369
https://www.oschina.net/translate/nginx-setup?print
https://cloud.tencent.com/developer/article/1027563
https://blog.csdn.net/qq_26711103/article/details/81116900

- Fastcgi
https://blog.51cto.com/blief/1739655
https://www.jianshu.com/p/093a21ce2d43

- gzip
https://www.cnblogs.com/kevingrace/p/10018914.html
```



## CSS引入外部字体包过大

字蛛 `font-spider`

```
npm install font-spider -g
```



vue中使用

新建一个index.html页面，页面内容中应该包含你要使用的文字内容，只要包含文字就行，没有标签的要求，字蛛会自己检索。
引入自定义字体。

```css
    @font-face {
      font-family: '夏行楷';
      src: url('F:/Project/Github/Progress/vue-match-echarts/dist/assets/演示夏行楷-fac1f0ec.ttf');
    }

    @font-face {
      font-family: '秋鸿楷';
      src: url('F:/Project/Github/Progress/vue-match-echarts/dist/assets/演示秋鸿楷-d70a79d2.ttf');
    }

    .myfont01 {
      font-family: '夏行楷';
    }

    .myfont02 {
      font-family: '秋鸿楷';
    }
```



```
font-spider index.html
```

生成新的字体文件包，原来的字体文件会在spiderfont里



### 参考

```
https://blog.csdn.net/ZHANGYANG_1109/article/details/121296345
```

