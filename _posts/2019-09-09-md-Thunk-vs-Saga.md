---
Layout:
Title: "Thunk vs Saga"
Date: 2019-09-09
categories:
---
###what is a thunk?
A thunk is a function that acts as a wrapper in that it wraps an expression to delay its evaluation.
Redux-Thunk middleware allows you to write action creators that return a function instead of the typical action object. The thunk can then be used to delay the dispatch of an action until the fulfillment of an asynchronous line of code.

###two parts to Redux-Thunk
-A thunk creator, which is an action creator that returns a thunk (a.k.a. asynchronous action creators)
-The thunk itself, which is the function that is returned from the thunk creator and accepts dispatch and setState as arguments

###Why do we need to use Thunk?
The reason that we need to use a middleware such as Redux-Thunk is because the Redux store only supports synchronous data flow. Thus, middleware to the rescue! Middleware allows for asynchronous data flow, interprets anything that you dispatch and finally returns a plain object allowing the synchronous Redux data flow to resume.

###What is Saga?
Redux-Saga is a library that aims to make application side effects
easier to handle and more efficient to execute.
The idea is that a saga is similar to a separate thread in your application that’s solely responsible for side effects. However, unlike Redux-Thunk, which utilizes callback functions, a Redux-Saga thread can be started, paused and cancelled from the main application with normal Redux actions. Like Redux-Thunk, Redux-Saga has access to the full Redux application state and it can dispatch Redux actions as well.