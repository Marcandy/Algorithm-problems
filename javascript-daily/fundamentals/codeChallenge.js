Questions -
1. Describe how you would implement : photo web app that supports the following functionality:
Upload, delete, view a photo, create albums.
Duration - 30mins
Expectations -
Architectural diagram Notes



// 2. Implement a stack of integers that supports the following methods:
// push (input: an integer, output: nothing)
// pop (input: nothing, output: an integer) getMinimumValue (input: nothing, output: an integer)


/**
 * initialize your data structure here.
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);

  var min = this.getMin();
  if (min !== undefined) {
    this.min.push(Math.min(x, min));
  } else {
    this.min.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.min.length > 0) {
    return this.min[this.min.length - 1];
  }
};