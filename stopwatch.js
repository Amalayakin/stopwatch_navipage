const playpause = document.querySelector(".startstop");
const resetbtn = document.querySelector(".resetbtn");

let second = 0;
let minute = 0;
let hour = 0;

let leadsec = 0;
let leadmin = 0;
let leadhrs = 0;

let timeInterval = null;
let timerstatus = "stopped";
function stopwatch()
{
 second++;
 if(second/60 === 1){
    second=0;
    minute++;
    if(minute/60 === 1)
    {
        minute=0;
        hour++;
        
     }
 }

 if(second < 10){
    leadsec = "0"+second.toString();
 }
 else{
    leadsec=second;
 }
 if(minute < 10){
    leadmin = "0"+minute.toString();
 }
 else{
    leadmin=minute;
 }
 if(hour < 10){
    leadhrs = "0"+hour.toString();
 }
 else{
    leadhrs=hrs;
 }
 let displaytimer = document.querySelector(".timer").innerText = leadhrs +":"+ leadmin +":"+ leadsec;

}


//window.setInterval(stopwatch,1000);
playpause.addEventListener("click",function (){
    if(timerstatus === "stopped"){
        timeInterval= window.setInterval(stopwatch,10);
        playpause.innerHTML='<i id="pause" class="fa-solid fa-pause"></i>';
        timerstatus = "started";
    }
    else{
        window.clearInterval(timeInterval);
         playpause.innerHTML='<i id="play" class="fa-solid fa-play"></i>';
         timerstatus = "stopped";
    }
});
resetbtn.addEventListener('click',()=>{
    window.clearInterval(timeInterval);
    second=0;
    minute=0;
    hour=0;
    document.querySelector(".timer").innerText="00:00:00";
    //timeInterval= window.setInterval(stopwatch,10);
})