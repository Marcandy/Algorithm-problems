function abbreviation(a, b) {
    let rs = "";

    for (let c of a) {
        if (c === b[0] || c.toUpperCase() === b[0]) {
            b = b.slice(1);
        } else if (c.toUpperCase() !== c) {
            return 'NO'
        }
    }
    return b.length ? 'NO' : 'YES';
}

function abbreviation(a, b) {
    
    let j = 0, i = 0;
    let lastLowerCase = false;
    let lastCheck = null;
    while (i < b.length) {
        
        if (j >= a.length) return false;
        
        let check = a[j].toUpperCase();
        let isLower = a[j] !== check;
        
        let pass = false;
        if (b[i] === check) {
            pass = true;
            j++;
            i++;
        }
        else if (lastLowerCase && a[j-1].toUpperCase() === check && b[i] === lastCheck) {
            pass = true;
            i++;
        }
        else if (isLower) {
            pass = true;
            j++;
        }
        
        if (!pass) return false;
        
        lastLowerCase = isLower;
        lastCheck = check;
        
    }
    
    // make sure the rest are lowercase
    while (j < a.length) {
        if (a[j] === a[j].toUpperCase()) return false;
        j++;
    }
    
    
    
    return true;
}