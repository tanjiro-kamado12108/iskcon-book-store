document.addEventListener("DOMContentLoaded", function () {
    // User login button
    let loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", login);
    } else {
        console.error("Error: loginButton not found!");
    }

    // Admin login button
    let adminLoginButton = document.getElementById("adminLoginButton");
    if (adminLoginButton) {
        adminLoginButton.addEventListener("click", adminLogin);
    } else {
        console.error("Error: adminLoginButton not found!");
    }
});

// Load users and admins from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];
let admins = JSON.parse(localStorage.getItem("admins")) || [];

// Ensure at least one admin account exists
function initializeAdmin() {
    let defaultAdmin = { email: "admin@iskcon.com", password: "admin123" };
    
    let adminExists = admins.some(admin => admin.email === defaultAdmin.email);
    if (!adminExists) {
        admins.push(defaultAdmin);
        localStorage.setItem("admins", JSON.stringify(admins));
        console.log("Default admin added.");
    }
}
initializeAdmin();

// User Signup
function signUp() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(user => user.email === email)) {
        alert("User already exists. Please login.");
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    console.log("Users after signup:", localStorage.getItem("users"));

    alert("Signup successful! Now login.");
}

// User Login
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", email);
        window.location.href = "store.html";
    } else {
        alert("Invalid email or password.");
    }
}

// Admin Login
function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    let admins = JSON.parse(localStorage.getItem("admins")) || [];
    let foundAdmin = admins.find(admin => admin.email === email && admin.password === password);

    if (foundAdmin) {
        alert("Admin Login Successful!");
        localStorage.setItem("loggedInUser", "admin");
        window.location.href = "admin.html";
    } else {
        alert("Invalid Admin Credentials");
    }
}

// Checkout
function checkout() {
    alert("Redirecting to UPI payment: mishrasandeep@fam");
}
