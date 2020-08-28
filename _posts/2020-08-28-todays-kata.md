---
Layout:
Title: "Today's kata"
Date: 2020-08-14
---

### Introduction
Today's kata was to solve the cockroach's speed

### Instructions 
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

### my code
const cockroachSpeed = s => Math.floor(s * (100000 / 3600))
The input is a Real number (actual type is language dependent) and is >= 0. result had to be an Integer.
my function takes an argument (s) i used Math.floor method for round off 