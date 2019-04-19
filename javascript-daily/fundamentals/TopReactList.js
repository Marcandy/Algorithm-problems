1) Compare and contrast creating React Components in ES5 and ES2015 (also known as ES6). What are the advantages and disadvantages of using one or the other? Include notes about default props, initial state, PropTypes, and DisplayName.
	
	
Creating React Components the ES5 way involves using the React.createClass() method:

var Comments = React.createClass({
displayName: 'Comments',
getInitialState: function(){
return {comments: []}
},
getDefaultProps: function(){
return {some_object: {a:1, b:2, c:3}}
},
_handleClick: function(){
alert('hello world!')
},
render: function(){
return <div>
    There are {this.state.comments.length} comments
    <button onClick={this._handleClick}>click me!</button>
</div>
}
})
This Comments Component can now be rendered either inside another React Component or directly in the call to ReactDOM.render():
ReactDOM.render(<Comments />, document.querySelector('.app'))
ES5 Components have some particular qualities, which we’ll note:
    1. Like the above example, to set the state to an initial value, create the getInitialState() function on the Component. What it returns will be the initial state for a Component when rendered.
    2. Additionally, you can set the default props for the component to have a certain value with the getDefaultProps() method on the ES5 version.
    3. The displayName is used in debugging and error reporting by React. If you use JSX, then the displayName is automatically filled out.
    4. For some, it is common practice to denote a custom method added to a React Component by prefixing it with an underscore, hence _handleClick. _handleClick is passed as the onClick callback for a button in the code above. We can’t do this so easily in the ES6 API of React, because the ES5 version has autobinding, but the ES6 does not. Let’s take a look at what autobinding provides:
Auto-binding
Consider the following piece of code:
var thing = {
name: 'jen',
speak: function(){ console.log(this.name) }
}
window.addEventListener('keyup', thing.speak)
Invoking thing.speak() in the console will log "jen", but pressing a key will log undefined because the context of the callback is the global object. The browser’s global object – window – becomes this inside the speak() function, so this.namebecomes window.name, which is undefined.
React in ES5 automatically does autobinding, effectively doing the following:
window.addEventListener('keyup', thing.speak.bind(thing))
Autobinding automatically binds our functions to the React Component instance so that passing the function by reference in the render() works seamlessly.
Creating React Components the ES6 way works a little differently, favoring the ES6 class ... extends ... syntax, and no autobinding feature:
class Comments extends React.Component {
constructor(props){
super(props)
this.state = {comments: []}
}
_handleClick(){
alert('hello world!')
}
render(){
return <div>
    There are {this.state.comments.length} comments
    <button onClick={() => this._handleClick}>click me!</button>
</div>
}
}
Comments.defaultProps = {a:1, b:2, c:3}
Comments.displayName = 'Comments'
    1. Notice that in ES6, we have a constructor() that we use to set the initial state,
    2. We can add default props and a display name as properties of the new class created, and
    3. The render() method, which works as normal, but we’ve had to alter how we pass in the callback function. This current approach (<button onClick={() => this._handleClick}>click me!</button>) will create a new function each time the component is re-rendered; so if it becomes a performance bottleneck, you can always bind manually and store the callback:
class Comments extends React.Component {
constructor(...args) {
super(...args);
this.state = { toggledOn: false };
this._handleClick = this._handleClick.bind(this);
}
_handleClick() {
this.setState(prevState => ({ toggledOn: !prevState.toggledOn });
}
render() {
return <button onClick={this._handleClick}> { this.state.toggledOn ? 'ON' : 'OFF' } </button>
}
}
Or with class fields syntax:
class Comments extends React.Component {
state = { toggledOn: false };
_handleClick = () => {
this.setState(prevState => ({ toggledOn: !prevState.toggledOn }));
};
render() {
return <button onClick={this._handleClick}> {this.state.toggleOn ? 'ON' : 'OFF' </button>
}
}




2)
Similarly to keys, refs are added as an attribute to a React.createElement() call, such as <li ref="someName"/>. The refserves a different purpose, it provides us quick and simple access to the DOM Element represented by a React Element.
Refs can be either a string or a function. Using a string will tell React to automatically store the DOM Element as this.refs[refValue]. For example:
class List extends Component {
constructor(p){
super(p)
}
_printValue(){
console.log(this.refs.someThing.value)
}
render() {
return <div onClick={e => this._printValue()}>
    <p>test</p>
    <input type="text" ref="someThing" />
</div>
}
}
DOM.render(<List />, document.body)
this.refs.someThing inside componentDidUpdate() used to refer to a special identifier that we could use with React.findDOMNode(refObject) – which would provide us with the DOM node that exists on the DOM at this very specific instance in time. Now, React automatically attaches the DOM node to the ref, meaning that this.refs.someThing will directly point to a DOM Element instance.
Additionally, a ref can be a function that takes a single input. This is a more dynamic means for you assign and store the DOM nodes as variables in your code. For example:
class List extends Component {
constructor(p){
super(p)
}
_printValue(){
console.log(this.myTextInput.value)
}
render() {
return <div onClick={e => this._printValue()}>
    <p>test</p>
    <input type="text" ref={node => this.myTextInput = node} />
</div>
}
}
DOM.render(<List />, document.body)





============================================
•  What happens behind the scene setState is called? Can you explain Reconciliation?
the state update is scheduled, when update completes a callback is invoked, setState(newState, doneCallback). Reconciliation is the process of updating the virtual dom w/ the actual dom.





• What's the difference between controlled and uncontrolled component?
annoyance! setting default values for form components. controlled has defaults uncontrolled does not. if you do not set default state or prop values for form inputs you will get a violation error when user adds a value to the input

• you’ll constantly hear that you need to keep the state immutable, why is this important?
• https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/
○ cause this.props.somePropFromStore === this.nextProps.somePropFromStore to be always true. This would cause redux to not detect state-changes anymore, unless you implement your custom behaviour.
○ Single source of truth: The state of your whole application is stored in an object tree within a single store.
○ State is read-only: The only way to change the state is to emit an action, an object describing what happened.
○ Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers.
○ Development experience features like time travel debugging are intended as a key use case for Redux. Therefore, constraints like immutability and serializability largely exist to make those development use cases possible, as well as making it easier for developers to trace data flow and update logic.


• What does shouldComponentUpdate do? How do you use it?
○ reconciallition
○ Allow us to exit life cycle hook -- if there is no update it provides us the ability not to rerender



• prop-types, what are they used for? It allows  to check If properper of a componnet are missing and send alerts especially to the buuilddev --   yet proptypes is turned off on production in order to incresase performancer


• Current version of react is 16.8. -- We are using the latest on React.16.8.3 --- prior to that when I joined we were of coure using  React 15 - and we've updated as the new feature rolled out we implement stuff like coe splitting, tree shaking, lazy loadd-- experimental feature of hooks - and of course server side was a major aspect inproving initial render load



• React router? SPA? https://www.gistia.com/comprehensive-guide-to-react-router-4/
○ React router - user the history api to navigate through pages in a SPA with hash url or query basesd onspecific url that match in the bases index -the use of browserHistory is also prevalent
    §  <BrowserRouter>. Sa server that responds toto reuqs
    §  and the concept of Dynamic routing 
    § Through a history object
    § It give us a location par 
    § When we say dynamic routing, we mean routing that takes place as your app is rendering, not in a configuration or convention outside of a running app.
    § Route can now be renderend under specific condition
        □ Nesting can now be done as nesting component
    § Route matching Route -- will render th  component with prop -- wheere in prother are thing like { match - location, history}
    § <link> Redirect

• Tree shaking--- handle duplicate codes 

• Test : mocha -enzyme- chai - sinon for stubbing
○ Istnbul 90 percent code cover


// https://medium.com/@baphemot/a-react-job-interview-recruiter-perspective-f1096f54dd16
https://github.com/sudheerj/reactjs-interview-questions#what-are-controlled-components



</link>

/</BrowserRouter>

/</button>
// async await button 

class AwesomeProject extends Component {
    state = {}
    setStateAsync(state) {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
    }
    async componentDidMount() {
      StatusBar.setNetworkActivityIndicatorVisible(true)
      const res = await fetch('https://api.ipify.org?format=json')
      const {ip} = await res.json()
      await this.setStateAsync({ipAddress: ip})
      StatusBar.setNetworkActivityIndicatorVisible(false)
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            My IP is {this.state.ipAddress || 'Unknown'}
          </Text>
        </View>
      );
    }
  }