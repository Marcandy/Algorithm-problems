// (reach of follower)
//  input model
// recursion take a terminal case, and a block to exucute over and over
// The Mormons are trying to find new followers and in order to do that they embark on missions.
//
// Each time they go on a mission, every Mormons converts a fixed number of people (reach) into followers. This continues and every freshly converted Mormon as well as every original Mormon go on another mission and convert the same fixed number of people each. The process continues until they reach a predefined target number of followers (input into the model).
//
// Converted Mormons are unique so that there's no duplication amongst them.
//
// Create a function Mormons(startingNumber, reach, target) that calculates how many missions Mormons need to embark on, in order to reach their target. While each correct solution will pass, for more fun try to make a recursive function.



function mormons(starting, reach, target) {
    var sum = (starting * reach) + starting;
    var count = 0;

    // could solve it like target - starting divided by reach
    if (sum >= target) {
        return count;
    } else {
        count++;
        return mormons(sum, reach, target);
    }

    while (start <= tartet) {
        count++;
        return mormons(sum, reach, target)
    }
    return counts
}

function Mormons(startingNumber, reach, target) {
    //let the mission begin!
    var count = 0; //setting the counter parameter

    function loop(startingNumber, reach, target) {
        if (startingNumber >= target) { // condition to exit out of recursion
            return count;
        } else {
            count++; // increment each time the function call upon itself
            return loop((startingNumber * reach) + startingNumber, reach, target)
        }
    }
    return loop(startingNumber, reach, target);
}

Mormons(20000, 2, 7000000000);


// other way
function Mormons(startingNumber, reach, target, i){
  if(i == undefined){
    i = 0;
  }

  if (startingNumber >= target){
    return i;
  } else {
    return Mormons((startingNumber*reach)+startingNumber, reach, target, i+1);
  }
}
