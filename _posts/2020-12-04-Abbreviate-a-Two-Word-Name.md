---
Layout:
Title: "Abbreviate a Two Word Name"
Date: 2020-12-04
---
### Introduction
today i was doing a kata called Abbreviate a Two Word Name

### Instructions 
`Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F`

### My Solution 
const abbrevName = name =>
  name
    .split(' ')
    .map(name => name[0].toUpperCase())
    .join('.')
