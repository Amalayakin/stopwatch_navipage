const openbtn = document.querySelector(".open-btn");
const closebtn = document.querySelector(".close-btn");
const model_con = document.querySelector(".model-con");

openbtn.addEventListener('click',function (){
    model_con.style.display = "block";
})
closebtn.addEventListener('click',function (){
    model_con.style.display = "none";
})
window.addEventListener('click',function (e){
    if(e.target === model_con){
         model_con.style.display = "none";
    }
   
})
