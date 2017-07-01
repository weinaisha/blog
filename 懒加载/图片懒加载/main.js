lazyLoading();//用户第一次打开页面，还未滚动窗口的时候需要执行一次

var lock;
//用户鼠标滚轮滚动一次，有多次事件响应。下面的 setTimeout 主要是为性能考虑，只在最后一次事件响应的时候执行 isVisible
$(window).on('scroll',function(){
  if (lock) {
    clearTimeout(lock);
  }
  lock=setTimeout(function(){
    console.log("haha");
    lazyLoading();
  },200)
})

function lazyLoading(){
  $('.container img').each(function(){
    if (isVisible($(this))&&!isLoaded($(this))) {
      loadImg($(this));
    }
  })
}

function isVisible($node){
  var windowHeight=$(window).height();
  var scrollHeight=$(window).scrollTop();
  var offsetHeight=$node.offset().top;
  if (windowHeight+scrollHeight>offsetHeight||offsetHeight<windowHeight) {
    // if ($node.attr('count')) {
    //   return true;
    // }
    // $node.attr('count',1);
    // console.log('ture');
    return true;
  }
  return false;
}

function isLoaded($node){
  return $node.attr('src')===$node.attr('data-src');
}

function loadImg($node){
  $node.attr('src',$node.attr('data-src'));
}