import { API_AUTH, API_BASE } from "../constants"
import { API_AUTH_KEY } from "../constants"
import { API_AUTH_REGISTER } from "../constants"
export async function register({
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}) {

  const response = await fetch(API_BASE + API_AUTH + API_AUTH_REGISTER,{
    headers: {
      "content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ name, email, password,  bio,
      banner,avatar,})
  });
  if (response.ok){
    return await response.json();
  }
  throw new Error("Could not register the account")
}
