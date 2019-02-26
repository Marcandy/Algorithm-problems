• Function mergeSortedArrays(arr1, arr2) {
    Let result = [];
    Let I = 0;
    Let j = 0;
    const total Elements = arr1.length + arr2.length;
    While( I + j < totalElements) {
        If ( j >= arr2.length || (I < arr1.length && arr1[i] < arr[i] < arr2[j] )) {
            Result.push(arr1[i]);
            i++;
        } else {
            Result.push(arr2[j]);
            J++;
        }
    }

}