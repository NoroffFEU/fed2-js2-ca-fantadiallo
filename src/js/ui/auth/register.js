import { register } from "../../api/auth/register"; // Adjust the path as necessary

export async function onRegister(event) {
  event.preventDefault(); // Prevent default form submission
  const form = event.target; // Get the form that triggered the event
  const formData = new FormData(form); // Extract form data

  // Convert FormData to an object
  const data = Object.fromEntries(formData);
  
  try {
    const result = await register(data); // Call the imported register function
    console.log("Registration successful", result);
    window.location.href = "/profile"; // Redirect to the user's profile
  } catch (error) {
    console.error("Error during registration:", error);
    alert("Registration failed. Please try again."); // Show error message
  }
}
