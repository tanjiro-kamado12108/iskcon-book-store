// Ensure Admin is Logged In
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("isAdminLoggedIn") !== "true") {
        alert("Access Denied! Please log in.");
        window.location.href = "admin.html";
    }
    displayProducts();
});

// Logout Admin
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
