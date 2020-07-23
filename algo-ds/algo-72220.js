//============================================Leet 482 =================

/*
You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

Given a non-empty string S and a number K, format the string according to the rules described above.

Example 1:
Input: S = "5F3Z-2e-9-w", K = 4

Output: "5F3Z-2E9W"

Explanation: The string S has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.

*/

var licenseKeyFormatting = function(S, K) {
    // loop through replace all '-'
    // divide the len doing Math.round(S/K)
    // len % 5 ===  remainder 
    // add remainder idx first then seperate by '-'
    // ad the rest half falf and seperate by
    
    const newStr = S.replace(/-/g, '').toUpperCase();
    let arr = newStr.split('');
    
    for(let i = arr.length - 1 -K; i >= 0; i -= K ) {
        arr[i] = arr[i] + '-'
    }
    
    return arr.join('');
};  