/*
Check if a given number is a DUCK NUMBER or NOT!

Note: A Duck number is a number which has atleast one non-leading 0 present in it.
Ex: 12101021 - Is a Duck number
00121 - Is NOT a Duck Number.
*/

const readlinesync = require('readline-sync');

function isDuckNumber(num) {

    let len = num.length;
    var i = 0;
    while(i<len && num[i] === '0') {
        i++;
    }

    for(; i<len; i++) {
        if(num[i] === '0')
            return true;
    }

    return false;
}

function main() {

    let number = readlinesync.question("Enter the Number: ");
    if(isDuckNumber(number)) {
        console.log(`${number} is a Duck Number!`);
    }
    else {
        console.log(`${number} is not a Duck Number!`);
    }

}

main();