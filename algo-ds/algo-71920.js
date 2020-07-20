/*
                    =======ITC Messagin APP ===========

Given information about active users on the network, find the shortest route for a message from one user 
(the sender) to another (the recipient). Return an array of users that make up this route.

Your network information takes the form of an object where keys are usernames and values are arrays of other users nearby:

  const network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott'],
  ...
};

*/



function getPath(graph, startNode, endNode) {

    // Find the shortest route in the network between the two users
    
    
    // shortest path means
    // means we will from the closest user or user which cost less
    
    // check startnode network if it has endnode , then return that
    // how do you which useranames to choose from
    
    // we compare the user in startNode vs the one in endnode using a hashtable
    // do we need to put all the network in a table
    const nodesToVisit = new Queue;
    nodesToVisit.enqueue(startNode); // add starting Node
    
    const nodesAlreadySeen = new Set([startNode]); // use Set to keep track of node we've seen
    
    while (nodesToVisit.size > 0) {
      const currentNode = nodesToVisit.dequeue;
      // we can push in an array here
      if(currentNode === endNode) {
        break; // good use of break try to make use of it often
      }
      
      
      graph[currentNode].forEach(neighbor =>{
        
        if(!nodesAlreadySeen.has(neighbor)) { // if we have not visited it yet
          nodesToVisit.enqueue(neighbor); // we add it to the queue
          nodesAlreadySeen.add(neighbor); // we also add it to seen
        }
      })
    }
    
    
    if (both startNode && endnode // do not share a network)
        // we start checking the first node network individually
    
    // the idea is to build a graph -- what you were doing connecting object ot object
    // was graph
    
    // BFS always find the shortest path
    return null;
  }
  



  // ================================================ Leet 399==================================


  /*
Equations are given in the format A / B = k, where A and B are variables represented as strings, 
and k is a real number (floating point number). Given some queries, return the answers. 
If the answer does not exist, return -1.0.

Given a / b = 2.0, b / c = 3.0.

In hash map 

Const allSolution = { 
a: (2.0 * b)
b: (2.0 / a)
c: (3.0 / b)
}	

(If !e in allSolution) return -1

This lineer because I have to loop through the equations map the values

Function calcEquation(equations, values, queries) {
	
	Let allMap = {}

	for(let i = 0; i < values.length; i++) {
		allMap[equations[i][0]] = values[i] * equations[i][1]]
		allMap[equations[i][1]] = values[i] / equations[i][0]]
}.


Let res = []

for(let i = 0; i < queries.length; i++) {
	if(allMap[queries[i][0] && allMap[queries[i][1] {
		let val = allMap[queries[i][0]] / allMap[queries[i][1]]
		Math.round(val) to make sure it double
			res.pus(val)
	} else {
		Return -1.0
	}	
		
}.

}
https://leetcode.com/problems/evaluate-division/discuss/623312/Javascript-Solution-w-super-thorough-explanation
https://leetcode.com/problems/evaluate-division/discuss/178091/JavaScript-BFS-100-beat-solution-explanation-included
https://leetcode.com/problems/evaluate-division/discuss/88173/Share-my-JavaScript-solution
  */


function calcEquation(equations, values, queries) {
    let pathMap = {};

    for(let i = 0; i < equations.length; i++) { // we map through all equations
        if(!pathMap[equations[i][0]]) {
            pathMap[equations[i][0]] = []
        }

        if(!pathMap[equations[i][1]]) {
            pathMap[equations[i][1]] = []
        }
        /*
            a = b * 2;
            b = a / 2; or a * .5
        */
        pathMap[equations[i][0]].push([equations[i][1], values[i]])  // we put pairs off arrays not just the value ( the will do a multiply operation)
        pathMap[equations[i][1]].push([equations[i][0], 1 / values[i]]) 
    }
}



 //=====================================BBSWE- Paint Matrix================================
  /*
  Given a 2-color matrix and a point start, flip all points in the adjacent region of start to the opposite color.

      Example:
      Input:
      image = [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
      ]
      row = 0
      col = 1
      newColor = 1

      Output:
      [
        [1, 1, 1, 0],
        [1, 1, 1, 0],
        [1, 1, 1, 0],
        [1, 1, 1, 0],
      ]

Explanation: (0, 1) is color 0, the whole adjacent region was flipped to 1's

*/

   // first i would locate the start
  // check its left right and top wether they are the specific color
  // if not change that entire column
  
  const paint = (image, row, col, newColor) => {
  
  
    // first i would locate the start
    // check its left right and top wether they are the specific color
    // if not change that entire column
    
    let correctColor = image[row][col] === newColor ? true : false;
    
    let rightColum = image[row][col + 1] === newColor ? true : false;
    
    let leftColum = image[row][col + 1] === newColor ? true : false;
    
    if( !rightColum) {
      
    }
    
  }

  https://backtobackswe.com/platform/content/paint-a-matrix/video




  // =================================================Pramp Array of Array Products==============

  /*
    Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.
    Solve without using division and analyze your solution’s time and space complexities.

    input:  arr = [2, 7, 3, 4]
    output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
  */
  function arrayOfArrayProducts(arr) {
    // for each i
    // two pointer i, j
    // save hashtable
    
    // output[i] =  P_left(0 ... i-1) * P_right(i+1 ...n )
    let n = arr.length;

    if( n === 0 || n === 1) {
      return [];
    };

    let listTotalVal = [];
    let leftTotal = 1;

    for(let i = 0; i < n; i++) {
      listTotalVal[i] = currSum;
      leftTotal *= arr[i];
    };

    let rightTotal = 1;
    for(let j = n - 1; j >= 0; j--) {
      listTotalVal *= rightTotal;
      rightTotal *= arr[j];
    };
    
    return listTotalVal;
  }
