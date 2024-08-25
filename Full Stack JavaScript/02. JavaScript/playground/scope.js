console.log('It works!');

/* ================================
const and let variables are globally scoped but not attached to the window.
var and func are globally scoped + attached to the window.
=================================== */

// const first = 'wes';
// let second = 'bos';
// var age = 100;

// function sayHi(){
//     console.log('hi!');
// }

const age = 100;

function go() {
    const myAge = 200;
    const hair = 'blonde';
    console.log(age);
}
console.log(age);
go();

/* ================================
Block scoping: Only var allows you to access it globally.
- var are not block scoped but function scoped.
=================================== */

// if (1 === 1) {
//     let cool = true;
//   }
// console.log(cool);

const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog();
}

go();
