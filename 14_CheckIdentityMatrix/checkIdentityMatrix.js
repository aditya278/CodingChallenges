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

console.log(checkIdentityMatrix([[1,0,0], [0,2,0], [0,0,1]]));