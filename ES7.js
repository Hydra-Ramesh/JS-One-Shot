/**
 * Template Literals in ES7 (ECMAScript 2016)
 */
const port=3005;
// console.log("Server is running on port " + port + " and ready to accept requests.");

console.log(`Server is running on port ${port} and ready to accept requests.`);

let name="Ramesh Das";
console.log(`Hello, my name is ${name}.`);


// Destructuring in ES7 (ECMAScript 2016)
const user = {
    name: "Ramesh Das",
    age: 30,
    email: "ramesh@example.com"
};
// API=> JSON=> STRINGIFY=> PARSE=> OBJECT => Destructuring
const {name: userName, age: userAge, email: userEmail} = user;
console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);
console.log(`User Email: ${userEmail}`);

// Spread Operator in ES7 (ECMAScript 2016)

const userDetails = {
    id: 1,
    age: 22,
    email: "ramesh@example.com"
};

const updatedUserDetails = {
    ...userDetails,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    },
    age: 23
}

console.log(userDetails);
console.log(updatedUserDetails);

// Optional Chaining in ES7 (ECMAScript 2016)

const updatedUserName=updatedUserDetails?.name || "Name not available";
console.log(`Updated User Name: ${updatedUserName}`);

const cityName=updatedUserDetails?.address?.city || "City not available";
console.log(`City Name: ${cityName}`);

// Nullish Coalescing Operator in ES7 (ECMAScript 2016)

const userPhone=updatedUserDetails?.phone ?? "Phone number not available";
console.log(`User Phone: ${userPhone}`);