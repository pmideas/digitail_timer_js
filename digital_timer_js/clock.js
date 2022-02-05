/****setInterval****/
setInterval(myClock, 1000);
function myClock(){
let d = new Date();
let h = d.getHours();
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
var day  = days[d.getDay()];
var month= monthNames[d.getMonth()]
// console.log(day)
// console.log(d.getDay())//06
// let w = d.getDay(); //06
// console.log(days[d.getDay()])//saturday
let session = "AM"
if(h>12){
// session ="AM"; already defined;
}
 if(h>=12){
   h = h- 12;
   session="PM" 
 }//13-12= 1PM, 14-12=2PM, 15-12=3pm..... 

if (h<10){
  h = "0" +h;
}// eg 1,2,3,4,5,6,7,8,9 hrs = 01..02..03..04..05..06..07..08..09

let m = d.getMinutes();
if(m <10 ){
  m= "0" + m;
  // console.log(m);
}

let s = d.getSeconds();
if(s <10 ){
  s= "0" + s;
  // console.log(s);
}
document.getElementById("day").innerHTML=day;
document.getElementById("month").innerHTML= month;
 document.getElementById("display_setInterval").innerHTML = h +":"+ m +":"+ s +" "+ session;

}
myClock();

