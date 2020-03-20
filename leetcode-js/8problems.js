/*
Print a binary tree in an m*n 2D string array following these rules:

The row number m should be equal to the height of the given binary tree.
The column number n should always be an odd number.
The root node's value (in string format) should be put in the exactly middle of the first row it can be put. 
The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). 
You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. 
The left-bottom part and the right-bottom part should have the same size. 
Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. 
However, if two subtrees are none, then you don't need to leave space for both of them.
Each unused space should contain an empty string "".
Print the subtrees following the same rules.

Example 1:
Input:
     1
    /
   2
Output:
[["", "1", ""],
 ["2", "", ""]]
Example 2:
Input:
     1
    / \
   2   3
    \
     4
Output:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
*/


/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/



/*
We have a list of bus routes. Each routes[i] is a bus route that the i-th bus repeats forever. 
For example if routes[0] = [1, 5, 7], this means that the first bus (0-th indexed) travels in the sequence 1->5->7->1->5->7->1->... forever.

We start at bus stop S (initially not on a bus), and we want to go to bus stop T. 
Travelling by buses only, what is the least number of buses we must take to reach our destination? Return -1 if it is not possible.

Example:
Input: 
routes = [[1, 2, 7], [3, 6, 7]]
S = 1
T = 6
Output: 2
Explanation: 
The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
Note:

1 <= routes.length <= 500.
1 <= routes[i].length <= 500.
0 <= routes[i][j] < 10 ^ 6.
*/


/*
You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Note:
Rotation is not allowed.

Example:

Input: [[5,4],[6,4],[6,7],[2,3]]
Output: 3 
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
*/


/*
Binary trees are formally defined in Chapter 9. In particular, each node in a binary tree has a depth,
which is its distance from the root.
Given a binary tree, return an array consisting of the keys at the same level. Keys should appear
in the order of the corresponding nodes' depths, breaking ties from left to right. For example, you
should retum <<31,4>, <6,6), <271,,561,2,271>, <28,0,3,1.,28>, <17,40'1.,257>, (641)) for the binary tree
in Figure 9.1 on Page112.
Hint: First think about solving this problem with a pair of queues.
*/


/*
A binary tree is said to be height-balanced if for each node in the tree, the difference in the height of
its left and right subtrees is at most one. A perfect binary tree is height-balanced, as is a complete
binary tree. A height-balanced binary tree does not have to be perfect or complete-see Figure 9.2
on the next page for an example.
Write a program that takes as input the root of a binary tree and checks whether the tree is heightbalanced.
Hlnf: Think of a classic binary tree algorithm.
*/



/*
Binary search commonly asks for the index of any element of a sorted array that is equal to a
specified element. The following problem has a slight twist on this.
-14 -10 2 108 108 243 285 285 285 401.
A[0] A[1] Al2l A[3] Al4l ,{[s] A16l Aln A[8]
Figure 11.1 : A sorted array with repeated elements.
Alel
Write a method that takes a sorted array and a key and retums the index of the first occurrence of
that key in the array. Retum -1 if the key does not appear in the array. For example, when applied
to the array in Figure 11.1 your algorithm should return 3 if the given key is 108; if it is 285, your
algorithm should retum 6.
Hint: What happens when every entry equals k? Don't stop when you first see k.
*/


/*
Suppose you are designing a search engine. L:r addition to getting keywords from a page/s content,
you would like to get keywords from Uniform Resource Locators (URLs). For example,
bedbathandbeyond.com yields the keywords "bed, bath, beyond,bat, hand": the first two coming
from the decomposition "bed bath beyond" and the latter two coming from the decomposition "bed
bat hand beyond".
Given a dictionary, i.e., a set of strings, and a narne, design an efficient algorithm that checks
whether the name is the concatenation of a sequence of dictionary words. If such a concatenation
exists, return it. A dictionary word may appear more than once in the sequence. For exarrrple, "a",
" man", " a", " p)lan", " a", " canal" is a valid sequence for "amanaplanacanal".
Hint: Solve the generalized problem, i.e., determine for each prefix of the name whether it is the concatenation
of dictionary words.
*/