// The reason of error Handling are to better logging and debugging of the code.
// For not crash the entire application when an error occurs.

// Try Catch 

// task One 
try{
    let b=20;
    console.log(a+b);
}catch(error){
    console.log("Error is: "+error);
}


//task Two
try{
    let c=10;
    let d=40;
    console.log(c+d);
}catch(error){
    console.log("Error is: "+error);
}

try{
    //let user = fetching from database;
}catch(error){
    console.log("Error is: "+error);
}



// Finally Block

try{
    console.log("This is try block if everything is fine");
}catch(error){
    console.log("Error is: "+error);
}finally{
    console.log("This is finally block it will execute in any case");
}


// Throwing Custom Error
function withdraw(bal,amount){
    if(amount>bal){
        throw new Error("Insufficient balance");
    }
}


