var readlineSync = require('readline-Sync');

function main() {
    var num = readlineSync.question("Enter any Number: ");
    if(num%11 === 0) {
        console.log(`${num} is a multiple for 11. Terminating...`);
        return;
    }
    else {
        console.log(`${num} is not a multiple of 11. Try again..`);
        main();
    }
}

main();