function setRouter(app){ 
 var router = app; 

router.get('/login', function(req, res) {
  var list = req.query.pageLength;
  var start=req.query.pageStart;
  var ret = [];
  for (var i=0;  i< list; i++) {
    newslist = '新闻'+start;
    ret.push(newslist);
    start++;
  }
  res.send(ret);
});

 module.exports.setRouter = setRouter