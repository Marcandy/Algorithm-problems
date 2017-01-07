Array.prototype.toString = function () {
  // add a variable with beginning string
  // push everyting in the Array
  var add = '['

  this.map(function(elm) {
    return add + '[';
  })
}

Array.prototype.toString = function () {
  var  str = "["
  for(var i = 0; i < this.length; i++) {
    if(typeof this[i] === "string") {
      str += "'" + this[i] + "'";
    } else {
      str += this[i].toString();
    }
    if(i < this[i].length) {
      str += ",";
    }
  }
  str += "]";
  return str;
}

Array.prototype.toString = function () {
  var  str = [];

  for (var i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      str.push(this[i].toString());
    }else if(typeof this[i] == 'string') {
      str.push("'" + this[i] + "'")
    }
    else {
      str.push(this[i]);
    }
  }
  return '['+str.join(',')+']';

}
