function mycard() {
var matnn = document.getElementById("card").value;
if(matnn==603799){
document.getElementById("aabb").innerHTML = "بانک ملی";
document.getElementById("axbank").src = "b/bmi.png";
}
if(matnn==603769){
document.getElementById("aabb").innerHTML = "بانک صادرات";
document.getElementById("axbank").src = "b/bsi.png";
}
if(matnn==585983){
document.getElementById("aabb").innerHTML = "بانک تجارت"
document.getElementById("axbank").src = "tb.png";
}

}
function myfunc() {
var matn = document.getElementById("card").value;
document.getElementById("aab").innerHTML = matn;
}
