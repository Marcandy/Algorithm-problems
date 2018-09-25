// You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.
//
// Subsequent calls to the resulting function should have no effect (and should return undefined).

function once(fn) {
  var check = true; // setting closure parameter
  return function (...a) { // the return might have many args, so using spread operator
    if(check) {
      check = false;// making falsey in order to prevent any other return
      return fn(...a); // return the function with any possible argument
    }
  }
}

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
