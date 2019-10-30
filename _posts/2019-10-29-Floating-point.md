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
1	charAt()
Returns the character at the specified index.

2	charCodeAt()
Returns a number indicating the Unicode value of the character at the given index.

3	concat()
Combines the text of two strings and returns a new string.

4	indexOf()
Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

5	lastIndexOf()
Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.

6	localeCompare()
Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.

7	match()
Used to match a regular expression against a string.

8	replace()
Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.

9	search()
Executes the search for a match between a regular expression and a specified string.

10	slice()
Extracts a section of a string and returns a new string.

11	split()
Splits a String object into an array of strings by separating the string into substrings.

12	substr()
Returns the characters in a string beginning at the specified location through the specified number of characters.

13	substring()
Returns the characters in a string between two indexes into the string.

14	toLocaleLowerCase()
The characters within a string are converted to lower case while respecting the current locale.

15	toLocaleUpperCase()
The characters within a string are converted to upper case while respecting the current locale.

16	toLowerCase()
Returns the calling string value converted to lower case.

17	toString()
Returns a string representing the specified object.

18	toUpperCase()
Returns the calling string value converted to uppercase.

19	valueOf()
Returns the primitive value of the specified object.