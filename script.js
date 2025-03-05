document.getElementById("userLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPassword").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        alert("User login successful!");
        window.location.href = "products.html"; // Redirect to products page
    } else {
        alert("Invalid email or password!");
    }
});

document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let adminEmail = document.getElementById("adminEmail").value;
    let adminPassword = document.getElementById("adminPassword").value;

    if (adminEmail === "admin@example.com" && adminPassword === "admin123") {
        alert("Admin login successful!");
        window.location.href = "admin-dashboard.html"; // Redirect to admin dashboard
    } else {
        alert("Invalid admin credentials!");
    }
});
