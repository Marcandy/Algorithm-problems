/*
===================================Leet 162 Find Peek=============
A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

*/

function findPeekElement() {
     // even though the array is not sorted 
    // I still can do a binary search on it 
    // so I can search both left and rihght
    
    // or sorting it could help with quicksort
    // do we have to sort it ?
    // can we just traverse both left and right
    let left = 0, right = nums.length - 1;

    while(left < right) {
        let mid = (left + right) / 2;
        if(nums[mid] > nums[mid + 1] ) {
            right = mid;
        } else {
            left = mid + 1;
        }
        return left;
    }
};

/*
In case of simple Binary Search, we work on a sorted sequence of numbers and try to find out the required number by reducing the search space at every step.
In this case, we use a modification of this simple Binary Search to our advantage. 
We start off by finding the middle element, midmid from the given numsnums array. 
If this element happens to be lying in a descending sequence of numbers. or a local falling slope(found by comparing nums[i]nums[i] to its right neighbour), 
it means that the peak will always lie towards the left of this element. 
Thus, we reduce the search space to the left of midmid(including itself) and perform the same process on left subarray.

*/


// ===========================================================










// ================================================== ITC- Sorting&Seaching: I want to learn big words ===========================

function findRotationPoint(words) { // inital approch
    // unknow word --> i+
    // middle would be end
    // middle+1 woud be start
    
    
    // mid = (start + end) / 2
    // if (word[mid] === 'a' 
    // || words[mid -1] === a ||  words[mid -1] === a )
    
    // we can also check the alphabet value of the first index
    // if it's p -- we will know that it's on the right side
    
    let left = 0, right = words.length - 1;
    
    // comparing string with one another is already alphabetical checked
    while(left < right) {
      let mid = Math.floor( (left + right) / 2 ) 
      console.log( 'test', words[mid])
      if(words[mid][0] === 'a') {
        return mid;
      } else {
        if(words[mid] <= words[left]) {
          right = mid;
        } else {
          left = mid;
        }
      }
      
      if (left + 1 === right) {
        break
      }
    }
    
    return right;
    console.log( 'bgdss' > 'afdsfd', 'test', words[0])
  }


 function findRotationPoint2(words) {
    const firstWord = words[0];

    let leftIndex = 0;
    let rightIndex = words.length - 1;

    while (leftIndex < rightIndex) {
        // guess mid 
        const guessMid = Math.floor(leftIndex + ((rightIndex - leftIndex) / 2));

        if (words[guessMid] >= firstWord) {
            // we go right 
            // if the guess word comes aphabetically after the firstword
            leftIndex = guessMid
        } else {
            // we go left
            rightIndex = guessMid
        }
        
        if(leftIndex + 1 === rightIndex) {
            // Between floor and ceiling is where we flipped to the beginning
            // so ceiling is alphabetically first
            // if they have converged 
            // that means the rightIndex is alphabetically first
           break; 
        }
    }

    return rightIndex;
}