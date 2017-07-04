define(['jquery'],function($){
  function Slider($ct){
    this.$ct=$ct
    this.$preBtn=this.$ct.find('.pre-btn')
    this.$nextBtn=this.$ct.find('.next-btn')
    this.$selectBtns=this.$ct.find('.select-btn>li')
    this.$imgs=this.$ct.find('.img-ct>li')
    this.imgWidth=$(window).width()
    this.imgsCount=this.$imgs.length
    this.cruPage=0
    this.init()
    this.addEvent()
  }

  Slider.prototype.init=function(){
    var _this=this

    this.$imgCt=this.$ct.find('.img-ct')
    this.$imgCt.append(this.$imgs.first().clone())
    this.$imgCt.prepend(this.$imgs.last().clone())

    this.$ct.find('.img-ct>li img').each(function(index,img){
      $(img).css({width:_this.imgWidth})
    })
    this.$imgCt.css({'width':(this.imgsCount+2)*this.imgWidth,
                     'marginLeft':-this.imgWidth})
    console.log(this.imgWidth)
    console.log(this.$imgCt.width())
    
    
  }

  Slider.prototype.addEvent=function(){
    var _this=this
    this.$preBtn.on('click',function(){
      _this.playPre(1)
    })
    this.$nextBtn.on('click',function(){
      _this.playNext(1)
    })
    this.$selectBtns.each(function(index,btn){
      $(btn).on('click',function(){
        var index=$(this).index()
        if (index<_this.cruPage) {
          _this.playPre(_this.cruPage-index)
        }
        if (index>_this.cruPage) {
          _this.playNext(index-_this.cruPage)
        }
      })
    })
  }

  Slider.prototype.playPre=function(len){
    var _this=this
    this.$imgCt.animate({marginLeft:'+='+_this.imgWidth*len},function(){
      _this.cruPage-=len
      _this.isReset()
    })
   
  }

  Slider.prototype.playNext=function(len){
    var _this=this
    this.$imgCt.animate({marginLeft:'-='+_this.imgWidth*len},function(){
      _this.cruPage+=len
      _this.isReset()
    })
  }

  Slider.prototype.isReset=function(){
    var _this=this
    if (this.cruPage<0) {
      this.$imgCt.css({marginLeft:-_this.imgsCount*_this.imgWidth})
      this.cruPage=this.imgsCount-1
    }
    if (this.cruPage===this.imgsCount) {
      this.$imgCt.css({marginLeft:-_this.imgWidth})
      this.cruPage=0
    }
    _this.setSelectBtn()
  }

  Slider.prototype.setSelectBtn=function(){
    this.$selectBtns.removeClass('active-btn')
                    .eq(this.cruPage).addClass('active-btn')
  }

  return Slider
})


