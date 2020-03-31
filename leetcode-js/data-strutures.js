/*
Implement a hash map withou any built function



*/


class HashMap {
    constructor() {
        this.hash = [] // an array where the fist index is the key and 2nd index is the value
    }
    // key pair value
    // push


    delete(key) {
        //  we will have to loop the array of array check each first index
        this.hash = this.map((arr, item, i) => {
            if(item[0] === key) {
                arr.splice(i, 1)
            }
        })
    }

    prototype.{

    }

    // lookup [] . is it in the prototype
}


class Node { // node has two properties the value and next pointer
    constructor(value, next) {
        this.value = value;
        this.next = next
    }
   
}




Class LinkedList {
    constructor(data) {
        this.head = data
    }
}



// implement debounce


function log() {
    console.log('One')
    return 1
  }
  
  
  function log2() {
    console.log(2)
    return 2
  }
  
  
  function debounce(fn, time) {
  
    let setTimeoutId
  
    return function() {
      if(setTimeoutId) {
        return
        //clearTimeout(setTimeoutId)
      }
  
      setTimeOutId = setTimeout (() => {
        
        return setTimeoutId = null
        fn.apply(this, arguments);
      }, time)
    }
  }
  
  console.log(debounce(log, 3))
  console.log(debounce(log2, 4))