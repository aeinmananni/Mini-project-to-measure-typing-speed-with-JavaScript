export let interVal;
export function leadingZero (time){
    if(time <= 9){
       time = '0' + time
    }
    return time;
   }

   
export  function Start({testArea,runTimer,timerRunning}){
    let textEnteredLength = testArea.value.length;

    if(textEnteredLength === 0 && !timerRunning){
        timerRunning = true;
       interVal = setInterval(runTimer,10);
    } 
  }