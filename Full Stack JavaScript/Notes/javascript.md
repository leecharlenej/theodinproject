## Introduction

Here are my notes for the Full Stack JavaScript Path: Course - JavaScript.

---
## Contents

### Databases
1. [Organizing Your JavaScript Code](#js-organize)
---

### Databases

<a id= "js-organize></a>
#### Organize Your JavaScript Code

| Topic | Notes |
|-------|-------|
| Scope | Functions get their own scope but other blocks do not.|
| Functions of objects | Add to prototype. E.g. `Hero.protype.greet = function() {return `${this.name} says hello.`;}` |
| To copy over properties from one constructor to another | Create constructor and include `Hero.call(this, name, level);` + link properties in Hero constructor to new constructor with `Object.setPrototypeOf(Warrior.prototype, Hero.prototype);`|