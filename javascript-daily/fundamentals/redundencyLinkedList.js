// since this is list - first I wll set up a hash map to keep track of all values
// then upon moving to next I will compare if that value is included 
// then I will delete == currently I'm not to sure how to delete in  list 
// though I clud reassing the value to be next 

function distinct(head) { // i the head just and array or sigle number ????
    let currentList = {};
    let current, previous;
    // creating  a loop to traverse
    while(head.next !== null) {
        current = head.next;
        if(!currentList[current.val]) {
            currentList[current.val] = true;
        } else {
            // trying to delete node
            previous = current
            current.next = null; // how delete a node???
        }

        previous = current;
        current = current.next;
    }
    return head;
}

function() {
    prev = this._head;
    current = this._head.next;
    hash = {};
    while(current != null) {
        if(!hash[current.data]) {
            hash[current.data] = true;
        } else {
            prev.next = current.next;
            this._size--;
        }
        prev = current;
        current = current.next;
    }
}