// If you ever had to get the maxiumum number from an array then you are probably familiar with the good ole' Math.max.apply() function that takes a this argument and an array. A typical implementation would look like this:
//
// var myArray = [1, 42, 112, 32, 21]
// var max = Math.max.apply(null, myArray) //= 112
// That's too easy though. Let's replace the Math.max function with our own solution that uses recursion! Yay!
//
// Write a function called max that takes one argument, an array, and returns the maximum value of that array.
//
// Rules:
//
// You cannot use Math.max (duh!)
// You can only use const to declare any variables
// You cannot use any loops like for or while
// You cannot use any other argument than the one passed to the function
// If the array is empty then return -Infinity, just like with Math.max.apply(null, [])
// You cannot use any Array.prototype methods like forEach, map, filter, or reduce

//                   function max(array) {
//                     // Math.max.apply(), eat your heart out!
//
//                     const elem = array.length
//                     const i = 0;
//                     if(elem === 0) {
//                       return '-Infinity';
//                     }
//                     const big;
//                     return function loop() {
//                       if ( i < elem) {
//                         if(array[i] >  array[i+1]) {
//                         big = array[i];
//                       }
//                     }
// }



function max(array) {
  // Math.max.apply(), eat your heart out!
  const len = array.length
  if(len == 0) { // setting empty array condition
    return -Infinity;
  }

  function big(i, num) {// using recursion to do the job of a for loop, setting i, and another parameter to keep the biggest values
    if ( i > len) {// first i is great than sotp the recursion a return the bigeest number
      return num;
    }
    if(array[i] > num) {//a way to compare numbers in the array to find the
      num = array[i];//set the parameter to the current biggest number
    }
    return big(i + 1, num);//repeat the entire process till we reach our break condition
  }
  return big(0, 0);// initiate recursion with initial values
}

max([1,2,3,4,5]);

// other way -----------------------------
function max(array) {
    if (array.i === undefined) {
        array.i = 0; //setting parmeter
        array.big = 0;
    }

    if (array.length === 0) {
        return -Infinity; // empty condition
    } else if (array.i === array.length) {
        return array.big; // break recursion
    } else if (array[array.i] > array.big) {
        array.big = array[array.i];// this does the loop recursion setting the
                                  // setting the bigest number to a parameter
    }

    array.i++; // increament each time
    return max(array);
}
