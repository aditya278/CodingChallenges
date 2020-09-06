var seconds = 0;
var minutes = 0;
var hours = 0;
var intervalId = 0;
var clickAudio;

function stopWatch() {
    clickAudio.play();
    seconds++;

    if(seconds/60 === 1) {
        seconds = 0;
        minutes++;

        if(minutes/60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

function start() {
    clickAudio = document.getElementById("clickAudio");
    if(intervalId === 0)
        intervalId = window.setInterval(stopWatch, 1000);
}

function reset() {
    window.clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

function stop() {
    window.clearInterval(intervalId);
    intervalId = 0;
}
