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

//Find if a given number is a Prime Number:
function isPrime(num) {
    for(var i=2; i<=Math.sqrt(num); i++) {
        if(num%i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimeAndNarc(arr) {
    var primeCount = 0;
    var narCount = 0;
    var result = [];

    for(var i=0; i<arr.length; i++) {
        var isNumPrime = isPrime(arr[i]);
        var isNumNarc = isNarcissistic(arr[i]);

        if(isNumPrime && isNumNarc) {
            primeCount++;
            narCount++;
        }
        else if(isNumNarc) {
            narCount++;
        }
        else if(isNumPrime) {
            primeCount++;
        }
        else{
            result.push(arr[i]);
        }
    }

    return [primeCount, narCount, result];
}

function main() {
    //var len = readlineSync.question("What is the lenght of array: ");
    var arr = [];
    for(var i=0;i<len;i++) {
        arr.push(parseInt(readlineSync.question('')));
    }
    //arr = [10,20,30,40,2,5,7,153,1024,1634,11];
    console.log(arr);
    
    var result = findPrimeAndNarc(arr);

    console.log("Prime Number Count: " + result[0]);
    console.log("Narcissistic Number Count: " + result[1]);
    console.log("The Updated array: " + result[2]);
}

main();