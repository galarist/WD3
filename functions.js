function validation(e) {
    var nameRegex = /^[A-Z][a-z'-]{2,}$/;
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    var pwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var vEmail = document.getElementById("vEmail").value;
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("vPassword").value;
    var fNameMsg = document.getElementById("errorFname");
    var lNameMsg = document.getElementById("errorLname");
    var emailMsg = document.getElementById("errorEmail");
    var emailVMsg = document.getElementById("errorVemail");
    var checkPW = document.getElementById("checkPW");
    var verifyPassword = document.getElementById("verifyPassword");
    if (nameRegex.test(fName) !== true && fName.length > 0) {
        fNameMsg.innerHTML = "Not correct name";
    } else {
        fNameMsg.innerHTML = "";
    }
    if (nameRegex.test(lName) !== true && lName.length > 0) {
        lNameMsg.innerHTML = "Not correct name";
    } else {
        lNameMsg.innerHTML = "";
    }
    if (emailRegex.test(email) !== true && email.length > 0) {
        emailMsg.innerHTML = "Not correct email";
    } else {
        emailMsg.innerHTML = "";
        if (vEmail.length !== 0) {
            if (email !== vEmail) {
                emailVMsg.innerHTML = "Email doesn't match";
            } else {
                emailVMsg.innerHTML = "Email match";
            }
        } else {
            emailVMsg.innerHTML = "";
        }
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
    if (document.getElementById('accept').checked) {
        alert('checked');
        return true;
    }
    return false;
}