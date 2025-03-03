document.addEventListener("DOMContentLoaded", function () {
    let loginButton = document.getElementById("loginButton");
    console.log("Login Button:", loginButton);  // Debugging Line

    if (loginButton) {
        loginButton.addEventListener("click", login);
    } else {
        console.error("Error: loginButton not found!");
    }
});

let users = JSON.parse(localStorage.getItem("users")) || [];

function signUp() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("User already exists. Please login.");
        return;
    }

    // Store new user as object inside an array
    users.push({ email, password });

    localStorage.setItem("users", JSON.stringify(users)); // Save back to localStorage

    console.log("Users after signup:", localStorage.getItem("users")); // Debugging output

    alert("Signup successful! Now login.");
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    console.log("Stored Users:", users); // Debugging output

    let foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
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
