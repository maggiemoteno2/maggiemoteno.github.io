---
Layout:
Title: "Floating point"
Date: 2019-10-29
categories:
---
### Number
The Number object represents numerical date, either integers or floating-point numbers. In general, you do not need to worry about Number objects because the browser automatically converts number literals to instances of the number class.

### Number Methods
1 toExponential()
Forces a number to display in exponential notation, even if the number is in the range in which JavaScript normally uses standard notation.

2 toFixed()
Formats a number with a specific number of digits to the right of the decimal.

3 toLocaleString()
Returns a string value version of the current number in a format that may vary according to a browser's local settings.

4 toPrecision()
Defines how many total digits (including digits to the left and right of the decimal) to display of a number.

5 toString()
Returns the string representation of the number's value.

6 valueOf()
Returns the number's value.

### Boolean
The Boolean object represents two values, either "true" or "false". If value parameter is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false.

### Boolean Methods
1 toSource()
Returns a string containing the source of the Boolean object; you can use this string to create an equivalent object.

2 toString()
Returns a string of either "true" or "false" depending upon the value of the object.

3 valueOf()
Returns the primitive value of the Boolean object.

### String
The String object lets you work with a series of characters; it wraps Javascript's string primitive data type with a number of helper methods.

As JavaScript automatically converts between string primitives and String objects, you can call any of the helper methods of the String object on a string primitive.

### String Methods
