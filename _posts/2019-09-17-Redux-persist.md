---
Layout:
Title: "Redux Persist"
Date: 2019-09-18
categories:
---

### What Is Redux-Persist?
Redux-Persist saves the Redux Store when the app is closed or refreshed in Expo.

###The Merge Process
The merge process is meant to “just work” automatically for you.
When your app launches, redux sets an initial state. Shortly after this, Redux Persist retrieves your persisted state from storage. Your persisted state then overrides any initial state.
 
 ###Advanced Customization
 -Transforms
 Transforms allow you to customize the state object that gets persisted and rehydrated.
 If parts of your state object are not mappable to JSON objects, the serialization process may transform these parts of your state in unexpected ways. 
 The createTransform function takes three parameters.
 -A function that gets called right before state is persisted.
-A function that gets called right before state is rehydrated.
-A config object.

