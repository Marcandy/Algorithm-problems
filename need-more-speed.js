// I need more speed!
// Write

// function reverse(arr)
// that will take in any array and reverse it.
//
// Sounds simple doesn't it?
//
// NOTE: Array should be reversed in place!


function reverse(arr) {
  for( let l = 0, r = arr.length - 1; l < r; l++, r--) {// creating a loop both ways
    const hold = arr[l]; // holding a temporary value
    arr[l] = arr[r]; //setting left
    arr[r] = hold;// and right
  }
  return arr;
}

// obvious istoo slow
function reverse(arr) {
  let n = [];
  arr.map(function(elm) {// mapping through
    return n.unshift(elm) // adding each elem st the beginning of the array
  })

  return n;
}
