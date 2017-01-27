// SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. Your task is to shorten the message to 160 characters, starting from end, by replacing spaces with camelCase, as much as necessary.
//
// For example:
//
// Original message (169 chars):
//
// No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.
//
// Shortened message (160 chars):
//
// No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.

var shortener = function(message) {
  // insert code here
  let arr = message.split('');
  let arrl = arr.length;

  if(arrl < 161) return arr.join('');

  for(var i = arr.length; i > 0; i--) {
  if( arr[i] === ' ') {
    arr.splice(i, 2, arr[i+1].toUpperCase());
    arrl = arr.length
    if(arrl < 161) {break}
  }
  }
  return arr.join('');
}
