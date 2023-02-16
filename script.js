const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const millisecondsEl = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")


let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isStarted = false;
let interval;


startBtn.addEventListener('click', startTheTimer)
pauseBtn.addEventListener('click', pauseTimer)
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer)

function startTheTimer() {
    isStarted = true
    startTimer()
}

function startTimer(){
    interval = setInterval(()=> {
        if(isStarted){
            milliseconds += 10
            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }
            if(seconds === 60){
                minutes++;
                seconds = 0;
            }
            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            millisecondsEl.textContent = formatMilliseconds(milliseconds)
        }
    }, 10)
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}
function pauseTimer(){
    isStarted = false
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"
}
function resumeTimer(){
    isStarted = true
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
}



function formatTime(time){
    return time < 10 ? `0${time}` : time
}
function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time
}
function resetTimer(){
    isStarted = false
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliseconds = 0
    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    millisecondsEl.textContent = "000"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
    startBtn.style.display = "block";
}