function findPairsWithDifference( arr, k) {
    if( k === 0) {
        return []
    }


    let hash = {};
    let res = [];

    arr.forEach((elm) => { 
     return  hash[elm - k] = elm;
    })

    for(let y = 0; y < arr.length; y++) {
        if(hash[arr[y]]) {
            res.push([hash[arr[y]], arr[y]])
        }
    }

    return res;
}



// function findPairsWithGivenDifference(arr, k) {
    // your code goes here
    // x = k + y
    if (k === 0) {
      return []
    }
    let map = {};
    let result = [];
    map[arr[0]] = arr[0]
    let j = 0
    while(j < arr.length) { map[k + arr[j]] = k + arr[j]; j++ }
    console.log(map);
    for(let i = 0;  i < arr.length; i++) {
      let x = k + arr[i]
      if(map[x]) {
        result.push([x, arr[i]])
      }
    }
    
     return result;
  
//   }