document.addEventListener("DOMContentLoaded", function () {
    let loginButton = document.getElementById("loginButton");
    let signupButton = document.getElementById("signupButton");
    let adminLoginButton = document.getElementById("adminLoginButton");
    
    console.log("Login Button:", loginButton); // Debugging output

    if (loginButton) {
        loginButton.addEventListener("click", login);
    } else {
        console.error("Error: loginButton not found!");
    }
    
    if (signupButton) {
        signupButton.addEventListener("click", signUp);
    } else {
        console.error("Error: signupButton not found!");
    }

    if (adminLoginButton) {
        adminLoginButton.addEventListener("click", adminLogin);
    } else {
        console.error("Error: adminLoginButton not found!");
    }
});

let users = JSON.parse(localStorage.getItem("users")) || {};

function signUp() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    
    let users = JSON.parse(localStorage.getItem("users")) || {}; // Get existing users or create empty object
    users[email] = password; // Store new user
    
    localStorage.setItem("users", JSON.stringify(users)); // Save back to localStorage
    
    console.log("Users after signup:", localStorage.getItem("users")); // Debugging output
    
    alert("Signup successful! Now login.");
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    
    let users = JSON.parse(localStorage.getItem("users")) || {}; // Retrieve stored users
    
    console.log("Stored Users:", users); // Debugging output
    
    if (users[email] && users[email] === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", email); // Store session
        window.location.href = "store.html"; // Redirect to store after login
    } else {
        alert("Invalid email or password.");
    }
}

function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;
    
    if (email === "admin@iskcon.com" && password === "admin123") {
        alert("Admin Login Successful!");
        window.location.href = "admin.html"; // Redirects to admin panel
    } else {
        alert("Invalid Admin Credentials");
    }
}

function checkout() {
    alert("Redirecting to UPI payment: mishrasandeep@fam");
}
