var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// Neither 21, nor 20, the result is undefined

// It’s because JavaScript initialization is not hoisted.

// (Why doesn’t it show the global value of 21? The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)


for (let i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000); //will 1234 properly because we used let/ var
                                                          // var will print out 5
}


console.log(1 < 2 < 3);
console.log(3 > 3 > 1);

// The first statement returns true which is as expected.

// The second returns false because of how the engine works regarding operator associativity for < and >.
// It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.


///-------------------------

// add the beginning of array without unshitf or at the end without push
let myArray = ['a', 'b', 'c', 'd'];

myArray = ['start', ...myArray, 'end'];