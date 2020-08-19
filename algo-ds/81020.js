// =================================Leet 1007 ==========================
/*
In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.

*/

// inital attmept

var minDominoRotations = function(A, B) {
    /*
        domino = 2(random(1, 6))
        rotate = A[i] becomes B[i]
        
        min(rotation) so that all As are equal or Bs
        else return -1
        --------------
        figuring out which elem is most repeated
        loop through both while keeping two pointer i, j
        we try to swap them
        
        a first pass through to fin that elm
            add each elem to a hash with how many times occured
        most element = leat rotations
        
    */
    
    const listElem = {}
    const mostRepeated = []
    
    let i = 0
    while( i < A.length && i < B.length) {
        if(!listElem[A[i]] && listElem[B[i]]) {
            listElem[A[i]] = 1
            listElem[B[i]] = 1   
        } else if( listElem[A[i]]) {
            listElem[A[i]]++
            mostRepeated.count < listElem[A[i]] ? MostRepeated.elem = A[i] : ''
        }
    }
};


// good solution

var minDominoRotations = function (A, B) {
    const numberOfA = new Array(7).fill(0);
    const numberOfB = new Array(7).fill(0);
    const same = new Array(7).fill(0);
    for (let i = 0; i < A.length; i++) {
      numberOfA[A[i]]++;
      numberOfB[B[i]]++;
      if (A[i] == B[i]) same[A[i]]++;
    }
    for (let i = 1; i <= 6; i++) {
      if (numberOfA[i] + numberOfB[i] - same[i] == A.length) {
        return Math.min(numberOfA[i] - same[i], numberOfB[i] - same[i]);
      }
    }
    return -1;
  }


  // other solution
  var minDominoRotations = function(A, B) {
    let ACount = 0, //number of times the first element number has to be swapped
        firstElementA = A[0], //first number
        firstElementB = B[0],
        pressentBothA = firstElementA === firstElementB ? 1: 0; //number of times the element appeard in A and B counting from the 0 position
    for(let i = 1; i < A.length; i += 1) {
        if(firstElementA === A[i]) {// if the first element is ecual to the current
            if(A[i] === B[i]) { // if current A and B are the same, we count it.
                pressentBothA += 1;
            }
        } else if(firstElementA === B[i]) { // if it's not equal to the current A but it's for be 
            ACount += 1; // count it
        }  else {
            ACount = -1; //reset it and quit.
            break;
        }
    }
    
    //we have to try try with the B number.
    let BCount = 0,
        pressentBothB = 0;
    if(pressentBothA === 0) { // we don't need to do this if both are display the same first number
        //reapeat the process for B
        for(let i = 1; i < A.length; i += 1) {
            if(firstElementB === B[i]) {
                if(A[i] === B[i]) {
                    pressentBothB += 1;
                }
            } else if(firstElementB === A[i]) {
                BCount += 1;
            }  else {
                BCount = -1;
                break;
            }
        }
    } else {
        BCount = -1;
    }
    if(ACount === -1 && BCount === -1) { //if it didn't find anything in both return -1
        return -1;
    } else {
        //checking which side is better to swap. the current count or (total - number of times - the repeated elements)
        let minimumCountB = Math.min(BCount, (B.length - BCount) - pressentBothB); //
        let minimumCountA = Math.min(ACount, (A.length - ACount) - pressentBothA);
        if(ACount === -1) {// if A is -1 consider B
            return minimumCountB;
        } else if(BCount === -1)  { // if B is -1 consider A
            return minimumCountA;
        } else { // if non -1 get the minimum
            return Math.min(minimumCountB, minimumCountA);
        }
    }
};