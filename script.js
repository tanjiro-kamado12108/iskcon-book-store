// script.js

// Dummy admin credentials (You can replace this with a real backend check)
const adminCredentials = {
    email: "admin@example.com",
    password: "admin123"
};

// Function to handle admin login
function adminLogin() {
    const email = document.getElementById("adminEmail").value;
    const password = document.getElementById("adminPassword").value;

    if (email === adminCredentials.email && password === adminCredentials.password) {
        localStorage.setItem("adminLoggedIn", "true");
        window.location.href = "admin.html";
    } else {
        alert("Access Denied! Incorrect email or password.");
    }
}

// Check if admin is logged in
function checkAdminAuth() {
    if (localStorage.getItem("adminLoggedIn") !== "true") {
        alert("Access Denied! Please log in as an admin.");
        window.location.href = "login.html";
    }
}

// Function to log out admin
function adminLogout() {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "login.html";
}

// Function to display orders (Dummy Data)
function displayOrders() {
    const orders = [
        { id: 1, book: "Bhagavad Gita", customer: "John Doe", status: "Shipped" },
        { id: 2, book: "Srimad Bhagavatam", customer: "Jane Smith", status: "Pending" }
    ];
    
    let ordersContainer = document.getElementById("ordersList");
    ordersContainer.innerHTML = "";
    orders.forEach(order => {
        ordersContainer.innerHTML += `<p>Order #${order.id}: ${order.book} - ${order.customer} (${order.status})</p>`;
    });
}

// Function to add a new book (Dummy)
function addBook() {
    const bookName = document.getElementById("bookName").value;
    const bookPrice = document.getElementById("bookPrice").value;
    
    if (bookName && bookPrice) {
        alert(`Book '${bookName}' added successfully at ₹${bookPrice}!`);
    } else {
        alert("Please enter book details.");
    }
}
