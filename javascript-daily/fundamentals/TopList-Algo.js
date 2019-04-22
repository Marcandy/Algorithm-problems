/* • Algorithm are a way of solving a problem - it's like a method or function.


• Binary search is like searching for an array of boxes by starting in the middle 
    ○ If you are over the set target you leap backwords by setting setting the new middle
    ○ If you are lower, you leap forward by setting the new middle
    ○ By keeping track of three pointer - low, mid, high

• Bubble sort: A sorting collecction by continuosly swapping a higher value with a lesser one - causing the higher value to bubble up

• Selection sort is the process of continuosly selecting the lowest value and swapping it ot one end
    ○ Every time you encounter a higher value, you swap its contents over to the right.
*/

Frequency Hash
We could also try to create a hashtable or map to speed up the search or lookup time to find a match.But this would lead to a O(N) amount of auxiliary space.
The use of pointers in different location help reduce time complexity



// Memoization ---

function coinsum(coins, total) {
    let cache = {};
    function solve(target, index) {
        let key = target + '_' + index;
        if (key in cache) {
            return cache[key];
        }
        if (target === 0) {
            return 1;
        }
        if (target < 0) {
            return 0;
        }
        let result = 0;
        for (let i = index; i < coins.length; i++) {
            result += solve(target - coins[i], i);
        }
        cache[key] = result;
        return result;
    }
    return solve(total, 0);
}



console.log(coinsum([2, 5, 3, 6], 10));



// ===========================================
/*
All trees are graph -



	• Pre order depht traversal -- all the way the left

In javascript === let interview know that you understand the trade off of a queue class 

*/

// =======================================

/*
 Recursion is when a function call upon a smaller version of it self 
    If can be slower than stacks or iteration methods\
    § It's good to use when ther many branching cases and deeply nested structures
    § Or many loops
○ Things to keep in track are the : 
    § Base case the breakpoint of recursion
    § Case in which methods calls itself
    § Scped varialble - accessed through parent scope
    
    

The helper method spes
• Instantiate variables: track state and results
• Return Results
• Helper Method
    § Instantiate = invoke
• Base case
• Recursive case
    § Functi nthFibonacci(n) {
        Let fibonaci = [0, 1];
        
        Function searchFib(I) {
            If(I > n) { return;}
            
            Fibonacci[i] = fibonacci[I -2] + fibonacci[I -1];
            SearchFib(i+1);
        
        
        
        
        }



    searchFib(2);
}

• Bottom up  approach for recursion -
    § Typically start at adefined value
    § Build upon itself to reach input case
    § Define a path to get input case
    § Usually single recursion

• Topdown approach:

    Function nthFibonacci(n) {
    
    Var result;
    
    Function searchFib(index) {
        If( index < 2) {
            Return indez;
        } else {
            searchFib(index - 2) + searchFib(index-1);
        }
      }
    Result = searchFib(n);
    Return result 

Ways- to do better than rescurson
    Iterative solutions - looping structure
    Create own task 
Dynamic programming
*/

//==================

/*
	• Is a combination of many problems
		○ Overlapping sub problems
		○ Optimal sub structure

Time complexity and drastically recuded with dynamic programming

	• Memoization 
		○ Recursion with a cache
		○ Top-down approach
		○ Process of using cache to save small subset problem



	• Lineer time O(n)


	• Tabulation 
		○ Understand where the starting case is 
		○ See if the smallest can be used to solve the next level up
Need to have a path to reach the input case

*/

// System Design
https://github.com/donnemartin/system-design-primer

https://www.pluralsight.com/guides/tictactoe-with-native-javascript-es6?clickid=1RHS9wxCXxyJRKuxTp3WVUkrUkgSE%3ATWmXI00s0&irgwc=1&mpid=29332&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=29332&aid=7010a000001xAKZAA2&clickid=0Yhzrw185xyJUB90GBQcExbTUklzuDyBQSAF1E0&irgwc=1&mpid=29332&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=29332&aid=7010a000001xAKZAA2


// 2n+3 is  O(n) complexity because  we drop coefficient and low over terms


// 	• Space complexity include both the input size and the auxiliry space

// 	• If it it recursion it does not always mean you can  dynamic programming


// 	• O(n^2) is quadratic time 


// O(log(n)) logarithmic time is the only complexity less than linear time


// package whatever; // don't place package name!
/*
Given an array of integers, find the pivot index where the sum of the items
to the left equal to the sum of the items to the right.

Input: [1, 2, 1, 6, 3, 1] => Output: 3
Input: [7, 2, 7] => Output: ­1
Input: [1, 2, 1, 4, 2, 1, 1] => Output: 3
Input: [­1, 3, ­3, 2] => Output: -1
Input: [­1, 2, 3, 4,­ 2, 1] => Output:
************ Constraints ****************
1. Time Complexity : O(n)
2. Space Complexity : O(1)
3. No ipivot index : -1
4. []: -1
5. More than two pivot index : return first index
************** Diagram ******************
left pointer (l) --> Start of array : 0
right pointer (r) ---> End of array : arr.length - 1
leftSum: 0
rightSum: 0
Example 1:
leftSum: 4
rightSum: 4
lr
1, 2, 1, 6, 3, 1
p
Example 2:
leftSum: 7
rightSum: 7
lr
7, 2, 7
p
Example 3:
leftSum: 4
rightSum: 5
l r
1, 3, ­ 3, 2

**************** Pseudocode **************
Initilise 
leftPointer = 0
rightPoint = lastElement
leftSum = rightSum = 0;
while (l < r){
leftSum+= l;
rightSum+=l;
if(leftSum == rightSum){
l++;
r--;
if(l == r)
return l;
else
} 
}


*/
import java.io.*;
class MyCode {
    public static void main(String[] args) {
        System.out.println("Hello Java");
        int[] array = { 1, 2, 1, 6, 3, 1};
        System.out.println(findPivot(array));
    }
    public static int findPivot(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        int leftSum = 0;
        int rightSum = 0;
        while (left <= right) {
            leftSum += left;
            rightSum += right;
            if (leftSum == rightSum) {
                left++;
                right--;
                if (left == right)
                    return left;
                else {
                    left--;
                    right++;
                }
            }
            left++;
            right--;
        }
        return -1;
    }
}

/*
* Quicksort
*
* Prompt: Given an unsorted array of integers, return the array
* sorted using quicksort.
*
* Input: input {Array}
* Output: {Array}
*
* Example: [3,9,1,4,7] --> [1,3,4,7,9]
*
* P Code:
*
* sort: input(arr, start, endpoint)
* pivot point: arr[0]
* loop through the array
* keep track of two pointers i(arr[1]) and j(arr[1])
* if value at i is less than pivot point than swap with j
* at the end swap pivot with arr[j]
*
*
* for each subarray call sort
*
* 0 1 2 3 4 5
*
* 0, 5
*
* 0, 2
* 0, 1
* 1, 2
*
*
* p == pivot. Currently being sorted.
* i == iterator.
* j == slow iterator. a wall for the divide between elements greater or less than pivot element
*
* p
* i
* [1,3,9,4,7]
* j
*
*
* |
* [1,3,9,4,7]
*
* [1] [9,4,7]
*
* p
* i
* [1]
* j
*
* p
* i
* [9,4,7] => [7,4,9] (faking this as more unsorted)
* j
*
*
* |
* [7,4,9]
* [ ] []



*/
//==========================
function printForward(node) {
	// YOUR WORK HERE
	while(node != null) {
	console.log(node.value);
	node = node.next;
	} 
	}
	/**
	* Print the value of each node backwards from the tail to the input node
	* using recursion.
	*
	* Input: node {ListNode}
	* Output: {undefined}
	*
	* Example: (1) --> (5) --> (7) --> (10)
	*
	* 10
	* 7
	* 5
	* 1
	* 
	* Base Case
	* if (node == null) return
	* printBackward(node.next)
	* print node.val
	*/
	// Time Complexity:
	// Auxiliary Space Complexity:
	function printBackward(node) {
	// YOUR WORK HERE
	if (node == null) return;
	printBackward(node.next);
	console.log(node.value);
	}
	/**
	* Given a node in a linked list, reverse the order of the nodes in that
	* list.
	*
	* Input: node {ListNode}
	* Output: {ListNode}
	*
	* Example: (1) --> (5) --> (7) --> (10) -> undefined
	*
	* (10) --> (7) --> (5) --> (1) -> undefined
	*/
	/*
	*
	undefined -- (1) --> (5) <-- (7) -- (10) --> undefined
	*
	
	
	recursiveStack = [null, (1), (5), (7)] <-
	
	*
	recursiveStack = [[null, (1)], [(1), (5)], [(5), (7)], , ]
	[(7), (10)]
	
	previous = null
	current = (1)
	current.next = previous
	(1), (5 next of 5 poit to 1, 1.next will point to null, head
	(5), (7) next of 7 point to 5 , , head
	(7), (10) next of 10 points to 7, , head
	(10), null head (10)
	10 --> 7 --> 5 -->1
	
	node = node.next
	temp = node.next.next
	1. Instantiate (state, results)
	2. Return results
	3. Helper (1. Instantiate 2. Invoke)
	4. Base case
	5. Recursive
	helper should return head
	helper (current.next, current)
	
	
	*/
	// Time Complexity:(1)
	// Auxiliary Space Complexity:
	function reverse(node) {
	let previous = null;
	let current = node;
	let result;
	// YOUR WORK HERE
	function helper(current, previous) {
	if(current == null){
	return previous;
	}
	current.next = previous;
	let temp = helper(current.next, current);
	return temp;
	}
	helper(current, previous);
	return result;
	}
	/**
	* Create a method which swaps the first occurance of the locations of two
	* nodes in the linked list.
	*
	* Input: head {ListNode},
	* Input: a {Integer}
	* Input: b {Integer}
	* Output: {ListNode}
	*
	* Example:
	* let head = generateList([1, 5, 7, 10]);
	* head = swap(head, 5, 10);
	*
	* (1) --> (5) --> (7) --> (10)
	* Head
	*
	* (1) --> (10) --> (7) --> (5)
	* Head
	*/
	---------------------------------
	
	# Time Complexity:
	# Auxiliary Space Complexity:
	def print_forward(node):
	current = node
	while current is not None:
	print(current.value)
	current = current.next 
	
	# 1b. Prints the value of each node backwards from the tail to the input node
	# using recursion.
	#
	# Input: node {ListNode}
	# Output: {None}
	#
	# Example: (1) --> (5) --> (7) --> (10)
	#
	# 10
	# 7
	# 5
	# 1
	#
	# Time Complexity:
	# Auxiliary Space Complexity:
	def print_backward(node):
	if node is None: 
	return 
	print_backward(node.next)
	print(node.value)
	
	# 1c. Given a node in a linked list, reverse the order of the nodes in that
	# list.
	#
	# Input: node {ListNode}
	# Output: {ListNode}
	#
	# Example: (1) --> (5) --> (7) --> (10)
	#
	# (10) --> (7) --> (5) --> (1)
	#
	# Time Complexity:
	# Auxiliary Space Complexity:
	def reverse(node):
	current = node 
	previous = None 
	while current is not None:
	next = current.next 
	current.next = previous 
	previous = current 
	current = next 
	return previous 
	
	
	# 1d. Create a method which swaps the first occurance of the locations of two
	# nodes in the linked list.
	#
	# Input: head {ListNode}
	# Input: a {Integer}
	# Input: b {Integer}
	# Output: {ListNode}
	#
	# Example:
	# head = generate_list([1, 5, 7, 10])
	# head = swap(head, 5, 10)
	#
	# (1) --> (5) --> (7) --> (10)
	# Head A B 
	# prevA prevB
	# (1) --> (10) --> (7) --> (5) --> None 
	# 
	#
	# (1) --> (10) --> (7) --> (5)
	# Head
	#
	# Time Complexity:
	# Auxiliary Space Complexity:
	def swap(head, a, b):
	def locate(head, value):
	prev = None
	current = head 
	while current:
	if current.value == value:
	return [prev, current]
	prev = current 
	current = current.next 
	return [None, None]
	prevA, currA = locate(head, a)
	prevB, currB = locate(head, b)
	if not currA or not currB:
	return head 
	# if prevA is not None, then do this. 
	if prevA: prevA.next = currB 
	if prevB: prevB.next = currA 
	currA.next, currB.next = currB.next, currA.next
	# if prevA is None, then do this. 
	if not prevA: return currB 
	if not prevB: return currA 
	return head 

	#
	# Extra Credit 1:
	#
	# Given a ListNode, returns true if the ListNode is in a circular linked list,
	# and false if the ListNode is in a linked list that terminates.
	#
	def is_circular(node):
	tortoise, hare = node, node 
	if node is None: return False 
	while hare is not None and hare.next is not None:
	hare = hare.next.next 
	if tortoise == hare: return True 
	tortoise = tortoise.next 
return False 


//=================

// • Decrease and counquer - and binary search are like searching for word in a dictionary
// ○ We start in the middle then check wether that word is within range




// ○ Start with the full range of the array (0 or array length - 1)
// ○ Check the value at the middle of that range
// ○ If mid matches target we return the mid index
// ○ If mid is larger than target we can eliminate the right half
// ○ If mid is less than target we can eliminate the left half 
// ○ Adjust the range depending  on which half is active 
// ○ Repeat step 2 -5 until a match is found
// ○ If range is empty return -1

// In conjunction with a while loop

• A list of Linear data struture are:
○ LinkedList
○ Array,
○ Queue
○ Stack
• No linear data strutue are like 
○ Trees and graphs


A node contain a value and a reference


• Doubly-linkedList is linkedList with a previous value --


Stacks are good when you want to add item i


// ========================= Merge Sort =====

• Function mergeSortedArrays(arr1, arr2) {
    Let result = [];
    Let I = 0;
    Let j = 0;
    
    Const total Elements = arr1.length + arr2.length;
    
    While( I + j < totalElements) {
        If ( j >= arr2.length || (I < arr1.length && arr1[i] < arr[i] < arr2[j] )) {
            Result.push(arr1[i]);
            i++;
        } else {
            Result.push(arr2[j]);
            J++;
        
        }
    }
}

// var _ = require('underscore');
var evens = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 != 0);
class comment{
var reply
}
/*
class Person {
constructor(currentFloor, destinationFloor) {
this.currentFloor = currentFloor;
this.destinationFloor = destinationFloor;
}

pressElavatorButton(destinationNumber) {
elevator.goFloor(destinationNumber);
}
}
class Elevatorcontrol {
//elevator starts at floor 0
list reqests = [];
constructor(initialFloor) {
this.initialFloor = initialFloor;
this.listFloor = [1, 2, 3, 4, 5];
this.currentFloor= this.listFloor[0];
}
sendRequest(updown){
}
goFloor(destinationNumber) {
this.currentFloor = this.listFloor[destinationNumber]
}
}

let elevator = new Elevatorcontrol();
let p[] = new Person[10];

elevator.goFloor()


// 
const findSum = (arr, val) => {
let start = 0;
let end = arr.length - 1;
while (start < end) {
let sum = arr[start] + arr[end];
if (sum > val) {
end -= 1;
} else if (sum < val) {
start += 1;
} else {
return true;
};
};
return false;
};


// Insertion Sort ===
function distinct(head) { // ithe head just an array
let currentList = {};
let current, previous;
// creating a loop to traverse
while(head.next !== null) {
current = head.next;
if(!currentList[current.val]) {
currentList[current.val] = true;
} else {
// trying to delete node
previous = current
current.next = null;
}
previous = current;
current = current.next;
}
return head;
}



Bubble sort is stable ---- it leaves equal value in original order




Insertion Sort ---===== 
	• https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg



// Seperate Numbers: https://medium.com/codebrace/separate-the-numbers-aa5e58a8bf34
/*
My approach here is Brute Force, simply check for the number for the different number of digits sequence starting
from 1 to half of length of the string. If at any point the condition failed which is that next number must
be consecutive we will break the loop and check for the next digits value.
*/
//A FUNCTION TO CHECK LEADING ZERO
// LOGIC IS SIMPLE NUMBER OF DIGIT IN THE NUMBER FORMED MUST BE EQUAL TO THE NUMBER OF THE DIGIT WE ARE RUNNING LOOP FOR
/*
not leading zero -
cannot reorder the string

split the string into caracter --
  -- loop to compare index following
    -- how do i know if it a two digit number or more
    
    -- trying to avoid multiple loop for performance
    
    have multiple loop where we check index
      soon if fails of beeing not than the previous index
      we increment our character count
*/
function queries(str) {
	let splitStr = str.split('');
	let i = 0;
	let doubleSpace = '';
	while ( i <= splitStr.length && doubleSpace.length < splitStr.length ) { // put or condition if we need to increment chara
	  // we could splice the number to be added instead of checking by index
	  if((Number(splitStr[i]) + 1)  === Number(splitStr[i+1])) {
		i++
	  } else if(!splitStr[i +1]) {
		doubleSpace += '';
		splitStr = str.split(doubleSpace);
		i=0;
	  }
	  console.log(doubleSpace);
	}
	if (!splitStr[i + 1]) {
	   return 'YES' + splitStr[0];
	  } else {
		return 'No';
	}
  }
  
  
  queries('1234');

bool checkLeadingZero(ll next_num,ll temp_dig)
{
 ll count=0;
 while(next_num) {
 count++;
 next_num/=10;
 }
 return count==temp_dig;
}
int main()
{
 ll q; cin>>q;
 while(q--)
 {
 string s; cin>>s;
 ll len = s.length();
 bool flag = false;
 ll firstNum=0;
 for(ll dig=1;dig<=len/2;dig++) // loop for each length
 {
 ll max =0; //setting max for each digit number
 for(ll i=1;i<=dig;i++) // CALCULATING MAX
 max = max*10+9;
 ll temp_dig = dig; //setting temp digit as we have to increase the digit if we found that number reaches to max
firstNum = 0;
 for(ll i=0;i<dig;i++)
 firstNum = firstNum*10 + (s[i]-'0'); // forming the number as input is the string
if(checkLeadingZero(firstNum,dig)==false)
 {
 flag=false;
 break;
 }
 ll j=dig;
 ll currentNum = firstNum; //setting current
while(1)
 {
 if(j == len){
 flag = true;
 break;
 }
 if(currentNum == max) temp_dig++;
 ll next_num =0;
 if(j+temp_dig > len)
 break;
 for(int i=j;i<j+temp_dig;i++) // forming next number 
 next_num = next_num*10 + (s[i]-'0');
if(next_num - currentNum!=1)
 break;
 else
 {
 currentNum=next_num;
 j = j+temp_dig;
 }
 }
 if(flag==true) break;
 }
 if(flag==true) cout<<"YES "<<firstNum<<endl;
 else cout<<"NO"<<endl;
 }
}

// javascript --- seperate Numbers
const isContinous = (rest, next) => {
    let nextS = next.toString();
    let i = nextS.length;
    while(i <= rest.length) {
        if(!rest.startsWith(nextS)) {
            return false;
        } else {
            next = next + 1;
            rest = rest.substring(i);
            nextS = next.toString();
            i = nextS.length;
        }
    }
    if(rest.length !== 0) {
        return false;
    }
    return true;
}

const processData = input => {
    const lines = input.split('\n');

    t: for(let i = 1; i < lines.length; i++) {
        const s = lines[i];
        for(let j = 1; j <= parseInt(s.length / 2); j++) {
            const head = s.substring(0, j);
            const headVal = parseInt(head);
            const next = headVal + 1;
            const rest = s.substring(j);
            if(isContinous(rest, next)) {
                console.log("YES " + head);
                continue t;
            }
        }
        console.log("NO");
    }

};


// https://julienrenaux.fr/2017/02/06/hackerrank-efficient-algorithm-solutions-in-javascript/

public static void main(String[] args) {
	Scanner sc = new Scanner(System.in);

	int q = sc.nextInt();
	for (int tc = 0; tc < q; tc++) {
		String s = sc.next();

		long result = solve(s);
		System.out.println(result > 0 ? "YES " + result : "NO");
	}

	sc.close();
}

static long solve(String s) {
	if (s.charAt(0) == '0') {
		return -1;
	}

	for (int length = 1; length * 2 <= s.length(); length++) {
		long firstNumber = Long.parseLong(s.substring(0, length));

		StringBuilder sequence = new StringBuilder();
		long number = firstNumber;
		while (sequence.length() < s.length()) {
			sequence.append(number);
			number++;
		}
		if (sequence.toString().equals(s)) {
			return firstNumber;
		}
	}
	return -1;
}


// https://medium.com/@popflorin1705/javascript-coding-challenge-5-ae54f5fc23d5


// =======================================

# Reverse Anti Clockwise Spiral Traversal of a Binary Tree
# Given a binary tree, the task is to print the nodes of the tree in a reverse anti-clockwise spiral manner.

# Examples:

# Input : 
#           1
#          /  \
#         2    3
#        / \    \
#       4   5    6
#          /    / \
#         7    8   9
# Output : 7 8 9 1 4 5 6 3 2

# Input :
#            20
#          /   \
#         8     22
#       /   \  /   \
#      5     3 4    25
#           / \
#          10  14
         
# Output : 10 14 20 5 3 4 25 22 8


# Time: O(N)

'''

Approach:
1. do level order in tree [[1], [2,3], [4,5,6], [7,8,9]]
2. two pointer start, end, put it to output alternatively

# Input : 
#           1
#          /  \
#         2    3
#        / \    \
#       4   5    6
#          /    / \
#         7    8   9
  
        |
[[1], [2,3], [4,5,6], [7,8,9]]
                |
Output = [7,8,9, 1, 4, 5, 6, 3, 2]
'''

# Input : 
#           1
#          /  \
#         2    3
#        / \    \
#       4   5    6
#          /    / \
#         7    8   9
# Output : 7 8 9 1 4 5 6 3 2

def get_clockwise_order(tree):
    result = [[tree.data]] # 1
    queue = [tree]
    level_node = list()
    while queue:
        current_node = queue.pop(0) # root:1 , 2, 3
        
        if current_node.left:
            level_node.append(current_node.left) #2, 4
        if current_node.right:
            level_node.append(current_node.right) #3, 5, 6
        if len(queue) == 0:
            result.append(level_node.copy()) #[[1], [2,3], [4,5,6], [7,8,9]]
            queue, level_node = level_node, queue
    # result = [[1], [2,3], [4,5,6], [7,8,9]]
    print(result)
    start = 0
    end = len(result)-1
    result_clockwise = list()
    toggle = True
    while start < end:
        if toggle:
            
            result_clockwise.append(result[end]) #[7,8,9], [7,8,9,1,4,5,6]
            end -= 1 #2
            toggle = not toggle
        else:
            result_clockwise.append(result[start].sort(reverse=True)) #[7,8,9,1], [7,8,9,1,4,5,6,3,2]
            start += 1 #1
            toggle = not toggle
    return result_clockwise
#[7,8,9,1,4,5,6,3,2]

import unittest

class Node:
    def __init__(self, data=None, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
# Input : 
#           1
#          /  \
#         2    3
#        / \    \
#       4   5    6
#          /    / \
#         7    8   9        
class Test(unittest.TestCase):
    def setUp(self):
        self.test_tree = Node(1, Node(2, Node(4), Node(5, left=Node(7))), Node(3, right=Node(6, Node(8), Node(9))))
    def test_case(self):
        self.assertEqual(get_clockwise_order(self.test_tree), [7,8,9,1,4,5,6,3,2])

if __name__ == '__main__':
    unittest.main()      