/* 
Write an algorithm to rotate the bits of a given input number.
Bit Rotation​: A rotation (or circular shift) is an operation similar to shift except that the bits that fall off at one end are put back to the other end.
In left rotation, the bits that fall off at left end are put back at right end.In right rotation, the bits that fall off at right end are put back at left end.
Example :   Left Rotation of 16 by 2 is 64
            Right Rotation of 16 by 2 is 4
*/
var readlineSync = require("readline-sync");

const max_bits = 32

function leftRotate(n, b) {
    var A = n << b;
    var B = n >> (max_bits - b);
    return A | B;
}

function rightRotate(n, b) {
    var A = n >> b;
    var B = n << (max_bits - b);
    return A | B;
}

function main() {
    var n = readlineSync.question("Enter the number: ");
    var b = readlineSync.question("Shift it by?: ");
    var choice = ['Left Rotate', 'Right Rotate'];
    var c = readlineSync.keyInSelect(choice, "Select the operation: ");
    switch(c) {
        case 0: console.log(leftRotate(n, b));
                break;
        case 1: console.log(rightRotate(n, b));
                break;
        default: console.log("Wrong selection");
                break;
    }
}

main();