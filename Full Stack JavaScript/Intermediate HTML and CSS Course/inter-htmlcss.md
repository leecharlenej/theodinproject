## Introduction

Here are my notes for the Full Stack JavaScript Path: Course - Intermediate HTML and CSS.

---
## Contents

### Intermediate HTML Concepts
1. [Emmet](#html-emmet)
2. [Tables](#html-tables)

### Intermediate CSS Concepts
1. [Default Styles](#css-default)

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

### Intermediate CSSConcepts

<a id= "css-default"></a>
#### Default Styles

| Topic | Notes |
|-------|-------|