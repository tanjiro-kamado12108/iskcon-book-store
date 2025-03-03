document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
});

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
    alert("Product added successfully!");
    loadProducts();
}

function loadProducts() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let productList = document.getElementById("productList");

    if (!productList) return;

    productList.innerHTML = "";
    products.forEach((product, index) => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" width="100">
                <p>${product.name} - ₹${product.price}</p>
                <button onclick="removeProduct(${index})">Remove</button>
            </div>
        `;
    });
}

function removeProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
}
