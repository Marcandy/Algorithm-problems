var reverseString = function(s) {
    answer = ''
    for (i = s.length - 1; i >= 0; i--) {
        answer = answer.concat(s[i])
    }
    return answer
};


var reverseString = function(s) {
    let res = "";
    for(let i = s.length - 1; i >= 0; i --){
        res += s[i];
    }
    return res;
};

let reverseString = function(s) {
    let arr = s.split(''), left = 0, right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        ++left;
        --right;
    }
    return arr.join('');
};


// Three ways 
var reverseString = function(s) {
    //solution 1 
    var reversedStr = "";
     var high = s.length - 1;
     var i;
     for(i = high; i >= 0; i--) {
         reversedStr += s.charAt(i);
     }
     return reversedStr;
     
     /*solution2 with built-in function
     return s.split('').reverse().join('');*/
     
     /*recursion with substr and charAt, will have runtime error
     return (s === '') ? '' : reverseString(s.substr(1)) + s.charAt(0);*/
 };