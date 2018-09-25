// You are given a Point constructor function.
//
// Instead of using the constructor function, we would like to construct our Points through a Point.create function with the same arguments as the function constructor. The usage of new Point(x, y) should be forbidden and raise an exception.
//
// Please refactor the code to achieve this: the newly created Points should only expose two attributes (x and y) and they should still be Point instances.

function Point(x, y) {
  // this.x = x;
  // this.y = y;
  throw new Error("Error");

}
Point.create= function(x, y) {
  let point = Object.create(Point.prototype);
  point.x = x;
  point.y = y;
  return point;
}
