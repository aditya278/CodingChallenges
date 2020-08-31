/*
A. Crack the series ​1 2 3 6 9 18 27 54​ ......
B. Write an algorithm to produce the above number series until ‘N’ where N is a positive integer.
Note : Input N should be taken as command line input.


1: 1
2: 2 = 2 * 1
3: 3 = 3/2 * 2
4: 6 = 2 * 3
5: 9 = 3/2 * 6
6: 18 = 2 * 9
7: 27 = 3/2 * 18
.
Nth term = 2 * (N-1)th term, if N is even
           3/2 * (N-1)th term, if N is odd


*/

var readlineSync = require("readline-sync");

function main() {
    var num = readlineSync.question("Enter the number: ");
    var series = [1];
    for(var i=1; i<num; i++) {
        if(i%2===0) {
            series.push((3 / 2) * series[i-1]); 
        }
        else {
            series.push(2 * series[i-1]);
        }
    }
    console.log(series.join(', '));
}

main();