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
