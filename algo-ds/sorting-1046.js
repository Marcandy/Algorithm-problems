// Leetcode 1046 High Five 


function highFive(items) {

    // need to sort in descending order 
    // so that the top five of each student can be easily accesses

    let sorted = items.sort((a, b) => {return b[1] - a[1]});

    let memo = {};

    for(let i = 0; i < sorted.length; i++) {
        let id = sorted[i][0];
        let score = sorted[i][1];

        if(!memo[id]) {
            memo[id] = {}
                memo[id].total = score
                memo[id].counter = 1
        } else if (memo[id] && meme[id].counter < 5) {
            memo[id].total += score;
            memo[id].counter += 1;
        }
    }

    // get total average for each student

    let result = [];
    for (let id in memo) {
        if(memo[id]) {
            let avg =  Math.floor(memo[id].total / 5);
            result.push([id, avg]);
        }
    }

    return result
}

// var highFive = function(items) {
//     // it's average of top five 
//     // we have to keep tract of min
//     // each student will have min stored 
    
//     let mintracker = {} // studenid with having two prop min and indx
//     let studentTop = {} // studentid with array of top five
    
//      while { // looping over the scores
         
//          // we compare each student new score with the current min
//          if(scores[i][1] < mintracker[scores[i][0]min) {
//              mintracker[score[i][0]]min = scores[i]1
//              studentTop[i].splice(mintracker[score[i][0]].indx)
//              studentTop.push(scores[i][1])
//          }
         
//      }
//     let results = []
//     // another to add each student top and average
    
//     for(i in studentTop) {
//         const total = studentTop[i].reduce((a, b) +> a + b )
//         resulsts.push([i, total / 5])
//     }
    
//     return results
// };