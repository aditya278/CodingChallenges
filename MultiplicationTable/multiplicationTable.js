/* Write an Algorithm to accept a number as a command line input. 
Check for the number is a Prime Number or not. 
If it's a prime number, print the multiplication table ofthe number. */

var readlinesync = require('readline-sync');

function checkPrime(num) {
    if(num !== '') {
        for(var i=2; i<=Math.sqrt(num); i++) {
            if(num%i === 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function printMultTable(num) {
    for(var i = 1; i<=10; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

function main() {
    
    do {
        var num = readlinesync.question("Enter the Number: ");
        if(checkPrime(num)) {
            printMultTable(num);
        }
    } while(readlinesync.keyInYN("Want to continue?")); 
}

main();