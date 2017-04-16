// Have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3. 

function Division(num1,num2) {
  let small;
  num1 < num2 ? small = num1 : small = num2;
  // code goes here
  // first loop throguh both
  // divide by till we find the both
  let count = 0;
  for(let i = 1; i <= small; i++){
    if(num1 % i === 0 && num2 % i  === 0) {
      count = i;
    }
  }
  return count;
}

// This challenge requires you to find the greatest common divisor of two numbers. We'll solve this challenge using the famous Euclidean algorithm. It works by repeatedly taking the modulus of both numbers and replacing ing one the parameters with the new number.

function Division(num1, num2) {

  // setup variables
  var a = num1;
  var b = num2;
  var r;

  // keep using the mod function until a or b hits 0
  while (a > 0 && b > 0) {
    r = a % b;
    a = b;
    b = r;
  }

  // return the non-zero answer
  return (a === 0) ? b : a;

}
