import { API_AUTH_LOGIN } from "../constants";
import { API_BASE } from "../constants";
import { headers } from "../headers";

export async function login({ email, password }) {
  const response = await fetch( API_BASE + API_AUTH_LOGIN, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);
    return profile;
  }

  throw new Error("could not login the account");
}
