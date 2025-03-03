document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("products.html")) {
        let isAdminLoggedIn = localStorage.getItem("adminLoggedIn");
        if (!isAdminLoggedIn) {
            alert("Access Denied! Please login first.");
            window.location.href = "admin.html";
        } else {
            displayProducts();
        }
    }
});

function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    const adminEmail = "admin@iskcon.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
        localStorage.setItem("adminLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "products.html";
    } else {
        alert("Invalid email or password!");
    }
}

function adminLogout() {
    localStorage.removeItem("adminLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "admin.html";
}
