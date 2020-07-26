// ===================================================== ITC - Game More Popular than Angry Bird================

function sortScores(unorderedScores, highestPossibleScore) {
    // add each to an array: index representing the score itself and value representing how many times they appear
    const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

    unorderedScores.forEach(score => {
        scoreCounts[score]++; // fill each index how many times
    });

    const sortedScores = [];


    for(let score = highestPossibleScore; score >= 0; score--) {
        const count = scoreCounts[score];

        for(let time = 0; time < count; time++) { // this does not mean O(n^2)
                                                // we are only pushing the number of times 
                                                // a number occurs - it is still On            
            sortedScores.push(score);
        }
    }
    
    return sortedScores;
}