// Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:

// const addOne = (a) => a + 1
// const multTwo = (b) => b * 2
// const addOneMultTwo = (c) => multTwo(addOne(c))

// addOneMultTwo(5) // returns 12
// Combining functions like this is called function composition. Functional programming libraries in Javascript such as Ramda include a generic compose function which does the heavy lifting of combining functions for you. So you could implement addOneMultTwo as follows:

// const addOneMultTwo = compose(multTwo, addOne)

// addOneMultTwo(5) // returns 12
// A simple implementation of compose, could work as follows:

// const compose = (f, g) => (a) => f(g(a))
// The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose function is that it only composes two functions. Your task is to write a compose function which can compose any number of functions together.

const compose = (...args) => (...args2) => {
  const props = [...args];
  const props2 = [...args2];

  if(props.length === 0) {return (x => x).apply(this, props2)}

  props.push(props2);
  props.reverse();

  return props.reduce( (a, b) => {
    return (typeof(a) !== 'number') ? b.apply(this, a): b(a)
  })
}



const addOne = (a) => a + 1
const multTwo = (b) => b * 2

const addOneMultTwo = compose(multTwo, addOne)

addOneMultTwo(5) // returns 12

//-----------------------------------------------

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var test = function test() {
  for (var _len = arguments.length, args2 = Array(_len), _key = 0; _key < _len; _key++) {
    args2[_key] = arguments[_key];
  }

  var props = [].concat(_toConsumableArray(args));
  var props2 = [].concat(args2);
  console.log(undefined);
  if (props.length === 0) {
    return function (x) {
      return x;
    }.apply(undefined, props2);
  }

  props.push(props2);
  props.reverse();

  return props.reduce(function (a, b) {
    return typeof a !== 'number' ? b.apply(undefined, a) : b(a);
  });
};

var compose = function compose() {
  return test;
};
