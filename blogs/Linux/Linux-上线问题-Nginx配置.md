---
title: Nginx配置
tags: 
    - Linux
    - Nginx
categories:
    - AfterEnd
    - FontEnd
summary: Nginx配置
description: Nginx配置
date: 2023-3-28 07:23:08
---



### Nginx配置

```conf
user www-data;
worker_processes auto;
error_log  /etc/nginx/nginx_error.log  crit;
pid /run/nginx.pid;
worker_rlimit_nofile 51200;

events
    {
        use epoll;
        worker_connections 51200;   # 一个worker进程可以打开51200个链接
        multi_accept on;
    }

http
    {
        include       mime.types;
		# include luawaf.conf;

		# include proxy.conf;

        default_type  application/octet-stream;

        server_names_hash_bucket_size 512;
        client_header_buffer_size 32k;
        large_client_header_buffers 4 32k;
        client_max_body_size 200m; // nginx对上传文件大小的限制

        sendfile   on;  # 是否调用sendfile这个函数
        tcp_nopush on;  # nginx在去处理数据包时是否累计，然后再一起传输

        keepalive_timeout 60;

        tcp_nodelay on;

        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        fastcgi_buffer_size 64k;
        fastcgi_buffers 4 64k;
        fastcgi_busy_buffers_size 128k;
        fastcgi_temp_file_write_size 256k;
		fastcgi_intercept_errors on;

        gzip on;  # gzip 压缩
        gzip_min_length  1k;
        gzip_buffers     4 16k;
        gzip_http_version 1.1;
        gzip_comp_level 2;
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
        gzip_vary on;
        gzip_proxied   expired no-cache no-store private auth;
        gzip_disable   "MSIE [1-6]\.";

        limit_conn_zone $binary_remote_addr zone=perip:10m;
		limit_conn_zone $server_name zone=perserver:10m;

        server_tokens off;
        access_log off;

    	server  { // 服务一 前台
    		listen		80;  // 监听端口
        server_name     116.63.165.100; // 服务器IP
    		location / {
			root 	/etc/nginx/html/font/dist;
    			index	/index.html;
    		}
    		location ^~ /api/ { // 遇到api 代理到 接口地址
    			rewrite ^/api/(.*)$1 /$1 break;
    			proxy_pass http://120.46.214.246:8080;
    		}
    	}
	
	server  { // 服务一 后台
          listen          81; // 监听端口
          server_name     116.63.165.100;  // 服务器IP
          location / {
                  root    /etc/nginx/html/backend/dist;
                  index   /index.html;
          }
          location ^~ /api/  { // 遇到api 代理到 接口地址
                  rewrite ^/api/(.*)$1 /$1 break;
                  proxy_pass  http://120.46.214.246:8080;
          }
  }
  
  # 前台测试
include /www/server/panel/vhost/nginx/*.conf;
}


```

