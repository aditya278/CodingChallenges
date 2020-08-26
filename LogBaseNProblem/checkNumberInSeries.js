/*
Write An Algorithm to check if a given number is in the following series:
4,16,64,256,1024,4096,16384.,......., 4^N
Note : Output will be yes/no
*/

/*
If 4^N = X, then N = log4(X)
If log4(X) is an Integer without decimal points, then it means that the number X belongs to the series 4^N

logb(a) = ln(a) / ln(b) ; here ln() is log with base e.
So, log4(X) = ln(X) / ln(4)
*/
var readlineSync = require('readline-Sync');

function checkNumberInSeries(num) {
    return Number.isInteger(Math.log(num) / Math.log(4));
}

function main() {
    var num = readlineSync.question("Enter the Number: ");
    if(checkNumberInSeries(num))
        console.log("Yes");
    else
        console.log("No");
}

main();