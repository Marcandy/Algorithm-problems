// base case if num = 1 -- return1

//  check mobullus of 3 
// then modulus of 2
// keep a counter to increase
// have while loop

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'minimumStepsToOne' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER num as parameter.
 */

function minimumStepsToOne(num) {
    if (num === 1) {
        return 0;
    }
    let counter = 0;
    while(num > 1) {
        if (num % 3 === 0) {
            num = num / 3;
            counter++
        } else if (num % 2 === 0) {
            num = num / 2;
            counter++
        } else {
            num - 1
            counter++
        }

    }
    return counter
}

function main() {