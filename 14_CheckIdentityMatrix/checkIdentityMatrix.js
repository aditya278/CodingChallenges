/* Write an algorithm to check if a given matrix is an identity matrix or not.
https://en.wikipedia.org/wiki/Identity_matrix
Output Format : Yes/No
*/
var readlineSync = require('readline-Sync');

function checkIdentityMatrix(matrix) {
    var result = "Yes";
    if(matrix.length !== matrix[0].length)
        result = "No";
    else {
        for(var i =0; i<matrix.length; i++) {
            for(var j = 0; j<matrix.length; j++) {
                if(i===j) {
                    if(matrix[i][j] !== 1) {
                        result = "No";
                        break;
                    }
                }
                else {
                    if(matrix[i][j] !== 0) {
                        result = "No";
                        break;
                    }
                }
            }
        }
    }
    return result;
}

function main() {
    var size = readlineSync.question("Enter the size of Matrix:(N) ");
    var matrix = [];
    for(var i=0; i<size; i++) {
        var row = [];
        console.log(`Enter values for row ${i+1}`);
        for(var j=0; j<size; j++) {
            row.push(parseInt(readlineSync.question(`For column ${j+1}: `)));
        }
        matrix.push(row);
    }
    
    console.log(checkIdentityMatrix(matrix));
}

main();