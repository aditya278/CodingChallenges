/*
Write an algorithm to remove duplicate elements in a given input array and print the total number of elements removed.
Sample Input : [1, 2, 2, 3, 4, 4, 4, 5, 5]
Sample OutPut :  [​1, 2, 3, 4, 5​]
Number of Elements Removed : 4
*/

var readlinesync = require('readline-sync');

function removeDuplicate(arr) {
    var len = arr.length;
    var map = new Map();
    var count = 0;

    for(var i=0; i<len; i++) {
        if(map.has(arr[i])) {
            count++;
        }
        else {
            map.set(arr[i], 1);
        }
    }

    return [[...map.keys()], count];
}

function main() {
    var len = readlinesync.question("Enter the length of array: ");
    var arr = [];
    console.log("Enter the array elements: ");
    for(var i=0; i<len; i++) {
        var data = readlinesync.question();
        arr.push(data);
    }
    var result = removeDuplicate(arr);
    console.log(`Output Array: ${result[0]}`);
    console.log(`Number of elements removed: ${result[1]}`);
}

main();