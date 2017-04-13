// This challenge requires you to calculate the run length encoding of a string. This compresses the string in the following way: wherever there are multiple repeating characters in a string, replace them with the character count along with the original character. For example: the string "aaabbc" results in an encoding of "3a2b1c" You can see that the count comes first followed by the character.

function RunLength(str) {

  // code goes here
  // first split it
  // if one character equal the next one, add it together
  // set two variable a letter, and ounter
  let arr = str.split('');
  let stri = '';
  let count = 1;
  for(let i = 0; i < arr.length; i++) {

      if(arr[i] == arr[i+1]) {
          count++
      }
      else {
          stri += count + arr[i]
          count = 1;
          console.log(stri)
      }
  }
  return stri;

}

//----------------------------------------------

function RunLength(str) {

  var i = 0;

  // final compressed string
  var rle = "";

  // loop through entire string building
  // the new compressed version
  while (i < str.length) {

    // get this current character
    var c = str[i];

    // the index of the next character
    var j = i + 1;

    // compressed version of the current character
    // and its count which starts at 1
    var compressed = [1, c];

    // if the next character is the same, add 1 to the count
    // e.g. eeed => [1, e] becomes [2, e] becomes [3, e] then stops
    while (j < str.length) {
      if (str[j] === c) { compressed[0] += 1; }
      else { break; }
      j++;
    }

    // add this compressed part of the string to the final
    // compressed version of the string
    rle += compressed.join('');

    // start the loop at the next character now
    i = j;

  }

  return rle;

}
