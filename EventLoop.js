// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");


console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

// Promise Call back
Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");