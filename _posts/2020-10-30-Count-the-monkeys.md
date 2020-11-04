---
Layout:
Title: "Count the Monkeys"
Date: 2020-10-30
---


### Introduction 
So Today i was doing Count the Monkeys kata a little bit challenging but i managed to pass the challenge with the help of Google and asking my peers 

### Instructions 
'You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.'


### My solution 
const monkeyCount = n => [...new Array(n)].map((_, i) => i + 1)