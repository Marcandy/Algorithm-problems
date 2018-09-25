// The objective is to obtain the various sets of integers that have a difference of 2 from a given array of integers. The result array should be sorted in ascending order of values.
//
// So for example for the array of integers
//
// [1,2,3,4] should return [[1,3],[2,4]]
//
// [4,1,2,3] should also return [[1,3],[2,4]]
//
// [1,23,3,4,7] should return [[1,3]]
//
// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

function twosDifference(input){
 //Enter your solution here
 //map through and check and check if one elm  plus 2 is equal to any other elm
 // if so add them together within a nested array
 let arr = [];
  input.sort(function(a, b) {//need to sort from smllest to biggest
    return a - b;
  })
 for(let i = 0; i < input.length; i++) {
   for(let j = i+1; j < input.length; j++) {
     if(input[j] - input[i] == 2) {
       arr.push([input[i], input[j]]);
        // input.splice(j, 1)
     }
   }
 }
 return arr;
}
