## Introduction

Here are my notes for the Foundations course.

---
## Contents

1. [CSS Foundations - Inspecting HTML and CSS](#cssinspect)
2. [CSS Foundations - The Box Model](#cssbox)

---

<a id= "cssinspect"></a>
### CSS Foundations - Inspecting HTML and CSS
- Right-click > Inspect
- HTML: Initial content, DOM: Current content (After rendering JS.)
- Right-click on any element for other options.
- To add HTML: Right-click on element. > Edit as HTML.


<a id= "cssbox"></a>
### CSS Foundations - The Box Model

- Every element on a web page is held in a box.
- Width and height refers to content.
- Padding adds around the content.
- Border adds around the content; separates the content from the margin.
- Margin adds around the border; separates one box's border from another's. Note that margins overlap.
- Use the Inspect tool for a diagram of the box.
- To space 2 elements away from each other: Use margin.
- To space out element from itself: Use padding.
- `boxing-sizing: border-box;`: Default is `content-box`. Usually added to `* {}`.Height and width will include border and padding. The content box will be smaller.

test
