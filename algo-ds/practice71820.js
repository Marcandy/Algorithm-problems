/*
1110. Delete Nodes And Return Forest
Given the root of a binary tree, each node in the tree has a distinct value.
After deleting all nodes with a value in to_delete, we are left with a forest 
(a disjoint union of trees).
Return the roots of the trees in the remaining forest.  You may return the result in any order
*/


var delNodes = function(root, to_delete) {
    //  we can return the tree in any order
    // as we are traversing it we can push to a result array
    
    
    // we need to find each value
    // delete in order to keeep traversing the rest of the node 
    // the deleted node children if any
    
    // pre-order
    // whenever you find a node delete it 
    // save it's left/righ they become seperate forest
    let res = []
     // this preorder
    // forest count
    function traverse(res, isRoot) {
        if(!root ) return null ;
        let shouldDelete = to_delete.includes(root.val);
        if (isRoot && !shouldDelete) res.push(root) // they are pushing the whole root not just root.val
                                                    // that is why you dont have to worry about seperating them into array
        root.left = traverse(root.left, shouldDelete)             
        root.right = traverse(root.right, shouldDelete)
        return shouldDelete ? null : root // by returning null is should delete is true we thereby delete the node
    }
    traverse(root, true);
    return res;

    /*
    Similar to removing a node in BST, we use recursion and backtracking to traverse and removing nodes.
We only add node to the result when it's both the root and not deleted.
A technique used here is that whenever we found a node to be deleted, we don't return null right away. 
This will cut off our paths to other nodes. Instead, we save its state as shouldDelete and set it to null in the backtracking stage.
    */
};

// this postorder / DFS

var delNodes = function(root, to_delete) {
    if(!root) return [];
    let res = [];
    let traverse = (node, isRoot) => {
        if(!node) return;
        let isNodeDeleted = to_delete.includes(node.val);
        if(node.left) node.left = traverse(node.left, isNodeDeleted);
        if(node.right) node.right = traverse(node.right, isNodeDeleted);
        if(isRoot && !isNodeDeleted) res.push(node);
        return isNodeDeleted ? null : node;
    }
    traverse(root, true);
    return res;
};

// extra solution

var delNodes = function(root, to_delete) {
    const set = new Set(to_delete);
    const res = [];

    const go = (node) => {
      if (node == null) return node;
      node.left = go(node.left);
      node.right = go(node.right);

      if (set.has(node.val)) {
        if (node.left) res.push(node.left);
        if (node.right) res.push(node.right);
        return null;
      }
      return node;
    };

    if (!set.has(root.val)) res.push(root);
    go(root);
    return res;
};


// ================================================ Pramp Largest Deficit


function calcDroneMinEnergy(route) {
    // your code goes here
    
    // route = [ [0,   2, 10], 5
    //           [3,   5,  0], 15
    //           [9,  20,  6], 9
    //           [10, 12, 15], 15 - 6 = 0
    //           [10, 10,  8] ] 7


    /*
        byt adding up the numbers we will get like a negative number
    */
   let largestDeficit = 0, currTotalEnergy = 0;
   for(let i = 1; i < route.length ; i++) {
       currTotalEnergy = currTotalEnergy + ( route[i - 1][2]  - route[i][2] )
     if(currTotalEnergy < largestDeficit) { // meaning it's a negative number
       largestDeficit = currTotalEnergy
     }
   }
   
   return -1*(largestDeficit)
  }

  // anothe approach
  function calcDroneMinEnergy2(route) {
    let maxHeight = route[0][2]
    for(let i = 1; i < route.length ; i++) {
      if(route[i][2] > maxHeight) { // meaning it's a negative number
        maxHeight = route[i][2]
      }
    }
    
    return maxHeight - route[0][2]
  }