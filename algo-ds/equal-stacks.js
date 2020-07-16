// You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height. You can change the height of a stack by removing and discarding its topmost cylinder any number of times.

// Find the maximum possible height of the stacks such that all of the stacks are exactly the same height. This means you must remove zero or more cylinders from the top of zero or more of the three stacks until they're all the same height, then print the height. The removals must be performed in such a way as to maximize the height.

// Note: An empty stack is still a stack.
function equalStacks(h1, h2, h3) {
    let st1 = [],
        st2 = [],
        st3 = [];

    let st1TotalHeight = 0, st2TotalHeight = 0, st3TotalHeight = 0;

    for(let i = h1.length - 1; i >= 0; i--) {
        st1TotalHeight += h1[i]
        st1.push(st1TotalHeight)
    }

    for(let i = h2.length - 1; i >= 0; i--) {
        st2TotalHeight += h2[i]
        st2.push(st2TotalHeight)
    }


    for(let i = h3.length - 1; i >= 0; i--) {
        st3TotalHeight += h3[i]
        st3.push(st3TotalHeight)
    }



    while(true) {
        if(st1.length < 1  || st2.length < 1 || st3.length < 1) return 0;

       
        st1TotalHeight = st1[st1.length - 1]
        st2TotalHeight = st2[st2.length - 1]
        st3TotalHeight = st3[st3.length - 1]


        if( st1TotalHeight == st2TotalHeight && st2TotalHeight == st3TotalHeight) {
            return st1TotalHeight;
        }

        if (st1TotalHeight >= st2TotalHeight && st1TotalHeight >= st3TotalHeight) {
            st1.pop();
        } else if(st2TotalHeight >= st1TotalHeight && st2TotalHeight >= st3TotalHeight) {
            st2.pop();
        } else if(st3TotalHeight >= st2TotalHeight && st3TotalHeight >= st1TotalHeight) {
            st3.pop();
        }        
    }
}
