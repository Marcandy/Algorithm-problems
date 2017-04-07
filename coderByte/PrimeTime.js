Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.

function PrimeTime(num) {

  // all numbers less than 2 are not primes
  if (num < 2) { return false; }

  // loop from 2 to num and check if num is divisible
  // by any of these numbers, if so, then it is not a prime
  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false; }
  }

  // return true if the loop finished and num was
  // not divisible evenly by any number
  return true;

}

PrimeTime(109);

function PrimeTime(num) {

  // all numbers less than 2 are not primes
  if (num < 2) { return false; }

  // more efficient loop
  for (var i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) { return false; }
  }

  // return true if the loop finished and num was
  // not divisible evenly by any number
  return true;

}

PrimeTime(109);                             
