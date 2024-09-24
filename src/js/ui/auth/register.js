import { register } from "../../api/auth/register"; // Adjust the path as necessary

export async function onRegister(event) {
  event.preventDefault(); // Prevent the default form submission
  const form = event.target; // Get the form element that triggered the event
  const formData = new FormData(form); // Get form data

  const data = Object.fromEntries(formData); // Convert form data to an object
  
  try {
    const result = await register(data); // Call the register function with the form data
    console.log("Registration successful", result);
    window.location.href = "/profile"; // Redirect to profile after successful registration
  } catch (error) {
    console.error("Error during registration:", error);
    alert("Registration failed. Please try again."); // Show an alert to the user
  }
}

// Attach the event listener to the form
const registrationForm = document.forms.register;
registrationForm.addEventListener("submit", onRegister);
