// Set Admin Credentials (Run this once in the console for setup)
if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify({ email: "admin@iskcon.com", password: "admin123" }));
}

function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    let storedAdmin = JSON.parse(localStorage.getItem("admin"));

    if (email === storedAdmin.email && password === storedAdmin.password) {
        alert("Login Successful!");
        localStorage.setItem("isAdminLoggedIn", "true");
        window.location.href = "products.html"; // Redirect to Admin Dashboard
    } else {
        alert("Invalid email or password!");
    }
}

// Check if Admin is Logged In
function checkAdminAuth() {
    if (localStorage.getItem("isAdminLoggedIn") !== "true") {
        alert("Access Denied! Please log in.");
        window.location.href = "admin.html"; // Redirect to login if not authenticated
    }
}

// Logout Admin
function adminLogout() {
    localStorage.removeItem("isAdminLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "admin.html";
}

function displayStoreProducts() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let storeProducts = document.getElementById("storeProducts");

    if (!storeProducts) return;

    storeProducts.innerHTML = "";
    products.forEach((product) => {
        storeProducts.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" width="100">
                <p>${product.name} - ₹${product.price}</p>
                <button onclick="checkout()">Buy Now</button>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", displayStoreProducts);
