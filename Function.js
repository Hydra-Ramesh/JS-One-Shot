
function nameCalling1(){
    console.log("Ramesh Das");
}

nameCalling1();
nameCalling1();
nameCalling1();

function nameCalling2(name){ // Parameter passed to the function
    console.log(name);
}

nameCalling2("Ramesh Das"); // Argument passed to the function
nameCalling2("Sankar Midya"); // Argument passed to the function
nameCalling2("Sanchita Sahoo"); // Argument passed to the function
nameCalling2("Vashkar Ghosh"); // Argument passed to the function
nameCalling2("Ankita Rout"); // Argument passed to the function
nameCalling2("Zihadi Islam"); // Argument passed to the function


function marrigeQuotes(bride,groom){
    console.log(`${bride} weds ${groom}`);
}

marrigeQuotes("Sankar","Tanisha")


function add(num1,num2){
    return num1+num2;
}

function multiValue(num1,num2,num3){
    return add(num1,num2)*num3;
}

const res=multiValue(10,20,30);
console.log(res);

// Function Expression
const response=function(x,y){
    return x+y;
}

console.log(response(10,20));


// Arrow Function
const sum1=(a,b)=>{
    return a+b;
}

// Short Arrow Function
const sum2=(a,b)=>a+b;

console.log(sum1(10,20));
console.log(sum2(10,20));

function setProfilePicture(url="https://www.w3schools.com/howto/img_avatar.png"){
    console.log(`Profile Picture URL: ${url}`);
}

setProfilePicture();