/*
Write an algorithm to print the below pattern. 
Note : Number of lines should be taken as input.
Sample Input : 5
Sample Output:
                1
                21
                321
                4321
                54321
*/

var readlineSync = require('readline-Sync');

function main() {
    var num = readlineSync.question("Enter the number of lines: ");
    for(var i=1; i<=num; i++) {
        var str = '';
        for(var j=i; j>0; j--) {
            str += j;
        }
        console.log(str);
    }
}

main();