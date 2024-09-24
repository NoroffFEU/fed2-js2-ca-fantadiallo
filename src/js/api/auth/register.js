import { API_AUTH, API_AUTH_REGISTER } from "../constants"; // Adjust the path as necessary
import { API_BASE } from "../constants";
import { headers } from "../headers"; // Import headers function

export async function register({
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}) {
  const response = await fetch(API_BASE + API_AUTH + API_AUTH_REGISTER, { // Use API_AUTH_REGISTER directly
    headers: {
      ...headers(), // Spread the headers function to include the necessary headers
      "Content-Type": "application/json", // Ensure Content-Type is included
    },
    method: "POST",
    body: JSON.stringify({ name, email, password, bio, banner, avatar }), // Ensure proper spacing
  });

  if (response.ok) {
    return await response.json(); // Successfully registered
  }

  throw new Error("Could not register the account"); // Handle errors
}
