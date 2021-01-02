//=================================Leetcode 167 =================================


/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.


Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/


// initial attempt
var twoSum = function(numbers, target) {
    /*
        sorted in ascending order 
        index non-zero
        
        * add each in cache with index
        * loop through the arr
        * see if sum - currentIdx = num in the cache
        * if yes add return currentIdx + 1 and numIdx + ``
    */
    
    
    const cache = {};
    numbers.forEach((num, idx) => { // it might need to be a set
        cache[num] = idx
    });
    
    for( let i = 0; i < numbers.length; i++) {
        lookNum = target - numbers[i]
        if( cache[lookNum]) {
            numIdx = cache[lookNum];
            return i < cache[lookNum] ? [i+1, numIdx+1] : [numIdx+1, i+1] // check wich one is greater
        }
    }
    
};

// optimal solution

function twoSum (numbers, target) {
    let p1 = 0, p2 = numbers.length - 1;

    while(p1 < p2) {
        if(numbers[p1] + numbers[p2] == target) {
            return [p1+1, p2+1]
        } else if (numbers[p1] + numbers[p2] < target) {
            p1++;
        } else {
            p2--;
        }
    }

    
}