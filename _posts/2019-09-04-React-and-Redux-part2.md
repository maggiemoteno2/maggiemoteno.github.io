---
Layout:
Title: "React and Redux part2"
Date: 2019-09-04
categories:
---
###Advantages of React
-It increases the application performance.
-Because of JSX code's readability increases.
-Using react,writing UL test cases become extremely easy.

###Limitations of React
-React is just a library not a full-blown framework.
-its library is very large and takes time to understand.

###Why can't browsers read JSX?
Browsers can only  read JavaScript objects but JSX is not a regular Javascript object.
First we need to transform JSX file into JavaScript object using JSX transformers like Babel and then pass
it to the browser.

###Difference between State and Props
###State
-Receive initial value from Parent Component.
-Set default values inside component
-Changes inside Component
-Set initial value for Child Component

###Props
-Receive initial value from Parent Component.
-Parent Component can change value.
-Set default values inside Components.
-Set initial value for Child Component.

###What are high order Components?
is an advanced way of reusing the Component logic.

###What can you do with high order Components?
-Code reuse,
-State manipulation.
-Props manipulation.

###Three Principles that Redux follows
-Single Source of truth.
-State is ready-only.
-Changes are made with pure functions. 

###Components of Redux
-Action.
-Reducer.
-Store.
-view.