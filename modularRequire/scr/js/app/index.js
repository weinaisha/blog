define(['jquery','com/lazyLoading','com/slider','com/goTop'],
      function ($,lazyLoading,slider,GoTop) {
        new slider($('.slider'))
        lazyLoading($('.wrap'),$('.load'))
        new GoTop()
})