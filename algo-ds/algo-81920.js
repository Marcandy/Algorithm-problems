//===================================================== Leet - 66. Plus One =======================
/*
Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

*/

function plusOne(digits) {
    // loop backwards

    for(let i = digits.length - 1; i >= 0; i--) {
        if( digits[i] >= 9) {
            digits[i] = 0
        } else {
            digits[i]++;
            return digits;
        }
    }

    // now if we had increased a 9 to a 10 then
    // we add one a the beginning of the array
    return [1, ...digits];
}

// orginal attempt

var plusOne = function(digits) {
    /*
        we will loop over each array
        then increment the last index
    
    */
    
    if(digits[digits.length - 1] + 1 === 10) {
        digits[digits.length - 1] = 1;
         digits[digits.length] = 0;
    } else {
        digits[digits.length - 1] = digits[digits.length - 1] + 1;
    }
    
    return digits;
};