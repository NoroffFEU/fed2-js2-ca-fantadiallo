import { register } from "../../api/auth/register"; // Adjust the path as necessary

export async function onRegister(event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
  
    try {
      const result = await register(data);
      console.log("Registration successful", result);
      window.location.href = "/profile";
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  }
  