-“How do you prefer to handle asynchronous state updates?”
	• For asynchronous state update in React I tend to use lifecycle like componentDidmount to fire API request. Then I follow up with setState by passing a callback to execute when state has finished updated. In addition if I instead fire an action which goes to a store like redux through a middleware: I implement method like Async/await or generators to dispatch another action that will update a global store/state once the api request has been completed.
	
-“Can you talk a little bit about how you structure your projects?”
	I structure my projects from a container to child component structure. A container will be class component which handle all the logic and and communication to the global store like redux. While child component will tend to be more presentational and functional like component that renders jsx and take props from parent containers.
	
-“How do you decide which state goes in your UI components vs. your data store?”
	If it is going to  be a state or data which deals with only that component like an onChange or input text I will store it in local of state, like this.state. While if it is data that needs to be communicated between different containers typically from api or a user account details I will save it in a data store like redux.
	
-“How do you prefer to style your components?”
	I prefer to style my components in a CSS modules type of way. With each component having their specific style file, that way I keep the scope changes only of that component. In addition I structure my style sheet through Sass with very descriptive class names in a parent to child hierarchy for specificity and pseudo events.
	
-“If you had to make a site work offline, what kind of architecture would you use?”
	To make a site work offline I will use mechanism like service workers to cache the website resources in the browser. The site would also need a promise based API for it's https request. Combined with local storage or cookies, the site can have most it's functionality even when there is in no connection.
	
-“What is your preferred front end stack?”
Javascript, React as UI library, Redux as store, Redux-saga for store middleware, some Node.js or GraphQL for API. 