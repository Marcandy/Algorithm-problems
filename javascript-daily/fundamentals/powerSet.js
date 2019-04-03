function PowerSet(str) {
    // have an array for the full list
    // have original pointer in beginning index
    // have a secong point which increase till the length of string
    // when increasing the second pointer we need to take both the 
    // single index and the whole string

    let allSet = [];
    let current, next = 0;
    // using while with current as base case instead of two loops

    while( current >= str.length) {
        let subSet1 = str[current] + str[next]; // single index str
        let subSet2 = str.slice(current, next); // take a copy of the string without modifyigni
        allSet.push(subSet1, subSet2);
        if(next < str.length) {
            next++
        } else {
            current++
            next = current + 1
        }
    }
    return allSet;
}