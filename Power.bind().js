// You probably know about Function.prototype.bind method in JavaScript. It returns a copy of the original function but this function will always be called in the specified context. The problem is that you can't rebind another context any more.
//
// var func = function () {
//   return this.prop;
// };
// var obj1 = {prop: 1},
//     obj2 = {prop: 2};
//
// func = func.bind(obj1);
// func(); // Will produce 1
//
// func = func.bind(obj2);
// func(); // Will also produce 1 :(
// Your task is override the native Function.prototype.bind method by a new one that will allow you to rebind context multiple times. In this kata you don't need to worry about currying, testing function will never get params.

Function.prototype.bind = function (ctx) {
  // savinf original function context
  let initial = this;
  return function() {
    if( this !== global) {
      return initial.call(this)
    } else {
      return initial.call( ctx);
    }
  }
};
// other wayFunction.prototype.bind = function (ctx) {
  var self = this;
  var bound = function () { return self.apply(ctx, [].slice.call(arguments, 1)) };
  bound.bind = function (ctx) { return self.bind(ctx) };
  return bound;
};
