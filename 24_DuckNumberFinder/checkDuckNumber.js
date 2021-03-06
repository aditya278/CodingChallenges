/*
Check if a given number is a DUCK NUMBER or NOT!

Note: A Duck number is a positive number which has atleast one non-leading 0 present in it.
Ex: 12101021 - Is a Duck number
00121 - Is NOT a Duck Number.
*/

const readlinesync = require('readline-sync');

function isDuckNumber(num) {

    const regex = /^\+?[0-9]*$/;
    if(!num.match(regex))
        return false;

    let len = num.length;
    var i = 0;
    while(i<len && num[i] === '0') {    //Worst Case: O(n)  ;   n -> len
        i++;
    }

    for(; i<len; i++) {                 //Worst Case: O(n)  ;   n -> len
        if(num[i] === '0')
            return true;
    }

    return false;
}

function main() {

    console.clear();
    let number = readlinesync.question("Enter the Number: ");
    if(isDuckNumber(number)) {
        console.log(`${number} is a Duck Number!`);
    }
    else {
        console.log(`${number} is not a Duck Number!`);
    }
    console.log();
    var choice = readlinesync.question("Want to check for another number?[Y/N]: ");
    if(choice === 'Y' || choice === 'y')
        main();
    else {
        console.log("Thanks! Bye!");
    }

}

main();