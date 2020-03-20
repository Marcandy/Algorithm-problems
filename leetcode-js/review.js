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
          
  //=================================Leet 242=========================
  
  
  /*
  Given two strings s and t , write a function to determine if t is an anagram of s.
  
  Input: s = "anagram", t = "nagaram"
  Output: true
  
  Input: s = "rat", t = "car"
  Output: fale
  */
  
  
  // saving of first string into object or hash table
  // I will looping over the second string
  // if one character is not present into the hashtable it false
  // if we finish the loop then we know it is an anagram
  
  
  function anagram(s, t) {
     if(s.length !== t.length) return false
      let char = {};
    
      for(let i = 0; i < s.length; i++) {
          char[s[i]] ? char[s[i]]++ : char[s[i]] = 1
      }
    
      for(let j = 0; j < t.length; j++) { // one letter might appear more that twice
                                          // that is why we count them 
                                          // instead of just setting the key to true or false
          if(!char[t[j]]) {
              return false
          }
          char[t[j]]--
      }
      return true;
  }
  
  // other example
  
  var isAnagram = function(s, t) {
      if (t.length !== s.length) return false;
      const counts = {};
      for (let c of s) {
          counts[c] = (counts[c] || 0) + 1;
      }
      for (let c of t) {
          if (!counts[c]) return false;
          counts[c]--;
      }
      return true;
  };
  
  
  
  //=================================EPI 7.2 (Need to review LinkedList=================================
  
  /*
  Write a program which takes a singly linked list L and two integers s and f as arguments, and
  reverses the order of the nodes from the sth node to fth node, inclusive. The numbering begins at
  1., i.e., the head node is the first node. Do not allocate additional nodes.
  Hlnfr Focus on the successor fields which have to be updated.
  
  
  
  [2, 3, 5, 6, 8, 1] first node in 1st
  [2, 1, 5, 3, 8, 3]
  
  if l = 2 and f = 4
  
  root --> next 
  with counter to identify when we at L node 
  
  analyze how many we need to goo in order to reach the f node
  set the l node as temp
  node --> next 3  --> next 4
  
  set f to temp2
  
  f = lTemp // does that mean we lose the Ftemp.next
  I also need to save ftemp.next
  
  fnext = ftemp.next
  f = ltemp
  f.next = fnext
  l = ftemp
  l.next = lNext
  
  why do you need to know the preview of F
  
  
  or do reverse linkedList by seperating the two gaps normally
  the putting back in the whole
  by keeping two pointer the beginning
  and the end
  
  l++ while f--
  then cycle the the list again to recheck the value
  or keep a stash of each previous node
  in that first list traverse I shoul keep a list of the previous
  
  node -- have value == and next

  https://leetcode.com/problems/reverse-linked-list-ii/discuss/30666/Simple-Java-solution-with-clear-explanation
  https://www.youtube.com/watch?v=wk8-_M-2fzI
  */

function reverseList(listNode, start, finish) {

  let dummy_head = {next: listNode} // create a dummy node to mark the head of this list
  
  let pre = dummy_head
  for(let i = 1; i < start; i++) {
    pre = pre.next // head is only before the range of the start node
  }

  let cur = pre.next// that come after the range of the start node

  
  for(let i = 0; i <(finish - start); i++) {
    let NEXT = cur.next

    cur.next = NEXT.next
    NEXT.next = pre.next
    pre.next = NEXT
  }

  //dummy_head = subblist_head
  return dummy_head.next
}
  
  
  //======================================8.2==========================================
  
  /*
  my initial as I'm looping through this rpn string
  
  I will compute each 3 digit opereationg and add each to a stack 
  (in case of javascript, I can add it to the end of an array)
  
  then after the end of the loop I will add everything else in the array to a toal
  
  */
  
  
  
  
  
  
  
//===================================Leet 215 =====================================
  
/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
-------------------------------------

so if the array is sorted like 
[1, 2, 2, 3, 3, 4, 5, 5, 6] // so even though 4 is the 5th index  it still return it 

my intuition is loop through the array, add each index value to an object 

once that is done, push it 

*/
  
function large(arr, k) {
  let cache = {}

  for(let i = 0; i < arr.length; i++) {
    cache[arr[i]] = arr[i]
  }

  return cache[k]
}



// =============================Leecode parenteses problem========================================

var generateParenthesis = function(n) {
  // consider each parentheses as 
   // as index in an array
  //and then randomize them
   
   // look for pattern -
   //it seems the combination is by two
   // it is by putting pair of parentheses i side each other 
   
   let string = ''
   // first create the string
   for(let i = 0; i < n ; i++) {
       string += '()'
       console.log(string)
   }
   let totalResult = []
   totalResult.push(string)

   // loop over turn each parentheses inward
};



function generateParenthesis2(n) {
 const res = [];

 function go(l, r, s) {  // l: left remaining, r: right remaining
   if (l > r) return;  // The number of '(' should be always >= ')'

   if (l === 0 && r === 0) {
     res.push(s);
     return;
   }
   console.log(res)
   if (l > 0) go(l - 1, r, s + '(');
   if (r > 0) go(l, r - 1, s + ')');
 }

 go(n, n, '');
 return res;
}
//generateParenthesis(4)
generateParenthesis2(5)
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  