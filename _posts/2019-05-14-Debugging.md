---
Layout:
Title: "Debugging"
Date: 2019-02-13
---

Maggie Moteno


### Debugging

Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. 
Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. 
Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.
One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, 
then move the cursor back between them and continue coding. 
 Just be careful that you don't close the string too early, which causes a syntax error.
  == and === operators check for equality 

  If the arguments are different types, such as a function expecting an array and an integer, 
  this will likely throw a runtime error. 
  If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. 
  Make sure to supply all required arguments, in the proper order to avoid these issues.
  example:
  function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);//change line
console.log(power);



