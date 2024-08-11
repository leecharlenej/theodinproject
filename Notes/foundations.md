## Introduction

Here are my notes for the Foundations course.

---
## Contents

1. [CSS Foundations](#css)
2. [Flexbox](#flexbox)
3. [JavaScript](#javascript)

---

<a id= "cssinspect"></a>
### CSS Foundations

#### Inspecting HTML and CSS
- Right-click > Inspect
- HTML: Initial content, DOM: Current content (After rendering JS.)
- Right-click on any element for other options.
- To add HTML: Right-click on element. > Edit as HTML.

#### The Box Model
- Every element on a web page is held in a box.
- Width and height refers to content.
- Padding adds around the content.
- Border adds around the content; separates the content from the margin.
- Margin adds around the border; separates one box's border from another's. Note that margins overlap/ collapse.
- Use the Inspect tool for a diagram of the box.
- To space 2 elements away from each other: Use margin.
- To space out element from itself: Use padding.
- `boxing-sizing: border-box;`: Default is `content-box`. Usually added to `* {}`.Height and width will include border and padding. The content box will be smaller.

#### Block and Inline
- `display: inline-block`: Inline elements with block-style padding and margin.
- Generic tags: `<div>` for block and `<span>` for inline.
- `inline`: Doesn't respect width and height, padding top and bottom exist but overlap with other boxes
- `inline-block`: Width, height and padding are respected. Elements are side-by-side.
- `block`: Everything is respected but elements are on new lines.

<a id= "flexbox"></a>
### Flexbox
- Used to arrange items into rows or columns; flex based on the rules defined.
- Might not respect width value, depending on parent container.
- flex container: Element that has `display:flex`.
- flex item: Anything that lives directly inside a flex container.
- `flex`: Shorthand for `flex-grow`, `flex-shrink`, `flex-basis`.
- `flex: 1` = `flex: 1 1 0`
- `flex-grow`: How it grows relative to other flex items in the flex container.
- `flex-shrink`: Only applys when total size of flex items exceed size of flex container and hence, need to shrink to fit.
- `flex-basis`: Sets intial size of flex item. `auto` checks item for a width declaration.
- `flex-direction`: Default = row.
- Very useful website: [(here)](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)

<a id= "javascript"></a>
### JavaScript

#### Variables and Operators
- Variable names can only contain letters, digits or symbols $ and _. First digit cannot start with a digit.
- Variables: `let`, constants: `const`
- Constants: Hard-coded values use names that are capitalized.
- Backticks are like f-strings: E.g. `alert (INSERT_BACKTICK Hello, ${name}! INSERT_BACKTICK)`

#### Data Types and Conditionals
- Values of different types are converted to numbers with `==` but not with `!==` (Strict equality check).
- `null` and `undefined` are `==` to each other but not with any other values.
- String comparison is done character by character. When curr char are the same, move on to the next to compare.
-`alert( firstName || lastName || nickName || "Anonymous");`: An example of a use of truthy values.
- `false || alert("printed");`: This feature is used to execute commands only if condition on left is false.
- AND (&&) returns the first falsy value and OR (||) returns the first truthy value.
- `alert( alert(1) && alert(2) );`: Shows 1, then undefined.
- Ternary operator: `condition ? run this code : run this code instead`

### Function Basics
- Functions can modify global variables if you do not use `let` inside the function.

```
// ---------- Global variable modified. ---------
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

// ---------- Global variable not modified. ----------
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}
```
- if-else can be replaced with question mark operator `(age > 18) ? true : confirm('Did parents allow you?');` or OR (||) `(age > 18) || confirm('Did parents allow you?');
- Difference between function declaration (No `;` after `}`.) and function expression.


```
// ---------- Function declaration ----------
function sum(a, b) {
  return a + b;
}

// ---------- Function expression ----------
let sum = function(a, b) {
  return a + b;
};

// ---------- Arrow function ----------
let sum = (a, b) => a + b;

// ---------- Arrow function: Multiline requires return statement ----------

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};
```
- Function declaration done when JS prepares to run script and hence, can be called earlier. Expression isn't.
- Function declaration declared within a code block cannot be accessed outside of it.
- Anonymous functions are often used as callback functions.: `function() { alert("You agreed."); }`
- Arrow functions
```
// ---------- Function expression ----------
let func = function(arg1, arg2, ..., argN) {
  return expression;
};

// ---------- Arrow function ----------
let func = (arg1, arg2, ..., argN) => expression;
```