## [每天两个JavaScript小技巧](https://github.com/weinaisha/blog/issues/6)
## [事件兼容](https://github.com/weinaisha/blog/issues/5)
通过能力测试对老版本IE兼容

*  onclick-----------------------------------------都支持
*  attachEvent()-----------------------------------IE8
*  addEventListener()------------------------------IE9以前不支持
*  stopPropagation();preventDefault()--------------IE9以前不支持
*  returnValue-------------------------------------不支持preventDefault()方法取消默认行为时的解决方法
*  cancelBubble=true-------------------------------不支持stopPropagation()方法阻止冒泡时的解决方法


##  [封装Ajax](https://github.com/weinaisha/blog/blob/master/ajax/index.html)
1.  使用XMLHttpRequest构造函数创建一个xhr对象
>  var xhr = new XMLHttpRequest(); 

2.  xhr的方法，发请求
*   open('method','url',true)......................启动一个请求以备发送
>  method:请求类型（post/get）
>  true:异步发送请求，false:同步发送请求
>  多数情况下使用异步请求，才能让javascript继续执行而不必等待响应
*   send()..............................发送特定请求
3.  接受响应，检查
*   status：响应的HTTP状态，202（响应有效，成功标志）304（响应有效，请求资源没有被修改）
*   readyState：请求/响应过程的当前活动阶段：>>  0：未初始化，未调用open（）方法
>  1：启动，未调用send()方法
>  2：发送，已调用send()方法，但未接收响应
>  3：接收，已经接收到部分响应数据
>  4：完成，已经接收到全部的响应数据
4.  Ajax应用中，使用get/post两种请求的区别
*   get请求：xhr.open('get','/login?username=xiaoming&password=abc1234',true)
>  url包括键值拼接的字符串，安全性不高，常用于得到数据
>  xhr.send()参数为null
*   post请求：xhr.open('post','/login',true)
>  url不包括键值拼接的字符串，安全性高，常用于发送数据
>  xhr.getResponseHeader('content-type','application/x-www-form-urlencoded');用xhr来模仿表单提交时的内容类型，在调用open()方法之后调用
>  xhr.send()参数不为null，把数据作为请求的主体提交
## [原生JS实现Tab组件](https://github.com/weinaisha/blog/blob/master/tab.html)
## [原生JS实现模态框组件](https://github.com/weinaisha/blog/blob/master/modal-panel.html)
