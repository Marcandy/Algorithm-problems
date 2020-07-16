// we partition select pivot 
// break into sub problem (start - pivot) and pivot+1 to end
// function swap(items, leftIndex, rightIndex) {
//     let temp = items[leftIndex]
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }

// function partition(items, left, right) {
//     let pivot = items[Math.floor((right + left) / 2)], // middle element
//         i = left,
//         j = right;

//     while( i <= j) {
//         while(items[i] < pivot) {
//             i++
//         }
//         while(items[j] > pivot) {
//             j--
//         }
//         if ( i <= j) {
//             swap(items, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }
// function quickSort(items) {
//     let start = 0;
//     let end = items.length - 1;

//     function recurseMerge(items, left, right) {
//         if ( items.length > 1) {
//             let index = partition(items, left, right);
//             if (left < index - 1) {
//                 recurseMerge(items, left, index - 1);
//             }
//             if (index < right) {
//                 recurseMerge(items, index, right);
//             }
//         }
//         return items;
//     }

//     return recurseMerge(items, start, end);
// }

// console.log(quickSort([2,3,5,6,7,9, 10, 4, 34, 56]));

// =================es 6 way =======================

// const pivot = ( arr, start = 0, end = arr.length + 1) => {
//     const swap2 = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

//     let pivot = arr[start],
//     pointer = start;

//     for( let i = start; i < arr.length; i++) {
//         if(arr[i] < pivot) {
//             pointer++;
//             swap2(arr, pointer, i);
//         }
//     };

//     swap2(arr, start, pointer);
//     return pointer;
// }

const pivot = (arr, start = 0, end = arr.length) => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
    let mid = Math.floor((start + end) / 2)
    let pivot = arr[mid],
        pointer = mid;
  
    for (let i = start; i < arr.length; i++) {
      if (arr[i] < pivot  ) {
        pointer++;
        swap(arr, pointer, i);
      }
    };
    swap(arr, start, pointer);
  
    return pointer;
  }

// const quickSort2 = (arr, start = 0, end = arr.length) => {
//     let pivotIndex = pivot(arr, start, end);

//     if (start >= end) return arr;
//     console.log(start, end, pivotIndex);
//     quickSort2(arr, start, pivotIndex);
//     quickSort2(arr, pivotIndex + 1, end);

//     return arr;
// }
const quickSort = (arr, start = 0, end = arr.length - 1) => {
    let pivotIndex = pivot(arr, start, end);
  
    if (start >= end) return arr;
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
  
    return arr;
  };

  
console.log(quickSort([2,7,1]));

const pivot = (arr, start = 0, end = arr.length + 1) => {
    const swap2 = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
  
    let pivot = arr[start],
        pointer = start;
  
    for (let i = start; i < arr.length; i++) {
      if (arr[i] < pivot  ) {
        pointer++;
        swap2(arr, pointer, i);
      }
    };
    swap2(arr, start, pointer);
  
    return pointer;
  }

  const quickSort2 = (arr, start = 0, end = arr.length) => {
    let pivotIndex = pivot(arr, start, end);
  
    if (start >= end) return arr;
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
  
    return arr;
  };
  
  console.log(quickSort2([2,3,5,6,7,9,10,4,34,56,1,6]));