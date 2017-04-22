# blog
# 从 URL 输入到页面展现发生了什么
## URL是什么？

URL：统一资源定位符，一般由4个部分组成<协议>：//<主机>:<端口>/<路径>
常见的协议：http（超文本传送协议，端口号80），https（HTTP的安全版），ftp（文件传输协议，端口号21），file（本地文件传输协议）

## 从 URL 输入到页面展现发生了什么

1. DNS域名解析（进行域名到IP地址的解析）
- 浏览器缓存
- 系统缓存（从hosts文件中查找是否有该域名和对应IP）
- 路由器缓存
- ISP DNS缓存
- 如果都没有，从根域名服务器开始查找
2. 服务器处理（接收用户的request交给网站代码，或者接受请求反向代理到其他 web服务器）
- 常见的web服务器：Apache Nginx IIs Lighttpd
3. 网站处理（mvc模式）
4. 浏览器处理（HTML字符串被浏览器接受后被一句句读取解析）
5. 绘制网页（浏览器根据 HTML 和 CSS 计算得到渲染树，绘制到屏幕上，js 会被执行）
>[资料：What really happens when you navigate to a URL](http://igoro.com/archive/what-really-happens-when-you-navigate-to-a-url/)
