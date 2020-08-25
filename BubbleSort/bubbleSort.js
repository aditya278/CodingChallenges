var readlinesync = require('readline-sync');

function bubbleSort(arr, len) {
    var swapCount = 0;
    for(var i=0; i<len; i++) {
        for(var j=i+1; j<len; j++) {
            if(arr[j] > arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                swapCount++;
            }
        }
    }
    
    return [arr, swapCount];
}

function main() {
    var len = readlinesync.question("Enter lenght of the List: ");
    var arr = [];
    console.log("Enter the List: ");
    for(var i=0; i<len; i++) {
        arr.push(parseInt(readlinesync.question('')));
    }
    var result = bubbleSort(arr, len);
    console.log(`The Sorted list is: ${result[0]}`);
    console.log(`The Operation took ${result[1]} swaps`);
}

main();