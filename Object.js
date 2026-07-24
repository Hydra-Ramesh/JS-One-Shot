const user1={
    id:1,
    name:"Ramesh Das",
    age:22,
    email:"ramesh@example.com"
};

console.log(user1.name);
console.log(user1.age);
console.log(user1["email"]);
user1.phone="8509778299";
console.log(user1);

user1.name="Ramesh Kumar Das";
console.log(user1);

delete user1.age;
console.log(user1);

const user2={
    id:2,
    name:"Suresh Das",
    age:25,
    email:"suresh@example.com",
    address:{
        street:"123 Main St",
        city:"New York",
        state:"NY",
        zip:"10001"
    }
}

console.log(user2.address.city);
console.log(user2);

const allUsers=[
    {
        id:1,
        name:"Ramesh Das",
        age:22,
        email:"ramesh@example.com"
    },
    {
        id:2,
        name:"Suresh Das",
        age:25,
        email:"suresh@example.com"
    },
    {
        id:3,
        name:"Mahesh Das",
        age:28,
        email:"mahesh@example.com"
    }
]

const user3={
    id:4,
    name:"Rajesh Das",
    age:30,
    email:"rajesh@example.com"
};
console.log(Object.keys(user3));
console.log(Object.values(user3));
console.log(Object.entries(user3));