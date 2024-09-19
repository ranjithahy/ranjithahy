// Simulated credentials for admin login
const adminCredentials = {
    username: "admin",
    password: "admin123"
};

// Event listener for login form submission
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from submitting

            // Get values from login form
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Check if credentials match
            if (username === adminCredentials.username && password === adminCredentials.password) {
                // Store admin username in localStorage for later use
                localStorage.setItem("adminName", username);
                
                // Redirect to dashboard
                window.location.href = "dashboard.html";
            } else {
                // Display error message
                const errorMessage = document.getElementById("errorMessage");
                errorMessage.textContent = "Invalid username or password!";
            }
        });
    }

    // Check if we're on the dashboard page
    if (window.location.pathname.includes("dashboard.html")) {
        // Display admin name on the dashboard from localStorage
        const adminName = localStorage.getItem("adminName");
        if (adminName) {
            document.getElementById("adminName").textContent = adminName;
        }

        // Handle Logout
        const logoutLink = document.querySelector(".logout-link");
        if (logoutLink) {
            logoutLink.addEventListener("click", function () {
                localStorage.removeItem("adminName"); // Clear the stored admin name
                window.location.href = "index.html"; // Redirect back to login page
            });
        }
    }
});
