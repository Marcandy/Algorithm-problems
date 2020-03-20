/* Leecode #1047
Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

*/

// two index next to each other that are equal- removing them

// string turn to array
// split the array then repeat the same processs

function removeDup(S) {
    let sArr = S.split('')
  
    let i = 0;
    while(i < sArr.length) {
      console.log(i, 'before')
      if(sArr[i] === sArr[i+1]) { // i have to use two pointer
        sArr.splice(i, 2)
        i =  0
      } else {
        i++
      }
    }
  
    return sArr.join('')
  }
  
  var removeDuplicates = function(S) {
      S = S.split('');
      for (var i = 0; i<S.length; i++) {
          if(S[i] === S[i+1]) {
              S.splice(i,2);
              i -= 2;
              if(i < 0) i = -1;
          }
      }
      return S.join('');
  };
  
  
  function removeDup2(S) {
    let stack = [] //to keep track of duplicates and remove them
    for(let i = 0; i < S.length; i++) {
      if(S[i] === stack[stack.length - 1]) {
        stack.push(S[i])
      } else {
        stack.pop()
      }
    }
  
    return stack.join('')
  }
  
  
  console.log(removeDuplicates('abbaca'))
  
  //==========================================================================================================================


/*
Leet #997
the square of a number is just multiply it by itself
loop over it, square each number -- then sort
runtime would be linear if I use .sort

*/

var sortedSquares = function(A) { // simple using .sort()
    for(let i = 0; i < A.length; i++) {
        A[i] = A[i] * A[i]
    }
    console.log(A)
    return A.sort((a, b) => a -b);
};

var sortedSquares = function(A) { //two pointer by ceating an empty array
    let lenTrack = A.length -1;

    let resultArr = Array(lenTrack)

    let i = 0;
    let j = lenTrack

    while (i <= j) {

      if(A[i] ** 2 > A[j] ** 2) {
        resultArr[lenTrack] = A[i] **2
        i++ , lenTrack--
      } else {
        resultArr[lenTrack] = A[j] **2
        j--, lenTrack--
      }
    }
    return resultArr
};

// ================================================================================
