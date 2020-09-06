/*
A. Crack the series ​2 15 41 80 132 197 275 366 470 587 ......
B. Write an algorithm to produce the above number series until ‘N’ where N is a positive integer.
Note : Input N should be taken as command line input.


15-2 : 13 = 13x1 -> 2 + (13x1) = 15
41-15: 26 = 13x2 -> 15 + (13x2) = 41
80-41: 39 = 13x3 -> 41 + (13x3) = 80

*/

var readlineSync = require("readline-sync");

function main() {
    var num = readlineSync.question("Enter the value for 'N': ");
    var sum = 2;
    var result = [];
    for(var i=1; i<=num; i++) {
        result.push(sum);
        sum += (13*i); 
    }
    console.log(result.join(', '));
}

main();