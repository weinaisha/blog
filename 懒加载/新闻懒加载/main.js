
var pageindex = 0;
var isOver=false;
var isNewsArrive = true;
getNews();
$(window).on('scroll',lazyLoading)

function lazyLoading(){
  if (isVisible($('.anchorPoint'))&&!isOver&&isNewsArrive) {
    getNews();
  }
}

function isVisible($node){
  var windowHeight=$(window).height();
  var scrollTop=$(window).scrollTop();
  var offsetTop=$node.offset().top;
  nodeHeight = $node.height();
  if (windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight) {
    return true;
  }
  return false;
}

function getNews(){
  isNewsArrive = false;

  $.get('/getNews',{page:pageindex}).done(function(ret){
    isNewsArrive = true;

    if(ret.error===0){
      pageindex++;
      renderPage(ret.data);
      lazyLoading();
    }else{
      alert('信息获取错误');
    }
  }).fail(function(){
    alert('找不到页面');
  })
}
/*
ret{
  error:0,
  data:news = [
                {
                  link: 'http://view.inews.qq.com/a/20160830A02SEB00',
                  img: 'http://inews.gtimg.com/newsapp_ls/0/531730377_150120/0',
                  title: '中国轰6K研发险些被俄罗斯发动机厂商卡脖子',
                  brif:  '近日，轰6K＂战神＂轰炸机首次公开亮相。在中国...'
                },
                {
                  link: 'http://view.inews.qq.com/a/20160830A02SEB00',
                  img: 'http://inews.gtimg.com/newsapp_ls/0/531730377_150120/0',
                  title: '中国轰6K研发险些被俄罗斯发动机厂商卡脖子',
                  brif:  '近日，轰6K＂战神＂轰炸机首次公开亮相。在中国...'
                }
                ...
              ],
  statu:'successe'
}
*/
function renderPage(news){
  if (news.length===0) {
    $('.news-wrap ul').append($('<li>没有更多消息了</li>'));
    isOver=true;
    return;
  }
  var newsHtml='';
  news.forEach(function(item,index){
    newsHtml+='<li class="news-panel clearfix">'
                    +'<img src="'+item.img+'">'
                    +'<div>'
                    +'<h3 class="title"><a href="'+item.link+'">'+item.title+'</a></h3>'
                    +'<p class="summary">'+item.brif+'</p>'
                    +'</div>'
                  +'</li>'
  })
  $('.news-wrap ul').append(newsHtml);
}