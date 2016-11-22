
function getWeather(){
  var cityInput = localStorage.getItem("inCity");
  var flag = localStorage.getItem("flag");

  if (flag == 1 ){ //patithike to geolocation
    var lat = localStorage.getItem("lat");
    var lon = localStorage.getItem("lon");
    var basic = "http://api.openweathermap.org/data/2.5/forecast/daily?";
    var lat="lat="+lat;
    var lon="&lon="+lon;
    var f = "&units=metric&cnt=6&APPID=6bd48141fe02446426c4806ff4532e46";
    var url = basic + lat + lon + f;
    //console.log(url);
    localStorage.setItem("flag","0"); //midenismos flag
  } else {
    var basic = "http://api.openweathermap.org/data/2.5/forecast/daily?q=";
    var city = cityInput;
    var f = "&units=metric&cnt=6&APPID=6bd48141fe02446426c4806ff4532e46";
    var url = basic + city + f;
      console.log(url);
  }

              $.ajax({
                type: 'GET',
                url: url,
                async: false,
                dataType: 'json',
                success: function (data) {
                  var i;
                  var max = [];
                  var min = [];
                  var ico = [];
                  for(i=0;i<=5;i++){
                    min[i] = Math.round(data.list[i].temp.min);
                    max[i] = Math.round(data.list[i].temp.max);
                    var d = data.list[i].dt;
                    var code = data.country;
                    $('#cityIn').html(data.city.name + "," + data.city.country);

                    }
                          var d = new Date(); //emfanisi imeron
                          var weekday = new Array(12);
                          weekday[0]=  "SUN";
                          weekday[1] = "MON";
                          weekday[2] = "TUE";
                          weekday[3] = "WED";
                          weekday[4] = "THU";
                          weekday[5] = "FRI";
                          weekday[6] = "SAT";
                          weekday[7] = "SUN";
                          weekday[8] = "MON";
                          weekday[9] = "TUE";
                          weekday[10] = "WED";
                          weekday[11] = " THU";
                          var n = weekday[d.getDay()];

              document.getElementById('max').innerHTML= max[0] + " " + "&#8451";    //today
              document.getElementById('min').innerHTML= min[0] +  " " + "&#8451";
              ico = data.list[0].weather[0].icon;
              $('#icon').html("<img src='img/" + ico + ".png' width='100px' height='100px' >");

              document.getElementById("name1").innerHTML = weekday[d.getDay()+1];
              document.getElementById('d1max').innerHTML= max[1] + " " + "&#8451"; //day1
              document.getElementById('d1min').innerHTML= min[1] +  " " + "&#8451";
              d1icon = data.list[1].weather[0].icon;
              $('#d1icon').html("<img src='img/" + d1icon + ".png' width='60px' height='60px' >");

              document.getElementById("name2").innerHTML = weekday[d.getDay()+2];
              document.getElementById('d2max').innerHTML= max[2] + " " + "&#8451"; //day2
              document.getElementById('d2min').innerHTML= min[2] +  " " + "&#8451";
              d2icon = data.list[2].weather[0].icon;
              $('#d2icon').html("<img src='img/" + d2icon + ".png' width='60px' height='60px' >");

              document.getElementById("name3").innerHTML = weekday[d.getDay()+3];
              document.getElementById('d3max').innerHTML= max[3] + " " + "&#8451"; //day3
              document.getElementById('d3min').innerHTML= min[3] +  " " + "&#8451";
              d3icon = data.list[3].weather[0].icon;
              $('#d3icon').html("<img src='img/" + d3icon + ".png' width='60px' height='60px' >");

              document.getElementById("name4").innerHTML = weekday[d.getDay()+4];
              document.getElementById('d4max').innerHTML= max[4] + " " + "&#8451"; //day4
              document.getElementById('d4min').innerHTML= min[4] +  " " + "&#8451";
              d4icon = data.list[4].weather[0].icon;
              $('#d4icon').html("<img src='img/" + d4icon + ".png' width='60px' height='60px' >");

              document.getElementById("name5").innerHTML = weekday[d.getDay()+5];
              document.getElementById('d5max').innerHTML= max[5] + " " + "&#8451"; //day5
              document.getElementById('d5min').innerHTML= min[5] +  " " + "&#8451";
              d5icon = data.list[5].weather[0].icon;
              $('#d5icon').html("<img src='img/" + d5icon + ".png' width='60px' height='60px' >");


                }
              });


}





function redirect(){


     var check = document.getElementById('geoButton').onclick = function() {
            if(check){  //elegxos an patithike to access location

            navigator.geolocation.getCurrentPosition(showPosition);

          }
        }
          var check2 = document.getElementById('cityButton').onclick = function(){
            if (check2){ //elegxos an patithike i anazitisi polis

              var inputCity = document.getElementById("city").value;
              if(!inputCity)
              {
                alert("Please type your city");
              }
              else  {
              localStorage.setItem("inCity", inputCity);
              location.href="result.html";


            }
          }
}
}






function showPosition(position) {
  var lat= position.coords.latitude;
  var lon =position.coords.longitude;
  console.log(lat);
  console.log(lon);
  localStorage.setItem("lat",lat); // apothikeysi sintetagmenon
  localStorage.setItem("lon",lon);
  localStorage.setItem("flag","1"); // flag gia elegxo stin epomeni selida ,an patithike to geolocation
  location.href="result.html";
}
