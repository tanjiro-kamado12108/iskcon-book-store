document.addEventListener("DOMContentLoaded", function () {
    let loginButton = document.getElementById("loginButton");
    let adminLoginButton = document.getElementById("adminLoginButton");

    if (loginButton) {
        loginButton.addEventListener("click", login);
    }
    if (adminLoginButton) {
        adminLoginButton.addEventListener("click", adminLogin);
    }
});

let users = JSON.parse(localStorage.getItem("users")) || [];

function signUp() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("User already exists. Please login.");
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Now login.");
}

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

function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    if (email === "admin@iskcon.com" && password === "admin123") {
        alert("Admin Login Successful!");
        localStorage.setItem("isAdmin", "true");
        window.location.href = "orders.html"; // Redirect to Orders Page
    } else {
        alert("Invalid Admin Credentials");
    }
}

function checkout() {
    alert("Redirecting to UPI payment: mishrasandeep@fam");
}

// Admin logout function
function adminLogout() {
    localStorage.removeItem("isAdmin");
    alert("Admin Logged Out!");
    window.location.href = "admin.html"; // Redirect back to admin login page
}
