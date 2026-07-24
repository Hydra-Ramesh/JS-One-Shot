// Rest Parameter
function sum(...nums){
    let total=0;
    for(let num of nums){
        total+=num;
    }
    return total;
}

console.log(sum(5, 10,15,29,39,49,59,69,79,89,99));

function processUser(name, callback){
    console.log(`The user ${name} is being processed`);
    callback();
}

function completed(){
    console.log("The user has been processed successfully");
}
processUser("Ramesh", completed);

// A callback is a function passed to another function so it can be executed later or as part of that function operation
processUser("Ramesh", ()=>{
    // Do something with that variable
    console.log(`The user has been processed successfully using arrow function`);
})


// HOF=> Higher Order Function
// It takes a function as an argument or return a another function as a result

function calculate(a,b,operation){
    return operation(a,b);
}
const subtract=(a,b)=>a-b;
const add=(a,b)=>a+b;

console.log(calculate(10,20,add));
console.log(calculate(10,20,subtract));

