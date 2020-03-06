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