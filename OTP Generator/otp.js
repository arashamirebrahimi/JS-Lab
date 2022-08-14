

//why when i put x outside the function doesnt work?

//let x = document.querySelector("#otp");




function otpGenerator(){
    let x = document.getElementById("otp");
    let OTP = Math.floor(Math.random()*100000000);
    x.textContent = OTP;
}