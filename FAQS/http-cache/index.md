## 浏览器会把哪些缓存文件丢进memory？哪些丢进disk？

大致原则：(不同浏览器引擎不一样)
- 对于大文件来说，大概率是不存储在内存中的，反之优先
- 当前系统内存使用率高的话，文件优先存储进硬盘。（比如css->disk js、image->memory）

补充：浏览器中的缓存位置一共有四种，按优先级从高到低排列分别是：
- Service Worker
- Memory Cache
- Disk Cache
- Push Cache

![](../../images/cache_flow.png)


## show me the code
- node静态服务器演示参考 examples/http-cache/
  执行 1、npm i 2、npm run serve
    
- nginx设置 deploy/nginx.conf

