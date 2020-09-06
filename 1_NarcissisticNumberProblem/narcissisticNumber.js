var readlineSync = require('readline-Sync');

//Find if a given number is a Narcissistic Number:
function isNarcissistic(num) {
    var len = num.toString().length;
    var sum = 0;
    var temp = num;
    while(temp>0) {
        sum += ((temp%10)**len);
        temp = Math.floor(temp/10);
    }

    return (sum===num);
}

//Write a function to find the count of Narcissistic numbers in a list and remove them from the list
function findNarcissistic(arr) {
    var len = arr.length;
    var finalArr = [];
    var count = 0;
    for(var i=0; i<len; i++) {
        if(!isNarcissistic(arr[i])) {
            finalArr.push(arr[i]);
        }
        else {
            count++;
        }
    }
    return [count, finalArr];
}

//Find if a given number is a Prime Number:
function isPrime(num) {
    for(var i=2; i<Math.sqrt(num); i++) {
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}

function findPrime(arr) {
    var len = arr.length;
    var count = 0;
    var finalArr = []
    for(var i=0; i<len; i++) {
        if(!isPrime(arr[i])) {
            finalArr.push(arr[i]);
        }
        else {
            count++;
        }
    }
    
    return [count, finalArr];
}

function main() {
    var len = readlineSync.question("What is the lenght of array: ");
    var arr = [];
    for(var i=0;i<len;i++) {
        arr.push(parseInt(readlineSync.question('')));
    }
    //arr = [10,20,30,40,2,5,7,153,1024,1634,11];
    console.log(arr);
    var primeResult = findPrime(arr);
    arr = primeResult[1];
    var narcResult = findNarcissistic(arr);
    arr = narcResult[1];

    console.log("Prime Number Count: " + primeResult[0]);
    console.log("Narcissistic Number Count: " + narcResult[0]);
    console.log("The Updated array: " + arr);
}

main();