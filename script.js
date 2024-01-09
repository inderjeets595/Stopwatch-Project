
// Assigning the initial values of milliseconds, seconds, minutes and hour as 0, 0, 0, 0 using an array
let [hours, minutes, seconds, milliseconds] = [0,0,0,0];

const spanHours = document.getElementById("hours");
const spanMinutes = document.getElementById("minutes");
const spanSeconds = document.getElementById("seconds");
const spanMilliseconds = document.getElementById("milliseconds");

const WatchStartBtn = document.getElementById('start-stop-watch')
const WatchPauseBtn = document.getElementById('pause-stop-watch')
const WatchResetBtn = document.getElementById('reset-stop-watch')

const divMilliseconds = document.querySelector(".milisecondsv");
const divSeconds = document.querySelector(".seconds");
const divMinutes = document.querySelector(".minutes");
const divHours = document.querySelector(".hours");
// it shows that no interval is present or started
let timer = null;

// create a function for the StopWatch
function stopWatch(){
  milliseconds += 10; // increase milliseconds by 10 after each encounter
  if(milliseconds == 1000){ //when milliseconds reaches to 1000 change it to 00 and increase the seconds by 1
      milliseconds = 00;
      seconds++;
      if(seconds == 60){ //when seconds reaches to 60, change it to 0 and increase minutes by 1
          seconds = 0;
          minutes++;
          if(minutes == 60){ //when minutes reaches to 60, change it to 0 and increase hours by 1
              minutes = 0;
              hours++;
          }
      }
  }

  // if hour is less than 10 add a 0 prior to hours and assign that value to hours  
  spanHours.textContent = hours < 10 ? "0" + hours : hours;
  // if minutes is less than 10 add a 0 prior to minutes and assign that value to minutes
  spanMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
  // if seconds is less than 10 add a 0 prior to seconds and assign that value to seconds 
  spanSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
  // if milliseconds is less than 10 add a 0 prior to milliseconds and assign that value to milliseconds 
  spanMilliseconds.textContent = milliseconds < 10   ?  "00" + milliseconds : milliseconds < 100   ?  "0" + milliseconds: milliseconds;

   //Below code add animation to the stop watch counter divs
  (milliseconds>0) ? divMilliseconds.style.transform = "scale(1.1)" : divMilliseconds.style.transform ='none';
  (seconds>0) ? divSeconds.style.transform = "scale(1.1)" : divSeconds.style.transform ='none';
  (minutes>0) ? divMinutes.style.transform = "scale(1.1)" : divMinutes.style.transform ='none';
  (hours>0) ? divHours.style.transform = "scale(1.1)" : divHours.style.transform ='none';

}


// This event occur to start the stop watch
WatchStartBtn.addEventListener('click',function(){
   // if any ongoing interval is present (or running) stop it and then restart it 
   if(timer !=null){
    clearInterval(timer);
   }
   timer = setInterval(stopWatch,10)

})


// This event occur to stop the stop watch
WatchPauseBtn.addEventListener('click',function(){
  // clear the previous interval
  if(timer !=null){
    clearInterval(timer);
   }
});

// This event occur to reset the stop watch
WatchResetBtn.addEventListener('click',function(){
  clearInterval(timer);
  // clear the previous interval and assign the default values to the timer 
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  
  // if hour is less than 10 add a 0 prior to hours and assign that value to hours 
  spanHours.textContent = hours < 10   ?   "0" + hours   : hours;
  // if minutes is less than 10 add a 0 prior to minutes and assign that value to minutes
  spanMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
  // if seconds is less than 10 add a 0 prior to seconds and assign that value to seconds
  spanSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
  // if milliseconds is less than 10 add a 0 prior to milliseconds and assign that value to milliseconds
  spanMilliseconds.textContent = milliseconds < 10   ?  "00" + milliseconds : milliseconds < 100   ?  "0" + milliseconds: milliseconds;

  //Below code remove animation to the stop watch counter divs
  divMilliseconds.style.transform ='none';
  divSeconds.style.transform ='none';
  divMinutes.style.transform ='none';
  divHours.style.transform ='none';
});

