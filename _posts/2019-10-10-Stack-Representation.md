---
Layout:
Title: "Stack Representation"
Date: 2019-10-09
categories:
---

### Push Operation
The process of putting a new data element onto stack is known as a Push Operation. Push operation involves a series of steps −
-Step 1 − Checks if the stack is full.

-Step 2 − If the stack is full, produces an error and exit.

-Step 3 − If the stack is not full, increments top to point next empty space.

-Step 4 − Adds data element to the stack location, where top is pointing.

-Step 5 − Returns success.

### Pop Operation
-Accessing the content while removing it from the stack, is known as a Pop Operation. 
A Pop operation may involve the following steps −
-Step 1 − Checks if the stack is empty.

-Step 2 − If the stack is empty, produces an error and exit.

-Step 3 − If the stack is not empty, accesses the data element at which top is pointing.

-Step 4 − Decreases the value of top by 1.

-Step 5 − Returns success.

