---
Layout:
Title: "Props vs State".
Date: 2019-07-29
---

### What is a prop?
props are variables passed to it by its parent component.
a component can also initialize the state without looking at props.
Props should never be changed in a child component
Props are also used to allow child components to access methods defined in the parent component. This is a good way to centralize managing the state in the parent component, and avoid children to have the need to have their own state.

### what is a state?
State on the other hand is still variables, but directly initialized and managed by the component.

