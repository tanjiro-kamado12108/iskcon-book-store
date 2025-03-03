let users = JSON.parse(localStorage.getItem("users")) || {};
function signUp() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || {}; // Get existing users or create empty object
    users[email] = password; // Store new user

    localStorage.setItem("users", JSON.stringify(users)); // Save back to localStorage

    console.log("Users after signup:", localStorage.getItem("users")); // Debugging output

    alert("Signup successful! Now login.");
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || {}; // Load users

    console.log("Users at login:", users); // Debugging output

    if (users[email] && users[email] === password) {
        alert("Login successful!");
    } else {
        alert("Invalid credentials. Please check your email and password.");
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
function checkout() { alert("Redirecting to UPI payment: mishrasandeep@fam"); }
