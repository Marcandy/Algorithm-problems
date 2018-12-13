// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)


const productExceptSelf = xs => {
    cost res = [];

    xs.reduce((acc, x, i) => ( res.push(acc), acc * x), 1);
    xs.reduceRight((acc, x, i) => (( res[i] *= acc), acc * x), 1)
    return res
}

let output = [];
    
for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) { // make a double of same index
        // and continue togther
        if (j === i) {// and multiply each index
            continue;
        } else {
            product *= nums[j];
        }
    }
    output.push(product);
}
return output;
};