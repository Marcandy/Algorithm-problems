
// this solution exceed time
var solution = function(isBadVersion) {
    return function(n){
        while(n > 0) {
            if(isBadVersion(n) && !isBadVersion(n -1)) {
                return n;
            }
        }
        n--;
    }
}

var solution = function(isBadVersion) {

    return function(n) {
        var start = 1;
        var end = n;
        while( start <= end) {
            var middle = ((end-start) >> 1) + start;
            if (isBadVersion(middle)) end = middle - 1;
            else start = middle + 1;
        }
        return end + 1;
    }
}