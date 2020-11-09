/* Find Tomorrow's Date in JavaScript*/
var timestamp = Date.now();
console.log(timestamp);
let today = new Date();
//or remove the argument to get actual today's date

let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

console.log(tomorrow.toDateString())
//Thu Oct 01 2020