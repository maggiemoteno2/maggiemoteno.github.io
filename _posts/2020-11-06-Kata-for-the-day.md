---
Layout:
Title: "Katas for the day"
Date: 2020-11-06
---


### Introduction
So Today i did two katas one was Count the numbers of cubes with paint on the second  one was Find the position

### instructions
instructions for count the numbers of cutes kata were as follow 'Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

The number of times that the cube is cut in each dimension --> the argument 'cuts'.

To solve the puzzle you must create a function that returns an integer representing the total number of small cubes with at least one red side.'
instructions of finding the position kata were straight to the point :'When provided with a letter, return its position in the alphabet.'


### my solution 
const countSquares = cuts => (cuts ? 6 * cuts**2 + 2 : 1)

solution for finding the postion: const position = letter => `Position of alphabet: ${letter.charCodeAt() - 96}`