Array.prototype.reduce = function(process, initial) {

  // how to access an array which invokes a function
  // they give us the actual function
  // we just have to set the initial to the first parm of the function
  // and call that function each time on the second parm which represent each elem in the array
  // need to be able to access elem of te array that func with 'this'
  var total;

    if(initial) {
      total = initial;
    } else {
      total = this.shift(); // had to remove the first element in order to avoid
                            // duplicates in strings
    }

    for(var i = 0; i < this.length; i++) {
      total = process(total, this[i]);
    }
    return total;
}
