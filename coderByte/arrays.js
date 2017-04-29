// 1) Create an array of numbers and save the array to a variable
// (2) Iterate through the array using a loop
// (3) Create a function that will multiply each number in the array by two
// (4) Pass each number in the array to this function
// (5) Save the original numbers and the doubled results as key-value pairs in an object

function doubling(num) {
    return num * 2;
}

var arr = [ 1, 3, 5, 5, 89];

var obj = {};

for (var i = 0; i < arr.length; i++) {
    var val = doubling(num);
    
    var key = arr[i].toString();

    obj[key] = val;
}

obj;