let hourEl = document.getElementById("hour");
let minutesEl = document.getElementById("minutes");
let secondEl = document.getElementById("second");
let yearEl= document.getElementById("year")
let monthEl= document.getElementById("month")
let dayEl= document.getElementById("day")

function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let y= new Date().getFullYear()
  let month= new Date().getMonth();
  let d= new Date().getDate();    

  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondEl.innerText=s;
  yearEl.innerText=y;
  monthEl.innerText=month;
  dayEl.innerText=d;
}
setInterval(function(){clock();},1000)