const readlinesync = require('readline-sync');

function isDuckNumber(num) {
    const regex = /^\+?[1-9][0-9]*0+[0-9]*$/;
    if(num.match(regex))
        return true;
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