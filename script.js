<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- User Login Section -->
    <div id="userLogin">
        <h2>User Login</h2>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>Login</button>
        <p>Don't have an account? <a href="#">Sign Up</a></p>
    </div>

    <!-- Admin Login Section (Hidden by Default) -->
    <div id="adminLogin" style="display: none;">
        <h2>Admin Login</h2>
        <input type="email" placeholder="Admin Email">
        <input type="password" placeholder="Admin Password">
        <button>Admin Login</button>
    </div>

    <script src="script.js"></script>

</body>
</html>
