
Santa is learning programming. And what could be the first program, he wants to write? Yes, the "Hello world!" of Christmas: "Ho Ho Ho!". He wants to write a function ho(), which should have the following return values:

ho(); // should return "Ho!"
ho(ho()); // should return "Ho Ho!"
ho(ho(ho())); // should return "Ho Ho Ho!"
Unfortunately he couldn't find any tutorial, which explains, how he could implement that. Can you help him?

Rules:

each call of ho() must add a "Ho" to the string
the "Ho"'s must be separated by a space
at the end of the string, there must be an exclamation mark (!), without a space

// function ho(fun) {
//   // TODO
//   var str = ['!'];
//   if(arguments.length < 1) {
//     console.log('hello')
//     str.unshift('Ho')
//     return str.join('')
//   }

//   // function inv() {
//   //   str.unshift('Ho');
//   //   return str.join('')
//   // }

//   return
// }

// ho(ho());

function ho() {
  if(arguments.length > 0) { // if the argument tha will be passed in the funciton
    return 'Ho ' + arguments[0]; // it return a string with space plus any plus the first argument with will return 'Ho!' with exclamation
  }
  return 'Ho!';
}

ho(); // should return "Ho!"
ho(ho()); // should return "Ho Ho!"
