/*              Review

#print("Hello")
# Given two integers representing the numerator and denominator of a fraction, return the fraction 
#in string format.
# If the fractional part is repeating, enclose the repeating part in parentheses.

# Example 1:

# Input: numerator = 1, denominator = 2
# Output: "0.5"
# Example 2:

# Input: numerator = 2, denominator = 1
# Output: "2"
# Example 3:

# Input: numerator = 2, denominator = 3
# Output: "0.(6)"


#  fraction = numerator/denominator
#  Fraction need to look at if the 1/10th place is the same as 1/100th place is the same as 1/1000th place --> if they are the same 
# then its recurring 
#  I need to put the answer in string format with brackets if it is recurring

class solution:
  
  def is_recurring(self, string1):

    ## To find if any pattern repeats
    for length in range(1, len(string1)//2):
      # abcdef --> a , ab, abc 
      tmp  = string1[length:2*length]
      print(tmp)
      print(string1[:length])
      if(tmp in string1[:length]):
        return '('+tmp+')'
        
    return None
    
  def fraction(self, numerator, denominator):
    fract = numerator/denominator
    #print(fract)
    result = str(fract)
    # check if it is recurring 
    #print(type(result))
    rslt = self.is_recurring(result.split('.')[1])
    if(rslt is not None):
      result = '0.'+rslt
      
    return result 

if __name__ == '__main__':
  sol = solution()
  print(sol.fraction(1,2))
  print(sol.fraction(2, 1))
  print(sol.fraction(2, 3))
  print(sol.fraction(1, 7))


  */

  
  // Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// var _ = require('underscore');

// var evens = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 != 0);

// console.log("Evens");
// console.log(evens);

// // 1) We have to create new nodes
// // 2) We have to retain the same edges as the previous graph
// // 3)

// // initlize a visited hash
// // Traverse method
// // Start at the starting/given node = Node 1
// // Create a new node with value 1, add new nodes as neighbors equal to amount of current node neighbors
// // Move to next neighbor 

//   // if we have seen this node before, go to next neighbor
  
// function {
  
//   // 
//   new Node = somthing
  
// }


/*
Input: [[1,3],[3,0,1],[2],[2]]
Output: false
Explanation: We can't enter the room with number 2.
*/




// then loop through 
// keep the key in {}


function nextRoom(arr) {
    let cache = {};
    let startIndx = 0;
    while(startIdx < arr.length) {
      arr[i].map((elm)=> {
        cache[elm] = true
      })
      
      if (cache[i]) {
        startIndx++
      } else {
        return false
      } 
    }
    return true;
    
  }
  
  
  