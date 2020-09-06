/* 
Write an Algorithm to take an input String ‘S’ with length ‘N’, split the string into two strings based on even and odd indexes while left padding the sub string with ‘000’ and right padding the substring with ‘111’.
Sample Input 1 ​: code.in
Sample Output 1 : 
            000cd.n111
            000oei111
Sample Input 2 ​:Hello there
Sample Output 2 :
            000Hlotee111
            000el hr111
*/

var readlineSync = require('readline-sync');

function splitPad(S) {
    var N = S.length;
    var even = '000';
    var odd = '000';

    for(var i=0; i<N; i++) {
        if(i%2 === 0)
            even += S[i];
        else
            odd += S[i];
    }

    even += '111';
    odd += '111';

    console.log(even);
    console.log(odd);
}

function main() {
    var again = true;
    while(again) {
        var S = readlineSync.question("Enter Input String: ");
        splitPad(S);
        var c = readlineSync.question("Continue?[Y/N]: ");
        if(c === 'N' || c ==='n')
            again = false; 
    }
}

main();