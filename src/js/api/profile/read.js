import { API_PROFILE, API_PROFILES } from "../constants";

export async function readProfile(username) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_PROFILE}/${username}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
  }

  const errorResponse = await response.json();
  throw new Error(errorResponse.message || "Failed to fetch the profile");
}

export async function readProfiles(limit = 10, page = 1) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_PROFILES}?limit=${limit}&page=${page}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
  }

  const errorResponse = await response.json();
  throw new Error(errorResponse.message || "Failed to fetch profiles");
}
