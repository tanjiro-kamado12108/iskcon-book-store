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

// Sign up function for users
function signUp() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
        alert("User already exists! Please log in.");
        return;
    }

    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));

    console.log("Users after signup:", localStorage.getItem("users"));
    alert("Signup successful! Now login.");
}

// User login function
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || {};

    console.log("Stored Users:", users);

    if (users[email] && users[email] === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", email);
        window.location.href = "store.html"; // Redirect to store
    } else {
        alert("Invalid email or password.");
    }
}

// Function to add a new admin (Only call this manually or provide a separate admin signup page)
function addAdmin(email, password) {
    let admins = JSON.parse(localStorage.getItem("admins")) || [];

    let existingAdmin = admins.find(admin => admin.email === email);
    if (existingAdmin) {
        console.warn("Admin already exists:", email);
        return;
    }

    admins.push({ email, password });
    localStorage.setItem("admins", JSON.stringify(admins));

    console.log("Admin added successfully:", email);
}

// Admin login function (Supports multiple admins)
function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    let admins = JSON.parse(localStorage.getItem("admins")) || [];

    let foundAdmin = admins.find(admin => admin.email === email && admin.password === password);

    if (foundAdmin) {
        alert("Admin Login Successful!");
        localStorage.setItem("loggedInUser", "admin");
        window.location.href = "admin.html"; // Redirects to admin panel
    } else {
        alert("Invalid Admin Credentials");
    }
}

// Checkout function
function checkout() {
    alert("Redirecting to UPI payment: mishrasandeep@fam");
}

// Adding a default admin (Uncomment the line below to create an admin if not already stored)
addAdmin("admin@iskcon.com", "admin123"); // Ensures an admin account always exists
