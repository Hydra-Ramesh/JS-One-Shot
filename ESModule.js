const math = require('./MathModule.js');

console.log(math.add(2, 3));
console.log(math.subtract(5, 2));
console.log(math.multiply(4, 3));
try {
    console.log(math.divide(10, 0));
} catch (error) {
    console.error(error.message);
}

// import {add,subtract} from './MathModule.js';

// console.log(add(2, 3));
// console.log(subtract(5, 2));