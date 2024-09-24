import { API_AUTH_REGISTER } from "../constants"; // Adjust the path as necessary
import { API_BASE } from "../constants";
import { headers } from "../headers"; // Import headers function

export async function register({ name, email, password }) {
  const response = await fetch(API_BASE + API_AUTH_REGISTER, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ name, email, password }), 
  });

  if (response.ok) {
    return await response.json(); 
  }
  console.error();

  throw new Error("Could not register the account");
}
