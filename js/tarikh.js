var date = new Date();
var chandom = date.getDate();
var mh = date.getMonth();
var hafte = date.getDay();
var shanbe = [" یکشنبه "," دوشنبه ", " سه‌شنبه ", " چهارشنبه ", " پنجشنبه ", " جمعه ", " شنبه "];
var maah = ["فـروردین", "اردیبهشت", "خـــرداد", "تیـــر", "مـــرداد", "شهــریـور", "مـهــــر", "آبــان", "آذر", "دی", "بهمـــن", "اسـفــند"];
var xmiladi = ["1", "2", "3", "4", "21", "21", "20", "20", "20", "", "", ""]
var xRoooz;
var xborj;
if(chandom >= 21){
xRoooz = chandom -= 22;
xborj = mh += 11;
}else{
xRoooz = chandom += 11;
xborj = mh += 10;
}

if(xRoooz < 10){
  document.getElementById("xday").innerHTML = "0" + xRoooz;
}else{
  document.getElementById("xday").innerHTML =xRoooz;
}

document.getElementById("xhafte").innerHTML = shanbe[hafte];