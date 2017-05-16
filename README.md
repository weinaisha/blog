## [事件兼容](https://github.com/weinaisha/blog/issues/5)
通过能力测试对老版本IE兼容

*  onclick-----------------------------------------都支持
*  attachEvent()-----------------------------------IE8
*  addEventListener()------------------------------IE9以前不支持
*  stopPropagation();preventDefault()--------------IE9以前不支持
*  returnValue-------------------------------------不支持preventDefault()方法取消默认行为时的解决方法
*  cancelBubble=true-------------------------------不支持stopPropagation()方法阻止冒泡时的解决方法
