// What is Promise?
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous fashion, making it easier to read and maintain.

// Creating a Promise
const promise = new Promise((resolve, reject)=>{
    // Fetching data from API or any async operation
    const success = false; // API Call or any async operation
    if(success){
        // If Successful we can call resolve function and can do some operation or function call and api calls
        // some Respose data from API
        resolve("Operation was successful!");
    }else{
        reject("Operation failed!");
    }
})

// If the promise is resolved, we can use .then() method to handle the success case and if the promise is rejected, we can use .catch() method to handle the error case.
promise.then((message)=>{
    console.log(message);
    // We can send to Another API
}).catch((error)=>{
    // We can log the error to the console or send it to another API for logging
    console.log(error);
})