// Write a function called multiFilter which receives a variable number of filter functions. The function should return a function that receives one element (a compound filter function).
//
// That is, if we have two functions:
//
// function isEven(el){
//   return el % 2 === 0;
// }
// and
//
// function isGTten(el){
//   return el > 10;
// }
// then
//
// [1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten));
// should return [12,20,22]


var multiFilter = function(...args){
	return function(elm){
    return args.every(function (fn) {// applying function as way to filter
                                    // each arguments
      return fn(elm);
    })
  }; // change it for your code
};
