document.addEventListener("DOMContentLoaded", function() {
    // Only display products if on the products page
    if (window.location.pathname.includes("products.html")) {
        displayProducts();
    }
});

// Admin Login Function (No forced login check)
function adminLogin() {
    let email = document.getElementById("adminEmail").value;
    let password = document.getElementById("adminPassword").value;

    const adminEmail = "admin@iskcon.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
        alert("Login Successful!");
        window.location.href = "products.html"; // Redirect to product management
    } else {
        alert("Invalid email or password!");
    }
}

// Admin Logout (Just redirects, does not block access)
function adminLogout() {
    alert("Logged out successfully!");
    window.location.href = "admin.html"; // Redirect back to admin login
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
    if (!productList) return;

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
