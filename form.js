let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log("Email:", email);
    console.log("Password:", password);

    if(isEmailValid(email) && isPasswordValid(password)) {
        alert("form submitted");
    }
});

function validateEmail(emailvalve) {
     let reqEmail = document.getElementById("reqEmail");  
     let invalidEmail = document.getElementById("invalidEmail");
     if(!emailvalue) {
        reqEmail.style.display = "block";
        invalidEmail.style.display = "none";
        return false;
        } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailvalue)) {
            
     } 
}
