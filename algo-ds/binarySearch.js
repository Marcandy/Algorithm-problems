/*
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index.
Analyze the time and space complexities of your solution and explain its correctness.
*/

function indexValueSearch(arr) {
    let start = 0,
        end = arr.length - 1

    while(start <= end) {
        // will be acting as i
        let mid = Math.floor((start + end) / 2);

        if(arr[mid] - mid < 0) {
            start = mid + 1
        } else if((arr[mid] - mid === 0) && (mid === 0 || arr[mid-1] - (mid-1) < 0)) {
            return mid
        } else {
            end = mid - 1
        }
    }
    return -1     
}

/*
To make sure we found the first element that satisfies arr[i] - i == 0, 
if in the binary search process we find an element that satisfies arr[i] - i == 0, 
we proceed to check if its the first element in the array, 
or that the element before it does not satisfy the condition. 
If not - we continue with the binary search, since this is not the first element that satisfies the condition.

*/