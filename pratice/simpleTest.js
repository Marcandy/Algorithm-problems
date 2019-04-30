
const sampleFunc = (arr1, arr2) => {
    console.log(arr1.length);

    // create main array
    let total = [];

    // first loop arr1 -
    // compare the values - then add the lowest first
    // whiever
    // i ,j
    let i = 0, j = 0;

    // total.length
    while(i + j < total.length) {
        if(arr1[i] < arr2[j]) {
            total.push(arr1[i]);
            i++
        } else {
            total.push(arr2[j]);
            j++
        }
    }
    // for(let i = 0; i < arr1.length; i++) {
    // }
    console.log(total);
    return total;
}


module.exports = sampleFunc;