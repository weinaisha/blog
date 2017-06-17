function setRouter(app){ 
 var router = app; 

app.get('/getSong', function(req, res) {
  songs=[
    "Oops",
    "Five Hundred Miles",
    "Where Is The Love",
    "I'm The One",
    "What Do I Konw"
  ];
  var data = [];
  for(var i=0; i<3; i++){
    var index = parseInt(Math.random()*songs.length);
    data.push(songs[index]);
    songs.splice(index,1);
  }
  var cb = req.query.callback;
  if(cb){
    res.send(cb + '('+ JSON.stringify(data) + ')');
  }else{
    res.send(data);
  }
});}
 module.exports.setRouter = setRouter