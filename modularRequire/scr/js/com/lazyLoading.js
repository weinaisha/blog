
define(['jquery'],function($){
  var lazyLoading=(function(){
    function LazyLoading($ct,$load){
      this.$ct=$ct
      this.$load=$load
      this.init()
    }

    LazyLoading.prototype={
      init:function(){
        var _this=this
        this.nodeHeight=[]
        // var clock
        // this.isVisible=false

        this.nodeWidth=this.$load.outerWidth(true)
        var columns=parseInt($(window).width()/this.nodeWidth)
        for (var i = 0; i < columns; i++) {
            this.nodeHeight[i]=0;
          }

         this.$ct.css({width:columns*this.nodeWidth})

        this.loadImg()
        var clock
        $(window).on('scroll',function(){
          
          if(clock){
            clearTimeout(clock)
          }
          clock = setTimeout(function(){
            console.log('hello')
            var isVisible=_this.isLoad()
            if(isVisible){
              _this.loadImg()
            }
          }, 100)
        })
      },

      loadImg:function(){
        var _this=this
        if (!this.isLoad()) {
          console.log(1)
          return
        }
        var imgsUrl=this.getImgUrl(15)
        imgsUrl.forEach(function(imgUrl){
          var img=new Image()
          img.src=imgUrl
          img.onload=function(){
            var imgInfo={
              target:img,
              width:230,
              height:img.height/img.width*230
            }
            _this.getNode(imgInfo)
          }
        })
      },

      getImgUrl:function(num){
        var urls=[],width,length
        for (var i = 0; i < num; i++) {
          width=parseInt(Math.random()*100+200)
          height=parseInt(Math.random()*100+200)
          urls.push('http://lorempixel.com/'+width+'/'+height)
        }
        return urls
      },

      getNode:function(imgInfo){
        var $imgCt=$('<div class="items"></div>')
        var $img=$(imgInfo.target)
        $img.width(imgInfo.width)
        $imgCt.append($img)
        this.$ct.append($imgCt)
        this.render($imgCt)
      },

      render:function($node){

        var min=Math.min.apply(null,this.nodeHeight)
        var minIndex=this.nodeHeight.indexOf(min)

        $node.css({
          left: this.nodeWidth*minIndex,
          top: min,
        })

        this.nodeHeight[minIndex] += $node.outerHeight(true)
        console.log(this.nodeHeight)
        this.$ct.height(Math.max.apply(null,this.nodeHeight))
      },

      isLoad:function(){
        var scrollHeight = $(window).scrollTop(),
            windowHeight = $(window).height(),
            top = this.$load.offset().top;

        if(top-400 < windowHeight + scrollHeight){
          return true
          console.log(true)
        }else{
          return false
        }
      }
    }

    return function($ct,$load){
      new LazyLoading($ct,$load)
    }
  })()
  return lazyLoading
})



