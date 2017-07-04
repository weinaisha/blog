define(['jquery'],function($){
  function GoTop(){
    this.init()
    this.bindEvent()
  }
  GoTop.prototype.init=function(){
    this.target=$('<div>顶部</div>')
    $('body').append(this.target)
    this.target.css({ width: 50,
                    height: 50,
                    lineHeight: '50px',
                    textAlign: 'center',
                    position: 'fixed',
                    bottom: 10,
                    right: 10,
                    color:'#fff',
                    fontSize:16,
                    background: 'rgba(74, 70, 69, 0.41)',
                    cursor: 'pointer'
              })
  }
  GoTop.prototype.bindEvent=function(){
    var scrollY
    this.target.on('click',function(){
      var x=0
      var timer=setInterval(function(){
        x++
        scrollY=window.scrollY
        if (scrollY<=0) {
          clearInterval(timer)
        }
        scrollY-=100*x+50
        window.scrollTo(0,scrollY)
      },100)
    })
  }
  return GoTop
})
