import { API_PROFILE } from "../constants";

export async function updateProfile(username, { avatar, banner }) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_PROFILE}/${username}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ avatar, banner }),
  });

  if (response.ok) {
    return await response.json();
  }

  const errorResponse = await response.json();
  throw new Error(errorResponse.message || "Failed to update profile");
}
