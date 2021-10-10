function validation() {
    var nameRegex = /^[A-Z][a-z'-]{2,}$/;
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    var pwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("vPassword").value;
    var emailMsg = document.getElementById("errorEmail");
    var checkPW = document.getElementById("checkPW");
    var verifyPassword = document.getElementById("verifyPassword");

    if (nameRegex.test(fName) !== true) {
        //emailMsg.innerHTML = "Not correct email";
    } else {
        //emailMsg.innerHTML = "";
    }

    if (emailRegex.test(email) !== true) {
        emailMsg.innerHTML = "Not correct email";
    } else {
        emailMsg.innerHTML = "";
    }

    if (pwRegex.test(pw1) !== true && pw1.length > 0) {
        checkPW.innerHTML = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
    } else {
        checkPW.innerHTML = "";
        if (pw2.length !== 0) {
            if (pw1 !== pw2) {
                verifyPassword.innerHTML = "Password doesn't match";
            } else {
                verifyPassword.innerHTML = "Password match";
            }
        } else {
            verifyPassword.innerHTML = "";
        }
    }
    return false;
}