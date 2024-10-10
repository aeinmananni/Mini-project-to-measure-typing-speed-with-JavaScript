import { leadingZero ,Start ,interVal } from "./func/func.js";
 
const theTimer = document.querySelector('.timer');
const testArea = document.querySelector(".textarea-field");
const textPattern =document.querySelector(".pattern-input").value = 'the Text is Default';
const reset = document.querySelector(".timer-button");
let timerRunning = false
let timer = [0,0,0,0];



const spellCheck = () =>{
  const TextAreaFiled = testArea.value
   let originTextMatch = textPattern.substring(0,TextAreaFiled.length);
  if(TextAreaFiled == textPattern){
     testArea.style.borderColor= "green";
     clearInterval(interVal);
  }else{
         if(TextAreaFiled == originTextMatch){
           testArea.style.borderColor= "yellow";
           
         } else{
           testArea.style.borderColor= "red";
         }
  }
}
 
function runTimer(){
    let currentTime =  leadingZero(timer[0])+ ":" +leadingZero(timer[1])+":"+leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;
    timer[0]=Math.floor((timer[3] /100) / 60) ;
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}


 function  resetFunction(){
   timer=[0,0,0,0];
   timerRunning=false;
   theTimer.innerText="00:00:00";
   testArea.value = "";
   testArea.style.borderColor="gray";
   clearInterval(interVal);
}
testArea.addEventListener("keypress",()=>Start({testArea,runTimer,timerRunning}));
testArea.addEventListener("keyup" , spellCheck);
reset.addEventListener('click' , resetFunction);