/*
Write an Algorithm to check the frequency(count) of odd numbers and even numbersin the given input matrix.
Note:
1.Input should ask for size of matrix i.e (MXN) M rows, N col
2.All matrix elements should be taken as command line inputs
*/

var readlineSync = require('readline-Sync');

function countOddAndEven(matrix) {
    var numRow = matrix.length;
    var numCol = matrix[0].length;

    var even = 0;
    var odd = 0;

    for(var i=0; i<numRow; i++) {
        for(var j=0; j<numCol; j++) {
            if(matrix[i][j] % 2 === 0)
                even++;
            else
                odd++;
        }
    }
    return [even,odd];
}

function main() {
    var N = readlineSync.question("Enter the number of Rows: ");
    var M = readlineSync.question("Enter the number of Columns: ");
    console.log("Enter the Matrix: ");
    var matrix = [];
    for(var i=0; i<N; i++) {
        var row = [];
        for(var j=0; j<M; j++) {
            var val = readlineSync.question(`Enter ${i}th row - ${j}th column: `);
            row.push(val);
        }
        matrix.push(row);
    }
    var result = countOddAndEven(matrix);
    console.log(`Total Even Numbers: ${result[0]}`);
    console.log(`Total Odd Numbers: ${result[1]}`);
}

main();