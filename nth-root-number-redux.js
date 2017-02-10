// Task
//
// Given two numbers x and n, calculate the nth root of x, e.g. r such that r^n = x. However, you're working with some kind of legacy API that doesn't contain a helpful function for this task (see end of the description).
//
// Examples
//
// root(4, 2);   // 2
// root(8, 3);   // 2
// root(256, 4); // 4
// root(9, 2);   // 3
//
// The power function of your language (e.g. Math.pow in JavaScript, ** in Haskell) has been disabled. Good luck.

var root = function(x, nth){

  function loop(x, y) {
    let r = 1;
    for (var i = 1; i <= y; i++) {
      r *= x;
    }
    return r;
  }

  r = 1;
  i = 1;

  while (r <= x){
    r = ( loop(i, nth));
    if(r === x) {
      return i;
    }
    i++;
  }

}

/// other way
var root = function(x, nth){
  return Math.exp(Math.log(x)/nth)
}
