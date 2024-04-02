var mytime = setInterval(
    function () {
      var date = new Date();
      var seconds = date.getSeconds();
      var Minutes = date.getMinutes();
      var Hours = date.getHours();
    if(seconds < 10){
      document.getElementById("ms").innerHTML = "0" + seconds;    
    }else{
      document.getElementById("ms").innerHTML = seconds;    
    }
    if(Minutes < 10){
      document.getElementById("md").innerHTML = "0" +  Minutes;    
    }else{
      document.getElementById("md").innerHTML = Minutes;    
    }
    if(Hours < 10){
      document.getElementById("mh").innerHTML = "0" + Hours;    
    }else{
      document.getElementById("mh").innerHTML = Hours;    
    }
    },
  1000     
);