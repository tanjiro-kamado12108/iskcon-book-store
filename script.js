document.addEventListener("DOMContentLoaded", function () {
    const adminLogin = document.getElementById("adminLogin");
    const userLogin = document.getElementById("userLogin");

    // Hide admin login by default
    adminLogin.style.display = "none";

    // Check if URL has #admin to show admin login
    if (window.location.hash === "#admin") {
        adminLogin.style.display = "block";  // Show admin login
        userLogin.style.display = "none";    // Hide user login
    }
});
