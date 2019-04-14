//  bubble sort
// efficient bubble sort

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped; // setting a swapp variable
    do {
        swapped = false; // initialized to false
        for(let i = 0; i < len; i++) {
            if(inputArr[i] > inputArr[i + 1]) {
                let temp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = temp;
                swapped = true
            }
        }
    } while(swapped);
    return inputArr;
}

function bubbleSort(array) {
    var flag = true; //checks to see if any swaps are made
    while (flag) {
      flag = false; //if flag remains false, then the list is already sorted as no swaps are necessary
      for (var i = 0; i < array.length - 1; i++) { //program terminates when this "if" is not accessed
        if (array[i] > array[i + 1]) {
          var temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          flag = true; //if swap occurs, flag is changed to true and process repeats
        }
      }
    }
  }
  
  var myArray = [32, 33, 8, 2, 9];
  bubbleSort(myArray);
  console.log(myArray);


  // Insetion sort ----
  // selection sort
  // merge sort

//   function insertionSort(array) 
//   Loop through array
//     Create temp var for current element
//     Create var and set equal to previous element's index
//     Loop backwards while index >= 0 and current element > temp var
//       Set next element equal to current element
//     Set next element equal to temp 

  cont insertSort = arr => {
      const len = arr.length;

      for(let i = 0; i < len; i++) {
          let temp = arr[i]; // store current value
          let j = i - 1;
        while(j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp
      }
      return arr;
  }

  http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-insertion-sort-algorithm/
  https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg