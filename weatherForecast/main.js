var currentCity='北京'

    
$('.today-weather').on('click','.inquire',function(){
  currentCity=$('.select-city').val();
  getWeather(currentCity);
});
getWeather(currentCity);
// '.taday-weather'
/*
var getCityId=function(){
  var promise=new Promise(function(resolve,reject){
    let xhr=new XMLHttpRequest()
    xhr.open("GET")
    function handler() {
      if (this.readyState !==4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response.channels)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}
*/
function getWeather(currentCity){
  // if (!currentCity) {
  //   $.get('http://api.jirengu.com/city.php').done(function(ret){
  //     if (ret) {
  //       currentCity=ret;
  //     }else{
  //       alert("获取不到当前城市信息！");
  //     }
  //   }).fail(function(){
  //     alert("系统错误！");
  //   })
  // }
  $.get('//jirenguapi.applinzi.com/weather.php?',{city:currentCity}).done(function(ret){
    var data=JSON.parse(ret);
    if (data.error===0&&data.status==='success') {
      renderPage(data.results);
      $('.select-city').focus();
      $('.select-city').keydown(function(event){
        if (event.which==13) {
          currentCity=$('.select-city').val();
          getWeather(currentCity);
        }
      });
    }else{
      alert("请输入正确的城市名称");
    }
  }).fail(function(){
    alert("系统错误");
  })
}
  
function renderPage(data){
  var data=data[0]
  var weather_data=data.weather_data;
  var currentCity=data.currentCity;
  var index=data.index;
  var pm25=data.pm25;
  var tipsHtml='';
  var forecastHtml='';
  var taday_weatherHtml='';
  weather_data.forEach(function(item,index){
    if (index===0){
      taday_weatherHtml= '<div class="weather">'+
                            '<img src="'+item.dayPictureUrl+'">'+
                            '<p>'+item.weather+'</p>'+
                            '<p>'+item.temperature+'</p>'+
                            '<p>'+item.wind+'</p>'+
                          '</div>'+
                          '<div class="information">'+
                            '<ul>'+
                              '<li>'+
                                '<input class="select-city" type="text" name="city" placeholder="切换城市">'+
                                '<input type="button" class="inquire" value="查询">'+
                              '</li>'+
                              '<li>'+
                                '<h3 class="city">'+currentCity+'</h3>'+
                              '</li>'+
                              '<li>'+item.date+'</li>'+
                              '<li>pm25:'+pm25+'</li>'+
                            '</ul>'+
                          '</div>';
      $('.taday-weather').html(taday_weatherHtml);
    }
    if (index>0) {
      forecastHtml+='<li class="forecast-panel">'
                        +'<ul>'
                          +'<li>'+item.date+'</li>'
                          +'<li>'
                            +'<img src="'+item.dayPictureUrl+'">'
                          +'</li>'
                          +'<li>'+item.weather+'</li>'
                          +'<li>'+item.temperature+'</li>'
                          +'<li>'+item.wind+'</li>'
                        +'</ul>'
                      +'</li>';
    }
  })
  $('.forecast').html(forecastHtml);
  index.forEach(function(item,index){
    tipsHtml+= '<li class="tips-panel">'
                +'<ul>'
                  +'<li>'+item.title+'</li>'
                  +'<li class="unfloded">'+item.zs+'</li>'
                  +'<li class="detail">'+item.des+'</li>'                      
                +'</ul>'
              +'</li>';
  })
  $('.tips').html(tipsHtml);
}