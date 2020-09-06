var alarmSound = new Audio();
alarmSound.src = "alarm.mp3";
var currDate = new Date();
console.log(currDate.toISOString());
document.getElementById("alarmTime").value = currDate.toISOString().slice(0,16);
var alarmTimer;

function setAlarm(button) {
    
    var ms = document.getElementById("alarmTime").valueAsNumber;
    if(isNaN(ms)) {
        alert("Invalid Date!");
        return;
    }

    var alarm = new Date(ms);
    var alarmTime = new Date(alarm.getUTCFullYear(),
                            alarm.getMonth(),
                            alarm.getUTCDate(),
                            alarm.getUTCHours(),
                            alarm.getUTCMinutes(),
                            alarm.getUTCMinutes(),
                            alarm.getUTCSeconds());
    
                            
    var timeDiffInMS = alarmTime.getTime() - (new Date()).getTime();

    if(timeDiffInMS < 0) {
        alert("The Time has already passed!");
        return;
    }

    alarmTimer = setTimeout(initAlarm, timeDiffInMS);

    button.innerText = "Cancel Alarm";
    button.setAttribute('onclick', 'cancelAlarm(this);');

}

function cancelAlarm(button) {
    button.innerText = 'Set Alarm';
    button.setAttribute('onclick', 'setAlarm(this);');
    clearTimeout(alarmTimer);
}

function initAlarm() {
    alarmSound.play();
    document.getElementById("alarmOptions").style.display = '';
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById("alarmOptions").style.display = "none";
    cancelAlarm(document.getElementById('alarmBtn'));
}

function snooze() {
    stopAlarm();
    setInterval(initAlarm, 60000);
}
