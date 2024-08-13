// <!-- --------- FIRST EXAMPLE: UNNAMED FUNCTION ---------- -->
// (2) In JS: Set properties in form of `on<eventType>` on DOM nodes

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// (3) In JS: Attach event listeners to DOM nodes.
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  alert("Hello World");
});

// <!-- --------- SECOND EXAMPLE: NAMED FUNCTION --------- -->
function alertFunction(e) {
    alert("YAY! YOU DID IT!");
    // console.log(e);
}

// METHOD 2
const btnNamed1 = document.querySelector("#btnNamed1");
btnNamed1.onclick = alertFunction;

// METHOD 3
const btnNamed2 = document.querySelector("#btnNamed2");
btnNamed2.addEventListener("click", alertFunction);

btnNamed2.addEventListener("click", function (e) {
    // console.log(e.target);
    e.target.style.background = "blue";
  });

// <!-- --------- THIRD EXAMPLE: Use querySelectorAll (NodeList) --------- -->
const buttons = document.querySelectorAll(".third-example button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

