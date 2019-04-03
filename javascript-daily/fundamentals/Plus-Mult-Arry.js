// first we will through the array odd and endve
// it wont be nested array however,
// it will be starint with index 0 increment by two
// then index 1 - then increment by two
// add the total of each aodd and even
// then modulus divide and compare



function plusMult(A) {
    let even, odd = 0;

    for(i = 0; i < A.length; i = i + 2) {
        even += A[i] * A[i+2]
    }

    for(j = 1; j < A.length; j = j + 2) {
        odd += A[j] * A[j+2]
    }

    even = even % 2;
    odd  = odd % 2;


    if( even > odd) {
        return 'EVEN';
    } else if (odd > even) {
        return 'ODD';
    } else {
        return 'NEUTRAL';
    }
}