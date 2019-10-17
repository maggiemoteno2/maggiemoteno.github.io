---
Layout:
Title: "principles of Functional Programming"
Date: 2019-10-16
categories:
---
### What is functional programming?
Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

### Pure functions
-It returns the same result if given the same arguments (it is also referred as deterministic).

-It does not cause any observable side effects.

It returns the same result if given the same arguments

### Immutability
When data is immutable, its state cannot change after it’s created. If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.

Here we have:

-trim: removes whitespace from both ends of a string

-lower-case: converts the string to all lower-case

-replace: replaces all instances of match with replacement in a given string

### Functions as first-class entities
Functions as first-class entities can:

-refer to it from constants and variables

-pass it as a parameter to other functions

-return it as result from other functions

