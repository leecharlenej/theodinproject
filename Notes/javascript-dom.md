## Introduction

Here are my notes for the Foundations course: Section - JavaScript Basics - DOM

---
## Contents

### JavaScript Basics - DOM
1. [DOM Basics](#dom-basics)
2. [DOM Manipulation](#dom-mani)
3. [DOM Events](#dom-events)
4. [Page Load Events](#dom-pageloadevents)
5. [Mouse Events](#dom-mouse)
6. [Keyboard Events](#dom-keyboard)
7. [Event Delegation](#dom-eventdele)
8. [dispatchEvent](#dom-dispatch)
9. [Custom Events](#dom-custom)

---

## JavaScript Basics - DOM

<a id= "dom-basics"></a>
### DOM Basics
- HTML: Structure the web pages. JavaScript: Add behaviour to web pages. JS cannot understand HTML.
- Browser creates DOM based on HTML. Then JS interprets and interacts with DOM.
- DOM used for dynamic web pages, interactivity, content updates, cross-browser compatibility and single-page applications (SPAs) - Build with frameworks such as React/ Angular that heavily rely on DOM for content rendering and updating within single HTML page without reloading full page.

- Tree-like rep. of contents/ nodes of webpage, based on arrangement in HTML file.
- DOM tree > Nodes: root, parent, child (Directly inside parent.), descendant, sibling.

| Level | Object | Notes |
|-------|--------|-------|
|1.     | Window | Object of browser that is automatically created by browser. API used to set and access all properties and methods of browser. |
|2.     | Document | Property of window object. HTML doc that is loaded into window becomes a document object. Has various properties tt refer to other objects, which allow access and modification to web page's content. If need to access any HTML element, always start with accessing the document object. |
|3.     | Form | Rep. by form tags. |
|       | Link | Rep. by link tags. |
|       | Anchor | Rep. by a href tags. |
|       | Form cotnrol elements | E.g. text fields, buttons, radio buttons, checkboxes, etc. |

|Topic | Notes |
|------|-------|
| `e` parameter in function, i.e. `function (e) ` | Event object that is automatically passed to event handlers in JS. Contains details about event that has occurred. |
| Properties of Event object | e.type, e.target, e.currentTarget, e.detail |


### JavaScript and DOM
- JS does not alter HTML but the DOM.
- JS code in HTML: JS code is being run before nodes are created in DOM.
- To include JS for DOM manipulation:

| Position | Notes |
|----------|-------|
| Bottom of HTML | After DOM nodes are parsed and created. |
| Include in `<head>` tag | `<head><script src="js-file.js" defer></script></head>` |


<a id= "dom-mani"></a>
### DOM Manipulation
- To manipulate with element nodes dynamically/ on demand: Using events.

- 3 ways to do:

| No. | Method | Notes |
|-----|-------|-------|
|1. | Specify function attributes directly on HTML elements. | (-) Clutter HTML with JS. (-) Can only set one `oneclick` property per DOM element.|
|2. | In JS: Set properties in form of `on<eventType>` on DOM nodes; e.g `onclick`, `onmousedown`. | (+) Move JS out of HTML and into a separate JS file. (-) BUT DOM element can only have one `onclick`.|
|3. |In JS: Attach event listeners/ event handlers to DOM nodes; e.g. `addEventListener()` |(+) Separate JS from HTML  (+) Allow multiple event listeners. |
- Example of implementing event listeners:
```
//-----------------------------------------------
# In HTML file
//-----------------------------------------------
<button id="btn">Click me!</button>

//-----------------------------------------------
# In JS
# (1) Select button id.
# (2) Define function as event handler.
# (3) Register an event handler using addEventListener.
//-----------------------------------------------

let btn = document.querySelector("#btn");

function handleClick() {
  alert('It was clicked!');
}

btn.addEventListener('click', handleClick);

//-----------------------------------------------
# In JS: Shorter code
# Using anonymous functions.
//-----------------------------------------------
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  alert('It was clicked!');
});

//-----------------------------------------------
# In JS: Arrow function
//-----------------------------------------------
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  alert('It was clicked!');
});

```
- Recall:
```
//-----------------------------------------------
// Arrow functions instead of function expressions
//-----------------------------------------------
let func = (arg1, arg2, ..., argN) => expression;

let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```

| Action | Code | Notes|
|--------|------|------|
| To attach similar event listeners to many elements | `querySelectorAll('selector')` | Get NodeList of all items matching selector. Acts like an array but is NOT. |
| To convert NodeList to array | `Array.from()` or spread operator (`...`) | |
| To grab element references |`document.querySelector()`, `document.querySelectorAll()`, `document.getElementById()`, `document.getElementsByTagName()` | Declare var as constant because want to store result and not accidentally reassign it. |

- Refer to dom-example.html.

<a id= "dom-events"></a>
### DOM Events
| Term | Notes|
|------|------|
|Event | Action that occurred in web browser. |
|Event flow | Order in which events are received on page from element where event occurs and propagated thru DOM tree. |
|2 main models| (1) Event bubbling (To `document`/ `window`.). (2) Event capturing |
|DOM Level 2 Event flow | Event flow = Event bubbling, event occurring at exact element (target phase), then event capturing. |
|Event handler | Function that is called when an event occurs. |
|`addEventListener()` | To register an event that connects an event to an event listener. |

When event occurs, web browser passes an event object to event handler.
- This object is only accessible inside event handler.
- Once all event handlers have been executed, the event object is automatically destroyed.

<a id= "dom-pageloadevents"></a>
### Page Load Events

When you open a page:

| Sequence | Event | Notes| What you can do |
|----------|-------|------|-----------------|
|1. | `DOMContentLoaded` | Browser loads HTML and builds complete DOM tree. | Can start to select DOM node/ initialize interface. |
|2. | `load` | Browser loads external resources like stylesheets and images. | |

When you leave a page:

| Sequence | Event | Notes| What you can do |
|----------|-------|------|-----------------|
|1. | `beforeunload` | Fires before page and resources are unloaded. | Can use this event for confirmation to leave page; e.g. to prevent user's data loss in forms. |
|2. | `unload` | Fires whenpages has completely unloaded. | Can use this to send analytic data/ clean up resources. |

- To handle page events: `addEventListener()` method on document object
```
addEventListener('beforeunload', (event) => {
            // show the confirmation dialog
            event.preventDefault();
            // Google Chrome requires returnValue to be set.
            event.returnValue = '';
        });

addEventListener('unload', (event) => {
            // send analytic data
        });
```

<a id= "dom-mouse"></a>
### Mouse Events

|Topic | Notes |
|------|-------|
| Mouse events | Fire when use mouse to interact with page elements. |
| 9 mouse events | mousedown, mouseup, click, dblclick, mousemove, mouseover, mouseout, mouseenter, mouseleave |
| To register mouse events | <ol><li>Select element with `querySelector()` or `getElementById()` method.</li><li> Register mouse event using `addEventListener()` method.</li></ol> |
| Event object passed to mouse event handler has property called `button`, i.e. `e.button` | 0 - left, 1 - middle, 2 - right, 3, 4 |
| When clicking, may press one or more modifier key. `e.shiftKey` | Shift, Ctrl, Alt, Meta. Properties of event object passed to mouse event handler. |
| Screen coordinates, i.e. `e.screenX` | screenX, screenY, clientX, clientY |

- Example:
```
//-----------------------------------------------
// HTML
//-----------------------------------------------
<button id="btn">Click Me!</button>

//-----------------------------------------------
// JavaScript
//-----------------------------------------------
let btn = document.querySelector('#btn');

btn.addEventListener('click',(event) => {
    console.log('clicked');
});
```

<a id= "dom-keyboard"></a>
### Keyboard Events

|Topic | Notes |
|------|-------|
| Keyboard events | <ul><li>Fire on text box, usually.</li> <li>keydown, keyup, keypress (a,b,c, etc. Not arrow key, home or end keyboard.)</li></ul> |
| Press character key once | <ol><li>keydown</li><li>keypress</li><li>keyup</li></ol> |
| Changes to text box | <ul><li>keydown and keypress fired before any change is made to text box.</li><li>keyup fired after changes have been made to text box.</li><li>Hold character key: keydown and keypress are fired repeatedly until you release key.</li></ul>
| To handle | <ol><li>Select element on which keyboard event will fire, i.e. text box.</li><li>`element.addEventListener()` to register event handler.</li></ol> |
| Keyboard properties | <ul><li>`event.key`: Returns character that has been pressed, i.e. z</li><li>`event.code`: Returns physical keycode, i.e. KeyZ |

<a id= "dom-eventdele"></a>
### Event Delegation

|Topic | Notes |
|------|-------|
| Reason | Use delegation because each event handler is a function = object = takes up memory = slower perf + causes delay in page interactivity. |
| Solution | <ol><li>Use event bubbling to parent element, indicated by `document.querySelector()`.<li>Use target property which references the element that dispatches the event. (Use `switch(target.id)`!).</li></ol> | 

<a id= "dom-dispatch"></a>
### dispatchEvent

|Topic | Notes |
|------|-------|
| dispatchEvent | Usually, events are generated by user actions like clicks and key presses. But can also be generated from code. |
| To generate an event programmatically | <ol><li>Create a new Event object using an Event constructor.</li><li>Trigger event using `element.dispatchEvent()`. |
| `event.isTrusted` property | To determine if event comes from user actions or from code. <ul><li>`true`: Event comes from user.</li><li>`false`: Event generated from code. |
| Event types | UIEvent: MouseEvent, TouchEvent, FocusEvent, KeyboardEvent. Use these to construct, instead of the generic event, as these provide other properties. |

- Example:
```
//-----------------------------------------------
// 1. Create new event with Event constructor.
// - type: E.g. 'click'
// - options: Boolean values for `bubbles`, `cancelable` when it is true.
//-----------------------------------------------
let event = new Event(type, [,options]);

//-----------------------------------------------
// 2. Fire event on target element using dispatchEvent().
//-----------------------------------------------
element.dispatchEvent(event);

```

```
//-----------------------------------------------
// Complete example
//-----------------------------------------------
//-----------------------------------------------
// HTML
//-----------------------------------------------
<button class="btn">Test</button>

//-----------------------------------------------
// JS
//-----------------------------------------------
let btn = document.querySelector('.btn');

 btn.addEventListener('click', function () {
        alert('Mouse Clicked');
 });

let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);

```

<a id= "dom-custom"></a>
### Custom Events

|Topic | Notes |
|------|-------|
| Custom events | Decouple code tt you want to execute after another piece of code completes. For e.g. separate event lsiteners in separate script or have multiple event listeners to same custom event. |
| How - Without custom events | To execute code after a function has been executed, use callback, i.e. `if(callback && typeof callback === 'function') { callback(elem); }` |
| How - With custom events | <ol><li>Use `CustomEvent()` constructor to create custom event.</li><li>Use `dispatchEvent()` to trigger event.</ol> |

- Example:

```
//-----------------------------------------------
// 1. To create custom event.
// eventType: String that represents name of event.
// options: Object that has detail property that contains custom info abt event.
//-----------------------------------------------
let event = new CustomEvent(eventType, options);

let event = new CustomEvent('highlight', {
    detail: {backgroundColor: 'yellow'}
});

//-----------------------------------------------
// 2. Dispatch event
//-----------------------------------------------
domElement.dispatchEvent(event);
```