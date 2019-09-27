---
Layout:
Title: "management for Instances"
Date: 2019-09-27
categories:
---
### Creating a component from an instance
Switching an instance is optimal when there are many differences from the parent component.
Especially in a large project with many pages. And, for instance, it`s better to attach the icon inside the button at the master level and disable it. 

Pros: allows you to quickly switch instance states with many differences
Cons: there are obviously more components, it takes time to organize them

### Hidden layers inside the master component
master component and immediately hide that:
-layer or group of vector objects to a blank userpic
-centered text layer for the initials
-notification badge, to the upper right corner
-online/offline status indicator, to the bottom one
-icon to the center of the component or to the corner, for mobile scenarios (e.g. call to edit photo, to delete it)
-multiple face images (5 male, 5 female and everything is grouped in iOS design toolkit)

Pros: quickly getting the desired instance state by switching the layers visibility
Cons: if you switch 3+ layers and attach the new styles at the same time, there are too many actions