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

    // Default publisher if not entered
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

// Load orders when viewing orders page
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("orders.html")) {
        displayOrders();
    }
});
