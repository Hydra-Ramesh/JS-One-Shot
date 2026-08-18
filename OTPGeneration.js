console.log(Math.random()); // 0 to 1
console.log(1+Math.floor(Math.random()*9)); // 1 to 9



// Cosumer click on generate OTP button
const otp = 100000 + Math.floor(Math.random() * 900000);
// First copy of OTP save in redis or cache according to the consumer id with ttl of 5 minutes
// Second copy of OTP send to consumer via email or sms

const userEnteredOtp = 123456; // This should come from the consumer input

if (userEnteredOtp === otp) {
    console.log("OTP is valid");
}else{
    console.log("OTP is invalid");
}
