---
Layout:
Title: "React and redux"
Date: 2019-07-22
categories:
---

###Function of redux
Redux helps you manage state by setting the state up at a global level. In the previous tutorial, we had a good look at the Redux architecture and the integral components of Redux such as actions, action creators, the store, and reducers. 

###How to Organize Redux

components: A place to store the dumb React components. These components do not care whether you're using Redux or not.
containers: A directory for the smart React components that dispatch actions to the Redux store. The binding between redux and react will be taking place here. 
actions: The action creators will go inside this directory. 
reducers: Each reducer gets an individual file, and you'll be placing all the reducer logic in this directory.
store: The logic for initializing the state and configuring the store will go here. 
The Rails style should work for small and mid-sized applications. However, when your app grows, you can consider moving towards the domain-style approach or other popular alternatives that are closely related to domain-style.

###Dispatching Actions and Subscribing to the Store
The next logical step is to dispatch the actions. Once the actions are dispatched, the state changes in response to that. To dispatch actions and to get the updated state tree, Redux offers certain store actions. They are:

dispatch(action): Dispatches an action that could potentially trigger a state change. 
getState(): Returns the current state tree of your application.
subscriber(listener): A change listener that gets called every time an action is dispatched and some part of the state tree is changed. 
