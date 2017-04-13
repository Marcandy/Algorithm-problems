function PrimeMover(num) {

  // negative numbers cannot be primes
  if (num < 1) { return 'invalid'; }

  // first prime number is 2, the only even prime
  if (num === 1) { return 2; }

  // if greater than 2, start count at 1
  var count = 1;
  var n = 3;

  // loop until we get the numth prime
  while (count != num) {

    // check if n is divisible by each number in between to see if it is a prime
    for (var i = 2; i < n; i++) {

      // if we reach the end we know this number is a prime because it was
      // not divisible by any numbers so increase the count by 1
      if (i === n-1) {
        count++;
        n++;
        break;
      }

      // if n is divisible by some number, then it is not a prime
      // and we simply move on to the next number
      else if (n % i === 0) {
        n++;
        break;
      }

    }

  }

  return n-1;

}

PrimeMover(250);

//----------------------------------------

// our sieve function which will return a list of primes
// up to the limit argument passed
function sieve(limit) {

  var bools = [];
  var primes = [];

  // generate a list of booleans all set to true initially
  // the array is indexed from 2 to limit representing all numbers
  // e.g. [true, true, true, true] = [2, 3, 4, 5]
  for (var i = 1; i < limit; i++) { bools.push(true); }

  // loop from 2 to limit setting the composite numbers to false
  // we start from 2 because we know 1 is not a prime number
  for (var i = 2; i < limit; i++) {
    if (bools[i-2]) {
      for (var j = i*2; j <= limit; j += i) {
        bools[j-2] = false;
      }
    }
  }

  // now generate the list of primes only where
  // there is a true value in the bools array
  for (var p = 0; p < bools.length; p++) {
    if (bools[p]) { primes.push(p+2); }
  }

  return primes;

}

function PrimeMover(num) {

  // we use the prime number approximation which is
  // p(n) ~ n * log(n) where p(n) is the nth prime number
  var approx = num * Math.log2(num);

  // generate a list of primes such that the numth prime is within the list
  var prime_list = sieve(approx);

  // check to make sure our prime is within the list
  // if not then generate a new sieve that is larger
  // using a different approximation
  if (prime_list[num-1] !== undefined) {
    return prime_list[num-1];
  } else {
    approx = num * (Math.log2(num) + Math.log2(Math.log2(num)));
    prime_list = sieve(approx);
    return prime_list[num];
  }

}

PrimeMover(902);       
