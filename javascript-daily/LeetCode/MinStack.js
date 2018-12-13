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