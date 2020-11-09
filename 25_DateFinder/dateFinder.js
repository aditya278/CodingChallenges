var today = new Date();
var numOfDaysInMonth = (new Date(today.getFullYear(), today.getMonth(), 0)).getDate();

for(var i=1; i<numOfDaysInMonth; i++) {
    var newDate = new Date(today.getFullYear(), today.getMonth(), i);
    var day = newDate.getDay();
    if(day === 6 || day === 0) {
        console.log(`${newDate.toLocaleDateString()} is a ${day===6 ? "Saturday" : "Sunday"}`);
    }
}