/*
Write an algorithm to check
1.Whether the given input number is a multiple of 10.
2.If it is ​multiple ​of 10,  Multiply given input with number 10 without using addition and multiplication operators. (NO * +)
3.If it is ​not multiple​ of 10, Multiply given input with number 8 without using additionand multiplication operators. (NO * +)

*/

var readlineSync = require("readline-sync");

function multiply(num) {
    if(num%10 === 0)
        return (num<<1) + (num<<3);
    else   
        return num<<3;
}

function main() {
    var num = readlineSync.question("Enter the Number: ");
    console.log(multiply(num));
}

main();