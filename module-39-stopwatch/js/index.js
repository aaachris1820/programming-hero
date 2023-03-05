const btnStop=document.getElementById('btn-stop');

const btnStart=document.getElementById('btn-start');

const btnClear=document.getElementById('btn-clear');

const timerSeconds=document.getElementById('seconds');
const timerMinutes=document.getElementById('minutes');
const timerHours=document.getElementById('hours');
let numberOfSeconds=0;
let numberOfHours=0;
let numberOfMinutes=0;
// holds id for setInterval function
let stopIntervalId;

// this function will increase time by 1s at 1s interval and calculate the total based on normal time conversion and update it on dom

const setHoursMinutesSeconds=()=>{
    stopIntervalId=setInterval(()=>{
    numberOfSeconds++;
    if(numberOfSeconds>59){
        numberOfSeconds=0;

        numberOfMinutes++;

        timerMinutes.textContent=numberOfMinutes<10?'0'+numberOfMinutes:numberOfMinutes;

        if(numberOfMinutes>59){
            numberOfHours++;

            timerHours.textContent=numberOfHours<10?'0'+numberOfHours:numberOfHours;
        }
    }  

    timerSeconds.textContent=numberOfSeconds<10?'0'+numberOfSeconds:numberOfSeconds;
    
},1000)


};


//event listener for btn start

btnStart.addEventListener('click',()=>{
    setHoursMinutesSeconds();
});

// event listener for btn stop

btnStop.addEventListener('click',()=>{
    clearInterval(stopIntervalId);
});

// event listener for btn clear

btnClear.addEventListener('click',()=>{
    clearInterval(stopIntervalId);
    timerHours.textContent='00';
    timerMinutes.textContent='00';
    timerSeconds.textContent='00';
})