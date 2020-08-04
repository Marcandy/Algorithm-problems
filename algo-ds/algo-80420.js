




// =================https://leetcode.com/problems/bulls-and-cows/


function getHint(secret, guess) {
    // guess num
    // bulls : same index and value
    // cows: same value but different index
    
     // loop over secret 
    // add to a hash with value to index
    // loop over guess
    // if value and index are same from hash
    // increase A
    // else if just value exist 
    // then increase B
    let secretHash = {};
    for([str, i] of secret) {
        secretHash[str] = i
    }

    let bulls = 0, cows = 0
    for(let i = 0; i < guess.length; i++) {
        if(secretHash[guess[i]] && i === secretHash[guess[i]]) {
            bulls += 1
        } else if ( secretHash[guess[i]]) {
            cows +=1
        }
    }

    return `${bulls}A${cows}B`
}

function getHint(secret, guess) {
    let map = {};
    let A = 0;
    let B = 0;

    for(let i = 0; i < 10; i++) map[i] = 0;

    for(i = 0; i <)
}



var getHint = function(secret, guess) {
    let guessArr = new Array(10).fill(0);
    let secretArr = new Array(10).fill(0);
    let bull = 0; let cow = 0;
  
    getBulls();
    getCows();
    cow = cow - bull;
  
    return `${bull}A${cow}B`;
  
    function getBulls() {
      for (let i = 0; i < secret.length; i++) {
        secretArr[Number(secret[i])]++; guessArr[Number(guess[i])]++;
        if (secret[i] === guess[i]) {
          bull++;
        }
      }
    };
    
    function getCows() {
      for (let i = 0; i < 10; i++) {
        cow += Math.min(Number(guessArr[i]), Number(secretArr[i]));
      }
    };
  };


  // other solutio

  var getHint = function(secret, guess) {
    let bull = 0;
    let cow = 0;
    const map = {};
    for (let i = 0; i < secret.length; i++) {
      const s = secret.charAt(i);
      const g = guess.charAt(i);
      if (s === g) {
        bull++;
      } else {
        if (map[s] < 0) cow++;
        if (map[g] > 0) cow++;
        map[s] = parseInt(map[s] || '0') + 1;
        map[g] = parseInt(map[g] || '0') - 1;
      }
    }
    return `${bull}A${cow}B`;
  };


  // other solution
  function getHint(secret, guess) {
    var map = {};
    var A = 0;
    var B = 0;
    for (var i = 0; i < 10; i++) map[i] = 0;
    for (i = 0; i < secret.length; i++) {
      if (secret[i] === guess[i]) A++;
      else {
        map[secret[i]]++;
        B += map[secret[i]] <= 0 ? 1 : 0;
        map[guess[i]]--;
        B += map[guess[i]] >= 0 ? 1 : 0;
      }
    }
    return A + 'A' + B + 'B';
  }




// ===================================================https://leetcode.com/problems/bomb-enemy/

/*
Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.
The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.
Note: You can only put the bomb at an empty cell.
*/


var maxKilledEnemies = function(grid) {
    /*
        W
        E
        0
        
        need maximum Enemies
        can plant in 0 cells
        
        like maybe a breath first search
        will we have to check for every cell
        
        
        maximum - we have to start in the middle because we have the most row and middle
        
    */
    [["0","E","0","0"],
     ["E","0","W","E"],
     ["0","E","0","0"]]
};


//===============================================Leetcode https://leetcode.com/problems/repeated-string-match/

/*
People often struggle with the runtime analysis for this one. The trick is to think of the cost per item passing through our queue, rather than the cost per enqueue() and dequeue().
This trick generally comes in handy when you're looking at the time cost of not just one call, but "m" calls.
*/

class QueueStack {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }


    enqueue(val) {
        // to add/enqueue we just push to stack1
        this.stack1.push(val)
    }

    dequeue(val) {
        // to dequeue --- pop everything one by one from stask1
        // and push them to stack2
        // we need to put  condition - only when stack2 is empty
        if(this.stack2.length === 0)  {
            while(this.stack1.length > 0) {
                const lastAdded = this.stack1.pop()
                this.stack2.push(lastAdded)
            }
        }
       
        return this.stack2.pop()

    }
}

