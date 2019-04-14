function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

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

// API design gudilnies ---https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9





// Life CYCLES --- REACT 

	• componentWillMount, ComponentWillReceiveProps and componentWillUpdate will be depracated because of features like async rendering


	• They will be rename to 
		○ UNSAFE_componentWillMount
		○ UNSAFE_componentDidMount
		○ UNSAFE_componentWillUpdate
	
	
	• Though two new lifecycle will be made 
		○ getDerivedStateFromProps
		○ getSnapShotBeforeUpdate



-async rendering with componentWillmount will cause multiple rendering of the component tree

	- You can use 'supense' for making api to server side the same way you use to for componentWillMount


getDerivedStateFromProps
	- This method is going to handle what componentWillRecieveProps was able to do along with componentDidUpdate. It is static. It is called after a component is created and also called when it receives a new prop. This will be the safer alternative to componentWillRecieveProps.



-
getSnapshotBeforeUpdate(prevProps, prevState) 
This is going to handle what componentWillUpdate was able to do along with componentDidUpdate. This is called right before the DOM is updated. The value that is returned from getSnapshotBeforeUpdate is passed on to componentDidUpdate.

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
			
			
	• 
	• ComponentWIllMoun
	• ComponentDiMount
	• ComponenentWIll Receiveprop
	• ComponentDidUpdate
ComponentWillUnmount
*/

// --------------------------------------------------------------------
// ---------------------------------------------------------------------
// "Pick any topic you want: a hobby you have, a book you’ve read, a project you worked on–anything. You have five minutes to explain it." --- SSR -- Wordpress --- A man's search for meaning




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
*/


// ===============================================================
1) You'll do better in front-end focused interviews if you're more productive at quickly implementing front-end features. You already know how to do this, but practicing it more will help you get faster and better at it


2) Mentorship - One way of improving at this is to ask a more experienced programmer friend to review your code for you and suggest ways you can make it shorter


3) You should learn more about how frontend apps connect to the rest of a web stack. 


The Algorithm Design Manual: the third chapter : --https://teachyourselfcs.com/#algorithms.  https://www.interviewcake.com/?utm_source=triplebyte. --- https://www.interviewcake.com/data-structures-and-algorithms-guide?utm_source=triplebyte


//============================================React
- Tell me your experience with React - What do you want to use to pass data from a parent component to a child component? - Have you used Redux? Tell me about what you've done with it - Could you give me some examples of why I would want to use React? Or to not use React? - Can you explain the life cycle methods? - Which data structures are immutable? Which ones are mutable? - Can you explain apply, call, and bind? - 



Event loop

https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=2s


https://community.developer.visa.com/t5/Blogs/bg-p/Developer_Blog