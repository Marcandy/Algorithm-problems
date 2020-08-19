//==================================Leet 686=====================================

/*
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.
For example, with A = "abcd" and B = "cdabcdab".
Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").
*/

// inital attempt
function repeatedStringMatch(A, B) {
    // Math.floog(length(B) / 2) + 1
    
    // repeat A by that number
    
    // then check if B exist in A as substring
    // consider substring as doing a sliding window starting 
    // with the full length of the string
    // with two pointers adance right and left by one
    
    const numTimes = Math.ceil(B.length / A.length) + 1

    let newA = A.repeat(numTimes);
    return newA.substring(B) ?  numTimes : -1; 
}

// better solution

function repeatedStringMatch2(A, B) {
    const n = Math.ceil(B.length / A.length);
    if (A.repeat(n).includes(B)) {
        return n;
    } else if (A.repeat(n + 1).includes(B)) {
        return n + 1
    }
    return -1;
}

/*
Initialize an empty string and keep tacking on str A until it is a substring of B. 
We can't simply run it while our string is less than B because in cases like repeatedStringMatch('aaaaaaaab', 'ba') 
our loop will never run since we need it to run at least twice to get aaaaaaaabaaaaaaaaab with the middle 'ba' being 
the substring. Any solution that runs while str.length is less than 2 * B.length as others have proposed would fail for the same reason.
*/

var repeatedStringMatch = function(A, B) {
    let str = '';
    let count = 0;
    
    while (str.length <= (A.length + B.length)) {
        str += A;
        count++;
        if (str.includes(B)) return count;
    }

    return -1;
};

// there is an advance solution make sure to review it