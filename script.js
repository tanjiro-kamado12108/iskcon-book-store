document.addEventListener("DOMContentLoaded", function () {
    const adminLogin = document.getElementById("adminLogin");
    const userLogin = document.getElementById("userLogin");

    // Hide admin login by default
    if (adminLogin) {
        adminLogin.style.display = "none";
    }

    // Check URL parameters to show admin login if requested
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("admin") === "true") {
        showAdminLogin();
    }

    // Function to show admin login
    function showAdminLogin() {
        if (adminLogin && userLogin) {
            adminLogin.style.display = "block";
            userLogin.style.display = "none";
        }
    }

    // Function to hide admin login (show user login)
    function hideAdminLogin() {
        if (adminLogin && userLogin) {
            adminLogin.style.display = "none";
            userLogin.style.display = "block";
        }
    }
});
