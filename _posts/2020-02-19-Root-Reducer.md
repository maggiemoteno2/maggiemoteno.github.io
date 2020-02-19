---
Layout:
Title: "Root Reducer"
Date: 2020-02-19
---
### what is rootReducer file
its a file where all your combine Reducers are found or placed.
Combine reducers combines all the reducers to that they can be passed to create store as one object.the reason we combine reducers its because  createStore expects one reducer, you can't pass multiple of reducers therefore rootReducer file will have combined reducers in an object so when u pass it to your create store its just one.
before passing your reducer to combine reducer you must firstly check the following rules:
actions must return state given to it as an argument 
it must not return undefined 


### why do we need to split reducers into multiple reducers and why do we need to combine them?
 its easy to use reducers when they are split bcz you can manage them easily 
it makes one big global state which have substates which have their own state

