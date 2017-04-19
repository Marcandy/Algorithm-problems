// Have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.
//
// This challenge requires you to determine if string 1 can be rearranged to match string 2. This is a simple problem that we can solve by looping through the second string and checking if each character exists in the first string.

function StringScramble(str1, str2) {

  // loop through string 2
  for (var i = 0; i < str2.length; i++) {

    // check if each character also exists in string 1
    // if not, return false
    if (str1.indexOf(str2.charAt(i)) === -1) {
      return false;
    }

  }

  // return true if all characters exist in string 1
  return true;

}


//other
function StringScramble(str1,str2) {
  var result = [];
  var one = str1.split('');
  var two = str2.split('');
  for(var i=0;i<one.length;i++){
    for(var j=0;j<two.length;j++){
      if(one[i] === two[j]){
        result.push(one[i])
        two.splice(j,1);
      }
    }
  }
  return result.length === str2.length;
}

//other
function StringScramble(str1, str2){
  var arr1 = str1.split(''),
  arr2 = str2.split('');

  arr1.forEach(function(char){
    var index = arr2.indexOf(char);
    if(index > -1){
      arr2.splice(index, 1);
    }
  });
  return arr2.length === 0;
}
StringScramble("rkqodlw", "world");
