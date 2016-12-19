In this kata, you have to complete the code to generate a sequence of random not repeated numbers between the minimum and maximum.

Complete:

The Randomizer(min, max) constructor creates a shuffled array of [min..max]
The next() method: returns the next random number
The sequence(size) method: returns an array of length size of random numbers. If no size is passed, returns the remaining random numbers.
For example:

  var r = new Randomizer(1,6);
  r.next(); // 3 (or any number between 1 and 6)
  r.sequence(2); // [1, 6] (two number between 1 and 6, except 3)
  r.sequence(); // [2, 4, 5] (the remaining numbers)

  // function Randomizer(min, max) {
//   var rNum  ;
//   this.next = function () {
//     rNum = Math.floor(Math.random() * (max - min )) + min;
//     return rNum
//   }

//   this.sequence = function(size) {
//     var nArr = [];
//     var nNum2;
//     for(var i = min; i <= max; i++){
//       nNum2 = (Math.floor(Math.random() * (max - min + 1)) + min);
//       if(nNum2 !== rNum && nArr.length <= size) {
//         nArr.push(nNum2);
//         min++;
//       }
//     }
//     return nArr;
//   }
// }

function Randomizer(min, max) {
  this.numbers = [];
  for(var i=min; i<=max; i++) {this.numbers.push(i);}
}

Randomizer.prototype.next = function() {
  if(this.numbers.length === 0) throw new Error('No more numbers');
  var max = this.numbers.length-1;
  var pos = Math.floor(Math.random() * (max + 1));
  return this.numbers.splice(pos, 1)[0];
};

Randomizer.prototype.sequence = function(size) {
  if(this.numbers.length == 0) throw new Error('No more numbers');
  if(size === undefined) {
    size = this.numbers.length;
  } else if(size > this.numbers.length) throw new Error('Too many numbers');
  var numbers = [];
  for(var i=0; i<size; i++) {
    numbers.push(this.next());
  }
  return numbers;
};
