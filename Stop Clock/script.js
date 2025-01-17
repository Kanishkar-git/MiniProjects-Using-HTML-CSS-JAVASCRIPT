// Define variables
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let isRunning = false;

// Start button functionality
document.getElementById('start').onclick = function() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 10);
    }
};

// Stop button functionality
document.getElementById('stop').onclick = function() {
    clearInterval(timer);
    isRunning = false;
};

// Reset button functionality
document.getElementById('reset').onclick = function() {
    clearInterval(timer);
    isRunning = false;
    hours = minutes = seconds = milliseconds = 0;
    updateDisplay();
};

// Update time function
function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

// Update display function
function updateDisplay() {
    document.getElementById('Hours').innerText = formatTime(hours);
    document.getElementById('Minutes').innerText = formatTime(minutes);
    document.getElementById('Seconds').innerText = formatTime(seconds);
    document.getElementById('MilliSeconds').innerText = formatTime(milliseconds);
}

// Format time function (adds leading zeros if necessary)
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
