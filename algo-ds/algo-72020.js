/*
===================================Leet 162 Find Peek=============
A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

*/

function findPeekElement() {
     // the array is not sorted though 
    // I still can do a binary search on it 
    // so I can search both left and rihght

    // can we just traverse both left and right
    let left = 0, right = nums.length - 1;

    while(left < right) {
        let mid = (left + right) / 2;
        if(nums[mid] > nums[mid + 1] ) {
            right = mid;
        } else {
            left = mid + 1;
        }
        return left;
    }
};

/*
In case of simple Binary Search, we work on a sorted sequence of numbers and try to find out the required number by reducing the search space at every step.
In this case, we use a modification of this simple Binary Search to our advantage. 
We start off by finding the middle element, midmid from the given numsnums array. 
If this element happens to be lying in a descending sequence of numbers. or a local falling slope(found by comparing nums[i]nums[i] to its right neighbour), 
it means that the peak will always lie towards the left of this element. 
Thus, we reduce the search space to the left of midmid(including itself) and perform the same process on left subarray.

*/


// ===========================================================










// ================================================== ITC- Sorting&Seaching: I want to learn big words ===========================

function findRotationPoint(words) { // inital approch
    // unknow word --> i+
    // middle would be end
    // middle+1 woud be start
    
    
    // mid = (start + end) / 2
    // if (word[mid] === 'a' 
    // || words[mid -1] === a ||  words[mid -1] === a )
    
    // we can also check the alphabet value of the first index
    // if it's p -- we will know that it's on the right side
    
    let left = 0, right = words.length - 1;
    
    // comparing string with one another is already alphabetical checked
    while(left < right) {
      let mid = Math.floor( (left + right) / 2 ) 
      console.log( 'test', words[mid])
      if(words[mid][0] === 'a') {
        return mid;
      } else {
        if(words[mid] <= words[left]) {
          right = mid;
        } else {
          left = mid;
        }
      }
      
      if (left + 1 === right) {
        break
      }
    }
    
    return right;
    console.log( 'bgdss' > 'afdsfd', 'test', words[0])
  }


 function findRotationPoint2(words) {
    const firstWord = words[0];

    let leftIndex = 0;
    let rightIndex = words.length - 1;

    while (leftIndex < rightIndex) {
        // guess mid 
        const guessMid = Math.floor(leftIndex + ((rightIndex - leftIndex) / 2));

        if (words[guessMid] >= firstWord) {
            // we go right 
            // if the guess word comes aphabetically after the firstword
            leftIndex = guessMid
        } else {
            // we go left
            rightIndex = guessMid
        }
        
        if(leftIndex + 1 === rightIndex) {
            // Between floor and ceiling is where we flipped to the beginning
            // so ceiling is alphabetically first
            // if they have converged 
            // that means the rightIndex is alphabetically first
           break; 
        }
    }

    return rightIndex;
}

// ======================================= BBSWE SEARCH 2D MATRIX =================================

/*
Given a 2D matrix (which is m x n) find the given element with value value. If the matrix contains the value return true, otherwise return false.

Variant 1:
In this variant, all values in the matrix are increasing in row-major order.

This means that:
Each row is sorted
The last element in row i is <= the first element in row i+1
By virtue of the previous two properties, the columns are sorted

Example:
Input:
value = 6
[
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11]
]

Output: true


Variant 2:
In this variant:
Each row is sorted
Each column is sorted
There is no guarantee that the last element in row i is <= the first element in row i+1

Example:
Input:
value = 20
[
  [1, 4, 7, 11]
  [8, 9, 10, 20]
  [11, 12, 17, 30]
]

Output: true

*/


function search(matrix, target) {
    if( matrix.length === 0) {
        return false;
    }

    let totalRows = matrix.length; // horizontal
    let totalColums = matrix[0].length; // vertical

     /*
     * The left and right pointer to our search. We imagine a visualization of a 1D
     * array and will use our mapping system to convert these indices into concrete
     * locations in the 2D matrix.
     * 
     * The the last position in the matrix if we consider it as array will be rows *
     * cols - 1 indices.
     * 
     * Same as an array...an array's last index is arr.length - 1.
     */

     let left  = 0;
     let right = totalRows * totalColums - 1;

     while( left <= right) {
        let middle = left + (right - left) / 2;

        let middleElementValue = matrix[middle / totalColums][middle % totalColums];

        if (middleElementValue == target) {
            return true;
        } else if (middleElementValue < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
     }
     return false;
} 

/*
Variant 2:
In this variant:
Each row is sorted
Each column is sorted
There is no guarantee that the last element in row i is <= the first element in row i+1
Example:
Input:
value = 20
[
  [1, 4, 7, 11]
  [8, 9, 10, 20]
  [11, 12, 17, 30]
]
Output: true
*/

const search = (matrix, target) => {
    if (matrix.length == 0) {
        return false;
    }

    let col = matrix[0].length - 1; // we starting at the right most corner
                                    // where you start searching matter
                                    // the right corner give you flexibilty
                                    // to go left backward to decrease value
                                    // while to go down to increase value
                                    // thereby reducing our search area
    let row = 0; 

    while(col >= 0 && row <= matrix.length - 1) {
       /*
      Cases:
        target == item : We found the item. Return true.
        target < item : Target must be to our left...go down in value
        target > item : Target must be to our below...go up in value
        */
       if(target == matrix[row][col]) {
           return true;
       } else if ( target < matrix[row][col]) {
           col--; // we backward left to a different column
       } else if ( target < matrix[row][col]) {
           row++; // we go downward to a different row
                    // since the column are in ascending order
                    // that means we guaranteed to get a higher value
       }
    }

    return false;
}

// ===================================================Pramp - Flatten Dictionary=======================================================

function flattenDictionary(dict) {
    let flatDictionary = {};

    function flattenHelper(initialKey, dict, flatDictionary) {
        // recursive
        // if key is empty it will take prev obj[i - 1]
        // key2.c.d --> directly key value

        for( key in dict) {
            if(typeof(dict[key]) === 'string' || 'number') { // check if it is not an object
                if(initialKey === null || initialKey === "") {
                    flatDictionary[key] = dict[key];
                } else {
                    flatDictionary[initialKey + '.' + key] = dict[key];
                }
            } else {
                if(initialKey === null || initialKey === "") {
                    flattenHelper(key, dict[key], flatDictionary)
                } else {
                    flattenHelper(initialKey + "." + key, dict[key], flatDictionary)
                }
            }
        }
    }
  
    flattenHelper("", dict, flatDictionary)
    return flatDictionary;
  }

  // second solution

  function flattenDictionary(dict):
    flatDictionary = {}
    flattenDictionaryHelper("", dict, flatDictionary)

    return flatDictionary


function flattenDictionaryHelper(initialKey, dict, flatDictionary):
    for (key : dict.keyset()):
        value = dict.get(key)

        if (!isDictionary(value)): # the value is of a primitive type
            if (initialKey == null || initialKey == ""):
                flatDictionary.put(key, value)
            else:
                flatDictionary.put(initialKey + "." + key, value)
        else:
            if (initialKey == null || initialKey == "")
                flattenDictionaryHelper(key, value, flatDictionary)
            else:
                flattenDictionaryHelper(initialKey + "." + key, value, flatDictionary)

// =====================================Leet 459 - repeated substring ===========================

/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

*/
function repeatedSubPattern(str) {
    if (str.length === 0 || str.length === 1) return false;
   
    let median = Math.floor(str.length / 2);
    for(let i = 1; i <= median; i++) { // we loop up until the middle
        let subString = str.slice(0, i);
        let multiple = Math.floor(str.length / subString.length) // the whole string diviced by sub
        if(str.length % i === 0 && subString.repeat(multiple) === str ) { // we multiply the sub part to be equal to the whole str
            return true
        }
    }
    return false
}

//-- other solution

class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:        
        n = len(s)
        if n < 2:
            return False
        if n == 2:
            return s[0] == s[1]
            
        for i in range(int(n**0.5), 0, -1):
            if n % i == 0:
                divisors = [i]
                if i != 1:
                    divisors.append(n // i)
                for l in divisors:
                    first_hash = curr_hash = hash(s[:l])
                    start = l
                    while start != n and curr_hash == first_hash:
                        curr_hash = hash(s[start:start + l])
                        start += l
                    if start == n and curr_hash == first_hash:
                        return True
                
        return False

/*
Complexity Analysis

Time: O(n log(n)) * O(logn)
Space: O(logn)
*/

// ====================================== Review ==========================

// Backtracking Sum of Subsets:  https://www.youtube.com/watch?v=kyLxTdsT8ws


// * how do you start adding those array properties?
// * how you remove them properly so you only remove the k least
// will the heep structure be maintained

//=================================================================
/*



List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
at each depth (e.g., if you have a tree with depth 0, you'll have 0 linked lists).

          2
         / \
        1   3
       / \  /
      0   4 5
2 
1 -> 3
0 -> 4

levels = [[2]]
queue = [1,3]
temp = [2]
init level to store levels
init a queue and push root node
loop while queue length
    track length of queue
    init temp array
    shift off length node
      push current node value into temp
      for each node check for left and right nodes
        if they exist push to queue
    push temp array into levels

 */




const treeLevelToLinkedList = (root) => {
    const levels = [];
    const queue = [root];
    while (queue.length) {
      const temp = [];
      let length = queue.length;
      for (let i = 0; i < length; i++) {
        let current = queue.shift();
        temp.push(current.val);
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
      levels.push(temp);
    }
    console.log(levels)
  }
  
  /*
  ArrayList<LinkedList<TreeNode» createLevelLinkedList(TreeNode root) {
  2 ArrayList<LinkedList<TreeNode» result = new ArrayList<LinkedList<TreeNode»();
  3 1* "Visit" the root *1
  4 LinkedList<TreeNode> current = new LinkedList<TreeNode>();
  5 if (root != nUll) {
  6 current.add(root);
  7 }
  CrackingTheCodinglnterview.com 16th Edition 243
  Solutions to Chapter 4 I Trees and Graphs
  8
  9 while (current.size() > e) {
     result.add(current)j II Add previous level
  11 LinkedList<TreeNode> parents = currentj II Go to next level
    current = new LinkedList<TreeNode>()j
   for (TreeNode parent : parents) {
    1* Visit the children *1
  15 if (parent. left != nUll) {
      current.add(parent.left)j
  17 }
  18 if (parent. right != nUll) {
      current.add(parent.right)j
  2e }
  21 }
  22 }
  23 return resultj
  24 }
  
  */
  
  function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  
  
  const root = new TreeNode(2);
  const left = new TreeNode(1);

  const right = new TreeNode(3);
  root.left = left;
  root.right = right;
  left.left = new TreeNode(0);
  left.right = new TreeNode(4);
  right.left = new TreeNode(5)
  treeLevelToLinkedList(root)
  
  //=====================================================LeetCode 199 ==================================
  /*
Given a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1  0          <---
 /   \
2     3     1    <---
 \     \
  5     4   2    <---
 /
6

as looping both children
right.righ ==> 1
right.lft ==> 2
left.right == 3
left.left == 4

*/

function rightSideView() {
    let result = [];
    
    function dfs(root, level) {
        if(!root) return;
        if(!result[level]) result.push(root.val); // because of this condition we need to 
                                                  // recurse right first

        dfs(root.right, level + 1); // increase level in each recurser
        dfs(root.left, level + 1);
    }
    dfs(root, 0);
    return result;
}

// other way with left side first 

var rightSideView = function(root) { // make sure to review DFS to understand why the node.left is first here
                                    // recurse order matter here
    if (!root) return [];
    let res = [];
    pre(root, 0);
    return res;
    
    function pre(node, h) {
        if (!node) return;
        res[h] = node.val;
        pre(node.left, h+1);
        pre(node.right, h+1);
    }
};