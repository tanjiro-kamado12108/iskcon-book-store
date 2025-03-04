document.addEventListener("DOMContentLoaded", function () {
    const adminLogin = document.getElementById("adminLogin");
    const userLogin = document.getElementById("userLogin");

    // Ensure only the user login is visible by default
    if (adminLogin) {
        adminLogin.style.display = "none";
    }
    if (userLogin) {
        userLogin.style.display = "block";
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
});
