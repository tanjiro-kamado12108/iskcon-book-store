let users = JSON.parse(localStorage.getItem("users")) || {};
function signUp() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (!email || !password || password !== confirmPassword) { alert("Invalid input"); return; }
    users[email] = password; localStorage.setItem("users", JSON.stringify(users));
    alert("Account created!"); window.location.href = "index.html";
}
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    if (users[email] && users[email] === password) { alert("Login successful!"); window.location.href = "store.html"; }
    else { alert("Invalid credentials!"); }
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