/*
Leet 67)
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.


Example 1:

Input: a = "11", b = "1"
Output: "100"

Input: a = "1010", b = "1011"
Output: "10101"
*/


// the string is binary
// also a binary

// build method to transfer binary to normal values


/*
Number(str1, str2)

str1 + str2

turn it back to a binary with int method
int() then I toString


carry bit is left over digit or value that is beeing carried over
when adding things

* binary number is a number expressed in 2 numerical sytems usually zeros (0) and ones (1)

decimal number system, which is like the normal system of 
1 2 3 4 5 6 7 8 9 10  can be called base-10
while binary system of only two numbers
can be called base(2)

you can use parseInt to convert from base base(2) or base(10) in javascript
*/

function binaryStr(a, b) {
  
    let numB1 = Number(a);
    let numB2 = Number(b);
    
    // turn each num to non binary or just do the addition like that
    let sumB = numB1 + numB2;
    
    // turn back sumbB to int(sumB)
    
    sumB = toString(sumB);
    
    return sumB;
  }
  
  
  function addBinary(a, b) {
    let result  = '';
    let carry = 0;
    
    let lastIdxA = a.length - 1;
    let lastIdxB = b.length - 1;
  
    
    const getSum = (aNum, bNum, c) => {
      aNum = aNum ? parseInt(aNum) : undefined;
      bNum = bNum ? parseInt(bNum) : undefined;
      
      if(c === 1) {
        if(aNum && bNum) {
          carry = 1;
          return '1';
        } else {
          if(aNum || bNum) {
            carry = 1;
            return '0';
          } else {// if none is present
            carry = 0;
            return '1';
          }
        }
      } else {// carry is negative not 1
        if(aNum && bNum) {
          carry = 1;
          return '0';
        } else {
          if(aNum || bNum) {
            carry = 0;
            return '1';
          } else { // when both the carry and the number are negative
            carry = 0;
            return '0';
          }
        }
      }
    }
    
    // loop so we cycle each character
    
    while(lastIdxA >= 0 || lastIdxB >= 0) {
      result = getSum(a[lastIdxA], b[lastIdxB], carry) + result;
      lastIdxA--;
      lastIdxB--;
    }
    
    if(carry === 1) {
      result = carry + result // we add carry in front result
    }
    
    return result;
  };
    
  
  // other example
  
  var addBinary = function(a, b) {
    if(a == "" ) return b;
    if(b == "") return a;
    if(a.length > b.length) return addBinary(b,a);
    var strArr = [];
    var carry = "0";
    for(var i = 0; i < b.length; i++){
      var aChar = i < a.length ? a.charAt(a.length-1-i) : '0';
      var bChar = b.charAt(b.length-1-i);
      var curr;
      if(aChar != bChar){
        curr = carry == '1'? '0' :'1';
      }else{
        curr = carry;
        carry = aChar;
      }
      strArr.unshift(curr);
    }
    if(carry == '1') strArr.unshift(carry);
      return strArr.join("");
  }