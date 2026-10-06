var minDisplay = document.querySelector("#min");
var secDisplay = document.querySelector("#sec");
var msecDisplay = document.querySelector("#msec");
var startBtn = document.querySelector("#startBtn");

var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var interval;

function formatTime(val) {
    return val < 10 ? "0" + val : val;
}

function startTimer() {
    if (interval) return;
    
    startBtn.disabled = true;
    
    interval = setInterval(function () {
        milliseconds++;
        msecDisplay.innerHTML = formatTime(milliseconds);

        if (milliseconds >= 100) {
            seconds++;
            secDisplay.innerHTML = formatTime(seconds);
            milliseconds = 0;
        }

        if (seconds >= 60) {
            minutes++;
            minDisplay.innerHTML = formatTime(minutes);
            seconds = 0;
        }
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
    startBtn.disabled = false;
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    
    minDisplay.innerHTML = "00";
    secDisplay.innerHTML = "00";
    msecDisplay.innerHTML = "00";
}
