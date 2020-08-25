/* Write an algorithm  to find given a matrix, check whether it’s magic square or not.
(HINT:A Magic square is whose sum of elements diagonally,vertically,horizontally areequal)
Note : Input Matrix will be given to NxN elements. 2X2, 3X3, 4X4 etc., 
N should betaken from the command line.*/

var readlinesync = require('readline-sync');

function IsItAMagicMatrix(matrix) {
    var l_diag=0, r_diag = 0;
    var vertical=0, horizontal = 0;
    for(var i=0; i<matrix.length; i++) {
        for(var j=0; j<matrix.length; j++) {
            var cellVal = matrix[i][j];
            if(i===j)
                l_diag += cellVal;
            if((i+j+1) === matrix.length)
                r_diag += cellVal;
            if(i === Math.floor(matrix.length/2))
                horizontal += cellVal;
            if(j === Math.floor(matrix.length/2))
                vertical += cellVal;
        }
    }
    console.log(l_diag, r_diag, horizontal, vertical);
    if(l_diag === r_diag && horizontal === vertical && l_diag === vertical)
        return true;
    else   
        return false;
}

function main() {
    var size = readlinesync.question("Enter the size of Matrix:(N) ");
    var matrix = [];
    for(var i=0; i<size; i++) {
        var row = [];
        console.log(`Enter values for row ${i+1}`);
        for(var j=0; j<size; j++) {
            row.push(parseInt(readlinesync.question('')));
        }
        matrix.push(row);
    }
    
    if(IsItAMagicMatrix(matrix)) 
        console.log("The Matrix is a Magic Matrix!");
    else
        console.log("The Matrix is not a Magic Matrix!");
}

main();