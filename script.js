document.addEventListener("DOMContentLoaded", function () {
    const adminLogin = document.getElementById("adminLogin");
    const userLogin = document.getElementById("userLogin");
    const userSignup = document.getElementById("userSignup");

    // Hide admin login by default
    adminLogin.style.display = "none";

    // Check if URL has #admin to show admin login
    if (window.location.hash === "#admin") {
        adminLogin.style.display = "block";  // Show admin login
        userLogin.style.display = "none";    // Hide user login
        userSignup.style.display = "none";   // Hide signup
    }
});

// Show Signup Form
function showSignup() {
    document.getElementById("userLogin").style.display = "none";
    document.getElementById("userSignup").style.display = "block";
}

// Show Login Form
function showLogin() {
    document.getElementById("userSignup").style.display = "none";
    document.getElementById("userLogin").style.display = "block";
}

// User Signup Function
function userSignup() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Save user in localStorage
    localStorage.setItem(email, password);
    alert("Account Created! You can now log in.");
    showLogin();  // Switch to login form
}

// User Login Function
function userLogin() {
    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPassword").value;

    // Check if user exists
    let savedPassword = localStorage.getItem(email);
    if (savedPassword && savedPassword === password) {
        alert("Login Successful! Welcome, " + email);
        window.location.href = "dashboard.html"; // Redirect to user dashboard
    } else {
        alert("Invalid credentials! Please try again.");
    }
}

// Admin Login Function
function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    // Replace with your actual admin credentials
    if (email === "admin@iskcon.com" && password === "admin123") {
        alert("Admin Login Successful!");
        window.location.href = "admin_dashboard.html"; // Redirect to admin panel
    } else {
        alert("Invalid Admin Credentials!");
    }
}
