function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}
// creating a LinkedList invole setting up the value and node
let linkedList = new LinkedListNode(9);
console.log(linkedList.next);
linkedList.next = 10;
console.log(linkedList.next);


function reverse(head) {
    let node = head,
        previous, // previous is empty
        tmp;
        https://wsvincent.com/javascript-reverse-linked-list/
    while (node) {
        // save next before we overwrite it

        tmp = node.next;

        // now overwite with previous which has no value

        node.next = previous;

        // now move forward in the list

        previous = node; // basically set previous to be head
        node = tmp // the temp node.next we previously saved
    }
}

function reverseList(linkedList) {
    // first I will save the node in current variable
    // then I will I will have a previous and a nextVal variable 
    
    
    let node = linkedList.head,
        previous = null;
     
    
    // we goin to loop over until we come to the very end of the linkedList
    while(node) {
      let save = node.next;
      
      // not breack it 
      node.next = previous;// empty
      
      previous = node;
      
      //increment node to he next node 
      node = save
    }
    
    linkedList.head = previous;
    return previous;
  }
  
  var inputList = new LinkedList([1,2,3,4])
  reverseList(inputList)
  
  console.log(inputList);


  var reverseLinkedList = function(linkedlist) {
    var node = linkedlist;
    var previous = null;
  
    while(node) {
      // save next or you lose it!!!
      var save = node.next;
      // reverse pointer
      node.next = previous;
      // increment previous to current node
      previous = node;
      // increment node to next node or null at end of list
      node = save;
    }
    return previous;   // Change the list head !!!
  }
  linkedlist = reverseLinkedList(linkedlist);

//===========================
// API design gudilnies ---https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9
/*
http://api.yourservice.com/v1/companies/34/employees is a good example, which has the version number of the API in the path.
If there is any major breaking update, we can name the new set of APIs as v2 or v1.x.x

*/




// Life CYCLES --- REACT 

	• componentWillMount, ComponentWillReceiveProps and componentWillUpdate will be depracated because of features like async rendering
	• Though two new lifecycle will be made 
		○ getDerivedStateFromProps
		○ getSnapShotBeforeUpdate


-async rendering with componentWillmount will cause multiple rendering of the component tree
- You can use 'supense' for making api to server side the same way you use to for componentWillMount

getDerivedStateFromProps
    - This method is going to handle what componentWillRecieveProps was able to do along with componentDidUpdate.
    It is static. It is called after a component is created and also called when it receives a new prop. This will be the safer alternative to componentWillRecieveProps.

getSnapshotBeforeUpdate(prevProps, prevState) 
This is going to handle what componentWillUpdate was able to do along with componentDidUpdate.
This is called right before the DOM is updated. The value that is returned from getSnapshotBeforeUpdate is passed on to componentDidUpdate.

/*
	• Initial Render 
		○ FIRST HOOK WHICH goes is contructor
			§ Then getDerivedStatefromprop - replace of componentwillrecievep prop
			§ Then render --- cannot use this setState in it to avoid render

		○ Rerender pahse
			§ getDerivedState from props -- again
			§ shouldcomponentUpdate - only inrerender
			§ Render
				□ getSnapshotbefore update -- replacing componentwillupdate
			§ ComponentdidUpdate --- can do the same thing as componentdid mount
		○ componenwillunmount
	Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
* constructor()
* static getDerivedStateFromProps()
* render()
* componentDidMount()


Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

* static getDerivedStateFromProps()
* shouldComponentUpdate()
* render()
* getSnapshotBeforeUpdate()
* componentDidUpdate()
https://blog.bitsrc.io/understanding-react-v16-4-new-component-lifecycle-methods-fa7b224efd7d

// --------------------------------------------------------------------
// ---------------------------------------------------------------------
// "Pick any topic you want: a hobby you have, a book you’ve read, a project you worked on–anything.
// You have five minutes to explain it." --- SSR -- Wordpress --- A man's search for meaning




// CLasses
• A class is like a blueprint - a description of the object to be created.
○ Classes inherit from other classes and create subclass relationships 



• Class Foo {}
• The class inheritance uses the prototype chain to wire children
'Constructor.prototye' to the parent 'Constructor.proptotype' then the super() constructor is also called
This form single parent/child hierarchies


https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9

• A prototype inheritance is a working object instance
Instances may be composed from many different source objects, allowing for easy selective inheritance and a flat [[Prototype]] delegation hierarchy. In other words, class taxonomies are not an automatic side-effect of prototypal OO: a critical distinction.



// -=======================================================================
// == Functions ====
// -- https://codeburst.io/playing-with-javascript-promises-a-comprehensive-approach-25ab752c78c3
---https://codeburst.io/all-about-javascript-functions-in-1-article-49bfd94b31ab

/* The reason we use arrow function a lot in react: 
	• It's because arrow function don’t have its lexical scope so it use the this of the class component



Javascript ---> event loop 
Every time you call a setTimeout function or you do some async operation — it is added to the Event Table. This is a data structure which knows that a certain function should be triggered after a certain event. Once that event occurs (timeout, click, mouse move) it sends a notice. 
IT send a notice for a nrew event to be added to the queue

callStack --- eventQueue -- it checks contantly if ther is the callstack is empty then add the uppermost event function to the callstack
*/

// Promises
const myPromise = new Promise((resolve, reject) => {
  resolve(1); // resolve the promise
  reject('oop sorry'); // reject the promise with error
});

myPromise.then((x)=>{ // use .then for resolving promises
  console.log(x);
})

myPromise.catch((err)=> {
  console.log(err);
})
// ====================================
const sum = (...args) => {
  console.log(args);
  let result = 0;
  result = args.reduce((a , b) => {
    return a + b;
  })
  return result;
}

// build  a tree for the following data:

/*
let data = [
  {
    title: "menu 1",
    children :[
      { title: "menu 1.1"},
      { 
        title: "menu 1.2",
        children: [
          {title: "menu 1.2.1"},
          {title: "menu 1.2.2"},
        ]
      },
    ]
  },
  {
    title: "menu 2",
    children :[
      { title: "menu 2.1"},
      { title: "menu 2.2"},
    ]
  } 
]
*/

// Accepts two arguments
// data-> the data to transform
// isChild -> default false, used to indicate whether the node
//            being rendered is a child element or not

function buildTree(data, isChild = false) {
  let html = '<ul>';

  // run the forLoop over the data
  data.forEach((d) => {
    // for every data element render <li>
    html += `<li>${d.title}</li>`
    // if the current data element has children then call the
    // buildTree again passing in the children and isChild = true
    if (d.children) { // if it has children
      html += buildTree(d.children, true);
    }
  });
  // build the closing <ul> tag

  // build the closing ul tag
  html += '</ul>';
  return html;
}


// ================================
. Tree shaking or dead code elimination means that unused modules will not be included in the bundle during the build process.

// ===============================================================
1) You'll do better in front-end focused interviews if you're more productive at quickly implementing front-end features. You already know how to do this, but practicing it more will help you get faster and better at it


2) Mentorship - One way of improving at this is to ask a more experienced programmer friend to review your code for you and suggest ways you can make it shorter


3) You should learn more about how frontend apps connect to the rest of a web stack. 


The Algorithm Design Manual: the third chapter : --https://teachyourselfcs.com/#algorithms.  https://www.interviewcake.com/?utm_source=triplebyte. --- https://www.interviewcake.com/data-structures-and-algorithms-guide?utm_source=triplebyte


//============================================React
/* - Tell me your experience with React - What do you want to use to pass data from a parent component to a child component? - 
Have you used Redux? 
Tell me about what you've done with it - Could you give me some examples of why 
I would want to use React? Or to not use React? - Can you explain the life cycle methods? - Which data structures are immutable?
 Which ones are mutable? - Can you explain apply, call, and bind? - 
*/




https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=2s


https://community.developer.visa.com/t5/Blogs/bg-p/Developer_Blog



/*
Active Javacript



*/

// remvove duplicate in 
let arr = [3, 2, 1, 4, 6, 5, 7, 5]
function removeDup(arr) {
// we will have a unique holder
// the loop through
// have a hash table 
// if if already there then dont put i
let unique = [];
let trakObj = {};
for(let i = 0; i < arr.length; i++) {
if(!trakObj.hasOnwProperty(arr[i])) {
unique.push(arr[i]);
trackObj[arri] = 1
}
}
return unique
}

// reverse every word in a string
let = 'fdkalsfj test bam';
function reverseS(str) {
// we will have a unique holder
// the loop through
// split the string in an array
// loop backward 
// add in a new array 
// then join
let tempStr = str.split('')
let newHold = [];
for(let i = tempStr.length - 1; i >= 0; i--) {
newHold.push(tempStr[i])
}
newHold.join();
return newHold;
}

// To enguer and deque means to add to stack
let inputStack = [];
let ouputStack = [];
function enqueue(stackInput, item) {
return stackInput.push(item)
}
function createBase(baseNumber) {
return function(N) {
// we are referencing baseNumber here even though it was declared
// outside of this function. Closures allow us to do this in JavaScript
return baseNumber + N;
}
}
var addSix = createBase(6);

var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;
findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8
function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
// Iterate through array to find the sum of the numbers
var sumOfIntegers = 0;
for (var i = 0; i < arrayOfIntegers.length; i++) {
sumOfIntegers += arrayOfIntegers[i];
}
// Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
// Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
// N is the upper bound and M is the lower bound
upperLimitSum = (upperBound * (upperBound + 1)) / 2;
lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;
theoreticalSum = upperLimitSum - lowerLimitSum;
return theoreticalSum - sumOfIntegers;
}


// ==================== Module pattern

• Factory function: -- basically create functions main purpose is to create object
○ Example 
  § Function createCircle(param) {
    Return {  radius,
      draw() {
       }
    };
  }
○ const myCircle = createCircle(1);

• Constructor functions: function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const circle = new circle(1);


// =============== thinking outside the box of React -----
// Do not be set up on the mindset of React
// React is a virtual Dom tree which return an object
  // there might be situation where you have to do stuff outside the react dome tree so you musht think aout the box to do so