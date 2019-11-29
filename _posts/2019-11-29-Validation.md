---
Layout:
Title: "Validation"
Date: 2019-11-29
categories:
---
### Validation 
Form validation normally used to occur at the server, after the client had entered all the necessary data and then pressed the Submit button. If the data entered by a client was incorrect or was simply missing, the server would have to send all the data back to the client and request that the form be resubmitted with correct information. This was really a lengthy process which used to put a lot of burden on the server.

JavaScript provides a way to validate form's data on the client's computer before sending it to the web server. Form validation generally performs two functions.

Basic Validation − First of all, the form must be checked to make sure all the mandatory fields are filled in. It would require just a loop through each field in the form and check for data.

Data Format Validation − Secondly, the data that is entered must be checked for correct form and value. Your code must include appropriate logic to test correctness of data.

### Basic Form Validation
First let us see how to do a basic form validation. In the above form, we are calling validate() to validate data when onsubmit event is occurring.

### Data Format Validation
You can use JavaScript to create a complex animation having, but not limited to, the following elements −
Fireworks
Fade Effect
Roll-in or Roll-out
Page-in or Page-out
Object movements

JavaScript provides the following two functions to be frequently used in animation programs.

setTimeout( function, duration) − This function calls function after duration milliseconds from now.

setInterval(function, duration) − This function calls function after every duration milliseconds.

clearTimeout(setTimeout_variable) − This function calls clears any timer set by the setTimeout() functions.