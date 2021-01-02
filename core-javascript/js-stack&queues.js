/*
what do you know about stack and queues?

stacks are LIFO: last in first out 
queues are FIFO: first in first out

you can use stack to make a queue while vice versa
In javascript arrays can be used for both stack and queues

*/

const oneStack = [2, 3, 4, 7]; 
oneStack.push(9, 26) // add it at the end can push multiple push(4, 6)
oneStack[oneStack.length] = 11 // aslo adds to the of the array/stack
// console.log(oneStack);

oneStack.pop(); // remove last elemnent
console.log(oneStack);
oneStack.length = oneStack.length - 1 //  you delete the last element inplace by setting 
                                      // the length lower than it is
console.log(oneStack.length - 1 in oneStack); // check if there is a last element in the array

delete oneStack[oneStack.length - 1] // will delete elemnt though leave and empty element in the array
                                    // it become a sparse array
console.log(oneStack)

/*
 push and pop happen in place it is your togo methods for stack
*/


//=============Queue==============

/*
use shift() and push() as you togo methods to implement a queue in javascript 
shift remove the first element while  push() add element at the end of the array

we could use unshift() instead to element at the beginning of the array, though
would be less efficient when we combine the process with shift()
-> everytime we use shift() we move all element in the array up to fill the gap
-> while everytime we use unshift() we have to move all element down to make space

that is using shift() and unshift() is less combination thant shift() and push()
                                    -> push just add element at the end of the queue/array

*/


const oneQueue = [4, 7];
console.log(oneQueue.shift());// remove the first element returns it

console.log(oneQueue.push(39, 6), 'push and returns the length of the array');

oneQueue.shift();
console.log(oneQueue);


