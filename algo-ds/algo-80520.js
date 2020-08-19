/*
Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function 
findLargestSmallerKey that finds the largest key in the tree that is smaller than num. 
If such a number doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.

Analyze the time and space complexities of your solution.

*/

function findLargestSmallerKey(rootNode, num) {
    let result;

    while(!rootNode) {
        if(rootNode.key < num) {
            result = rootNode.key
            rootNode = rootNode.right
        }
    }
}

// initial non correct solution

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
    // your code goes here
    
    // right  < num
    // dfs all the way right
    // then left
    
    let rootNode = BinarySearchTree.root
    if(rootNode === null) {
      return -1
    }
    // .if leat < num = resNode
    
    helperRecurse(node) {
      if(!node) {
        return null;
      }
      if(node.key < num {
       return node
      }
      if(!node.right || node.right.key > num ) {
        helperRecurse(rootNode.left)
      }
      helperRecurse(node.right)
    }
    
    const resNode = helperRecurse(rootNode);
    return resNode ? resNode.key : -1
  }