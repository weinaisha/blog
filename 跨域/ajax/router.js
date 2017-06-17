router.get('/loadmore', function(req, res) {
  var list = req.query.pageLength;
  var start=req.query.pageStart;
  var ret = [];
  for (var i=0;  i< list; i++) {
    newslist = '新闻'+start;
    ret.push(newslist);
    start++;
  }
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //*表示允许任何来源的请求
  res.send(ret);
});

