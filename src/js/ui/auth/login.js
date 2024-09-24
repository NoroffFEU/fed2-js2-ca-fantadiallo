import { login } from "../../api/auth/login"; // Adjust the path as necessary

export async function onLogin(event) {
  event.preventDefault(); // Prevent default form submission
  const form = event.target; // Get the form that triggered the event
  const formData = new FormData(form); // Extract form data
  const data = Object.fromEntries(formData); // Convert to object

  try {
    const profile = await login(data); // Call the imported login function
    console.log("Login successful", posts);
    window.location.href = "/posts"; // Redirect to the user's profile
  } catch (error) {
    console.error("Error during login:", error);
    alert("Login failed. Please try again."); // Show error message
  }
}
