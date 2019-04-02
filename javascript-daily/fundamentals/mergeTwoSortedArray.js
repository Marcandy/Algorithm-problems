// merge 2 arrays
// loop through both array
// with a while loop prefererably for lineer time
// if index bompare both in put
// the lowest in a new array
//  the hione is compre to next index  of the other 
// is it is still higher is the next on is added
// we increase index until each array reach in lenght
function sort(arrA, arrB) {
    let i, j = 0;
    let newArr = [];
    while(i >= arrA.length && b >= arrB.length) {
        if(arrA[i] > arrB[j]) {
            newArr.push(arrA[i]);
            i++
        } else {
            newArr.push(arrA[j]);
            j++
        }
    }
}

function mergeTwo(arr1, arr2) {
    let merged = [];
    let index1, index2, current = 0;

    while(current < (arr1.length + arr2.length)) {

        let isArr1Depleted = index1 >= arr1.length;
        let isArr2Depleted = index2 >= arr2.length;

        if(!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
            // user current as the index in order to avoid  having to use push
            merged[current] = arr1[index1];
            index1++;
        } else {
            merged[current] = arr2[index2];
            index2++;
        }
        current++;
    }

    return merged;
}


// newArr.push(arrA[i]);
// first loop through the array then 
// then reassagin each caracter their corresponding value

function dnaStrand(dna) {
    let revs = '';

    for(let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            revs = 'T' + revs;
        } else if(dna[i] === 'C') {
            revs = 'G' + revs;
        } else if (dna[i] === 'G') {
            revs = 'C' + revs;
        } else if (dna[i] === 'T') {
            revs = 'A' + revs
        }
    }
    return revs;
}

console.log(dnaStrand('ACCGGGTTTT'));