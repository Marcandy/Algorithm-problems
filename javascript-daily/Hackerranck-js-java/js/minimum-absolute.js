function mainMinimum() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // your code goes here
    a.sort(function(a,b) {return Number(a) - Number(b)});
    var min_val = Math.abs(a[1] - a[0]);
    for (var i=2; i<n; i++) {
        min_val = Math.min(Math.abs(a[i] - a[i-1]), min_val);
    }
    //console.log(a.join(' '));
    console.log(min_val);
}

// make use of build in method like
// Math.abs and Math.min - as well sort