// Create a function that will allow you to pass in a string, with the ability to add to this with more function calls. When it is finally passed an empty argument return the full concatinated string of all arguments pased previously.

// For example: createMessage("Hello")("World!")("how")("are")("you?")();

// This will return the following: "Hello World! how are you?"

function createMessage(hello) {
  var str = arguments[0];
  var str2 = arguments[1];
  console.log(str2)
  console.log('createMessage')
  function add () {
    console.log('add')
    if(arguments.length === 0){
      return str;
    }
    str += ' ' + arguments[0];
    return add
  }
  return add

}
const message2 = (...args) => {
  console.log(args)
}
message2('hi','there')
createMessage('Hi', 'there')('dsd')('hefdsfs')();
// createMessage();

//---------------------------

function createMessage(s1) {
  return function(s2) {// returning a function for closure
    if (!s2) {//chkecing if additional parameter are passed
      return s1; // return immediately
    }
    return createMessage(s1 + ' ' + s2); // concat it but also call the function on itself
  }
}
