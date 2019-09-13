---
Layout:
Title: "High Order Components"
Date: 2019-09-13
categories:
---
###What is a high order component?
s an advanced technique in React for reusing component logic.High order components are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.In simple terms a higher-order component is a function that takes a component and returns a new component.

###Pass Unrelated Props Through to the Wrapped Component
High order component add features to a component. They shouldn’t drastically alter its contract. It’s expected that the component returned from a High order component has a similar interface to the wrapped component.

High order component should pass through props that are unrelated to its specific concern

### Maximizing Composability
Not all High order components look the same. Sometimes they accept only a single argument, the wrapped component,connect is a higher-order function that returns a higher-order component!

###Refs Aren’t Passed Through
While the convention for higher-order components is to pass through all props to the wrapped component, this does not work for refs. That’s because ref is not really a prop — like key, it’s handled specially by React. If you add a ref to an element whose component is the result of a HOC, the ref refers to an instance of the outermost container component, not the wrapped component.


