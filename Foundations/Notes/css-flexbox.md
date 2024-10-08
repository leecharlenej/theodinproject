## Introduction

Here are my notes for the Foundations course: Sections - CSS Foundations, Flexbox.

---
## Contents

### CSS Foundations
1. [Inspecting HTML and CSS](#css-htmlcss)
2. [The Box Model](#css-box)
3. [Block and Inline](#css-blockinline)

### Flexbox
1. [Flexbox](#flexbox)

---

### CSS Foundations

<a id= "css-htmlcss"></a>
#### Inspecting HTML and CSS
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
- To view box diagram: Inspect > Computed tab.
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
- `flex-shrink`: Only applies when total size of flex items > size of flex container and hence, need to shrink to fit.
- `flex-basis`: Sets intial size of flex item. `auto` checks item for a width declaration.
- `flex-direction`: Default = row.
- Very useful website: [(here)](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
