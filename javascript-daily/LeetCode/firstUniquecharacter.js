function uniq(s) {
    let arrObj = {};
    //need to split
    for(let i = 0; i < s.length; i++) {
        if(arrObj[s[i]]) {
            arrObj[s[i]] += 1;
        } else {
            arrObj[s[i]] = 1;
        }
    }
  
  console.log(arrObj);
    
    for( idx in arrObj) {
        if (arrObj[idx] === 1) {
          console.log(idx)
            return idx
        }
    }
    return -1;
};


////
states is an array of 26 states (represented by an integer) corresponding to each possible character.
If a state is -1, the character has not been encountered yet.
If a state is -2, the character has been encountered more than once.
Otherwise, the state represents the index at which the character was first encountered.

order is an array containing character values.

A character value is calculated by the ascii value of the character minus 97 (ascii value of 'a'), such that the value of 'a' is 0, the value of 'b' is 1, etc.

At the end of the string traversal, order will contain in chronological order the value for every new character encountered. The values are unique because any character is only added on its first encounter during the string traversal.

The string traversal is as follows:

for (character, index) in string:
    if state of character is "not found":
        set state of character to be index
        add character to encounters
    else:
        set state of character to be "duplicate"
The return value will be the index of the first character in order for which the state is not "not found" or "duplicate", or -1 if none of the characters meet this requirement.

/**
 * @param {string} s
 * @return {number}
 */

let firstUniqChar = s => {
    let states = Array(26).fill(-1)
    let order = []
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i) - 97
        
        if (states[char] === -1) {
            order.push(char)
            states[char] = i
        } else {
            states[char] = -2
        }
    }
    
    for (let i = 0; i < order.length; i++) {
        let char = order[i]
        let index = states[char]
        if (index > -1) return index
    }
    
    return -1
};

var firstUniqChar = function(s) {
    for(i=0;i<s.length;i++){
        if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
           return i;
       } 
    }
    return -1;
 };
 OR hash map method
 
  var firstUniqChar = function(s) 
     var map=new Map();
     for(i=0;i<s.length;i++){
          if(map.has(s[i])){
              map.set(s[i],2);
          }
          else{
              map.set(s[i],1);
          }
      }
 
     for(i=0;i<s.length;i++){
         if(map.has(s[i]) && map.get(s[i])===1){
             return i;
         }
     }
     return -1;
  } ;

  var firstUniqChar = function(s) {
    for(var i=0;i<s.length;i++){
        if(s.indexOf(s.charAt(i))===s.lastIndexOf(s.charAt(i))){
            return i;
        }
    }
    return -1;
};

var firstUniqChar = function(s) {
    let letterHash = {}
    for (let i = 0; i < s.length; i++) {
        if (letterHash[s[i]] || letterHash[s[i]] === 0) {
            letterHash[s[i]] = -1
        } else {
            letterHash[s[i]] = i
        }
    }
        let result = Object.values(letterHash).filter(val => val >= 0)
        if (result.length === 0) {
            return -1
        } else {
            return result[0]
        }
}

uniq([2, 3, 5, 2, 8, 9]);