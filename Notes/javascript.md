## Introduction

Here are my notes for the Foundations course: Section - JavaScript Basics.

---
## Contents

### JavaScript Basics
1. [Variables and Operators](#js-varop)
2. [Data Types and Conditionals](#js-typecondi)
3. [Function Basics](#js-func)
4. [Clean Code](#js-clean)
5. [Arrays and Loops](#js-arrayloop)

---

### JavaScript

<a id= "js-varop"></a>
#### Variables and Operators
- Variable names can only contain letters, digits or symbols $ and _. First char cannot start with a digit.
- Variables: `let`, constants: `const`
- Constants: Hard-coded values use names that are capitalized.
- Backticks are like f-strings, i.e. `alert (INSERT_BACKTICK Hello, ${name}! INSERT_BACKTICK)`

<a id= "js-typecondi"></a>
#### Data Types and Conditionals
- Values of different types are converted to numbers with `==` but not with `!==` (Strict equality check).
- `null` and `undefined` are `==` to each other but not with any other values.
- String comparison is done character by character. When curr chars are the same, move on to the next to compare.
- `alert( firstName || lastName || nickName || "Anonymous");`: An example of a use of truthy values.
- `false || alert("printed");`: This feature is used to execute commands only if condition on left is false.
- AND (`&&`) returns the first falsy value and OR (`||`) returns the first truthy value.
- `alert( alert(1) && alert(2) );`: Shows 1, then undefined.
- Ternary operator: `condition ? run this code : run this code instead`

<a id= "js-func"></a>
#### Function Basics
- Functions can modify global variables if you do not use `let` inside the function.

```
//-----------------------------------------------
// Global variable modified.
//-----------------------------------------------
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

//----------------------------------------------
// Global variable not modified.
//----------------------------------------------
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}
```
- if-else can be replaced with question mark operator `(age > 18) ? true : confirm('Did parents allow you?');` or OR (||) `(age > 18) || confirm('Did parents allow you?');`
- Note difference between function declaration (No `;` after `}`.) and function expression.


```
//----------------------------------------------
// Function declaration
//----------------------------------------------
function sum(a, b) {
  return a + b;
}

//----------------------------------------------
// Function expression
//----------------------------------------------
let sum = function(a, b) {
  return a + b;
};

//----------------------------------------------
// Arrow function
//----------------------------------------------
let sum = (a, b) => a + b;

//----------------------------------------------
// Arrow function: Multiline requires return statement
//----------------------------------------------

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
```
- Function declaration done when JS prepares to run script and hence, can be called earlier. Expression is only called when execution reaches it and can only be used thereafter.
- Function declaration declared within a code block cannot be accessed outside of it.
- Anonymous functions are often used as callback functions.: `function() { alert("You agreed."); }`
- Arrow functions
```
//----------------------------------------------
// Function expression
//----------------------------------------------
let func = function(arg1, arg2, ..., argN) {
  return expression;
};

//----------------------------------------------
// Arrow function
//----------------------------------------------
let func = (arg1, arg2, ..., argN) => expression;
```

<a id= "js-clean"></a>
#### Clean Code
- Functions should start with verbs and variables with nouns/ adjectives.

<a id= "js-arrayloop"></a>
#### Arrays and Loops
- Arrays use numbered indexes (Element names to be numbers.) vs. objects use named indexes (Element names to be strings.).
- `[]` is used for accessing both arrays and objects. Hence, cannot use negative bracket indexing. E.g. `[-1]`. Use `at()` method instead.
- `delete()` leaves `undefined` holes in array. Use `pop()` or `shift()` instead.
- do-while loops: When you want loop body to be executed at least once.
- Labels: For breaking out of multiple nested loops at once. Can also be used for `continue`.
```
label: {
  // ...
  break label; // works
  // ...
}
```
- To run JavaScript in VS: `node <FILENAME>.js`
- Use of `const temp` when trying to switch 2 variables or `if (min > max) [min, max] = [max, min];`.
- Coding tip: Give names to expressions!
```
const leapYears = function (year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (
    isYearDivisibleByFour &&
    (!isCentury || isYearDivisibleByFourHundred)
  ) {
    return true;
  } else {
    return false;
  }
};
```
