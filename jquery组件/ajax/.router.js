function setRouter(app){ 
 var router = app; 

router.get('/getNews', function(req, res) {
  var news=[
    {
      title: '李克强：如果沿用老办法管制就可能没有今天的微信',
      date: '2016-6-22'
    },
    {
      title:"所罗门矩阵调查：这可能是中国互联网史上最大的骗局",
      date:"2016-6-22"
    },
    {
      title:"为什么家用选择220V电路，而不是380V？原来两者的区别是",
      date:"2016-6-22"
    },
    {
      title:"原来银行人都是这样设置密码的！",
      date:"2016-6-22"
    },
    {
      title:"腾讯究竟是哪个国家的公司？",
      date:"2016-6-22"
    },
    {
      title:"丁宁4:0完胜韩国名将梁夏银 一齐弯腰找球场景遭调侃",
      date:"2016-6-22"
    },
    {
      title:"奥运会已成烫手山芋，众国皆躲，奥组委希望中国接锅",
      date:"2016-6-22"
    }
  ];
  var len=2;
  var pageIndex=req.query.page;
  var retNews=news.slice(pageIndex*len,len*pageIndex+len);
  res.send({
    status:1,
    data:retNews
  });
});}
 module.exports.setRouter = setRouter