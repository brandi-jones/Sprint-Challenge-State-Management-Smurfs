1. What problem does the context API help solve?
--	Context API helps solve the issue of passing down props from component to component (prop drilling) in react applications where state is needed in many components. With Context API, we can store data on a context object, and retrieve that data in the necessary component from the context object instead of props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
--	The store created when using redux is where everything that changes within your application is represented by a single Javascript object. The store contains all of the state for the application. Reducers are where your state is updated depending on certain actions that are called. Actions have a type property (that explains what action took place) and an optional payload property, which is where you would pass any information through that your reducer may need to update the state accordingly. Actions tell the reducer how to update the state and what with, then reducers actually update the state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
--	Application state is global, and your component state is local. So, component state lives within a specific component and can only be updated within that component, and then passed down as props to its children. Global state is where redux comes in, with a centralized global store which is accessible to any component that may subscribe to the store.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
--	Actions in Redux are dispatched synchronously, which may pose a problem when you need to perform side effects. Redux allows for middleware that intercepts an action from being dispatched and the action then reaching the reducers. Redux Thunk is a middleware that allows you to call action creators that return a function instead of an action object. Simply put, it provides the ability to handle asynchronous operations inside action creators. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
--	Personally, I am very intrigued by Redux. I was a bit intimidated at first earlier this week, but as the week has went along I’ve grown a bit more comfortable with it, and I can see how useful it can be in large scale applications to handle state management. I like that all of the moving parts serve a specific purpose, and make sense once you are able to spend some time practicing and studying over them. 

