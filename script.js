document.addEventListener("DOMContentLoaded", function () {
    // Initially hide the admin login section
    hideAdminLogin();

    // Event listeners for toggling between login views
    const showAdminBtn = document.getElementById("showAdminBtn");
    const hideAdminBtn = document.getElementById("hideAdminBtn");

    if (showAdminBtn) {
        showAdminBtn.addEventListener("click", showAdminLogin);
    }

    if (hideAdminBtn) {
        hideAdminBtn.addEventListener("click", hideAdminLogin);
    }
});

function showAdminLogin() {
    document.getElementById("adminLogin").style.display = "block";
    document.getElementById("userLogin").style.display = "none";
}

function hideAdminLogin() {
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("userLogin").style.display = "block";
}
