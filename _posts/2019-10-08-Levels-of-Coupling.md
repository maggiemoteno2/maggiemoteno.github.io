---
Layout:
Title: "Levels of Coupling"
Date: 2019-10-07
categories:
---

### Levels of Coupling
-Content Coupling: Content coupling, or pathological coupling, occurs when one module modifies or relies on the internal workings of another module. Changing the inner working will lead to the need of changing the dependent module. An example would be a search method that adds an object which is not found to the internal structure of the data structure used to hold information.

-Common Coupling: Global coupling, or common coupling, occurs when two or more functions share global data. Any changes to them have a ripple effect. An example of global coupling would be global information status regarding an operation, with the multiple modules reading and writing to that location.
External Coupling: External coupling occurs when one or more modules share a format, interface or communication protocol, that is imposed upon them. This usually happens when modules are in direct communication with infrastructure layers, e.g., OS functions.

-Control Coupling: Control coupling occurs when one module controls the flow of another by passing control information, e.g., a control flag, a comparison function passed to a sort algorithm.
Stamp Coupling: Stamp coupling, or data structure coupling, occurs when modules share a composite data structure and use only a part of it, possibly different parts. One example is of a print module that accepts an Entity, and retrieves its information to construct a message.

-Data Coupling: Data coupling occurs when methods share data, regularly through parameters. Data coupling is better than stamp coupling, because the module takes exactly what it needs, without the need of it knowing the structure of a particular data structure.

-Message Coupling: Message coupling is the lowest form of coupling, realized with decentralization and message passing. Examples include Dependency Injection and Observables.
