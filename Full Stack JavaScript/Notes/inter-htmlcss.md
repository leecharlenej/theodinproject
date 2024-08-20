## Introduction

Here are my notes for the Full Stack JavaScript Path: Course - Intermediate HTML and CSS.

---
## Contents

### Intermediate HTML Concepts
1. [Emmet](#html-emmet)
2. [Tables](#html-tables)

### Intermediate CSS Concepts
1. [Styles](#css-styles)

### Forms
1. [Form Basics](#form-basics)

### Grids
1. [Introduction](#grids-intro)

---

### Intermediate HTML Concepts

<a id= "html-emmet"></a>
#### Emmet

| Topic | Notes |
|-------|-------|
| To generate a HTML boilerplate | `!` |
| To create elements with class/ id | <ul><li>`<ELEMENT>.<CLASS>`</li><li>`<ELEMENT>#<ID>`</li><li>`<ELEMENT>[<ATTRIBUTE>]`</li></ul> |
| To move between tags | Press `tab`. |
| To create a child | <ul><li>`div.purple>span.cyan`</li><li>`header>nav>ul>li*3{TEXT_WITHIN_TAGS}`</li><li>`header>nav>ul>li*3{List Item $$}`</li><li>`header>nav>ul>li*3.class-${List Item $}`</li></ul> |
| To create siblings | <ul><li>`header+main+footer`</li><li>`(header>nav>)+main+footer`</li></ul> |
| Complicated eg | <ul><li>`(header>h2{Heading}+nav>ol>li*5>a{Link $})+main+footer`</li><li>`form:post>.group>input:text`</li><li>`form:post>(.group>label+input:text)+(.group>label+input:number)`</li></ul>|

<a id= "html-tables"></a>
#### Tables

| Topic | Notes |
|-------|-------|
| Usage | Tables for tabular data, and not to lay out web pages (Use CSS Layout techniques!). |
| To span across rows or cols | Use `rowspan` or `colspan` = No. of rows/ cols that you want to span. |
| Define styling info for entire column of data all in one place | <ul><li>Only for border, background, width and visibility.</li><li>Defined at the start of the table with `<colgroup></colgroup>`.</li><li>One `<col/>` or `<col style="background-color: yellow" />` or `<col style="background-color: yellow" span="2" />` tag to represent each column.</li></ul> |
| Way in which layers are rendered. | <ul><li>Table layer first, then columns' layer, then cells' layer.</li><li>Styles to cell are painted on top of column styles, which are painted on top of table style.</li></ul> |
| To add structure| <ul><li>`<thead>`</li><li>`<tbody>`</li><li>`<tfoot>`</li></ul> |
| To tell screen readers exactly what cells the header is a header for | <ul><li>`scope="colgroup"` or `scope="rowgroup"` for multiple columns/ rows</li><li>`scope="col"` or `scope="row"` for one col/ row</li><li>Can also use `id` and `headers`.</li></ul> |

---

### Intermediate CSS Concepts

<a id= "css-styles"></a>
#### Styles

| Topic | Notes |
|-------|-------|
| box-sizing |<ul><li>`content-box` (default value): Width and height only refer to content of element and not padding, border or margin.</li><li>`border-box`: Includes padding and border. Content area will shrink to accomodate.</li></ul> |
| Relative units | <ul><li>`em`: Font size of element or parent's element.</li><li>`rem`: Font size of the root element.</li></ul> |
| Viewport units | <ul><li>`1vh`: 1% of viewport height.</li><li>`1vw`: 1% of viewport width.</li></ul>|
| Frameworks | Bootstrap, Tailwind, Bulma, Foundation etc.|
| Preprocessors/ precompilers | Langauges that help write CSS more easily.E.g. CSS nesting, SASS, LESS< Stylus.|

---

### Forms

<a id= "forms-basics"></a>
#### Form basics

| Topic | Notes |
|-------|-------|
| `<label for="first_name">` | Labels are for users to understand what the data entered into an input field will represent. |
| `<input type="text" id="first_name" placeholder="Bob..." name="first_name"` | Name attribute is for backend to know what each piece of data represents.

---

### Grids

<a id= "grid-intro"></a>
#### Introduction
| Topic | Notes |
|-------|-------|
| To create grids | Define grid tracks first. |
| Gaps | Only appear between grid tracks; do not add sapce to the top and bottom, left or right of container. Gaps act as if line has gained extra width.|
