/*
Write an Algorithm, Given an integer x, Write a function that multiplies x with 3.5 and returns the integer result.
You are not allowed to use %, /, *.
Input: 5
Output: 17 (Ignore the digits after decimal point)
*/

var readlineSync = require("readline-sync");

function multiply(a,b) {
    return Math.floor(10**(Math.log10(a) + Math.log10(b)));
}

function main() {
    var x = readlineSync.question("Enter the number: ");
    console.log(multiply(x,3.5));
}

main();