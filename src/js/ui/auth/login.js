import { login } from "../../api/auth/login"; 

export async function onLogin(event) {
  event.preventDefault(); 
  const form = event.target; 
  const formData = new FormData(form); 
  const data = Object.fromEntries(formData); 

  try {
    const profile = await login(data); 
    console.log("Login successful", posts);
    window.location.href = "/posts"; 
  } catch (error) {
    console.error("Error during login:", error);
    alert("Login failed. Please try again."); 
  }
}
