// script.js

// Function to handle Admin Login
function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
        localStorage.setItem("adminLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "admin-dashboard.html"; // Ensure this file exists
    } else {
        alert("Invalid Admin Credentials");
    }
}

// Function to log out admin
function adminLogout() {
    localStorage.removeItem("adminLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "admin.html"; // Ensure this file exists
}

// Function to display orders (Dummy Orders)
function displayOrders() {
    const orders = [
        { id: 1, book: "Bhagavad Gita", customer: "John Doe", status: "Shipped" },
        { id: 2, book: "Srimad Bhagavatam", customer: "Jane Smith", status: "Pending" }
    ];

    let ordersContainer = document.getElementById("ordersList");
    if (ordersContainer) {
        ordersContainer.innerHTML = "";
        orders.forEach(order => {
            ordersContainer.innerHTML += `<p>Order #${order.id}: ${order.book} - ${order.customer} (${order.status})</p>`;
        });
    }
}

// Function to add a new book (Dummy Storage)
function addBook() {
    const bookName = document.getElementById("bookName").value;
    const bookPrice = document.getElementById("bookPrice").value;
    
    if (bookName && bookPrice) {
        alert(`Book '${bookName}' added successfully at ₹${bookPrice}!`);
    } else {
        alert("Please enter book details.");
    }
}

// Load orders when on the dashboard
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("admin-dashboard.html")) {
        displayOrders();
    }
});
