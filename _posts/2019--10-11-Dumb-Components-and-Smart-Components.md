---
Layout:
Title: "Dumb Components and Smart Components"
Date: 2019-02-13
categories:
---

### Dumb Components
Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM.Once that is done,the component is done with it
presentational components only have render

### Smart Components
Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.
the container components are separated from the presentational components and each handles their own side of things. The container components do the heavy lifting and pass the data down to the presentational components as props.
container components are class based components
The root component off an app is a good example of a smart component.