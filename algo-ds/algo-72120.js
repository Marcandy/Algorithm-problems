/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

*/

var backspaceCompare = function(S, T) {
    
    function process(str) {
        const res = [];
        for(x of str.split('')) {
            if(newStr[i] === '#') {
                x === '#' ? res.pop() : res.push() // if it is a hash
                                // we remove from the res - it could be considered a stack
            }
        }
        return res.join('');
    };

    return process(S) == process(T)
}

// other solution with counter

const backspaceCompare = (S, T) => { 
    return edit(S) === edit(T);
    
    function edit(str) {
        let result = '';
        let backspaces = 0;
        
        for (let i = str.length - 1; i >= 0; i -= 1) {        
            if (str[i] === '#') {
                backspaces += 1;
            } else if (backspaces > 0) {
                backspaces -= 1;
            } else {
                result = str[i] + result;
            }
        }
        
        return result;
    }
};


// ================================================= Leet 929 Unique Emails ==========================

var numUniqueEmails = function(emails) {
    // . concatanate into empty ''
    // + all letters after is ignored
    // above rule does not apply after @
    
    /*
        we will have to loop through the list of emails
        // modify current email to meet ruless
        // add them to object  have a counter 
        // it increase whenever we check if an email already exist in the object
        return that counter
    */
    
   let allEmails = new Set();
    
   for(let email of emails) {
       const modEmail = modify(email);
       allEmails.add(modEmail);
   }
   
   function modify(email) {
       let [local, domain] = email.split('@')
       let newLocal = ''
       let i = 0;        
       while(local[i] !== '+' || i < local.length) {
           if(email[i] !== '.') {
               newLocal + local[i]
           }
           i++
       }
       return newLocal + domain;
   }
   
   return allEmails.size();
};


// other solution

Trim the email (i.e. only get the local name without '.' and before the '+' and "@" and domain ); (e.g. "user.name+123@gmail.com => username@gmail.com)
Added the trimmed names to a set
count the size of the set return the count;
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let trimmedUniques = new Set();
    for (let email of emails) {
        trimmedUniques.add(trimEmail(email));
    }
    return trimmedUniques.size;
};

var trimEmail = function(email) {
    let localList = [];
    let i = 0;
    while (email[i] !== '@' && email[i] !== '+') {
        if (email[i] !== '.') localList.push(email[i]);
        i++;
    }
    while (email[i] !== '@') {
        i++;
    }
    let domain = email.substring(i);
    return localList.join('') + domain;
}


// other solution

Trim the email (i.e. only get the local name without '.' and before the '+' and "@" and domain ); (e.g. "user.name+123@gmail.com => username@gmail.com)
Added the trimmed names to a set
count the size of the set return the count;
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let trimmedUniques = new Set();
    for (let email of emails) {
        trimmedUniques.add(trimEmail(email));
    }
    return trimmedUniques.size;
};

var trimEmail = function(email) {
    let localList = [];
    let i = 0;
    while (email[i] !== '@' && email[i] !== '+') {
        if (email[i] !== '.') localList.push(email[i]);
        i++;
    }
    while (email[i] !== '@') {
        i++;
    }
    let domain = email.substring(i);
    return localList.join('') + domain;
}
// other solution
var numUniqueEmails = function(emails) {
    const set = new Set();
    emails.forEach(email => {
        const [dirtyLocal, domain] = email.split('@');
        const cleanLocal = dirtyLocal.split('+')[0].split('.').join('');
        set.add(`${cleanLocal}@${domain}`);
    })
    return set.size;
};