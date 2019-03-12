---
Layout:
Title: "About if else statement and the switch case"
Date: 2019-03-06
---
## About if else statement and switch case
Most of the time when we write code, we want the code to perform different actions.
So the "if" statements condition for cases like this,different actions for different conditions.
In JavaScript we can write an if statement like this:

function testElseIf(value) {
  if (value > 10) {
    return "Greater than 10";
  }
  
  else if(value < 5) {
    return "Smaller than 5";
  }
  else{
  return "Between 5 and 10";
  }
}
testElseIf();

The switch case statement is more or less the same when compared with the else if statement.
But the code is much simpler and easier to read according to my opinion.
Because it has less curly braces and straight forward.
This is how we can write a switch case statement:

 function Switching(value) {
  var answer = "";
  
  switch(value){
    case "bob":
    answer = "Marley";
        break; 
    case 42:
    answer = "The Answer";
        break;
    case 1: 
    answer = "There is no #1";
        break;
    case 99:
    answer = "Missed me by this much!";
        break;
    case 7:
    answer = "Ate Nine";
        break; 
  }
  
  return answer;  
}

Switching(); 