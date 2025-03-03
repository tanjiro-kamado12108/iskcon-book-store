document.addEventListener("DOMContentLoaded", function() {
    // Check if on a restricted page (not admin login page)
    if (window.location.pathname.includes("products.html")) {
        if (localStorage.getItem("isAdminLoggedIn") !== "true") {
            alert("Access Denied! Please log in.");
            window.location.href = "admin.html";
        } else {
            displayProducts();
        }
    }
});

// Admin Login Function
function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    // Hardcoded admin credentials (Replace with backend validation if needed)
    const adminEmail = "admin@iskcon.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
        localStorage.setItem("isAdminLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "products.html";
    } else {
        alert("Invalid email or password!");
    }
}

// Admin Logout
function adminLogout() {
    localStorage.removeItem("isAdminLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "admin.html";
}

// Add New Product
function addProduct() {
    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let image = document.getElementById("productImage").value;

    if (!name || !price || !image) {
        alert("Please fill all fields.");
        return;
    }

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push({ name, price, image });
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product added!");
    displayProducts();
}

// Display Products in Table
function displayProducts() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";
    
    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.forEach((product, index) => {
        let row = `
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><img src="${product.image}" width="50"></td>
                <td><button onclick="deleteProduct(${index})">Delete</button></td>
            </tr>
        `;
        productList.innerHTML += row;
    });
}

// Delete Product
function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    
    alert("Product deleted!");
    displayProducts();
}
