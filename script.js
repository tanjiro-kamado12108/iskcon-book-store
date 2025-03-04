// Function to handle Admin Login
function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
        localStorage.setItem("adminLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "admindashboard.html";
    } else {
        alert("Invalid Admin Credentials");
    }
}

// Function to log out admin
function adminLogout() {
    localStorage.removeItem("adminLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "admin.html";
}

// Function to place an order
function placeOrder() {
    const bookName = document.getElementById("bookName").value;
    const author = document.getElementById("author").value;
    let publisher = document.getElementById("publisher").value;
    const bookPrice = document.getElementById("bookPrice").value;
    const bookImage = document.getElementById("bookImage").value;

    if (!bookName || !author || !bookPrice || !bookImage) {
        alert("Please fill all required fields.");
        return;
    }

    if (!publisher) {
        publisher = "Bhaktivedanta Book Trust (BBT)";
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({ bookName, author, publisher, bookPrice, bookImage });
    localStorage.setItem("orders", JSON.stringify(orders));

    alert(`Order placed for '${bookName}'!`);
}

// Function to display orders
function displayOrders() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let ordersContainer = document.getElementById("ordersList");
    
    if (!ordersContainer) return;
    ordersContainer.innerHTML = "";

    orders.forEach(order => {
        ordersContainer.innerHTML += `
            <div class="order">
                <img src="${order.bookImage}" alt="${order.bookName}" class="order-image">
                <p><strong>Book:</strong> ${order.bookName}</p>
                <p><strong>Author:</strong> ${order.author}</p>
                <p><strong>Publisher:</strong> ${order.publisher}</p>
                <p><strong>Price:</strong> ₹${order.bookPrice}</p>
            </div>
        `;
    });
}

// Load orders when on orders page
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("orders.html")) {
        displayOrders();
    }
});
