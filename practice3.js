function revealPassword(inputID) {
    var input = document.getElementById(inputID);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

function validatePasswords() {
    var password1 = document.getElementById("password_1").value;
    var password2 = document.getElementById("password_2").value;

    if (password1.length < 8 || password2.length < 8) {
        alert("Password must be at least eight characters long!");
        return;
    }

    if (password1 !== password2) {
        alert("Passwords do not match!");
        return;
    }

    alert("Passwords match!");
}
