function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc

  // the correctly sorted array should be returned.
  return array;
}

function removeZeroString(array) {
//  var n=0
//  console.log(array.length);
//  var strConcat=''
//  console.log(array);
//  const lengther = array.length;
//  function itsTrue(value) {
//    if(value===0)n++
//    return value!==0
//  }
//  //var returned = array.filter(itsTrue)
//  for (var i = 0; i < n; i++) {
//    strConcat+='0 '
//  }
//  var test = returned.join(' ')
//  test+=" "+strConcat
//  var arr=[]
//  console.log(test);
//  var t=test.length;
//  var z=test.length-1;
//
// var start = test.length
//
//  var j = 0
 // while(t!==-1){
 //   var insert = ''
 //
 //   // while(test.charAt(start)===' '){
 //   //   console.log('hi',test.charAt(t));
 //   //   start--
 //   // }
 //
 //     // console.log(test.charAt(t));
 //     start--
 //   t--
 // }
 //
//  function removeZeroString(array) {
// var str = array.join(' ')
// console.log(str);
// let count = 0;
// str=str.replace('7','2')
// console.log(str.charAt(0));
// str.charAt(0)=str.charAt(1)
// for (var i = 0; i < str.length; i++) {
//   if(str.charAt(i)!==' ' && str.charAt(i)==0){
//     count++
//     str = str.replace('0', charAt(i + 1))
//     console.log(str);
//     // while (str.charAt(m)!==' ') {
//     //   console.log(str.charAt(i)+str.charAt(m));
//     //   m++
//     // }
//   }
// }
// return str.split(' ')
//
// }
// console.log(removeZeroString([7,2,3,0,4,6,'0',0,13,0,78,0,0,19,14])
// }
// console.log(removeZeroString([7,2,3,0,4,6,0,0,13,0,78,0,0,19,14]));

function removeZeros(array) {
  let len = arry.length;
  let str = '';
  let index = 0; // setting index to keep trak of total loop

  for(var i = 0; i < len; i++) {
    if(array[i] === 0) {
      str += '0';
    }
    else if(array[i] === '0') {
      str += '1';
    }
    else {
      array[index] = array[i]; //setting the array index to the current loop elem
      index++;
    }
  }

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      array[index] = 0;
      index++;
    }
    else {
      array[index] = '0';
      index++;
    }
  }

  return array;

}
