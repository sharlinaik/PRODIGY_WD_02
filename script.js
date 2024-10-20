let timer;
let running = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            milliseconds += 10;
            if (milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            displayTime();
        }, 10);
    }
}

function pauseTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTime();
    document.getElementById('laps').innerHTML = '';
}

function recordLap() {
    const lapTime = document.createElement('div');
    lapTime.textContent = `Lap: ${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(Math.floor(milliseconds / 10))}`;
    document.getElementById('laps').appendChild(lapTime);
}

function displayTime() {
    document.getElementById('time').textContent = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(Math.floor(milliseconds / 10))}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
