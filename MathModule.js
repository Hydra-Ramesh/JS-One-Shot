// CommonJS module for basic math operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }else{
    return a / b;
  }
};

module.exports = {
    add,
    subtract,
    multiply,
    divide
};

// ModuleJS
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// export const multiply = (a, b) => a * b;
// export const divide = (a, b) => {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   } else {
//     return a / b;
//   }
// };


let x=10,y=5,z=20;
console.log(Math.max(x,y,z)); // returns 20
console.log(Math.min(x,y,z)); // returns 5
console.log(Math.sqrt(16)); // returns 4
console.log(Math.pow(2, 3)); // returns 8
console.log(Math.ceil(4.2)); // returns 5
console.log(Math.floor(4.8)); // returns 4
console.log(Math.round(4.5)); // returns 5


console.log(Math.random());
