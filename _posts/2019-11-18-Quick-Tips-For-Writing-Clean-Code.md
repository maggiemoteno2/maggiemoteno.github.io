---
Layout:
Title: "Quick Tips For Writing Clean Code"
Date: 2019-11-18
categories:
---

### Intent Comment
Rather than mentioning intent using comments try to clarify the intent of the code in the code itself like using

Improved function names.
Constants or enum.
Intermediate variables etc.

### Apology Comment
Don’t ever write such apologetic comments. Always fix it before you push the code, or you can also add a TODO marker comment.

### Warning Comment
which are alarming or giving warning signals then go ahead and refactor the code and make it clean so that next time you or someone else visits the code, he should not be looking at those warning comments.

### Zombie Code
Zombie code is a code which is not runnable as it is commented, and it is also not dead as you keep seeing it whenever you come to the place where it has been written.

### SAY NO TO ZOMBIE CODE.
Zombie code has several ill effects some of which are

Less readability.
Ambiguity and confusion.
Hinders refactoring.