export function onLogout() {
    // Clear user data from storage
    localStorage.removeItem("token"); // Adjust if you're using session storage or another method
    localStorage.removeItem("profile");
  
    // Redirect to the login page or home page
    window.location.href = "/login"; // Redirect to the login page
  }
  