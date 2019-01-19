var rotate = function(nums, k) {
    while( k > 0) {
        let remv = nums.splice(nums.length -1);
        nums.unshift(remv[0]);
        k -= 1;
    }
    return nums
};

My initial solution was identical to #2 - Using Extra Array. I use a temp array to create a copy of the input array and insert original elements into new indexes, and then simply update original array. This solution has O(n) time complexity, O(n) space complexity:

let rotate = function(nums, k) {
    while (k >= nums.length) {
        k -= nums.length;
    }
    if (nums.length === 1 || k === 0) return;
    let temp = [];
    for (let left = 0, right = k; left < nums.length; left++, right++) {
        if (right >= nums.length) {
            right -= nums.length;
        }
        temp[right] = nums[left];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i];
    }
};

And here's my favorite JS-specific one-line solution, which just happens to be very efficient - it beats 98.5% of all submissions (and looks awesome!):

let rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length-k));
};
This does exactly what is required: cuts off nums.length elements at the end and reinserts them at the start. All while using built-in JavaScript functions. As a bonus, it has same execution speed as the faster methods above. The only downside - it cannot be recreated in other languages unless they have unshift and splice analogs. ... (spread) is required for quick and painless unshifting.

How it works:
splice removes a certain number of elements starting at provided index and modifies array length. Removed elements are returned. Array.prototype.splice() @ MDN web docs
unshift adds elements at the start of the array and moves the rest of elements forward. Array.prototype.unshift() @ MDN web docs
... is called Spread syntax @ MDN web docs. It is used to break down arrays (or strings) into separate elements. In this case it allows us to unshif elements we spliced from the array without concatenating arrays and iterating over nums to update it in place.