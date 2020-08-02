// ================================Leetcode 849 ======================================

function maxDisToClosest(seats) {

   // 3 pointers
    // how do we advance the middle pointer and the left and right at the same time
    // will this be more than O(n)
    
    let left = -1;
    let maxDistance = 0;
    let len = seats.length;

    for(let right = 0; right < len; right++) {
        if(seats[right] === 1) {
            if(left === -1) { // that means left has not moved at all
                // handles edge case when it leads with zero
                maxDistance = right;
            } else {
                // when your seat is inbetween 1s, you need to find all point between the two
                // so you divide by 2
                maxDistance = Math.max(maxDistance, Math.floor((right - left) / 2));
            }

            left = right // when a new 1/seat has been found
        }
    }
    
    if(seats[len - 1] === 0) {
        // handle edge case where it end with 0: where there was only one 1/seat at the beginning
        maxDistance = Math.max(maxDistance, ((len-1) - left)) // left would already be changed by the previous loop
    }
    
    return maxDistance;
}

// -----other solution---

var maxDistToClosest = function(seats) {
    if (seats.length <= 1) {
        return 0;
    } 
    let maxDistance = 0;
    let lastSeated = -1;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1 && lastSeated === -1) {
            lastSeated = i;
            maxDistance = lastSeated - 0;    //take care of cases [0, 0, 0, 1, ....]
        } else if (seats[i] === 1 && lastSeated !== -1) {
            maxDistance = Math.max(maxDistance, Math.floor((i - lastSeated) / 2));
            lastSeated = i;
        }
    }
    return Math.max(maxDistance, seats.length - 1 - lastSeated ); // take care of cases [....., 1, 0, 0] etc.
};


//==================================================== ITC Second Largest in a Binary ========================================
function findSecondLargest(treeRoot) {
    if(!treeRoot || (!treeRoot.right && !treeRoot.left)) {
        return null;
    }
    // bst: left < parent; right > parent
    function findLargest(rootNode) {
        let currNode = rootNode;
        while(currNode) {
            if(!currNode.right) return currNode.value;
            currNode = currNode.right;
        }
    }
                 
    // the secon larget is the parent of the last right leaf node e
    // i go to the right most node 
    let current = treeRoot;

    while(current) {
        
        if (current.left && !current.right) {
            findLargest(current.left);
        }

        if(current.right && !current.right.left && !current.right.right) {
            return current.value;
        }

        current = current.right;

    }
  };


  // initial attempt

function findSecondLargest(treeRoot) {

    // Find the second largest item in the binary search tree
    
    
    // bst: left < parent; right > parent
    if (!treeRoot) {
      return null;
    }
    
                //       8
                //     /   \
                //   6     9
                //   / \   /  \
                // 4   5  7   10
                 
    // the secon larget is the parent of the last right leaf node 
    // this is determined by level
    // it does not have a parent value
    // i go to the right most node 
    let parent = treeRoot;
    let last = false
    let lastNode = helper(treeRoot)
    
    function helper(node) {
      if(node.left && !node.right ) { // maybe we need to do node !== null // this will return helper not the whole function
        return node
      } else if (!node.right && node.left) {
        helper(node.left)
        last = true
      }
      parent = node
      return helper(node.right)
    }
    
    
    return last ? lastNode : parent;
  }
