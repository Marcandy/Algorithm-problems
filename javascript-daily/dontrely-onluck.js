// It will compare your guess to a random number generated in Ruby by:
//
// (Kernel::rand() * 100 + 1).floor
// In Javascript/CoffeeScript by:
//
// Math.floor(Math.random() * 100 + 1)
// In Python by:
//
// randint(1,100)
// You can pass by relying on luck or skill but try not to rely on luck.
//
// "The power to define the situation is the ultimate power." - Jerry Rubin

Math.floor = () => 5; //control the situation lol
                      //meaning set math.floor or random to return a specific value
var guess = 5;

//other ----------------
var guess = 401;

Math.random = function(){
  return 4; // chosen by fair dice roll.
            // guaranteed to be random.
            // https://xkcd.com/221/
}
