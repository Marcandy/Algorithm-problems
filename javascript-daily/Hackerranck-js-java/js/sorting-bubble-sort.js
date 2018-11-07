function countSwaps(a) {
    let isSorted = false;
    let n = a.length;
    let lastUnsorted = n - 1;
    let swapAmt = 0;
  
    while (!isSorted) {
      isSorted = true;
  
      for (let i = 0; i < lastUnsorted; i++) {
        if (a[i] > a[i + 1]) {
          swap(a, i, i + 1);
  
          isSorted = false;
          swapAmt++;
        }
      }
  
      lastUnsorted--;
    }
  
    console.log('Array is sorted in', swapAmt, 'swaps.');
    console.log('First Element:', a[0]);
    console.log('Last Element:', a[a.length - 1]);
      
      function swap(a, indxOne, indxTwo) {
        let tmp = a[indxOne];
        a[indxOne] = a[indxTwo];
        a[indxTwo] = tmp;
      }
  }


  /// ================================
function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    tally = 0;

    for(var i = 0; i < n; i++) {
        
        for (var x = 0; x < n -1; x++) {
            if(a[x] > a[x + 1]) {
                const temp = a[x + 1];
                a[x + 1] = a[x];
                a[x] = temp;
                tally++;
            }
        }
        if(tally === 0) {
            break
        }
    }
}