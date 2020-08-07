---
Layout:
Title: "Redux structure"
Date: 2020-08-07
---

### Introduction
Today i learnt about the structure of Redux, how Redux is structured 

### Redux's structure
-Action types
-Actions
-Reducer 
-Container



### explanations 
Actions
they are capacities that are utilized to make a http call, for example, bring or axios and bring about a reaction from the server.at the end we return sort of activity and a payload

Action types
they contain the string esteem that distinguishes the kind of activity in the application

Reducer
they contain the string esteem that distinguishes the kind of activity in the application
In view of the activity data,the state item can be controlled utilizing diverse switch case and it use activity type

Revival persevere is a library permitting to spare the revival store in the neighborhood stockpiling of your program. … This article delineates, with an essential model, how industriousness works with your Redux store, at that point center around the continued store's change across code variants and application employments.


The App will have two Reducers: authReducer and counterReducer. In our store.js document, we can Blacklist or Whitelist reducers to endure information from just explicit reducers. For our situation, we are just going to continue the information from the authReducer. To test that Redux Persist is working in our application, we can tap the login button (Status should change to valid) and increment the counter to 5. At the point when we revive our application, the Logged In status ought to stay valid (Whitelisted) and the counter ought to be reset to 0 (Blacklisted).
