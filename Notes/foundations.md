## Introduction

Here are my notes for the Foundations course.

---
## Contents

### CSS Foundations
1. [Inspecting HTML and CSS](#css-htmlcss)
2. [The Box Model](#css-box)
3. [Block and Inline](#css-blockinline)

### Flexbox
1. [Flexbox](#flexbox)

### JavaScript
1. [Variables and Operators](#js-varop)
2. [Data Types and Conditionals](#js-typecondi)
3. [Function Basics](#js-func)
4. [Clean code](#js-clean)
5. [Arrays and loops](#js-arrayloop)
6. [DOM manipulation and events](#js-dom)


---

### CSS Foundations

<a id= "css-htmlcss"></a>
#### Inspecting HTML and CSS
- Right-click > Inspect
- HTML: Initial content, DOM: Current content (After rendering JS.)
- Right-click on any element for other options.
- To add HTML: Right-click on element. > Edit as HTML.

<a id= "css-box"></a>
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

<a id= "css-blockinline"></a>
#### Block and Inline
- `display: inline-block`: Inline elements with block-style padding and margin.
- Generic tags: `<div>` for block and `<span>` for inline.
- `inline`: Doesn't respect width and height, padding top and bottom exist but overlap with other boxes
- `inline-block`: Width, height and padding are respected. Elements are side-by-side.
- `block`: Everything is respected but elements are on new lines.

---

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

---

### JavaScript
<a id= "js-varop"></a>
#### Variables and Operators
- Variable names can only contain letters, digits or symbols $ and _. First digit cannot start with a digit.
- Variables: `let`, constants: `const`
- Constants: Hard-coded values use names that are capitalized.
- Backticks are like f-strings: E.g. `alert (INSERT_BACKTICK Hello, ${name}! INSERT_BACKTICK)`

<a id= "js-typecondi"></a>
#### Data Types and Conditionals
- Values of different types are converted to numbers with `==` but not with `!==` (Strict equality check).
- `null` and `undefined` are `==` to each other but not with any other values.
- String comparison is done character by character. When curr char are the same, move on to the next to compare.
-`alert( firstName || lastName || nickName || "Anonymous");`: An example of a use of truthy values.
- `false || alert("printed");`: This feature is used to execute commands only if condition on left is false.
- AND (&&) returns the first falsy value and OR (||) returns the first truthy value.
- `alert( alert(1) && alert(2) );`: Shows 1, then undefined.
- Ternary operator: `condition ? run this code : run this code instead`

<a id= "js-func"></a>
#### Function Basics
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
<a id= "js-clean"></a>
#### Clean code
- Functions should start with verbs and variables with nouns/ adjectives.

<a id= "js-arrayloop"></a>
#### Arrays and loops
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
<a id= "js-dom"></a>
#### DOM manipulation and events

##### DOM Structure
- Tree-like rep. of contents/ nodes of webpage, based on arrangeement in HTML file. |
- DOM tree > Nodes: root, parent, child (Directly inside parent.), descendant, sibling.

##### JavaScript in DOM
- JS does not alter HTML but the DOM.
- JS code in HTML: JS code is being run before nodes are created in DOM. - - - To include JS for DOM manipulation:

| Position | Notes |
|----------|-------|
| Bottom of HTML | After DOM nodes are parsed and created. |
| Include in `<head>` tag | `<head><script src="js-file.js" defer></script></head>` |


##### DOM Manipulation
- Manipulation with element nodes, via events: Makes manipulation happen dynamically or on demand.

- 3 ways to do:

| Method | Notes |
|--------|-------|
| (1) Specify function attributes directly on HTML elements. | (-) Clutter HTML with JS. (-) Can only set one `oneclick` property per DOM element.|
| (2) In JS: Set properties in form of `on<eventType>` on DOM nodes; e.g `onclick`, `onmousedown`. | (+) Move JS out of HTML and into a separate JS file. (-) BUT DOM element can only have one `onclick`.|
| (3) In JS: Attach event listeners/ event handlers to DOM nodes; e.g. `addEventListener()` |(+) Separate JS from HTML  (+) Allow multiple event listeners. |
- Example of implementing event listeners:
```
# ---------- In HTML file ---------
<button id="btn">Click me!</button>

# ---------- In JS ---------
# (1) Select button id.
# (2) Define function as event handler.
# (3) Register an event handler using addEventListener.

let btn = document.querySelector("#btn");

function handleClick() {
  alert('It was clicked!');
}

btn.addEventListener('click', handleClick);

# ---------- In JS: Shorter code ---------
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  alert('It was clicked!');
});

# ---------- In JS: Arrow function ---------
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  alert('It was clicked!');
});

```
- Recall:
```
// ---------- Arrow functions instead of function expressions ---------
let func = (arg1, arg2, ..., argN) => expression;

let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```

| Action | Code | Notes|
|--------|------|------|
| To attach similar event listeners to many elements | `querySelectorAll('selector')` | Get NodeList of all items matching selector. Acts like an array but is NOT. |
| To convert NodeList to array | `Array.from()` or spread oeprator (`...`) | |
| To grab element references |`document.querySelector()`, `document.querySelectorAll()`, `document.getElementById()`, `document.getElementsByTagName()` | Declare var as constant because want to store result and not accidentally reassign it. |

- Refer to dom-example.html.

- Event: Action that occurred in web browser.
- Event flow: Order in which events are received on page from element where event occurs and propagated thru DOM tree.
- 2 main models: (1) Event bubbling (To `document`/ `window`.) (2) Event capturing
- DOM Level 2 Event flow: Event flow = Event bubbling, event occurring at exact element (target phase), then event capturing.
- When event occurs, web browser passes an Event object to event handler. This object is only accessible inside event handler. Once all event handlers have been executed, the event object is automatically destroyed.
- `addEventListener()`: TO register an event that connects an event to an event listener.
- Event handler: Function that is called when an event occurs.